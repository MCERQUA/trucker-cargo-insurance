"use client";

import React from "react";
import Link from "next/link";
import {
  FORM_NAME,
  MAX_ROWS,
  STEP1,
  STEP5,
  STEP6,
  ROW_GROUPS,
  rowKey,
  countKey,
  type Field,
} from "@/lib/intakeSpec";

/**
 * Multi-step trucking intake. Posts through Netlify Forms (same pattern as QuoteForm):
 * the Netlify submission_created hook in netlify.toml forwards it to the leads pipeline,
 * so no URL or env var lives in this file. Field names come from intakeSpec.ts and are
 * declared in public/__forms.html. Blank fields are not posted.
 */

type Vals = Record<string, string>;
type Rows = Record<string, Vals[]>;

const STEPS = [
  "Applicant & business",
  "Vehicles",
  "Trailers",
  "Drivers",
  "Coverages wanted",
  "Current insurance",
];

const inputCls =
  "w-full min-h-12 rounded-lg border border-outline bg-surface-container-lowest px-3 py-3 text-base text-primary focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/30";
const labelCls = "block text-xs uppercase tracking-widest font-bold text-outline mb-1";
const btnPrimary =
  "min-h-12 rounded-xl bg-secondary px-6 py-3 text-sm font-bold tracking-tight text-white shadow-md hover:bg-secondary-container disabled:opacity-60";
const btnGhost =
  "min-h-12 rounded-xl border border-outline px-6 py-3 text-sm font-bold tracking-tight text-primary hover:bg-surface-container";

// A nine-digit Social Security pattern anywhere in the payload blocks the submit.
const SSN_LIKE = /\b\d{3}-\d{2}-\d{4}\b/;

function FieldInput({
  f,
  id,
  value,
  onChange,
}: {
  f: Field;
  id: string;
  value: string;
  onChange: (v: string) => void;
}) {
  const common = {
    id,
    value,
    required: f.required,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      onChange(e.target.value),
  };
  return (
    <div className={f.wide ? "sm:col-span-2" : ""}>
      <label htmlFor={id} className={labelCls}>
        {f.label}
        {f.required ? " *" : ""}
      </label>
      {f.type === "select" ? (
        <select {...common} className={inputCls}>
          <option value="">Select...</option>
          {f.options?.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      ) : f.type === "textarea" ? (
        <textarea {...common} rows={3} className={inputCls} placeholder={f.placeholder} />
      ) : (
        <input
          {...common}
          type={f.type ?? "text"}
          inputMode={f.inputMode}
          autoComplete={f.autoComplete}
          maxLength={f.maxLength}
          placeholder={f.placeholder}
          className={inputCls}
        />
      )}
      {f.hint && <p className="mt-1 text-xs text-on-surface-variant">{f.hint}</p>}
    </div>
  );
}

export default function IntakeForm() {
  const [step, setStep] = React.useState(0);
  const [vals, setVals] = React.useState<Vals>({});
  const [rows, setRows] = React.useState<Rows>({ vehicle: [{}], trailer: [], driver: [{}] });
  const [honey, setHoney] = React.useState("");
  const [status, setStatus] = React.useState<"idle" | "sending" | "error">("idle");
  const [msg, setMsg] = React.useState("");
  const stepRef = React.useRef<HTMLDivElement>(null);

  const setVal = (k: string, v: string) => setVals((p) => ({ ...p, [k]: v }));
  const setRowVal = (g: string, i: number, k: string, v: string) =>
    setRows((p) => ({ ...p, [g]: p[g].map((r, idx) => (idx === i ? { ...r, [k]: v } : r)) }));
  const addRow = (g: string) =>
    setRows((p) => (p[g].length >= MAX_ROWS ? p : { ...p, [g]: [...p[g], {}] }));
  const removeRow = (g: string, i: number) =>
    setRows((p) => ({ ...p, [g]: p[g].filter((_, idx) => idx !== i) }));

  const go = (n: number) => {
    setStep(n);
    setMsg("");
    requestAnimationFrame(() => stepRef.current?.scrollIntoView({ block: "start", behavior: "smooth" }));
  };

  const next = () => {
    if (step === 0) {
      const root = stepRef.current;
      const bad = root
        ? Array.from(root.querySelectorAll<HTMLInputElement>("input,select,textarea")).find(
            (el) => !el.checkValidity(),
          )
        : null;
      if (bad) {
        bad.reportValidity();
        return;
      }
    }
    go(Math.min(step + 1, STEPS.length - 1));
  };

  const buildPayload = (): Record<string, string> => {
    const out: Record<string, string> = {};
    const put = (k: string, v: string | undefined) => {
      const t = (v ?? "").trim();
      if (t) out[k] = t;
    };
    for (const f of [...STEP1, ...STEP5, ...STEP6]) put(f.key, vals[f.key]);
    for (const g of ROW_GROUPS) {
      const kept = rows[g.id].filter((r) => g.fields.some((f) => (r[f.key] ?? "").trim()));
      if (kept.length) put(countKey(g.id), String(kept.length));
      kept.forEach((r, i) => g.fields.forEach((f) => put(rowKey(g.id, i + 1, f.key), r[f.key])));
    }
    return out;
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step !== STEPS.length - 1) return next();
    if (honey) {
      window.location.href = "/success";
      return;
    }
    const payload = buildPayload();
    if (SSN_LIKE.test(Object.values(payload).join(" | "))) {
      setStatus("error");
      setMsg(
        "One of your answers looks like a Social Security number. Please remove it. We never ask for one here.",
      );
      return;
    }
    setStatus("sending");
    setMsg("");
    try {
      const body = new URLSearchParams({ "form-name": FORM_NAME, "bot-field": "", ...payload });
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (!res.ok) throw new Error(String(res.status));
      window.location.href = "/success";
    } catch {
      // Never fake a success.
      setStatus("error");
      setMsg("We could not send that. Please try again, or call 844-967-5247.");
    }
  };

  const grid = "grid grid-cols-1 gap-4 sm:grid-cols-2";

  return (
    <form onSubmit={submit} noValidate={false} className="space-y-6" aria-label="Trucking insurance intake">
      <div className="hidden" aria-hidden>
        <label>
          Leave blank
          <input tabIndex={-1} autoComplete="off" value={honey} onChange={(e) => setHoney(e.target.value)} />
        </label>
      </div>

      <div>
        <p className="text-sm font-bold text-primary">
          Step {step + 1} of {STEPS.length}: {STEPS[step]}
        </p>
        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-surface-container-high">
          <div
            className="h-full bg-secondary transition-all"
            style={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
          />
        </div>
      </div>

      <div ref={stepRef} className="scroll-mt-24">
        {step === 0 && (
          <div className={grid}>
            {STEP1.map((f) => (
              <FieldInput key={f.key} f={f} id={`f-${f.key}`} value={vals[f.key] ?? ""} onChange={(v) => setVal(f.key, v)} />
            ))}
          </div>
        )}

        {step >= 1 && step <= 3 && (() => {
          const g = ROW_GROUPS[step - 1];
          const list = rows[g.id];
          return (
            <div className="space-y-6">
              {list.length === 0 && (
                <p className="text-on-surface-variant">
                  No {g.title.toLowerCase()}s added. Add one below, or continue.
                </p>
              )}
              {list.map((r, i) => (
                <fieldset key={i} className="rounded-xl border border-outline-variant p-4">
                  <legend className="px-2 text-sm font-bold text-primary">
                    {g.title} {i + 1}
                  </legend>
                  <div className={grid}>
                    {g.fields.map((f) => (
                      <FieldInput
                        key={f.key}
                        f={f}
                        id={`f-${g.id}${i + 1}-${f.key}`}
                        value={r[f.key] ?? ""}
                        onChange={(v) => setRowVal(g.id, i, f.key, v)}
                      />
                    ))}
                  </div>
                  <button type="button" className={`${btnGhost} mt-4`} onClick={() => removeRow(g.id, i)}>
                    Remove {g.title.toLowerCase()} {i + 1}
                  </button>
                </fieldset>
              ))}
              {list.length < MAX_ROWS ? (
                <button type="button" className={btnGhost} onClick={() => addRow(g.id)}>
                  + Add {g.title.toLowerCase()}
                </button>
              ) : (
                <p className="text-sm text-on-surface-variant">
                  Maximum of {MAX_ROWS} {g.title.toLowerCase()}s on this form. Put the rest in the notes on the last step.
                </p>
              )}
            </div>
          );
        })()}

        {step === 4 && (
          <div className={grid}>
            {STEP5.map((f) => (
              <FieldInput key={f.key} f={f} id={`f-${f.key}`} value={vals[f.key] ?? ""} onChange={(v) => setVal(f.key, v)} />
            ))}
          </div>
        )}

        {step === 5 && (
          <div className={grid}>
            {STEP6.map((f) => (
              <FieldInput key={f.key} f={f} id={`f-${f.key}`} value={vals[f.key] ?? ""} onChange={(v) => setVal(f.key, v)} />
            ))}
          </div>
        )}
      </div>

      {step === STEPS.length - 1 && (
        <p className="rounded-lg bg-surface-container p-4 text-sm text-on-surface-variant">
          We use this to prepare your quote; we never ask for SSN or bank details here. See our{" "}
          <Link href="/privacy" className="font-bold text-secondary underline">
            privacy notice
          </Link>
          .
        </p>
      )}

      {msg && (
        <p role="alert" className="rounded-lg bg-red-50 p-4 text-sm font-medium text-red-800">
          {msg}
        </p>
      )}

      <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
        {step > 0 ? (
          <button type="button" className={btnGhost} onClick={() => go(step - 1)}>
            Back
          </button>
        ) : (
          <span />
        )}
        {step < STEPS.length - 1 ? (
          <button key="next" type="button" className={btnPrimary} onClick={next}>
            Next
          </button>
        ) : (
          <button key="submit" type="submit" className={btnPrimary} disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send my quote request"}
          </button>
        )}
      </div>
    </form>
  );
}

"use client";

import React from "react";
import {
  YN,
  YN_QUESTIONS,
  GENERAL_DETAILS,
  QUESTIONS_WITH_EXPLAIN,
  EXPLAIN_MAX,
  EXPLAIN_DEFAULT_MAX,
  TERMINATION_REASONS,
  SAFETY_ELEMENTS,
  POOL_FEATURES,
  RENT_EQUIPMENT_TYPES,
  LOSS_LINES,
  LOSS_STATUS,
  ATHLETIC_AGE_GROUPS,
  POOL_CONSTRUCTION,
  YN_MAX_LEN,
  CONDITION_CORRECTED,
  detailName,
} from "@/lib/acordYnSpec";

/**
 * Intake step: ACORD 125/126 underwriting questions + loss history, under the shared canonical names
 * (see acordYnSpec.ts). Radios have NO default: an unanswered question stays blank and is not posted.
 * A "Yes" reveals the same follow-ups as the shared QuoteForm. All values live in the intake's `vals`.
 */

type Vals = Record<string, string>;

const inputCls =
  "w-full min-h-12 rounded-lg border border-outline bg-surface-container-lowest px-3 py-3 text-base text-primary focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/30";
const labelCls = "block text-xs uppercase tracking-widest font-bold text-outline mb-1";
const optCls =
  "inline-flex min-h-11 min-w-11 cursor-pointer items-center gap-2 rounded-lg border border-outline-variant px-4 py-2 text-sm font-medium text-primary has-[:checked]:border-secondary has-[:checked]:bg-secondary/10";
const detailCls = "mt-3 grid grid-cols-1 gap-4 border-l-2 border-outline-variant pl-4 sm:grid-cols-2";

export default function AcordYnStep({ vals, setVal }: { vals: Vals; setVal: (k: string, v: string) => void }) {
  const get = (k: string) => vals[k] ?? "";
  const yes = (k: string) => get(`yn_${k}`) === "Yes";

  const text = (name: string, label: string, type = "text", max?: number) => (
    <div key={name}>
      <label htmlFor={`f-${name}`} className={labelCls}>
        {label} *
      </label>
      <input
        id={`f-${name}`}
        type={type}
        value={get(name)}
        maxLength={max ?? YN_MAX_LEN[name]}
        onChange={(e) => setVal(name, e.target.value)}
        className={inputCls}
      />
    </div>
  );
  const area = (name: string, label: string, max: number) => (
    <div key={name} className="sm:col-span-2">
      <label htmlFor={`f-${name}`} className={labelCls}>
        {label} *
      </label>
      <textarea
        id={`f-${name}`}
        rows={3}
        maxLength={max}
        value={get(name)}
        onChange={(e) => setVal(name, e.target.value)}
        className={inputCls}
      />
    </div>
  );
  const select = (name: string, label: string, options: string[]) => (
    <div key={name}>
      <label htmlFor={`f-${name}`} className={labelCls}>
        {label} *
      </label>
      <select id={`f-${name}`} value={get(name)} onChange={(e) => setVal(name, e.target.value)} className={inputCls}>
        <option value="">Select...</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
  // Radio pair with NO default checked: unanswered stays "".
  const radio = (name: string, label: string, required = false) => (
    <fieldset key={name} className="sm:col-span-2">
      <legend className="mb-2 text-sm font-bold text-primary">
        {label}
        {required ? " *" : ""}
      </legend>
      <div className="flex flex-wrap gap-3">
        {YN.map((o, i) => (
          <label key={o} className={optCls}>
            <input
              id={i === 0 ? `f-${name}` : undefined}
              type="radio"
              name={name}
              value={o}
              checked={get(name) === o}
              onChange={() => setVal(name, o)}
              className="h-5 w-5 accent-secondary"
            />
            {o}
          </label>
        ))}
        {get(name) && !required && (
          <button
            type="button"
            className="min-h-11 px-2 text-sm text-on-surface-variant underline"
            onClick={() => setVal(name, "")}
          >
            Clear
          </button>
        )}
      </div>
    </fieldset>
  );
  const checks = (name: string, label: string, options: string[]) => {
    const picked = get(name) ? get(name).split(", ") : [];
    const toggle = (o: string) => {
      const n = picked.includes(o) ? picked.filter((p) => p !== o) : [...picked, o];
      setVal(name, options.filter((x) => n.includes(x)).join(", "));
    };
    return (
      <fieldset key={name} className="sm:col-span-2">
        <legend className="mb-2 text-sm font-bold text-primary">{label} *</legend>
        <div className="flex flex-wrap gap-3">
          {options.map((o, i) => (
            <label key={o} className={optCls}>
              <input
                id={i === 0 ? `f-${name}` : undefined}
                type="checkbox"
                checked={picked.includes(o)}
                onChange={() => toggle(o)}
                className="h-5 w-5 accent-secondary"
              />
              {o}
            </label>
          ))}
        </div>
      </fieldset>
    );
  };

  const ynBlock = (key: string, label: string, n: number) => {
    const out: React.ReactNode[] = [radio(`yn_${key}`, `${n}. ${label}`)];
    if (yes(key)) {
      const d: React.ReactNode[] = [];
      if (QUESTIONS_WITH_EXPLAIN.includes(key))
        d.push(area(`ynExplain_${key}`, "Please explain", EXPLAIN_MAX[key] ?? EXPLAIN_DEFAULT_MAX));
      for (const f of GENERAL_DETAILS[key] ?? [])
        d.push(text(detailName(key, f.key), f.label, f.kind === "date" ? "date" : "text", f.max));
      if (key === "coverageTerminated") {
        d.push(
          <fieldset key="ct" className="sm:col-span-2">
            <legend className="mb-2 text-sm font-bold text-primary">
              Why was coverage terminated? (tick at least one) *
            </legend>
            <div className="flex flex-wrap gap-3">
              {[...TERMINATION_REASONS, { key: CONDITION_CORRECTED, label: "Condition Corrected" }].map((r, i) => {
                const nm = detailName("coverageTerminated", r.key);
                return (
                  <label key={r.key} className={optCls}>
                    <input
                      id={i === 0 ? `f-${nm}` : undefined}
                      type="checkbox"
                      checked={get(nm) === "Yes"}
                      onChange={(e) => setVal(nm, e.target.checked ? "Yes" : "")}
                      className="h-5 w-5 accent-secondary"
                    />
                    {r.label}
                  </label>
                );
              })}
            </div>
          </fieldset>,
        );
        if (get(detailName("coverageTerminated", CONDITION_CORRECTED)) === "Yes")
          d.push(text(detailName("coverageTerminated", "conditionCorrectedDescription"), "Describe how the condition was corrected"));
      }
      if (key === "safetyProgramsExist") {
        d.push(checks("safetyProgramElements", "Safety program elements", SAFETY_ELEMENTS));
        if (get("safetyProgramElements").split(", ").includes("Other")) d.push(text("safetyOtherText", "Other safety program"));
      }
      if (key === "athleticTeams")
        d.push(
          text("athleticSportDescription", "Sport"),
          radio("athleticContactSport", "Contact sport?", true),
          text("athleticSponsorshipExtent", "Extent of sponsorship"),
          select("athleticTeamAgeGroup", "Age group", ATHLETIC_AGE_GROUPS),
        );
      if (key === "swimmingPool")
        d.push(
          select("poolConstruction", "Pool construction", POOL_CONSTRUCTION),
          checks("poolSafetyFeatures", "Pool safety features", POOL_FEATURES),
        );
      if (key === "rentOrLoanEquipment")
        d.push(
          checks("rentEquipmentTypes", "Type of equipment rented or loaned", RENT_EQUIPMENT_TYPES),
          radio("rentEquipmentInstructionGiven", "Is instruction given to renters?", true),
        );
      if (key === "leaseEmployees")
        d.push(radio("leaseEmployeesWorkersCompCarried", "Workers compensation carried for leased employees?", true));
      if (d.length)
        out.push(
          <div key={`d-${key}`} className={detailCls}>
            {d}
          </div>,
        );
    }
    return (
      <div key={`yn-${key}`} className="border-b border-outline-variant pb-4">
        {out}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <p className="rounded-lg bg-surface-container p-4 text-sm text-on-surface-variant">
        These are the standard underwriting questions on the ACORD application. Answer what you can;
        a question you skip stays blank. A &quot;Yes&quot; opens a short follow-up.
      </p>

      <section className="space-y-4">
        <h3 className="font-headline text-lg font-bold text-primary">Insurance and loss history</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {radio("currentlyInsured", "Currently insured?")}
          {radio("lossesLast3Years", "Any losses in the last 3 years?")}
        </div>
        {get("lossesLast3Years") === "Yes" && (
          <div className={detailCls}>
            {text("lossCount", "Number of losses")}
            {select("lossLineOfBusiness", "Loss line of business", LOSS_LINES)}
            {text("lossDate", "Loss date", "date")}
            {text("lossDescription", "Loss description")}
            {select("lossHistoryStatus", "Open / closed", LOSS_STATUS)}
            {text("lossAmountPaid", "Amount paid")}
            {text("lossAmountReserved", "Amount reserved")}
            {radio("lossSubrogation", "Subrogation?", true)}
          </div>
        )}
      </section>

      <section className="space-y-4">
        <h3 className="font-headline text-lg font-bold text-primary">Underwriting questions</h3>
        {YN_QUESTIONS.map((q, i) => ynBlock(q.key, q.label, i + 1))}
      </section>
    </div>
  );
}

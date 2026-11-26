// ACORD 125/126 underwriting block for the /quote intake (step "Underwriting & loss history").
//
// The lists between the BEGIN/END markers are copied VERBATIM from the shared quote spec
// (MCERQUA bestdamnrooferinsurance.com b2b8f5d src/lib/quote/quoteSpec.ts = _shared/quote-component/quoteSpec.ts):
// the 57 yn_* keys and their labels, the Yes follow-ups and the loss row use the exact canonical names
// map_quote_125.py reads. DO NOT RENAME any of them. Everything trucking-specific stays in intakeSpec.ts.
//
// Value convention (same as the shared form): yn_* = exactly "Yes" or "No"; multi-selects = the ticked
// options joined with ", " in list order; coverage-terminated reasons = "Yes" when ticked, and the
// unticked ones are sent as "No" only when yn_coverageTerminated = Yes. Unlike the shared form, nothing
// is posted blank: an unanswered question is simply not sent (the intake's blank-not-posted rule), and a
// follow-up is sent only while its question is answered Yes.

// ---------------------------------------------------- BEGIN verbatim from shared quoteSpec.ts
export const LOSS_LINES = ['GL', 'WC', 'Auto', 'Property', 'Umbrella', 'Other']

export const SAFETY_ELEMENTS = ['Safety Manual', 'Safety Position', 'Monthly Meetings', 'OSHA Compliance', 'Other']
export const POOL_FEATURES = ['Approved Fence', 'Limited Access', 'Diving Board', 'Slide', 'Life Guard']
export const RENT_EQUIPMENT_TYPES = ['Small Tools', 'Large Equipment']
export const TERMINATION_REASONS: Array<{ key: string; label: string }> = [
  { key: 'nonPayment', label: 'Non-Payment' },
  { key: 'nonRenewal', label: 'Non-Renewal' },
  { key: 'agentStopRepresenting', label: 'Agent No Longer Represents Carrier' },
  { key: 'underwriting', label: 'Underwriting' },
]

// ------------------------------------------------- 57 Yes/No questions (ACORD 125/126)
export const YN_QUESTIONS: Array<{ key: string; label: string }> = [
  { key: 'buildingLeasedToOthers', label: 'Is Building Leased to Others?' },
  { key: 'applicantSubsidiary', label: 'Is Applicant a Subsidiary?' },
  { key: 'applicantHasSubsidiaries', label: 'Does Applicant Have Subsidiaries?' },
  { key: 'safetyProgramsExist', label: 'Do Safety Programs Exist?' },
  { key: 'exposureFlammables', label: 'Any Exposure to Flammables, Explosives, Chemicals?' },
  { key: 'otherInsurance', label: 'Any Other Insurance with This Company?' },
  { key: 'coverageTerminated', label: 'Has a Policy Coverage Ever Been Terminated?' },
  { key: 'pastAllegations', label: 'Past Allegations of Abuse, Molestation, or Discrimination?' },
  { key: 'indictedOrConvicted', label: 'Any Indictments or Convictions?' },
  { key: 'safetyViolations', label: 'Any Uncorrected Fire and/or Safety Violations?' },
  { key: 'negativeFinancialAction', label: 'Any Past Negative Financial Action?' },
  { key: 'judgementOrLien', label: 'Any Judgement or Lien?' },
  { key: 'businessInTrust', label: 'Has the Business Been Placed in a Trust?' },
  { key: 'foreignOperations', label: 'Any Foreign Operations or Products?' },
  { key: 'otherVentures', label: 'Do Other Ventures Exist?' },
  { key: 'possessDrones', label: 'Does Applicant Possess Drones?' },
  { key: 'hireDroneOperators', label: 'Does Applicant Hire Drone Operators?' },
  { key: 'priorExclusionUninsured', label: 'Has Any Product, Work, Accident or Location Been Excluded, Uninsured or Self-Insured from Any Previous Coverage?' },
  { key: 'tailCoveragePurchased', label: 'Was Tail Coverage Purchased Under Any Previous Policy?' },
  { key: 'drawsPlansForOthers', label: 'Does Applicant Draw Plans, Designs or Specifications for Others?' },
  { key: 'blastingOrExplosives', label: 'Do Any Operations Include Blasting, or Utilize/Store Explosive Material?' },
  { key: 'excavationOrEarthMoving', label: 'Does Any Operation Involve Excavation, Tunneling, Underground Work or Earth Moving?' },
  { key: 'subsRequireLowerLimits', label: 'Do Subcontractors Carry Coverages or Limits Less Than Applicant?' },
  { key: 'subsWorkWithoutCOI', label: 'Are Subcontractors Allowed to Work Without Providing a Certificate of Insurance?' },
  { key: 'leaseEquipmentToOthers', label: 'Does Applicant Lease Equipment to Others, With or Without Operators?' },
  { key: 'installServiceDemoProducts', label: 'Does Applicant Install, Service or Demonstrate Products?' },
  { key: 'foreignProducts', label: 'Foreign Products Sold, Distributed, or Used as Components?' },
  { key: 'researchAndDevelopment', label: 'Research and Development Conducted, or New Products Planned?' },
  { key: 'guaranteesWarranties', label: 'Guarantees, Warranties, or Hold Harmless Agreements?' },
  { key: 'aircraftSpaceProducts', label: 'Products Related to the Aircraft/Space Industry?' },
  { key: 'productsRecalled', label: 'Products Recalled, Discontinued, or Changed?' },
  { key: 'productsRepackagedUnderLabel', label: 'Products of Others Sold or Repackaged Under Applicant Label?' },
  { key: 'productsUnderOthersLabel', label: 'Products Sold Under the Label of Others?' },
  { key: 'vendorsCoverageRequired', label: 'Vendors Coverage Required?' },
  { key: 'sellsToOtherNamedInsured', label: 'Does Any Named Insured Sell to Another Named Insured?' },
  { key: 'medicalFacilities', label: 'Any Medical Facilities Provided, or Medical Professionals Employed/Contracted?' },
  { key: 'radioactiveExposure', label: 'Any Exposure to Radioactive/Nuclear Materials?' },
  { key: 'hazardousMaterialOps', label: 'Do/Have Past, Present or Discontinued Operations Involved Storing, Treating, Discharging, Applying, Disposing or Transporting Hazardous Material?' },
  { key: 'operationsSoldAcquired', label: 'Any Operations Sold, Acquired or Discontinued in the Last 5 Years?' },
  { key: 'rentOrLoanEquipment', label: 'Do You Rent or Loan Equipment to Others?' },
  { key: 'watercraftDocksFloats', label: 'Any Watercraft, Docks or Floats Owned, Hired or Leased?' },
  { key: 'parkingFacilities', label: 'Any Parking Facilities Owned or Rented?' },
  { key: 'parkingFeeCharged', label: 'Is a Fee Charged for Parking?' },
  { key: 'recreationFacilities', label: 'Recreation Facilities Provided?' },
  { key: 'lodgingOperations', label: 'Are There Any Lodging Operations, Including Apartments?' },
  { key: 'swimmingPool', label: 'Is There a Swimming Pool on the Premises?' },
  { key: 'socialEvents', label: 'Are Social Events Sponsored?' },
  { key: 'athleticTeams', label: 'Are Athletic Teams Sponsored?' },
  { key: 'structuralAlterations', label: 'Any Structural Alterations Contemplated?' },
  { key: 'demolitionExposure', label: 'Any Demolition Exposure Contemplated?' },
  { key: 'activeJointVentures', label: 'Has Applicant Been Active in, or Is Currently Active in, Joint Ventures?' },
  { key: 'leaseEmployees', label: 'Do You Lease Employees to or from Other Employers?' },
  { key: 'laborInterchange', label: 'Is There a Labor Interchange with Any Other Business or Subsidiaries?' },
  { key: 'dayCareFacilities', label: 'Are Day Care Facilities Operated or Controlled?' },
  { key: 'crimesOnPremises', label: 'Have Any Crimes Occurred or Been Attempted on Your Premises Within the Last 3 Years?' },
  { key: 'formalSafetyPolicy', label: 'Is There a Formal, Written Safety and Security Policy in Effect?' },
  { key: 'promotionalSafetyClaims', label: "Does the Business' Promotional Literature Make Any Representation About the Safety or Security of the Premises?" },
]

// Questions whose "Yes" answer is covered by structured detail fields instead of (or in
// addition to) a free-text explanation. Every other Yes forces ynExplain_<key>.
export interface DetailField {
  key: string
  label: string
  kind?: 'text' | 'date' | 'percent'
  max?: number
}

export const GENERAL_DETAILS: Record<string, DetailField[]> = {
  applicantSubsidiary: [
    { key: 'parentName', label: 'Parent Company Name' },
    { key: 'relationship', label: 'Relationship Description', max: 39 },
    { key: 'ownershipPercentage', label: 'Ownership Percentage', kind: 'percent' },
  ],
  applicantHasSubsidiaries: [
    { key: 'subsidiaryName', label: 'Subsidiary Company Name' },
    { key: 'relationship', label: 'Relationship Description' },
    { key: 'ownershipPercentage', label: 'Ownership Percentage', kind: 'percent' },
  ],
  otherInsurance: [
    { key: 'lineOfBusiness', label: 'Line of Business' },
  ],
  negativeFinancialAction: [
    { key: 'occurenceDate', label: 'Occurrence Date', kind: 'date' },
    { key: 'explanation', label: 'Explanation' },
    { key: 'resolution', label: 'Resolution' },
    { key: 'resolutionDate', label: 'Resolution Date', kind: 'date' },
  ],
  judgementOrLien: [
    { key: 'occurenceDate', label: 'Occurrence Date', kind: 'date' },
    { key: 'explanation', label: 'Explanation' },
    { key: 'resolution', label: 'Resolution' },
    { key: 'resolutionDate', label: 'Resolution Date', kind: 'date' },
  ],
  safetyViolations: [
    { key: 'occurenceDate', label: 'Occurrence Date', kind: 'date' },
    { key: 'explanation', label: 'Explanation' },
    { key: 'resolution', label: 'Resolution' },
    { key: 'resolutionDate', label: 'Resolution Date', kind: 'date' },
  ],
  exposureFlammables: [{ key: 'description', label: 'Exposure Description' }],
  pastAllegations: [{ key: 'description', label: 'Past Allegations Description' }],
  indictedOrConvicted: [{ key: 'description', label: 'Indicted or Convicted Description' }],
  businessInTrust: [{ key: 'name', label: 'Trust Name' }],
  otherVentures: [{ key: 'description', label: 'Description of Other Ventures' }],
  possessDrones: [{ key: 'description', label: 'Description of Drone Possession' }],
  hireDroneOperators: [{ key: 'description', label: 'Description of Drone Hiring' }],
}

// "Yes" on these is answered by the structured details above; the others get a
// free-text ynExplain box that must be filled when the answer is Yes.
export const EXPLAIN_MAX: Record<string, number> = { rentOrLoanEquipment: 72 }
export const EXPLAIN_DEFAULT_MAX = 136
export const QUESTIONS_WITH_EXPLAIN = YN_QUESTIONS.map(q => q.key).filter(
  k => !(k in GENERAL_DETAILS) && !['coverageTerminated', 'safetyProgramsExist', 'swimmingPool', 'athleticTeams'].includes(k)
)
// ------------------------------------------------------ END verbatim from shared quoteSpec.ts

export const YN = ["Yes", "No"];

// Option lists the shared spec keeps in SELECT_OPTIONS (same values).
export const ATHLETIC_AGE_GROUPS = ["12 and Under", "13 Through 18", "Over 18"];
export const POOL_CONSTRUCTION = ["Above Ground", "In Ground"];
export const LOSS_STATUS = ["Open", "Closed"];

// Hard display limits of the ACORD boxes (shared MAX_LEN, the subset this step uses).
export const YN_MAX_LEN: Record<string, number> = {
  lossDescription: 48,
  athleticSportDescription: 24,
  athleticSponsorshipExtent: 41,
};

export const detailName = (q: string, f: string) => `general_${q}__${f}`;
export const CONDITION_CORRECTED = "conditionCorrected";

/** Loss row asked when lossesLast3Years = Yes (shared form "Coverage and history" section). */
export const LOSS_ROW = [
  "lossCount",
  "lossLineOfBusiness",
  "lossDate",
  "lossDescription",
  "lossHistoryStatus",
  "lossAmountPaid",
  "lossAmountReserved",
  "lossSubrogation",
];

/** Yes-triggered selections, keyed by the yn question that reveals them (shared QuoteForm ynBlock). */
export const YES_SELECTIONS: Record<string, string[]> = {
  coverageTerminated: [
    ...TERMINATION_REASONS.map((r) => detailName("coverageTerminated", r.key)),
    detailName("coverageTerminated", CONDITION_CORRECTED),
    detailName("coverageTerminated", "conditionCorrectedDescription"),
  ],
  safetyProgramsExist: ["safetyProgramElements", "safetyOtherText"],
  athleticTeams: ["athleticSportDescription", "athleticContactSport", "athleticSponsorshipExtent", "athleticTeamAgeGroup"],
  swimmingPool: ["poolConstruction", "poolSafetyFeatures"],
  rentOrLoanEquipment: ["rentEquipmentTypes", "rentEquipmentInstructionGiven"],
  leaseEmployees: ["leaseEmployeesWorkersCompCarried"],
};

/** Every follow-up name a yn question can reveal (explain box, structured details, selections). */
export function followUpsFor(key: string): string[] {
  const out: string[] = [];
  if (QUESTIONS_WITH_EXPLAIN.includes(key)) out.push(`ynExplain_${key}`);
  for (const f of GENERAL_DETAILS[key] ?? []) out.push(detailName(key, f.key));
  out.push(...(YES_SELECTIONS[key] ?? []));
  return out;
}

/** Every name this step can post, in form order (used to build public/__forms.html). */
export function ynStepFieldNames(): string[] {
  const names: string[] = ["currentlyInsured", "lossesLast3Years", ...LOSS_ROW];
  for (const q of YN_QUESTIONS) names.push(`yn_${q.key}`, ...followUpsFor(q.key));
  return names;
}

type Vals = Record<string, string>;
const listOf = (v: string | undefined) => (v ? v.split(", ").filter(Boolean) : []);
const ISO_DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const MONEY_RE = /^\$?\d{1,3}(,\d{3})+(\.\d{1,2})?$|^\$?\d+(\.\d{1,2})?$/;

/**
 * First problem on this step, or null. Same follow-up rules as the shared validateQuote():
 * an unanswered question is allowed (and not posted); a Yes forces its follow-up.
 * Returns the field name to focus and a message that names the question.
 */
export function validateYnStep(v: Vals): { key: string; msg: string } | null {
  const get = (k: string) => (v[k] ?? "").trim();
  const label = (k: string) => YN_QUESTIONS.find((q) => q.key === k)?.label ?? k;
  if (get("lossesLast3Years") === "Yes") {
    for (const k of LOSS_ROW) if (!get(k)) return { key: k, msg: "Please complete the loss details (all loss fields are needed when you answer Yes)." };
    if (!/^\d+$/.test(get("lossCount"))) return { key: "lossCount", msg: "Number of losses must be a whole number." };
    if (!ISO_DATE_RE.test(get("lossDate"))) return { key: "lossDate", msg: "Loss date must be a valid date." };
    for (const k of ["lossAmountPaid", "lossAmountReserved"])
      if (!MONEY_RE.test(get(k))) return { key: k, msg: "Loss amounts must be dollar amounts (numbers only, e.g. 25000)." };
  }
  for (const q of YN_QUESTIONS) {
    if (get(`yn_${q.key}`) !== "Yes") continue;
    if (QUESTIONS_WITH_EXPLAIN.includes(q.key)) {
      const k = `ynExplain_${q.key}`;
      const max = EXPLAIN_MAX[q.key] ?? EXPLAIN_DEFAULT_MAX;
      if (!get(k)) return { key: k, msg: `Please explain your "Yes" answer: ${q.label}` };
      if (get(k).length > max) return { key: k, msg: `Explanation must be ${max} characters or fewer: ${q.label}` };
    }
    for (const f of GENERAL_DETAILS[q.key] ?? []) {
      const k = detailName(q.key, f.key);
      if (!get(k)) return { key: k, msg: `${f.label} is required because you answered Yes: ${q.label}` };
      if (f.kind === "date" && !ISO_DATE_RE.test(get(k))) return { key: k, msg: `${f.label} must be a valid date` };
      if (f.kind === "percent" && !(/^\d+(\.\d+)?$/.test(get(k)) && Number(get(k)) <= 100))
        return { key: k, msg: `${f.label} must be a number from 0 to 100` };
      if (f.max && get(k).length > f.max) return { key: k, msg: `${f.label} must be ${f.max} characters or fewer` };
    }
  }
  const yes = (k: string) => get(`yn_${k}`) === "Yes";
  if (yes("coverageTerminated")) {
    if (!TERMINATION_REASONS.some((r) => get(detailName("coverageTerminated", r.key)) === "Yes"))
      return { key: detailName("coverageTerminated", "nonPayment"), msg: "Tick at least one reason the coverage was terminated." };
    if (get(detailName("coverageTerminated", CONDITION_CORRECTED)) === "Yes" && !get(detailName("coverageTerminated", "conditionCorrectedDescription")))
      return { key: detailName("coverageTerminated", "conditionCorrectedDescription"), msg: "Describe how the condition was corrected." };
  }
  if (yes("safetyProgramsExist")) {
    const els = listOf(get("safetyProgramElements"));
    if (!els.length) return { key: "safetyProgramElements", msg: "Select at least one safety program element." };
    if (els.includes("Other") && !get("safetyOtherText")) return { key: "safetyOtherText", msg: "Describe the other safety program." };
  }
  if (yes("athleticTeams"))
    for (const k of YES_SELECTIONS.athleticTeams) if (!get(k)) return { key: k, msg: `Please complete the athletic team details: ${label("athleticTeams")}` };
  if (yes("swimmingPool")) {
    if (!get("poolConstruction")) return { key: "poolConstruction", msg: "Select the pool construction." };
    if (!listOf(get("poolSafetyFeatures")).length) return { key: "poolSafetyFeatures", msg: "Select at least one pool safety feature." };
  }
  if (yes("rentOrLoanEquipment")) {
    if (!listOf(get("rentEquipmentTypes")).length) return { key: "rentEquipmentTypes", msg: "Select the type of equipment rented or loaned." };
    if (!get("rentEquipmentInstructionGiven")) return { key: "rentEquipmentInstructionGiven", msg: "Is instruction given to renters?" };
  }
  if (yes("leaseEmployees") && !get("leaseEmployeesWorkersCompCarried"))
    return { key: "leaseEmployeesWorkersCompCarried", msg: "Is workers compensation carried for leased employees?" };
  for (const [k, n] of Object.entries(YN_MAX_LEN)) if (get(k).length > n) return { key: k, msg: `That answer must be ${n} characters or fewer.` };
  return null;
}

/**
 * What this step posts: answered questions only, follow-ups only while their question is Yes,
 * the loss row only while lossesLast3Years = Yes. Values are trimmed; blanks are dropped.
 */
export function ynStepPayload(v: Vals): Record<string, string> {
  const out: Record<string, string> = {};
  const put = (k: string, x: string | undefined) => {
    const t = (x ?? "").trim();
    if (t) out[k] = t;
  };
  put("currentlyInsured", v.currentlyInsured);
  put("lossesLast3Years", v.lossesLast3Years);
  if ((v.lossesLast3Years ?? "") === "Yes") for (const k of LOSS_ROW) put(k, v[k]);
  for (const q of YN_QUESTIONS) {
    const a = v[`yn_${q.key}`];
    if (a !== "Yes" && a !== "No") continue; // blank is never sent as No
    out[`yn_${q.key}`] = a;
    if (a !== "Yes") continue;
    for (const k of followUpsFor(q.key)) put(k, v[k]);
  }
  if (out.yn_coverageTerminated === "Yes") {
    // reasons are tick-boxes: unticked = No, only when terminated = Yes (shared form convention)
    for (const r of [...TERMINATION_REASONS.map((x) => x.key), CONDITION_CORRECTED]) {
      const k = detailName("coverageTerminated", r);
      if (out[k] !== "Yes") out[k] = "No";
    }
    if (out[detailName("coverageTerminated", CONDITION_CORRECTED)] !== "Yes")
      delete out[detailName("coverageTerminated", "conditionCorrectedDescription")];
  }
  if (out.yn_safetyProgramsExist === "Yes" && !listOf(out.safetyProgramElements).includes("Other")) delete out.safetyOtherText;
  return out;
}

// Single source for the /quote intake form: field names, labels, options, row caps.
// The detection block in public/__forms.html is generated from this file, so the
// names the form posts and the names Netlify has declared cannot drift.
//
// Naming convention (CCA lead renderer): canonical keys name, businessName, email,
// phone, address, city, state, zip; everything else is posted as _info_<name>.
// Never prefix with a bare underscore only: the renderer skips those.
// Deliberately NO Social Security, bank or card fields, and no text-consent field.

export const FORM_NAME = "quote-request";
export const MAX_ROWS = 10;

export type FieldType = "text" | "email" | "tel" | "date" | "number" | "select" | "textarea";

export type Field = {
  key: string; // post name for single fields; row field suffix for repeatable rows
  label: string;
  type?: FieldType;
  required?: boolean;
  options?: string[];
  hint?: string;
  placeholder?: string;
  inputMode?: "numeric" | "text" | "tel" | "email";
  autoComplete?: string;
  maxLength?: number;
  wide?: boolean;
};

const info = (n: string) => `_info_${n}`;

const YES_NO = ["Yes", "No"];

export const ENTITY_TYPES = ["Sole proprietor", "Partnership", "LLC", "Corporation", "S-Corporation", "Other"];

export const STEP1: Field[] = [
  { key: "name", label: "Your name", required: true, autoComplete: "name" },
  { key: "businessName", label: "Legal business name", required: true, autoComplete: "organization" },
  { key: info("dba"), label: "DBA (doing business as)" },
  { key: info("entityType"), label: "Entity type", type: "select", options: ENTITY_TYPES },
  {
    key: info("fein"),
    label: "FEIN (business EIN)",
    inputMode: "numeric",
    maxLength: 10,
    placeholder: "12-3456789",
    hint: "Business EIN only. Never enter a Social Security number.",
  },
  { key: "address", label: "Business street address", autoComplete: "street-address", wide: true },
  { key: "city", label: "City", autoComplete: "address-level2" },
  { key: "state", label: "State", autoComplete: "address-level1", maxLength: 2, placeholder: "AZ" },
  { key: "zip", label: "ZIP", inputMode: "numeric", autoComplete: "postal-code", maxLength: 10 },
  { key: "phone", label: "Phone", type: "tel", required: true, inputMode: "tel", autoComplete: "tel" },
  { key: "email", label: "Email", type: "email", required: true, inputMode: "email", autoComplete: "email" },
  { key: info("yearsInBusiness"), label: "Years in business", inputMode: "numeric", maxLength: 3 },
  { key: info("usdotNumber"), label: "USDOT number", inputMode: "numeric", maxLength: 10 },
  { key: info("mcNumber"), label: "MC number", maxLength: 12 },
  { key: info("operatingStates"), label: "States you operate in", placeholder: "e.g. AZ, CA, NV, TX", wide: true },
  { key: info("operatingRadius"), label: "Operating radius", type: "select", options: ["Local (under 50 miles)", "Intermediate (50-200 miles)", "Long haul (200+ miles)", "Mixed"] },
  { key: info("commoditiesHauled"), label: "Commodities hauled", type: "textarea", wide: true },
  { key: info("commodityPercentages"), label: "Percent of loads by commodity", type: "textarea", wide: true, placeholder: "e.g. produce 60%, dry goods 40%" },
  { key: info("shippersBrokers"), label: "Main shippers or brokers you haul for", type: "textarea", wide: true },
  { key: info("hazmat"), label: "Do you haul hazardous materials?", type: "select", options: YES_NO },
];

export const VEHICLE_FIELDS: Field[] = [
  { key: "year", label: "Year", inputMode: "numeric", maxLength: 4 },
  { key: "make", label: "Make" },
  { key: "model", label: "Model" },
  { key: "vin", label: "VIN", maxLength: 17 },
  { key: "gvw", label: "GVW (lbs)", inputMode: "numeric" },
  { key: "statedValue", label: "Stated value ($)", inputMode: "numeric" },
  { key: "garagingZip", label: "Garaging ZIP", inputMode: "numeric", maxLength: 10 },
  { key: "ownership", label: "Owned or leased", type: "select", options: ["Owned", "Leased", "Financed"] },
  { key: "lienholder", label: "Lienholder (if any)" },
];

export const TRAILER_FIELDS: Field[] = [
  { key: "year", label: "Year", inputMode: "numeric", maxLength: 4 },
  { key: "make", label: "Make" },
  { key: "type", label: "Trailer type", placeholder: "Dry van, reefer, flatbed..." },
  { key: "vin", label: "VIN", maxLength: 17 },
  { key: "statedValue", label: "Stated value ($)", inputMode: "numeric" },
  { key: "ownership", label: "Owned or leased", type: "select", options: ["Owned", "Leased", "Financed"] },
  { key: "lienholder", label: "Lienholder (if any)" },
];

export const DRIVER_FIELDS: Field[] = [
  { key: "name", label: "Driver name" },
  { key: "dob", label: "Date of birth", type: "date" },
  { key: "licenseNumber", label: "License number" },
  { key: "licenseState", label: "License state", maxLength: 2, placeholder: "AZ" },
  { key: "yearsCdl", label: "Years with CDL", inputMode: "numeric", maxLength: 2 },
  { key: "violations", label: "Violations, last 3 to 5 years", type: "textarea", wide: true, placeholder: "None, or list type and year" },
  { key: "accidents", label: "Accidents, last 3 to 5 years", type: "textarea", wide: true, placeholder: "None, or list type and year" },
];

export const STEP5: Field[] = [
  { key: info("autoLiabilityLimit"), label: "Auto liability limit", type: "select", options: ["$750,000", "$1,000,000", "Other / not sure"] },
  { key: info("physicalDamage"), label: "Physical damage coverage", type: "select", options: YES_NO },
  { key: info("cargoLimit"), label: "Motor truck cargo limit", type: "select", options: ["$50,000", "$100,000", "$250,000", "Other / not sure"] },
  { key: info("cargoDeductible"), label: "Cargo deductible", type: "select", options: ["$1,000", "$2,500", "$5,000", "Other / not sure"] },
  { key: info("trailerInterchange"), label: "Trailer interchange", type: "select", options: YES_NO },
  { key: info("generalLiability"), label: "General liability", type: "select", options: YES_NO },
  { key: info("otherCoverage"), label: "Other coverage wanted", type: "textarea", wide: true },
];

export const STEP6: Field[] = [
  { key: info("currentCarrier"), label: "Current insurance carrier" },
  { key: info("currentExpiration"), label: "Current policy expiration", type: "date" },
  { key: info("currentLimits"), label: "Current limits" },
  { key: info("currentPremium"), label: "Current annual premium ($)", inputMode: "numeric" },
  { key: info("lossHistory5yr"), label: "Loss history, last 5 years", type: "textarea", wide: true, placeholder: "None, or list claims with year and amount" },
  { key: info("safetyProgram"), label: "Safety program (training, telematics, cameras, etc.)", type: "textarea", wide: true },
  { key: info("effectiveDate"), label: "Desired effective date", type: "date" },
  { key: info("notes"), label: "Anything else we should know", type: "textarea", wide: true },
];

export const ROW_GROUPS = [
  { id: "vehicle", title: "Vehicle", fields: VEHICLE_FIELDS },
  { id: "trailer", title: "Trailer", fields: TRAILER_FIELDS },
  { id: "driver", title: "Driver", fields: DRIVER_FIELDS },
] as const;

export const rowKey = (group: string, n: number, field: string) => `_info_${group}${n}_${field}`;
export const countKey = (group: string) => `_info_${group}Count`;

/** Every name the form can post (used to build __forms.html). */
export function allFieldNames(): string[] {
  const names: string[] = [];
  for (const f of [...STEP1, ...STEP5, ...STEP6]) names.push(f.key);
  for (const g of ROW_GROUPS) {
    names.push(countKey(g.id));
    for (let n = 1; n <= MAX_ROWS; n++) for (const f of g.fields) names.push(rowKey(g.id, n, f.key));
  }
  return names;
}

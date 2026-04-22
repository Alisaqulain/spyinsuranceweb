export type InsuranceIconKey =
  | "shield"
  | "car"
  | "bike"
  | "truck"
  | "passenger"
  | "home"
  | "briefcase"
  | "anchor"
  | "user";

export type InsuranceItem = {
  label: string;
  slug: string;
  href: string;
  icon?: InsuranceIconKey;
  /** Shown on the left of the quote modal */
  quoteImage: string;
};

export const insuranceSections: { title: string; items: InsuranceItem[] }[] = [
  {
    title: "Health Insurance",
    items: [
      {
        label: "Family & Individual Floater",
        slug: "family-individual-floater",
        href: "/products/family-individual-floater",
        icon: "shield",
        quoteImage: "/image_2.png",
      },
      {
        label: "Maternity Cover",
        slug: "maternity-cover",
        href: "/products/maternity-cover",
        icon: "user",
        quoteImage: "/image_3.png",
      },
      {
        label: "Senior Citizen Cover",
        slug: "senior-citizen-cover",
        href: "/products/senior-citizen-cover",
        icon: "user",
        quoteImage: "/image_4.png",
      },
      {
        label: "Cardiac & Cancer Mediclaim",
        slug: "cardiac-cancer-mediclaim",
        href: "/products/cardiac-cancer-mediclaim",
        icon: "shield",
        quoteImage: "/image_5.png",
      },
      {
        label: "Critical Illness",
        slug: "critical-illness",
        href: "/products/critical-illness",
        icon: "shield",
        quoteImage: "/image_5.png",
      },
      {
        label: "Group Health Insurance",
        slug: "group-health-insurance",
        href: "/products/group-health-insurance",
        icon: "user",
        quoteImage: "/image_4.png",
      },
      {
        label: "Personal Accident",
        slug: "personal-accident",
        href: "/products/personal-accident",
        icon: "user",
        quoteImage: "/image_19.png",
      },
    ],
  },
  {
    title: "Vehicle Insurance",
    items: [
      {
        label: "Private Car Insurance",
        slug: "private-car-insurance",
        href: "/products/private-car-insurance",
        icon: "car",
        quoteImage: "/image_10.png",
      },
      {
        label: "Two Wheeler",
        slug: "two-wheeler",
        href: "/products/two-wheeler",
        icon: "bike",
        quoteImage: "/image_11.png",
      },
      {
        label: "Commercial Vehicle",
        slug: "commercial-vehicle",
        href: "/products/commercial-vehicle",
        icon: "truck",
        quoteImage: "/image_12.png",
      },
      {
        label: "Passenger Carrying Vehicle",
        slug: "passenger-carrying-vehicle",
        href: "/products/passenger-carrying-vehicle",
        icon: "passenger",
        quoteImage: "/image_13.png",
      },
    ],
  },
  {
    title: "General Insurance",
    items: [
      {
        label: "Travel Insurance",
        slug: "travel-insurance",
        href: "/products/travel-insurance",
        icon: "shield",
        quoteImage: "/image_5.png",
      },
      {
        label: "Home Insurance (Agreed Value & Reinstate Value)",
        slug: "home-insurance",
        href: "/products/home-insurance",
        icon: "home",
        quoteImage: "/image_14.png",
      },
      {
        label: "Business Insurance",
        slug: "business-insurance",
        href: "/products/business-insurance",
        icon: "briefcase",
        quoteImage: "/image_15.png",
      },
      {
        label: "Marine Insurance",
        slug: "marine-insurance",
        href: "/products/marine-insurance",
        icon: "anchor",
        quoteImage: "/image_17.png",
      },
      {
        label: "Public Liability",
        slug: "public-liability",
        href: "/products/public-liability",
        icon: "shield",
        quoteImage: "/image_18.png",
      },
      {
        label: "Project Insurance",
        slug: "project-insurance",
        href: "/products/project-insurance",
        icon: "briefcase",
        quoteImage: "/image_16.png",
      },
      {
        label: "Misc D Insurance",
        slug: "misc-d-insurance",
        href: "/products/misc-d-insurance",
        icon: "shield",
        quoteImage: "/image_20.png",
      },
      {
        label: "Workmen Insurance",
        slug: "workmen-insurance",
        href: "/products/workmen-insurance",
        icon: "user",
        quoteImage: "/image_21.png",
      },
    ],
  },
  {
    title: "Life Insurance",
    items: [
      {
        label: "Term Life",
        slug: "term-life",
        href: "/products/term-life",
        icon: "shield",
        quoteImage: "/image_6.png",
      },
      {
        label: "Guaranteed Plan",
        slug: "guaranteed-plan",
        href: "/products/guaranteed-plan",
        icon: "shield",
        quoteImage: "/image_7.png",
      },
      {
        label: "ULIP",
        slug: "ulip",
        href: "/products/ulip",
        icon: "briefcase",
        quoteImage: "/image_9.png",
      },
      {
        label: "ULIP Term",
        slug: "ulip-term",
        href: "/products/ulip-term",
        icon: "briefcase",
        quoteImage: "/image_9.png",
      },
      {
        label: "Employer Employee",
        slug: "employer-employee",
        href: "/products/employer-employee",
        icon: "shield",
        quoteImage: "/image_90.png",
      },
    ],
  },
];

export function formatCardLabel(label: string) {
  const map: Record<string, string> = {
    "Family & Individual Floater": "Family &\nIndividual\nFloater",
    "Maternity Cover": "Maternity\nCover",
    "Senior Citizen Cover": "Senior Citizen\nCover",
    "Cardiac & Cancer Mediclaim": "Cardiac &\nCancer\nMediclaim",
    "Critical Illness": "Critical\nIllness",
    "Group Health Insurance": "Group\nHealth\nInsurance",
    "Personal Accident": "Personal\nAccident",
    "Private Car Insurance": "Private Car\nInsurance",
    "Two Wheeler": "Two\nWheeler",
    "Commercial Vehicle": "Commercial\nVehicle",
    "Passenger Carrying Vehicle": "Passenger\nCarrying\nVehicle",
    "Travel Insurance": "Travel\nInsurance",
    "Home Insurance (Agreed Value & Reinstate Value)":
      "Home\nInsurance\n(Agreed Value &\nReinstate Value)",
    "Business Insurance": "Business\nInsurance",
    "Marine Insurance": "Marine\nInsurance",
    "Public Liability": "Public\nLiability",
    "Project Insurance": "Project\nInsurance",
    "Misc D Insurance": "Misc D\nInsurance",
    "Workmen Insurance": "Workmen\nInsurance",
    "Term Life": "Term Life",
    "Guaranteed Plan": "Guaranteed\nPlan",
    ULIP: "ULIP",
    "ULIP Term": "ULIP\nTerm",
    "Employer Employee": "Employer\nEmployee",
  };

  return map[label] ?? label;
}

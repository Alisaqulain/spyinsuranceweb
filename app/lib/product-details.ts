import type { InsuranceItem } from "./insurance-products";

export type ProductSection =
  | { kind: "heading"; title: string }
  | { kind: "paragraph"; text: string }
  | { kind: "list"; items: string[] };

export type ProductDetails = InsuranceItem & {
  category: "Health Insurance" | "Vehicle Insurance" | "General Insurance" | "Life Insurance";
  title: string;
  shortDescription: string;
  overview: ProductSection[];
  form: {
    titlePrefix?: string;
    fields: Array<
      | { type: "text"; name: string; label: string; required?: boolean; autoComplete?: string }
      | { type: "email"; name: string; label: string; required?: boolean; autoComplete?: string }
      | { type: "tel"; name: string; label: string; required?: boolean; autoComplete?: string }
      | { type: "number"; name: string; label: string; required?: boolean }
      | { type: "textarea"; name: string; label: string; required?: boolean }
    >;
  };
};

const CAR_OVERVIEW: ProductSection[] = [
  { kind: "heading", title: "Car Insurance Overview" },
  {
    kind: "paragraph",
    text:
      "Car Insurance, alternatively known as motor insurance or auto insurance is a specific policy that you buy for the protection of your vehicle against any sort of damages due to inescapable or unfortunate accident. Since India is a country mainly known for its vast population, car accidents have become a daily drama here. No matter how safely you drive your car or how responsibly you manage your vehicle, accidents can happen just as fast as we blink isn't it? Imagine this: you parked your car outside a shopping mall and when you come back from shopping after a couple hours, with a bolt from the blue you discover a big dent on the back of your car. How do you deal with such situation? Well, fortunately, that's when your online car insurance policy comes into its role play.",
  },
  { kind: "heading", title: "Why Car Insurance Is Important in India?" },
  {
    kind: "paragraph",
    text:
      "Car insurance policies can literally serve you more than you can ever think. The importance of car insurance in India is directly linked to the law imposed by the Government of India. As per Motor Vehicles Act, 1988, it's mandatory for all motorists to possess at least the third motor insurance. Having car insurance in India is important as it covers all the costs incurred from such events of vehicle damage or injuries done to other driver, pedestrians or passenger involving your vehicle. Online car insurance policies also play a vital role by providing coverage against various loss or damage to your vehicle resulting from Theft, Accident, Fire or Explosion, Lightening, Self Ignition, Strikes, Riots, Disaster, Act of Terrorism, Transit by Rail, Road, Air and so on depending on the type online car insurance plan you choose. To enjoy the benefits of an auto insurance coverage in India one needs to pay for the premium on their car insurance policy.",
  },
  { kind: "heading", title: "Different Types Of Car Insurance Plans" },
  {
    kind: "paragraph",
    text:
      "In general, you will be offered two types motor insurance covers by a car insurance company within their car insurance plans. The Two types of motor insurance plans are Third Party Liability Car Insurance Coverage and Comprehensive Car Insurance Coverage.",
  },
  { kind: "heading", title: "Third Party Liability Car Insurance" },
  {
    kind: "paragraph",
    text:
      "The first party who is the owner of a four wheeler buys a motor insurance policy from the second party that is the car insurance company for the protection against the claims of a third party that can be a driver of another vehicle, passengers or even pedestrians. Third Party car insurance policy is specifically designed to cover any property damages or bodily injuries to a third party caused by your vehicle. It’s obligatory to have third party car insurance for all motor vehicles piling on road in India.",
  },
  { kind: "heading", title: "Comprehensive Car Insurance" },
  {
    kind: "paragraph",
    text:
      "Comprehensive car insurance is an optional car insurance policy that comes with higher level of protection for your vehicle. The best advantage of buying comprehensive car insurance in India is that it protects your own vehicle against various damages arising from accident, fire, vandalism or even theft plus it also takes care of the third party liability claims. Some extra features and benefits are offered with comprehensive car insurance plan by the best car insurance company in India.",
  },
  { kind: "heading", title: "Add On Covers For Four Wheeler Insurance" },
  {
    kind: "paragraph",
    text:
      "Like the name suggests, add on covers for motor insurance stand for additional coverage that are not included with a comprehensive auto insurance plan. To purchase add on cover for your vehicle, you’ll have to make some extra payment along with your car insurance premium. Some of the best add on covers for car insurance policies are following.",
  },
  { kind: "heading", title: "Benefits Of Car Insurance" },
  {
    kind: "list",
    items: [
      "Compensates vehicle repairing costs due to damage from an accident.",
      "Coverage against damages caused from vandalism, theft, fire, etc.",
      "Offers cashless payment system. You can repair your vehicle form the network garages of your insurer and avail cashless facility.",
      "Offers additional discounts on premium as in multi car or multi policy discounts, accident free discounts etc.",
      "No Claim Bonus which is offered by auto insurance providers to reduce the cost of premium for each claim free years maintained by policyholders.",
    ],
  },
  {
    kind: "heading",
    title: "Having a Two-wheeler insurance policy does the following:",
  },
  {
    kind: "list",
    items: [
      "Covers financial liability in a claim involving a third party",
      "Provides coverage for damage to insured bike due to natural and man-made disasters",
      "Protects and finances arising due to theft of the insured two-wheeler",
      "Saves policyholder from legal fines",
      "Covers owner-driver in case of injury or death arising from an accident involving the insured vehicle.",
    ],
  },
];

const DEFAULT_OVERVIEW = (title: string): ProductSection[] => [
  { kind: "heading", title: `${title} Overview` },
  {
    kind: "paragraph",
    text:
      "Tell us your requirements and our team will share the best available options, premium ranges, and coverage details from trusted insurers.",
  },
];

const DEFAULT_FORM_FIELDS: ProductDetails["form"]["fields"] = [
  { type: "text", name: "name", label: "Name", required: true, autoComplete: "name" },
  { type: "tel", name: "phone", label: "Phone", required: true, autoComplete: "tel" },
  { type: "email", name: "email", label: "Email Id", required: true, autoComplete: "email" },
  { type: "textarea", name: "requirements", label: "Requirements / Details", required: false },
];

export const productDetailsBySlug: Record<string, ProductDetails> = {
  "private-car-insurance": {
    label: "Private Car Insurance",
    title: "Private Car Insurance",
    category: "Vehicle Insurance",
    slug: "private-car-insurance",
    href: "/products/private-car-insurance",
    icon: "car",
    quoteImage: "/image_10.png",
    shortDescription: "Protect your car with the right cover and add-ons.",
    overview: CAR_OVERVIEW,
    form: {
      titlePrefix: "Get",
      fields: [
        ...DEFAULT_FORM_FIELDS.filter((f) => f.type !== "textarea"),
        { type: "number", name: "idv", label: "IDV (Insured Declared Value)", required: false },
        { type: "textarea", name: "requirements", label: "Vehicle / Requirements", required: false },
      ],
    },
  },

  "two-wheeler": {
    label: "Two Wheeler",
    title: "Two Wheeler Insurance",
    category: "Vehicle Insurance",
    slug: "two-wheeler",
    href: "/products/two-wheeler",
    icon: "bike",
    quoteImage: "/image_11.png",
    shortDescription: "Get bike coverage with smart add-ons and fast support.",
    overview: DEFAULT_OVERVIEW("Two Wheeler Insurance"),
    form: { titlePrefix: "Get", fields: DEFAULT_FORM_FIELDS },
  },

  "commercial-vehicle": {
    label: "Commercial Vehicle",
    title: "Commercial Vehicle Insurance",
    category: "Vehicle Insurance",
    slug: "commercial-vehicle",
    href: "/products/commercial-vehicle",
    icon: "truck",
    quoteImage: "/image_12.png",
    shortDescription: "Coverage for goods carriers and business vehicles.",
    overview: DEFAULT_OVERVIEW("Commercial Vehicle Insurance"),
    form: { titlePrefix: "Get", fields: DEFAULT_FORM_FIELDS },
  },

  "passenger-carrying-vehicle": {
    label: "Passenger Carrying Vehicle",
    title: "Passenger Carrying Vehicle Insurance",
    category: "Vehicle Insurance",
    slug: "passenger-carrying-vehicle",
    href: "/products/passenger-carrying-vehicle",
    icon: "passenger",
    quoteImage: "/image_13.png",
    shortDescription: "Protect passenger vehicles with compliant coverage.",
    overview: DEFAULT_OVERVIEW("Passenger Carrying Vehicle Insurance"),
    form: { titlePrefix: "Get", fields: DEFAULT_FORM_FIELDS },
  },

  "family-individual-floater": {
    label: "Family & Individual Floater",
    title: "Family & Individual Floater Health Insurance",
    category: "Health Insurance",
    slug: "family-individual-floater",
    href: "/products/family-individual-floater",
    icon: "shield",
    quoteImage: "/image_2.png",
    shortDescription: "One plan to cover yourself or your entire family.",
    overview: DEFAULT_OVERVIEW("Family & Individual Floater Health Insurance"),
    form: { titlePrefix: "Get", fields: DEFAULT_FORM_FIELDS },
  },

  "maternity-cover": {
    label: "Maternity Cover",
    title: "Maternity Cover",
    category: "Health Insurance",
    slug: "maternity-cover",
    href: "/products/maternity-cover",
    icon: "user",
    quoteImage: "/image_3.png",
    shortDescription: "Plan maternity benefits with the right waiting periods.",
    overview: DEFAULT_OVERVIEW("Maternity Cover"),
    form: { titlePrefix: "Get", fields: DEFAULT_FORM_FIELDS },
  },

  "senior-citizen-cover": {
    label: "Senior Citizen Cover",
    title: "Senior Citizen Health Insurance",
    category: "Health Insurance",
    slug: "senior-citizen-cover",
    href: "/products/senior-citizen-cover",
    icon: "user",
    quoteImage: "/image_4.png",
    shortDescription: "Health cover designed for seniors and pre-existing conditions.",
    overview: DEFAULT_OVERVIEW("Senior Citizen Health Insurance"),
    form: { titlePrefix: "Get", fields: DEFAULT_FORM_FIELDS },
  },

  "cardiac-cancer-mediclaim": {
    label: "Cardiac & Cancer Mediclaim",
    title: "Cardiac & Cancer Mediclaim",
    category: "Health Insurance",
    slug: "cardiac-cancer-mediclaim",
    href: "/products/cardiac-cancer-mediclaim",
    icon: "shield",
    quoteImage: "/image_5.png",
    shortDescription: "Focused cover options for serious illnesses and treatments.",
    overview: DEFAULT_OVERVIEW("Cardiac & Cancer Mediclaim"),
    form: { titlePrefix: "Get", fields: DEFAULT_FORM_FIELDS },
  },

  "critical-illness": {
    label: "Critical Illness",
    title: "Critical Illness Insurance",
    category: "Health Insurance",
    slug: "critical-illness",
    href: "/products/critical-illness",
    icon: "shield",
    quoteImage: "/image_5.png",
    shortDescription: "Lump-sum payout options on diagnosis of listed illnesses.",
    overview: DEFAULT_OVERVIEW("Critical Illness Insurance"),
    form: { titlePrefix: "Get", fields: DEFAULT_FORM_FIELDS },
  },

  "group-health-insurance": {
    label: "Group Health Insurance",
    title: "Group Health Insurance",
    category: "Health Insurance",
    slug: "group-health-insurance",
    href: "/products/group-health-insurance",
    icon: "user",
    quoteImage: "/image_4.png",
    shortDescription: "Employee health benefits for teams and organizations.",
    overview: DEFAULT_OVERVIEW("Group Health Insurance"),
    form: { titlePrefix: "Get", fields: DEFAULT_FORM_FIELDS },
  },

  "personal-accident": {
    label: "Personal Accident",
    title: "Personal Accident Insurance",
    category: "Health Insurance",
    slug: "personal-accident",
    href: "/products/personal-accident",
    icon: "user",
    quoteImage: "/image_19.png",
    shortDescription: "Coverage for accidental death and disability.",
    overview: DEFAULT_OVERVIEW("Personal Accident Insurance"),
    form: { titlePrefix: "Get", fields: DEFAULT_FORM_FIELDS },
  },

  "travel-insurance": {
    label: "Travel Insurance",
    title: "Travel Insurance",
    category: "General Insurance",
    slug: "travel-insurance",
    href: "/products/travel-insurance",
    icon: "shield",
    quoteImage: "/image_5.png",
    shortDescription: "Trip protection for medical emergencies and delays.",
    overview: DEFAULT_OVERVIEW("Travel Insurance"),
    form: { titlePrefix: "Get", fields: DEFAULT_FORM_FIELDS },
  },

  "home-insurance": {
    label: "Home Insurance",
    title: "Home Insurance",
    category: "General Insurance",
    slug: "home-insurance",
    href: "/products/home-insurance",
    icon: "home",
    quoteImage: "/image_14.png",
    shortDescription: "Protect your home structure and household contents.",
    overview: DEFAULT_OVERVIEW("Home Insurance"),
    form: { titlePrefix: "Get", fields: DEFAULT_FORM_FIELDS },
  },

  "business-insurance": {
    label: "Business Insurance",
    title: "Business Insurance",
    category: "General Insurance",
    slug: "business-insurance",
    href: "/products/business-insurance",
    icon: "briefcase",
    quoteImage: "/image_15.png",
    shortDescription: "Covers for property, liability, and business risks.",
    overview: DEFAULT_OVERVIEW("Business Insurance"),
    form: { titlePrefix: "Get", fields: DEFAULT_FORM_FIELDS },
  },

  "marine-insurance": {
    label: "Marine Insurance",
    title: "Marine Insurance",
    category: "General Insurance",
    slug: "marine-insurance",
    href: "/products/marine-insurance",
    icon: "anchor",
    quoteImage: "/image_17.png",
    shortDescription: "Protection for cargo and transit-related risks.",
    overview: DEFAULT_OVERVIEW("Marine Insurance"),
    form: { titlePrefix: "Get", fields: DEFAULT_FORM_FIELDS },
  },

  "public-liability": {
    label: "Public Liability",
    title: "Public Liability Insurance",
    category: "General Insurance",
    slug: "public-liability",
    href: "/products/public-liability",
    icon: "shield",
    quoteImage: "/image_18.png",
    shortDescription: "Cover against third-party injury or property damage claims.",
    overview: DEFAULT_OVERVIEW("Public Liability Insurance"),
    form: { titlePrefix: "Get", fields: DEFAULT_FORM_FIELDS },
  },

  "project-insurance": {
    label: "Project Insurance",
    title: "Project Insurance",
    category: "General Insurance",
    slug: "project-insurance",
    href: "/products/project-insurance",
    icon: "briefcase",
    quoteImage: "/image_16.png",
    shortDescription: "Risk coverage for project execution and assets.",
    overview: DEFAULT_OVERVIEW("Project Insurance"),
    form: { titlePrefix: "Get", fields: DEFAULT_FORM_FIELDS },
  },

  "misc-d-insurance": {
    label: "Misc D Insurance",
    title: "Misc D Insurance",
    category: "General Insurance",
    slug: "misc-d-insurance",
    href: "/products/misc-d-insurance",
    icon: "shield",
    quoteImage: "/image_20.png",
    shortDescription: "Flexible covers for specialized needs.",
    overview: DEFAULT_OVERVIEW("Misc D Insurance"),
    form: { titlePrefix: "Get", fields: DEFAULT_FORM_FIELDS },
  },

  "workmen-insurance": {
    label: "Workmen Insurance",
    title: "Workmen Insurance",
    category: "General Insurance",
    slug: "workmen-insurance",
    href: "/products/workmen-insurance",
    icon: "user",
    quoteImage: "/image_21.png",
    shortDescription: "Employee injury and compensation related coverage.",
    overview: DEFAULT_OVERVIEW("Workmen Insurance"),
    form: { titlePrefix: "Get", fields: DEFAULT_FORM_FIELDS },
  },

  "term-life": {
    label: "Term Life",
    title: "Term Life Insurance",
    category: "Life Insurance",
    slug: "term-life",
    href: "/products/term-life",
    icon: "shield",
    quoteImage: "/image_6.png",
    shortDescription: "Affordable protection for your family’s future.",
    overview: DEFAULT_OVERVIEW("Term Life Insurance"),
    form: { titlePrefix: "Get", fields: DEFAULT_FORM_FIELDS },
  },

  "guaranteed-plan": {
    label: "Guaranteed Plan",
    title: "Guaranteed Plan",
    category: "Life Insurance",
    slug: "guaranteed-plan",
    href: "/products/guaranteed-plan",
    icon: "shield",
    quoteImage: "/image_7.png",
    shortDescription: "Plans with defined benefits and predictable payouts.",
    overview: DEFAULT_OVERVIEW("Guaranteed Plan"),
    form: { titlePrefix: "Get", fields: DEFAULT_FORM_FIELDS },
  },

  ulip: {
    label: "ULIP",
    title: "ULIP",
    category: "Life Insurance",
    slug: "ulip",
    href: "/products/ulip",
    icon: "briefcase",
    quoteImage: "/image_9.png",
    shortDescription: "Long-term goals with market-linked investment options.",
    overview: DEFAULT_OVERVIEW("ULIP"),
    form: { titlePrefix: "Get", fields: DEFAULT_FORM_FIELDS },
  },

  "ulip-term": {
    label: "ULIP Term",
    title: "ULIP Term",
    category: "Life Insurance",
    slug: "ulip-term",
    href: "/products/ulip-term",
    icon: "briefcase",
    quoteImage: "/image_9.png",
    shortDescription: "Term + ULIP options based on your goals.",
    overview: DEFAULT_OVERVIEW("ULIP Term"),
    form: { titlePrefix: "Get", fields: DEFAULT_FORM_FIELDS },
  },

  "employer-employee": {
    label: "Employer Employee",
    title: "Employer Employee",
    category: "Life Insurance",
    slug: "employer-employee",
    href: "/products/employer-employee",
    icon: "shield",
    quoteImage: "/image_90.png",
    shortDescription: "Structured plans for employer-employee benefit programs.",
    overview: DEFAULT_OVERVIEW("Employer Employee"),
    form: { titlePrefix: "Get", fields: DEFAULT_FORM_FIELDS },
  },
};

export function getProductDetails(slug: string): ProductDetails | null {
  return productDetailsBySlug[slug] ?? null;
}


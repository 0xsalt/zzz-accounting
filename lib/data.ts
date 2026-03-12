export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const FIRM = {
  name: "ZZZ Accounting",
  tagline: "Precision. Discretion. Results.",
  description:
    "We provide specialized accounting services for clients who require meticulous attention to detail and absolute confidentiality.",
  founded: "1997",
  // Easter egg: The Accountant character's methods
  philosophy:
    "Our methodology is unconventional. Where others see complexity, we see patterns. Where others see risk, we see structure waiting to be revealed. Every number tells a story. Our job is to ensure that story has the ending you need.",
  history:
    "Founded in 1997, ZZZ Accounting began as a boutique firm serving clients whose financial situations demanded more than standard accounting practice could offer. Over two decades, we have built a reputation on two pillars: precision that borders on obsessive, and discretion that is absolute. Our clients come to us not because they want an accountant. They come because they need someone who sees what others miss.",
  // Easter egg: Christian Wolff's address from the film
  address: {
    street: "327 Plainfield Avenue",
    city: "Plainfield",
    state: "IL",
    zip: "60544",
  },
  phone: "(312) 555-0173",
  email: "inquiries@zzzaccounting.com",
};

export type Firm = typeof FIRM;

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export const SERVICES: Service[] = [
  {
    title: "Forensic Accounting",
    description:
      "Meticulous examination of financial records to uncover discrepancies, trace fund flows, and reconstruct incomplete ledgers. We find what others overlook.",
    icon: "Search",
  },
  {
    title: "Tax Strategy",
    description:
      "Comprehensive tax planning that identifies every legitimate advantage available to you. We operate within the law. We simply know it better than most.",
    icon: "Calculator",
  },
  {
    title: "Asset Protection",
    description:
      "Structuring and safeguarding assets through legal frameworks that ensure your wealth remains yours. Complexity is not a barrier. It is a tool.",
    icon: "Shield",
  },
  {
    title: "Financial Consulting",
    description:
      "Strategic advisory for organizations navigating high-stakes financial decisions. We provide clarity where others see chaos.",
    icon: "TrendingUp",
  },
  {
    // Easter egg: "uncooking the books" is a nod to the film
    title: "Ledger Reconciliation",
    description:
      "When the numbers do not add up, we make them add up. Comprehensive reconciliation services for accounts that have been... mismanaged.",
    icon: "BookOpen",
  },
  {
    title: "Compliance & Reporting",
    description:
      "Ensuring your financial operations meet every regulatory requirement, across any jurisdiction. We handle the paperwork so you can focus on what matters.",
    icon: "FileCheck",
  },
];

export const FOOTER = {
  // Easter egg: reference to the nursery rhyme from the film
  tagline: "Solomon Grundy, born on a Monday.",
  copyright: "© 2026 ZZZ Accounting. All rights reserved.",
};

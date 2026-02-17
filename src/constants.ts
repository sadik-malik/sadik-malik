export type Project = {
  title: string;
  description: string;
  category: string;
  link?: string;
};

export const PROJECTS: Project[] = [
  {
    title: "Indian Financial Forum (IFF)",
    description:
      "Designed Figma and developed the public website using Next.js.",
    category: "Figma + Next.js",
    link: "https://weiff.org",
  },
  {
    title: "Valentis Cancer Hospital",
    description:
      "Designed Figma and developed the public website using Next.js.",
    category: "Figma + Next.js",
    link: "https://www.valentiscancerhospital.in/",
  },
  {
    title: "Indostar",
    description: "Steel manufacturing company website built on WordPress.",
    category: "Wordpress",
    link: "https://www.indostar.com/",
  },
  {
    title: "Ashish Builders & Developers",
    description: "Real estate company website built on React.",
    category: "React",
    link: "https://www.ashishbuilders.com/",
  },
  {
    title: "Prakash Seeds",
    description:
      "Agricultural seeds information platform developed using React.",
    category: "React",
    link: "https://seed.ashishbuilders.com/",
  },
  {
    title: "Arunachal University of Studies",
    description: "University website homepage built on PHP.",
    category: "PHP",
    link: "https://www.arunachaluniversity.ac.in/",
  },
  {
    title: "Vivek Narayan Sharma",
    description: "Personal website for a legal professional built on Next.js.",
    category: "Next.js",
    link: "https://www.viveknarayansharma.com/",
  },
  {
    title: "Anant Enterprises",
    description:
      "Electronics components manufacturer website built on WordPress.",
    category: "WordPress",
    link: "https://ae-magnetics.com/",
  },
  {
    title: "Birla Aircon",
    description:
      "Air conditioning solutions provider website built on Next.js.",
    category: "Next.js",
    link: "https://www.birlaaircon.com/",
  },
  {
    title: "Systeller",
    description:
      "Solar energy solutions provider website built with Wordpress.",
    category: "React",
    link: "https://www.systeller.com/",
  },
  {
    title: "Jodhamal Jewellers",
    description: "Jewellery brand website built on WordPress.",
    category: "WordPress",
    link: "https://www.jodhamaljewellers.com/",
  },
  {
    title: "Zarwana",
    description: "Jewellery brand website built on WordPress.",
    category: "Wordpress",
    link: "https://zarwana.com/",
  },
  {
    title: "Dr. Singh Test Tube Baby Centre",
    description: "IVF clinic website built on WordPress.",
    category: "WordPress",
    link: "https://drsingh.in/",
  },
  {
    title: "Laparoscopic Surgeons",
    description: "Medical professionals website built on WordPress.",
    category: "WordPress",
    link: "https://laparoscopist.com/",
  },
  {
    title: "Markerita",
    description: "Public website for Markerita's digital marketing services.",
    category: "WordPress",
    link: "https://www.markerita.in/",
  },
  {
    title: "Tezipay Website",
    description: "Public website for Tezipay services.",
    category: "PHP",
    link: "https://www.tezipay.com",
  },
  {
    title: "Tezipay Admin",
    description: "Designed Figma and build admin website for internal use.",
    category: "Figma + React",
    link: "https://admin.tezipay.com",
  },
  {
    title: "Tezipay Business",
    description: "Dashboard for business users.",
    category: "React",
    link: "https://business.tezipay.com/",
  },

  {
    title: "eSign Website",
    description: "User website for performing digital signatures.",
    category: "React",
    link: "https://app.tezisign.com/",
  },
  {
    title: "Knowledge Base",
    description: "Technical documentation hub for developers.",
    category: "React + Vue",
  },
  {
    title: "eSign Verification",
    description: "Public website to verify signed documents.",
    category: "React",
    link: "https://validator.tezisign.com/",
  },
  {
    title: "Indipaisa Payment Portal",
    description: "Secure payment gateway for handling transactions.",
    category: "React",
  },
  {
    title: "Indipaisa Business Portal",
    description: "Business user dashboard for financial management.",
    category: "React",
  },
  {
    title: "Investors Website",
    description: "Dedicated portal for investor relations.",
    category: "React",
    link: "https://investor.indipaisa.com/",
  },
  {
    title: "xSilver Website",
    description: "Public facing crypto buy and sell platform.",
    category: "React",
    link: "https://xsilver.com/",
  },
  {
    title: "xSilver P2P Transfer",
    description:
      "Web platform enabling secure peer-to-peer crypto transactions.",
    category: "React",
    link: "https://p2p.xsilver.com/",
  },
  {
    title: "Vietpay Website",
    description: "Corporate website showcasing services.",
    category: "No Framework",
    link: "https://www.vietpay.com/",
  },
  {
    title: "Vietpay Payment",
    description: "Payment gateway for customers and third parties.",
    category: "React",
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  location?: string;
};

export const EXPERIENCES: Experience[] = [
  {
    role: "Software Engineer",
    company: "Tezipay Tech Solutions Private Limited",
    period: "Sept 2023 — Present",
    location: "Sector 3, Noida",
  },
  {
    role: "Associate Software Engineer",
    company: "Indipaisa",
    period: "Sept 2022 — May 2023",
    location: "Section 142, Noida",
  },
  {
    role: "Customer Success",
    company: "Tech Mahindra Pvt. Ltd.",
    period: "Sept 2019 — Feb 2020",
    location: "Sector 63, Noida",
  },
];

export type OpenSourceContribution = {
  name: string;
  description: string;
  type: "contribution" | "library";
};

export const OPEN_SOURCE: OpenSourceContribution[] = [
  {
    name: "Tailwind CSS",
    description:
      "Fixed documentation for shadow utilities to ensure accurate usage guidelines.",
    type: "contribution",
  },
  {
    name: "@mui/material",
    description: "Added boxClasses for consistent styling of Box component.",
    type: "contribution",
  },
  {
    name: "react-hook-form-mui",
    description:
      "Added transform prop and resolved multiple issues related to library.",
    type: "contribution",
  },
  {
    name: "@piplup/rhf-core",
    description: "Additional utilities for react-hook-form",
    type: "library",
  },
  {
    name: "@piplup/rhf-adapters",
    description: "Adapter components for @mui/material and other UI libraries.",
    type: "library",
  },
  {
    name: "@piplup/react-acl",
    description: "Access control library for React apps.",
    type: "library",
  },
  {
    name: "@piplup/cache-buster",
    description: "Caching buster utility for client-side React applications.",
    type: "library",
  },
];

export type Skill = {
  name: string;
};

export const SKILLS: Skill[] = [
  { name: "React.js" },
  { name: "Next.js" },
  { name: "Node.js" },
  { name: "PHP" },
  { name: "WordPress" },
  { name: "Tailwind CSS" },
];

export const IS_AVAILABLE_FOR_PROJECTS: boolean = false;

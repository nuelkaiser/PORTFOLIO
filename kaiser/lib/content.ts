export const site = {
  name: "Majekodunmi Immanuel",
  role: "Software Engineer",
  location: "Lagos, Nigeria",
  tagline:
    "I design and ship precise product interfaces — marketplaces, admin systems, and growth platforms.",
  bio: "Software engineer based in Lagos. I shape brands through interaction: building Next.js products end-to-end, from consumer marketplaces and booking flows to academy platforms and internal ops tooling. Craft, systems, and performance in equal measure.",
  email: "majekodunmiimmanuel9@gmail.com",
  resume: "/Immanuel-resume.pdf",
  linkedin: "https://linkedin.com/in/nuelkaiser",
  github: "https://github.com/nuelkaiser",
} as const;

export type Project = {
  id: string;
  title: string;
  year: string;
  url: string;
  summary: string;
  image: string;
  accent: string;
};

export const projects: Project[] = [
  {
    id: "abode",
    title: "Abode",
    year: "2026",
    url: "https://www.abodeflex.ng/",
    summary:
      "Consumer and realtor product surfaces for accessible real estate ownership — typed REST migrations, GraphQL admin modules, and analytics instrumentation.",
    image: "/work/abode-live.jpg",
    accent: "#1a4d3e",
  },
  {
    id: "abode-academy",
    title: "Abode Academy",
    year: "2026",
    url: "https://abodeacademy.abodeflex.ng/",
    summary:
      "End-to-end webinar platform: multi-step registration, QR check-in, Meet access gating, certificate generation, and lifecycle email automation.",
    image: "/work/abode-academy-live.jpg",
    accent: "#2c1810",
  },
  {
    id: "ticks-otr",
    title: "TicksOTR",
    year: "2026",
    url: "https://ticksotr.com/",
    summary:
      "Online ticket marketplace for discovering events, creating listings, and buying or selling tickets with a trusted, safety-first experience.",
    image: "/work/ticks-otr-live.jpg",
    accent: "#1a1a2e",
  },
  {
    id: "city-spaces",
    title: "City Spaces",
    year: "2023",
    url: "https://cityspacesandbookings.com/",
    summary:
      "Stay marketplace with SSR search, Maps split views, Paystack checkout, and full booking lifecycle for guests, hosts, and operators.",
    image: "/work/city-spaces-live.jpg",
    accent: "#1e3a5f",
  },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
};

export const experience: Experience[] = [
  {
    company: "Abode",
    role: "Frontend Engineer",
    period: "Mar 2026 — Present",
    location: "Lagos",
  },
  {
    company: "City Spaces and Bookings",
    role: "Frontend Engineer",
    period: "Jan 2023 — Present",
    location: "Lagos",
  },
];

export const education = {
  school: "University of Lagos",
  degree: "BSc Computer Engineering",
  period: "2020 — 2027",
  location: "Lagos",
} as const;

export const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    detail: "Core services, pricing, and best practices; hands-on with S3 and EC2",
  },
] as const;

export const skills = {
  Languages: ["TypeScript", "JavaScript", "HTML", "CSS / Sass"],
  Frontend: ["React", "Next.js", "Tailwind CSS", "shadcn / Radix", "MUI", "Framer Motion"],
  "State & Data": [
    "Redux Toolkit",
    "React Query",
    "Zustand",
    "Apollo Client",
    "Axios",
    "Zod",
  ],
  "Backend-adjacent": [
    "REST & GraphQL",
    "Supabase",
    "Next.js API routes",
  ],
  "Quality & Ops": ["Git", "Jest", "Sentry", "PostHog", "Vercel", "AWS"],
} as const;

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

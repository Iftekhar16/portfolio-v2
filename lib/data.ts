export type Project = {
  slug: string;
  number: string;
  name: string;
  type: string;
  period: string;
  image: string;
  description: string;
  details: string;
  stack: string[];
  isArchived?: boolean;
  highlights: string[];
  accent: string;
  status?: string;
  url?: string;
};

export const projects: Project[] = [
  {
    slug: "exambinary",
    number: "01",
    name: "Exambinary",
    type: "Ed-tech platform",
    period: "November 2025 - June 2026",
    image: "/images/dummy.png",
    description:
      "An education platform for exam creation, automated grading, lesson planning, and classroom management.",
    details:
      "Developed core modules and tools for teachers to manage learning materials, exams, and recordings, alongside a dedicated parent portal for tracking student progress.",
    stack: ["Next.js", "Tailwind CSS", "TypeScript"],
    highlights: [
      "Built core modules like the library and exam creation modules",
      "Implemented student-teacher-parent relational features",
      "Developed lesson planning and classroom management tools",
    ],
    accent: "#c76c64",
    url: "https://exambinary.com/",
  },
  {
    slug: "pawslyf",
    number: "02",
    name: "Pawslyf",
    type: "Veterinary platform",
    period: "June 2026 - Present",
    image: "/images/dummy.png",
    description:
      "A comprehensive veterinary platform spanning web, mobile, and backend systems.",
    details:
      "Developing core modules including appointment booking, staff and role management, and service management. Collaborating with the team to architect and implement core workflows across the platform.",
    stack: ["Next.js", "React Native", "Express.js"],
    highlights: [
      "Designed the whole flow and architecture of the system",
      "Developed core modules like the booking, vet-branch-employee management systems and so on",
      "Collaborated across web, mobile, and backend systems",
    ],
    accent: "#d78378",
    status: "Currently in development · Live demo not yet available",
  },
  {
    slug: "playrpadel",
    number: "03",
    name: "PlayrPadel",
    type: "Management portal",
    period: "November 2025 - June 2026",
    image: "/images/dummy.png",
    description:
      "A management portal for court booking, calendar scheduling, and club operations.",
    details:
      "Developed court booking and calendar scheduling, club and court management, and employee access control while collaborating with backend and mobile teams to deliver a scalable solution.",
    stack: ["Next.js", "Tailwind CSS", "TypeScript"],
    highlights: [
      "Implemented a comprehensive court booking and calendar scheduling system",
      "Built club, court, and employee management systems",
      "Collaborated with backend and mobile teams on delivery",
    ],
    accent: "#ad514c",
    isArchived: true,
    status: "Project discontinued · No live demo available",
  },
  {
    slug: "cdmb",
    number: "04",
    name: "CDMB",
    type: "Institutional Website",
    period: "Personal project",
    image: "/images/dummy.png",
    description:
      "A custom web application commissioned by an academic institution in Mymensingh.",
    details:
      "Architected and delivered the system using Django, Tailwind, JavaScript, MySQL, Figma, and a template created by my team and me.",
    stack: ["Django", "JavaScript", "Tailwind", "MySQL", "Figma"],
    highlights: [
      "Architected and delivered a custom academic web application",
      "Built the system with Django, JavaScript, MySQL, and Tailwind",
      "Created the project template with my team",
    ],
    accent: "#e2a39b",
    isArchived: true,
    status: "Completed project · Website no longer online",
  },
];

projects.sort((a, b) => a.number.localeCompare(b.number));
export const stack = [
  ["Next.js", "nextdotjs"],
  ["React", "react"],
  ["TypeScript", "typescript"],
  ["Tailwind CSS", "tailwindcss"],
  ["Zod", "zod"],
  ["Axios", "axios"],
  ["TanStack Query", "reactquery"],
  ["Git", "git"],
  ["VS Code", "visualstudiocode"],
  ["shadcn/ui", "shadcnui"],
  ["Figma", "figma"],
  ["Framer Motion", "framer"],
];

export const skillGroups = [
  {
    name: "Core Stack",
    items: [
      ["Next.js", "nextdotjs"],
      ["React", "react"],
      ["TypeScript", "typescript"],
      ["React Native", "react-native"],
      ["Expo", "expo"],
    ],
  },
  {
    name: "Backend & Database",
    items: [
      ["Node.js", "nodedotjs"],
      ["Express.js", "express"],
      ["MongoDB", "mongodb"],
      // ["Mongoose", "mongoose"],
    ],
  },
  {
    name: "UI & Styling",
    items: [
      ["Tailwind CSS", "tailwindcss"],
      ["shadcn/ui", "shadcnui"],
    ],
  },
  {
    name: "Data & Forms",
    items: [
      ["TanStack Query", "reactquery"],
      ["Axios", "axios"],
      ["React Hook Form", "reacthookform"],
      ["Zod", "zod"],
    ],
  },
  {
    name: "Tools",
    items: [
      ["Git", "git"],
      ["VS Code", "visualstudiocode"],
      ["Figma", "figma"],
      ["Postman", "postman"],
      ["Android Studio", "androidstudio"],
    ],
  },
];

export const showcase = [
  {
    title: "Qublet",
    image: "/images/showcase/Qublet.png",
    href: "https://www.behance.net/gallery/198471605/Qublet",
    subtitle:
      "AI chatbot UI/UX concept focusing on fluid conversation flows and modern chat components",
  },
  {
    title: "Pharmagic",
    image: "/images/showcase/Pharmagic.jpg",
    href: "https://www.behance.net/gallery/187675127/Pharmagic",
    subtitle:
      "Pharmacy dashboard visual concept designed for clean data visualization and complex workflows",
  },
  {
    title: "Comfy",
    image: "/images/showcase/Comfy.png",
    href: "https://www.behance.net/gallery/192180917/Comfy",
    subtitle:
      "Furniture e-commerce app UI design exploring warm visual tones and seamless shopping interactions",
  },
  {
    title: "coalesce",
    image: "/images/showcase/coalesce.png",
    href: "https://www.behance.net/gallery/188754099/Coalesce",
    subtitle:
      "A sleek UI concept for an educational platform, blending bold visual hierarchy with engaging hero sections",
  },
  {
    title: "PageTurner",
    image: "/images/showcase/PageTurner.png",
    href: "https://www.behance.net/gallery/195091559/PageTurner",
    subtitle:
      "Book ordering mobile UI concept featuring clear visual hierarchy and effortless discovery flows",
  },
  {
    title: "note-nott",
    image: "/images/showcase/note-nott.png",
    href: "https://www.behance.net/gallery/188339203/note-nott",
    subtitle:
      "Minimalist note-taking interface study emphasizing clean typography and tactile visual accents",
  },
];

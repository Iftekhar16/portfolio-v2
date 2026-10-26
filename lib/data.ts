export type Project = {
  slug: string;
  number: string;
  name: string;
  type: string;
  image: string;
  description: string;
  details: string;
  stack: string[];
  accent: string;
};

export const projects: Project[] = [
  {
    slug: "pawslyf",
    number: "01",
    name: "Pawslyf",
    type: "Community / pet care",
    image: "/images/dummy.png",
    description:
      "A gentle, community-first space for people who care deeply about pets.",
    details:
      "Pawslyf brings pet care, connection, and everyday moments into one warm digital experience. The interface keeps discovery simple and gives the community room to feel human.",
    stack: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    accent: "#d78378",
  },
  {
    slug: "exambinary",
    number: "02",
    name: "Exambinary",
    type: "Learning platform",
    image: "/images/dummy.png",
    description:
      "An exam companion that makes preparation feel focused and calm.",
    details:
      "Exambinary turns a heavy study workflow into a clear sequence of small wins. Its product language is designed to keep learners moving without adding noise.",
    stack: ["Next.js", "React", "Zod", "TanStack Query"],
    accent: "#c76c64",
  },
  {
    slug: "playrpadel",
    number: "03",
    name: "PlayrPadel",
    type: "Sports / booking",
    image: "/images/dummy.png",
    description:
      "A lively way for players to discover courts and organize games.",
    details:
      "PlayrPadel makes the social side of the sport feel effortless: find a court, find your people, and get on with the game.",
    stack: ["React", "Axios", "Tailwind CSS", "Framer Motion"],
    accent: "#ad514c",
  },
  {
    slug: "cdmb",
    number: "04",
    name: "CDMB",
    type: "Digital product",
    image: "/images/dummy.png",
    description:
      "A crisp digital product built around useful, considered interactions.",
    details:
      "CDMB is a study in restraint: a confident visual system, thoughtful states, and the small details that make a product feel dependable.",
    stack: ["Next.js", "TypeScript", "Git", "Figma"],
    accent: "#e2a39b",
  },
];

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
    subtitle: "A playful interface system shaped around clarity and movement.",
  },
  {
    title: "Pharmagic",
    image: "/images/showcase/Pharmagic.jpg",
    href: "https://www.behance.net/gallery/187675127/Pharmagic",
    subtitle:
      "A friendly digital direction for making healthcare feel more approachable.",
  },
  {
    title: "Comfy",
    image: "/images/showcase/Comfy.png",
    href: "https://www.behance.net/gallery/192180917/Comfy",
    subtitle: "Soft visual language and calm interactions for everyday living.",
  },
  {
    title: "coalesce",
    image: "/images/showcase/coalesce.png",
    href: "https://www.behance.net/gallery/188754099/Coalesce",
    subtitle:
      "A visual study in bringing separate ideas into one coherent product.",
  },
  {
    title: "PageTurner",
    image: "/images/showcase/PageTurner.png",
    href: "https://www.behance.net/gallery/195091559/PageTurner",
    subtitle:
      "A reading experience designed to make discovery feel effortless.",
  },
  {
    title: "note-nott",
    image: "/images/showcase/note-nott.png",
    href: "https://www.behance.net/gallery/188339203/note-nott",
    subtitle: "A focused notes concept with a tactile, expressive edge.",
  },
];

export const themes = [
  {
    name: "Rose",
    bg: "#e7e5e3",
    ink: "#c45850",
    deep: "#a9443f",
    glow: "#e4c9c7",
  },
  {
    name: "Moss",
    bg: "#e4e7df",
    ink: "#70825d",
    deep: "#4b6240",
    glow: "#cdd8c2",
  },
  {
    name: "Cobalt",
    bg: "#e1e6ec",
    ink: "#526b9e",
    deep: "#354d7e",
    glow: "#c7d1e3",
  },
  {
    name: "Amber",
    bg: "#ebe6dc",
    ink: "#b97942",
    deep: "#85512e",
    glow: "#e2d0ae",
  },
  {
    name: "Plum",
    bg: "#e8e2e8",
    ink: "#906381",
    deep: "#67435f",
    glow: "#d8c3d3",
  },
];

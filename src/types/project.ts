export type ProjectImage = {
  src: string;
  alt: string;
  label: string;
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  category: string;
  year: string;
  shortDescription: string;
  description: string;
  role: string;
  team?: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  accent: "teal" | "gold" | "blue";
  images: ProjectImage[];
  problem: string;
  solution: string;
  contribution: string[];
  features: string[];
};

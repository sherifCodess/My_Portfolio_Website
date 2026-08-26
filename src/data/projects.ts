import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "applynow",
    slug: "applynow",
    title: "ApplyNow",
    category: "Application Platform",
    year: "2026",
    shortDescription:
      "A complete application-tracking experience that takes users from submission to status updates and final administrative verification.",
    description:
      "ApplyNow is a full frontend application flow for managing submissions, tracking application status and giving administrators a focused review workflow.",
    role: "Frontend Developer",
    technologies: ["React", "JavaScript", "Tailwind CSS", "React Router", "Context API", "Axios", "Vitest"],
    liveUrl: "https://apply-now-three.vercel.app",
    githubUrl: "https://github.com/sherifCodess/ApplyNow.git",
    featured: true,
    accent: "teal",
    images: [
      { src: "/images/projects/applynow-home.png", alt: "ApplyNow application interface", label: "Application flow" },
      { src: "/images/projects/applynow-admin.png", alt: "ApplyNow admin dashboard", label: "Admin dashboard" }
    ],
    problem:
      "Applicants need a clear journey from starting an application to understanding exactly where their submission stands, while administrators need a practical review workflow.",
    solution:
      "ApplyNow connects the application journey, status tracking and administrative review into one responsive interface with clear navigation and shared application state.",
    contribution: [
      "Designed and implemented the frontend application experience.",
      "Built the multi-step application flow and validation.",
      "Implemented applicant and administrative dashboard interfaces.",
      "Integrated frontend API requests with Axios and JSON Server during development.",
      "Implemented routing and reusable components.",
      "Added frontend tests for important validation and application behavior."
    ],
    features: [
      "Application submission",
      "Multi-step workflow",
      "Application status tracking",
      "Applicant dashboard",
      "Admin dashboard",
      "Application verification",
      "Form validation"
    ]
  },
  {
    id: "safenest",
    slug: "safenest",
    title: "SafeNest",
    category: "Personal Finance",
    year: "2026",
    shortDescription:
      "A collaborative finance product helping Nigerians plan everyday expenses, bills and savings goals for future needs.",
    description:
      "SafeNest helps users plan and manage everyday expenses and bills while setting savings goals. The product was developed by a three-developer team, with my work focused heavily on the user-facing experience.",
    role: "Frontend Developer",
    team: "3 developers",
    technologies: ["Next.js", "TypeScript", "API Integration", "Reusable Components", "Figma"],
    liveUrl: "https://safenest-mu.vercel.app",
    githubUrl: "https://github.com/Eyinadepeter/Safenest.git",
    featured: true,
    accent: "gold",
    images: [
      { src: "/images/projects/safenest-home.png", alt: "SafeNest landing page", label: "Landing page" },
      { src: "/images/projects/safenest-settings.png", alt: "SafeNest settings page", label: "Settings" }
    ],
    problem:
      "Users need a simple way to turn a future financial goal into a practical contribution plan while also managing everyday expenses and bills.",
    solution:
      "SafeNest lets users define a goal, target amount and deadline, choose weekly or monthly contributions and receive a proposed plan.",
    contribution: [
      "Built the entire landing-page experience from the supplied Figma design.",
      "Implemented the Calculate My Plan feature and its user input flow.",
      "Worked on API integration and application navigation.",
      "Built reusable frontend components.",
      "Built the entire Settings page experience.",
      "Collaborated with the other developers in the three-person team."
    ],
    features: [
      "Goal planning",
      "Expense and bill management",
      "Savings planning",
      "Calculate My Plan",
      "Weekly or monthly contributions",
      "Proposed savings plan",
      "Settings management"
    ]
  },
  {
    id: "course-catalog",
    slug: "course-catalog",
    title: "Course Catalog",
    category: "Learning Platform",
    year: "2026",
    shortDescription:
      "A course discovery platform that helps learners choose resources based on their current level and learn at their own pace.",
    description:
      "Course Catalog organizes courses across different levels so learners can quickly find resources that match where they are in their learning journey.",
    role: "Frontend Developer",
    technologies: ["React", "JavaScript", "Vite"],
    liveUrl: "https://course-catalog-rust.vercel.app",
    githubUrl: "https://github.com/sherifCodess/course-catalog.git",
    featured: true,
    accent: "blue",
    images: [
      { src: "/images/projects/course-home.png", alt: "Course Catalog home page", label: "Course discovery" },
      { src: "/images/projects/course-beginner.png", alt: "Course Catalog beginner courses", label: "Level-based browsing" }
    ],
    problem:
      "Learners can struggle to decide what to learn next when educational resources are not organized around their current skill level.",
    solution:
      "Course Catalog presents courses by level, giving learners a focused way to discover appropriate resources and learn at their own pace.",
    contribution: [
      "Built the frontend application.",
      "Created the course discovery experience.",
      "Implemented level-based organization.",
      "Built reusable responsive interface components."
    ],
    features: [
      "Course discovery",
      "Level-based organization",
      "Course browsing",
      "Responsive interface",
      "Self-paced learning"
    ]
  }
];

export const featuredProjects = projects.filter((project) => project.featured);

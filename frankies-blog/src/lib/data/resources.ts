// This file will contain the resources data.

// Interfaces for Tools
export interface Tool {
  name: string;
  description: string;
  category: string; // e.g., "Editor", "Design"
  link: string;
  rating: number;
  free: boolean;
  note?: string;
}

export interface ToolCategory {
  id: string;
  name: string;
  iconName?: string; // Name of the icon, e.g., "CodeIcon"
  description: string;
  tools: Tool[];
}

// Interfaces for Guides
export interface Guide {
  title: string;
  description: string;
  type: string; // e.g., "Technical Guide", "Checklist"
  readTime: string;
  downloadUrl: string;
  topics: string[];
  featured: boolean;
}

// Interfaces for Code Templates
export interface CodeTemplate {
  name: string;
  description: string;
  tech: string[];
  githubUrl: string;
  demoUrl?: string;
  stars: number;
  downloads: string;
  featured: boolean;
}

// Interfaces for Learning Resources
export interface LearningResourceCollection {
  title: string;
  description: string;
  type: string; // "Book List", "Video Content", "Newsletters"
  items: string[];
}

// Data
export const toolCategoriesData: ToolCategory[] = [
  {
    id: "development",
    name: "Development Tools",
    iconName: "CodeIcon", // Storing name instead of JSX
    description: "Essential tools for modern web development",
    tools: [
      {
        name: "Visual Studio Code",
        description: "My go-to code editor with these essential extensions",
        category: "Editor",
        link: "https://code.visualstudio.com/",
        rating: 5,
        free: true,
        note: "Must-have extensions: Prettier, ESLint, GitLens, Thunder Client"
      },
      {
        name: "Figma",
        description: "For UI/UX design and prototyping",
        category: "Design",
        link: "https://figma.com",
        rating: 5,
        free: true,
        note: "Great for developer-designer collaboration"
      },
      {
        name: "Postman",
        description: "API development and testing",
        category: "API Testing",
        link: "https://postman.com",
        rating: 4,
        free: true,
        note: "Perfect for API documentation and testing"
      },
      {
        name: "Docker",
        description: "Containerization for consistent development environments",
        category: "DevOps",
        link: "https://docker.com",
        rating: 5,
        free: true,
        note: "Essential for modern deployment workflows"
      }
    ]
  },
  {
    id: "productivity",
    name: "Productivity & Organization",
    iconName: "ToolIcon", // Storing name instead of JSX
    description: "Tools that help me stay organized and efficient",
    tools: [
      {
        name: "Notion",
        description: "All-in-one workspace for notes, docs, and project management",
        category: "Organization",
        link: "https://notion.so",
        rating: 5,
        free: true,
        note: "My second brain for everything"
      },
      {
        name: "Linear",
        description: "Issue tracking and project management for dev teams",
        category: "Project Management",
        link: "https://linear.app",
        rating: 5,
        free: false,
        note: "Best issue tracker I've used"
      },
      {
        name: "Loom",
        description: "Screen recording for async communication",
        category: "Communication",
        link: "https://loom.com",
        rating: 4,
        free: true,
        note: "Great for code reviews and demos"
      },
      {
        name: "RescueTime",
        description: "Automatic time tracking and productivity insights",
        category: "Time Management",
        link: "https://rescuetime.com",
        rating: 4,
        free: false,
        note: "Eye-opening productivity data"
      }
    ]
  }
];

export const guidesData: Guide[] = [
  {
    title: "Complete React Performance Guide",
    description: "A comprehensive guide to optimizing React applications for scale",
    type: "Technical Guide",
    readTime: "25 min read",
    downloadUrl: "/guides/react-performance.pdf",
    topics: ["React", "Performance", "Optimization", "Best Practices"],
    featured: true
  },
  {
    title: "API Design Checklist",
    description: "30-point checklist for designing developer-friendly APIs",
    type: "Checklist",
    readTime: "5 min read",
    downloadUrl: "/guides/api-design-checklist.pdf",
    topics: ["API", "Backend", "REST", "Design"],
    featured: false
  },
  {
    title: "Remote Team Leadership Playbook",
    description: "Strategies and frameworks for leading distributed development teams",
    type: "Playbook",
    readTime: "20 min read",
    downloadUrl: "/guides/remote-leadership.pdf",
    topics: ["Leadership", "Remote Work", "Team Management"],
    featured: true
  },
  {
    title: "Modern CSS Layout Techniques",
    description: "From Grid to Flexbox to Container Queries - master them all",
    type: "Tutorial",
    readTime: "15 min read",
    downloadUrl: "/guides/css-layouts.pdf",
    topics: ["CSS", "Layout", "Frontend", "Modern Web"],
    featured: false
  }
];

export const codeTemplatesData: CodeTemplate[] = [
  {
    name: "Next.js SaaS Starter",
    description: "Production-ready Next.js template with authentication, payments, and dashboard",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
    githubUrl: "https://github.com/franciscorojas/nextjs-saas-starter",
    demoUrl: "https://saas-demo.franciscorojas.dev",
    stars: 847,
    downloads: "12k+",
    featured: true
  },
  {
    name: "React Component Library",
    description: "Reusable component library built with TypeScript and Storybook",
    tech: ["React", "TypeScript", "Storybook", "Jest"],
    githubUrl: "https://github.com/franciscorojas/react-components",
    demoUrl: "https://components.franciscorojas.dev",
    stars: 234,
    downloads: "3.2k+",
    featured: false
  },
  {
    name: "Express API Boilerplate",
    description: "Scalable Express.js API with authentication, validation, and testing",
    tech: ["Express.js", "MongoDB", "JWT", "Jest"],
    githubUrl: "https://github.com/franciscorojas/express-api-boilerplate",
    demoUrl: "",
    stars: 156,
    downloads: "1.8k+",
    featured: false
  }
];

export const learningResourcesData: LearningResourceCollection[] = [
  {
    title: "My Developer Reading List",
    description: "Books that shaped my understanding of software engineering",
    type: "Book List",
    items: [
      "Clean Code by Robert Martin",
      "System Design Interview by Alex Xu",
      "The Pragmatic Programmer by David Thomas",
      "Building Microservices by Sam Newman"
    ]
  },
  {
    title: "Favorite YouTube Channels",
    description: "Channels I follow to stay updated with tech trends",
    type: "Video Content",
    items: [
      "Theo - t3.gg",
      "Web Dev Simplified",
      "Fireship",
      "The Primeagen"
    ]
  },
  {
    title: "Newsletter Subscriptions",
    description: "Weekly reads that keep me informed",
    type: "Newsletters",
    items: [
      "JavaScript Weekly",
      "React Status",
      "Node Weekly",
      "Frontend Focus"
    ]
  }
];

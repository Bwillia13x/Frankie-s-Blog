export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  image: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform built with Next.js, TypeScript, and Prisma. Features include user authentication, product management, shopping cart, and payment integration.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Stripe'],
    github: 'https://github.com/username/ecommerce-platform',
    demo: 'https://ecommerce-demo.vercel.app',
    image: '/images/projects/ecommerce.jpg',
    featured: true,
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    tech: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/username/task-manager',
    demo: 'https://task-manager-demo.vercel.app',
    image: '/images/projects/task-manager.jpg',
    featured: true,
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A responsive weather dashboard with location-based forecasts, interactive maps, and customizable widgets.',
    tech: ['Vue.js', 'Chart.js', 'OpenWeather API', 'SCSS'],
    github: 'https://github.com/username/weather-dashboard',
    demo: 'https://weather-dashboard-demo.vercel.app',
    image: '/images/projects/weather.jpg',
    featured: false,
  },
  {
    id: 4,
    title: 'Blog CMS',
    description: 'A headless CMS for blogs with markdown support, image optimization, and SEO features built with Next.js.',
    tech: ['Next.js', 'MDX', 'Tailwind CSS', 'Vercel'],
    github: 'https://github.com/username/blog-cms',
    demo: 'https://blog-cms-demo.vercel.app',
    image: '/images/projects/blog-cms.jpg',
    featured: false,
  },
];

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};

export const getOtherProjects = (): Project[] => {
  return projects.filter(project => !project.featured);
};

export const getProjectById = (id: number): Project | undefined => {
  return projects.find(project => project.id === id);
}; 
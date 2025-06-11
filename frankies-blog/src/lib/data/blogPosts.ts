// This file will contain the blog post data.
import type { BlogPost } from '../../types'; // Adjusted path

export const blogPosts: BlogPost[] = [
  {
    slug: "1",
    title: "Building Scalable React Applications: Lessons from TaskFlow Pro",
    // description field removed as it's not in the new central BlogPost type
    excerpt: "When TaskFlow Pro started experiencing performance issues at 50,000 users, I knew it was time for a complete architecture overhaul. Here's how I transformed a monolithic React app into a scalable, performant system...",
    category: "Case Study",
    publishedAt: "2025-01-10", // Renamed from 'date'
    readTime: "8 min read",
    featured: true,
    tags: ["React", "Performance", "Architecture", "Scaling"],
    image: "/blog/taskflow-architecture.jpg",
    views: 2847,
    comments: 34,
    likes: 156,
    content: "", // Added content field as required by interface, leave empty for now
    // author: undefined, // Optional, can be omitted
  },
  {
    slug: "2",
    title: "The Art of API Design: Creating Developer-Friendly Interfaces",
    excerpt: "Great API design is like great UX design - it should be intuitive, consistent, and delightful to use. After designing APIs for multiple startups, here are the principles I swear by...",
    category: "Tutorial",
    publishedAt: "2025-01-05", // Renamed from 'date'
    readTime: "6 min read",
    featured: false,
    tags: ["API", "Backend", "Best Practices", "Developer Experience"],
    image: "/blog/api-design.jpg",
    views: 1923,
    comments: 28,
    likes: 89,
    content: "",
  },
  {
    slug: "3",
    title: "From Startup to Scale: My Journey Building E-Commerce Platforms",
    excerpt: "Three years ago, I joined a startup with big dreams but a shaky technical foundation. Today, that platform processes over $2M in monthly transactions. Here's the complete story...",
    category: "Story",
    publishedAt: "2024-12-28", // Renamed from 'date'
    readTime: "12 min read",
    featured: true,
    tags: ["E-commerce", "Startups", "Career", "Leadership"],
    image: "/blog/startup-journey.jpg",
    views: 4156,
    comments: 67,
    likes: 234,
    content: "",
  },
  {
    slug: "4",
    title: "Modern CSS Techniques: Beyond Bootstrap and Tailwind",
    excerpt: "While frameworks like Tailwind have revolutionized how we write CSS, there's a whole world of native CSS features that can make your code cleaner and more maintainable...",
    category: "Technical",
    publishedAt: "2024-12-20", // Renamed from 'date'
    readTime: "10 min read",
    featured: false,
    tags: ["CSS", "Frontend", "Modern Web", "UI/UX"],
    image: "/blog/modern-css.jpg",
    views: 3289,
    comments: 45,
    likes: 178,
    content: "",
  },
  {
    slug: "5",
    title: "Remote Work Success: Building Culture in Distributed Teams",
    excerpt: "Leading a remote team of 12 developers across 6 time zones taught me that culture isn't built in an office - it's built through intentional practices and authentic connections...",
    category: "Leadership",
    publishedAt: "2024-12-15", // Renamed from 'date'
    readTime: "7 min read",
    featured: false,
    tags: ["Remote Work", "Team Management", "Culture", "Productivity"],
    image: "/blog/remote-team.jpg",
    views: 2156,
    comments: 38,
    likes: 97,
    content: "",
  },
  {
    slug: "6",
    title: "The Future of Web Development: AI, WebAssembly, and Edge Computing",
    excerpt: "As AI tools become more sophisticated and edge computing goes mainstream, the landscape of web development is shifting dramatically. Here's what I think comes next...",
    category: "Insights",
    publishedAt: "2024-12-10", // Renamed from 'date'
    readTime: "9 min read",
    featured: false,
    tags: ["AI", "WebAssembly", "Edge Computing", "Future Tech"],
    image: "/blog/future-web.jpg",
    views: 1876,
    comments: 23,
    likes: 112,
    content: "",
  }
];

// The 'categories' and 'popularTags' arrays and their types will remain local to this file for now.
// If they need to be shared or have more complex types, they could be moved to 'types/index.ts'.
export interface BlogCategory {
  name: string;
  count: number;
}
export const categories: BlogCategory[] = [
  { name: "All", count: 6 },
  { name: "Case Study", count: 1 },
  { name: "Tutorial", count: 1 },
  { name: "Story", count: 1 },
  { name: "Technical", count: 1 },
  { name: "Leadership", count: 1 },
  { name: "Insights", count: 1 }
];

export const popularTags: string[] = [
  "React", "API", "Performance", "Architecture", "Leadership", "Remote Work",
  "E-commerce", "CSS", "JavaScript", "Career", "Startups", "Best Practices"
];

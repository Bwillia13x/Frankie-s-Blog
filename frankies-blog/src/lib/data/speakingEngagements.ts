// This file will contain the speaking engagement data.
import type { SpeakingEngagement } from '../../types'; // Adjusted path

export const speakingEngagements: SpeakingEngagement[] = [
  // Upcoming Talks
  {
    title: "Building Scalable React Applications at Enterprise Scale",
    event: "ReactConf 2025",
    date: "March 15, 2025",
    location: "San Francisco, CA",
    type: "Conference",
    attendees: "2,000+",
    description: "A deep dive into the architecture patterns and performance optimizations that help React applications serve millions of users.",
    topics: ["React", "Performance", "Architecture", "Scaling"],
    status: "confirmed"
  },
  {
    title: "The Future of Full-Stack Development",
    event: "TechTalk SF Meetup",
    date: "February 20, 2025",
    location: "San Francisco, CA",
    type: "Meetup",
    attendees: "150",
    description: "Exploring emerging trends in full-stack development and how AI is changing the way we build applications.",
    topics: ["Full-Stack", "AI", "Trends", "Future Tech"],
    status: "confirmed"
  },
  // Past Talks
  {
    title: "Microservices Architecture: Lessons from the Trenches",
    event: "DevOps World 2024",
    date: "September 12, 2024",
    location: "Las Vegas, NV",
    type: "Conference",
    attendees: "3,500+",
    description: "Real-world experiences building and scaling microservices, including common pitfalls and best practices.",
    topics: ["Microservices", "DevOps", "Architecture", "Best Practices"],
    videoUrl: "https://youtube.com/watch?v=example1",
    slidesUrl: "https://slides.com/francisco/microservices-lessons",
    rating: 4.8,
    feedback: "Excellent practical insights with real-world examples that teams can implement immediately.",
    status: "past"
  },
  {
    title: "Modern API Design Patterns",
    event: "API World 2024",
    date: "June 8, 2024",
    location: "San Jose, CA",
    type: "Conference",
    attendees: "1,800+",
    description: "Best practices for designing APIs that developers love, including REST, GraphQL, and emerging patterns.",
    topics: ["API Design", "REST", "GraphQL", "Developer Experience"],
    videoUrl: "https://youtube.com/watch?v=example2",
    slidesUrl: "https://slides.com/francisco/api-design-patterns",
    rating: 4.9,
    feedback: "One of the most practical API talks I've ever attended. Clear examples and actionable advice.",
    status: "past"
  },
  {
    title: "Remote Team Leadership in Tech",
    event: "Remote Work Summit 2024",
    date: "April 15, 2024",
    location: "Virtual Event",
    type: "Summit",
    attendees: "500+",
    description: "Strategies for building and leading high-performing remote development teams.",
    topics: ["Remote Work", "Leadership", "Team Management", "Culture"],
    videoUrl: "https://youtube.com/watch?v=example3",
    slidesUrl: "https://slides.com/francisco/remote-leadership",
    rating: 4.7,
    feedback: "Francisco's insights on remote team dynamics were incredibly valuable for our distributed team.",
    status: "past"
  },
  {
    title: "Building Your First SaaS: A Technical Deep Dive",
    event: "Indie Hackers Meetup",
    date: "January 10, 2024",
    location: "San Francisco, CA",
    type: "Meetup",
    attendees: "80",
    description: "Technical considerations for indie developers building their first software-as-a-service product.",
    topics: ["SaaS", "Indie Development", "Architecture", "Startups"],
    slidesUrl: "https://slides.com/francisco/building-first-saas",
    rating: 4.6,
    feedback: "Great mix of technical depth and practical business advice. Perfect for aspiring indie developers.",
    status: "past"
  }
];

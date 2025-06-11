// Centralized type definitions for the Frankie's Blog project

export interface BlogPost {
  slug: string; // Unique identifier for URL and keys
  title: string;
  excerpt: string; // Short summary of the post
  content: string; // Full content of the post (Markdown or HTML)
  publishedAt: string; // ISO date string
  readTime: string; // e.g., "5 min read"
  tags: string[];
  category: string;
  views: number;
  likes: number;
  comments: number;
  featured: boolean;
  image?: string; // Optional: Path to a cover image for the post
  author?: string; // Optional: Author's name or ID
}

export interface SpeakingEngagement {
  title: string; // Title of the talk
  event: string; // Name of the event (e.g., ReactConf 2025)
  date: string; // Date of the engagement (e.g., "March 15, 2025")
  location: string; // e.g., "San Francisco, CA" or "Virtual"
  type: 'Conference' | 'Meetup' | 'Workshop' | 'Summit' | 'Virtual Event' | string; // Allow specific known types + general string
  description?: string; // Detailed description of the talk or event
  url?: string; // Link to the event page or more info
  slidesUrl?: string; // Link to slides
  videoUrl?: string; // Link to video recording
  attendees?: string; // e.g., "2,000+" or "150"
  topics?: string[]; // Keywords for the talk
  status?: "upcoming" | "past" | "confirmed" | "pending"; // Status of the talk
  rating?: number; // e.g. 4.8 (typically for past talks)
  feedback?: string; // Attendee feedback (typically for past talks)
}

// Add other shared types here as the project grows, for example:
// export interface Resource { ... }
// export interface CommunityLink { ... }
// export interface SetupItem { ... }

// Exporting all defined types
// (Currently BlogPost and SpeakingEngagement are the primary focus)

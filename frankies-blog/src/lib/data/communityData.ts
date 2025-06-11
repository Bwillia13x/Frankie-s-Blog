// This file will contain the community page data.

// Interface for Community Stats
export interface CommunityStat {
  label: string;
  value: string;
  iconName: string; // e.g., "UsersIcon"
}

// Interface for Discussion Topics
export interface DiscussionTopic {
  title: string; // Includes emoji
  description: string;
  memberCount: number;
  latestPost: string;
  pinned: boolean;
}

// Interface for Recent Discussions
export interface RecentDiscussion {
  title: string;
  author: string;
  avatar: string; // Initials
  timeAgo: string;
  category: string;
  replies: number;
  likes: number;
  preview: string;
}

// Interface for Upcoming Events
export interface CommunityEvent {
  title: string;
  date: string;
  time: string;
  type: string; // "Social", "Learning", "Career"
  attendees: number;
  description: string;
}

// Interface for Success Stories
export interface SuccessStory {
  name: string;
  achievement: string;
  company: string;
  story: string;
  timeframe: string;
}

// Data
export const communityStatsData: CommunityStat[] = [
  { label: "Active Members", value: "1,247", iconName: "UsersIcon" },
  { label: "Daily Messages", value: "127", iconName: "MessageCircleIcon" },
  { label: "Code Reviews", value: "89", iconName: "BookOpenIcon" },
  { label: "Success Stories", value: "156", iconName: "TrophyIcon" }
];

export const discussionTopicsData: DiscussionTopic[] = [
  {
    title: "🚀 Show Your Work",
    description: "Share your latest projects, get feedback, and celebrate wins",
    memberCount: 342,
    latestPost: "2 hours ago",
    pinned: true
  },
  {
    title: "💼 Career Discussions",
    description: "Salary negotiations, interviews, career transitions, and growth",
    memberCount: 567,
    latestPost: "1 hour ago",
    pinned: false
  },
  {
    title: "🔧 Code Review Corner",
    description: "Get your code reviewed by experienced developers",
    memberCount: 289,
    latestPost: "30 minutes ago",
    pinned: false
  },
  {
    title: "📚 Learning Resources",
    description: "Share and discover the best books, courses, and tutorials",
    memberCount: 445,
    latestPost: "3 hours ago",
    pinned: false
  },
  {
    title: "🤝 Collaboration Hub",
    description: "Find project partners, mentors, and team members",
    memberCount: 234,
    latestPost: "4 hours ago",
    pinned: false
  }
];

export const recentDiscussionsData: RecentDiscussion[] = [
  {
    title: "How I Got My First Senior Engineer Role",
    author: "Sarah Chen",
    avatar: "SC",
    timeAgo: "2 hours ago",
    category: "Career",
    replies: 23,
    likes: 67,
    preview: "After 3 years as a mid-level developer, I finally made the jump to senior. Here's what I learned about the interview process and salary negotiation..."
  },
  {
    title: "React 19 Features I'm Most Excited About",
    author: "Alex Kim",
    avatar: "AK",
    timeAgo: "4 hours ago",
    category: "Technical",
    replies: 15,
    likes: 42,
    preview: "The React team has been working on some incredible improvements. Let's discuss the new features and how they'll change how we build apps..."
  },
  {
    title: "My Side Project Just Hit $1K MRR!",
    author: "Marcus Rodriguez",
    avatar: "MR",
    timeAgo: "6 hours ago",
    category: "Success Story",
    replies: 31,
    likes: 89,
    preview: "After 8 months of building nights and weekends, my SaaS tool finally crossed $1,000 in monthly recurring revenue. Here's the complete journey..."
  },
  {
    title: "Best Practices for API Error Handling",
    author: "Priya Patel",
    avatar: "PP",
    timeAgo: "1 day ago",
    category: "Technical",
    replies: 18,
    likes: 34,
    preview: "I've been thinking about standardizing error responses across our microservices. What patterns do you use for consistent error handling?"
  }
];

export const upcomingEventsData: CommunityEvent[] = [
  {
    title: "Virtual Coffee Chat",
    date: "Jan 15, 2025",
    time: "9:00 AM PST",
    type: "Social",
    attendees: 23,
    description: "Casual conversation with fellow developers over coffee"
  },
  {
    title: "Code Review Session",
    date: "Jan 17, 2025",
    time: "6:00 PM PST",
    type: "Learning",
    attendees: 15,
    description: "Live code review of community member projects"
  },
  {
    title: "Career AMA with Tech Lead",
    date: "Jan 20, 2025",
    time: "7:00 PM PST",
    type: "Career",
    attendees: 67,
    description: "Ask anything about growing from senior to staff engineer"
  }
];

export const successStoriesData: SuccessStory[] = [
  {
    name: "Jennifer Liu",
    achievement: "Got promoted to Tech Lead",
    company: "Spotify",
    story: "The community helped me prepare for my promotion interview with mock sessions and feedback on my technical presentation.",
    timeframe: "3 months ago"
  },
  {
    name: "David Thompson",
    achievement: "Landed dream job at startup",
    company: "Vercel",
    story: "Found this opportunity through a community member who referred me. The interview prep resources here were incredible.",
    timeframe: "1 month ago"
  },
  {
    name: "Lisa Wang",
    achievement: "Launched successful side project",
    company: "Independent",
    story: "Built my SaaS with help from community code reviews and feedback. Now at $3K MRR and growing!",
    timeframe: "6 months ago"
  }
];

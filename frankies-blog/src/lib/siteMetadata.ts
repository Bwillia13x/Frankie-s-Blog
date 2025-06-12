export const siteMetadata = {
  title: "Frankie's Blog",
  description: "A modern blog about web development, React, Next.js, and programming insights",
  author: "Frankie",
  siteUrl: "https://frankies-blog.vercel.app", // Replace with your actual domain
  language: "en-us",
  locale: "en_US",
  socialBanner: "/images/og-default.png", // For backward compatibility
  twitterHandle: "@frankiesblog", // For backward compatibility
  
  social: {
    twitter: "@frankiesblog", // Replace with actual handle
    github: "frankiesblog", // Replace with actual username
    linkedin: "frankiesblog", // Replace with actual username
    email: "hello@frankiesblog.com" // Replace with actual email
  },

  // Navigation for backward compatibility
  nav: [
    { title: 'About', href: '/' },
    { title: 'Projects', href: '/projects' },
    { title: 'Blog', href: '/blog' },
    { title: 'Resources', href: '/resources' },
    { title: 'Speaking', href: '/speaking' },
    { title: 'Uses', href: '/uses' },
    { title: 'Community', href: '/community' },
    { title: 'Newsletter', href: '/newsletter' },
    { title: 'Contact', href: '/contact' },
  ],

  // SEO defaults
  defaultOgImage: "/images/og-default.png",
  favicon: "/favicon.ico",
  
  // Analytics
  googleAnalyticsId: "", // Add your GA ID
  googleSiteVerification: "", // Add your GSC verification
  
  // RSS
  rss: {
    title: "Frankie's Blog RSS Feed",
    description: "Latest articles about web development and programming"
  },

  // Theme
  defaultTheme: "dark",
  
  // Blog settings
  postsPerPage: 10,
  maxRecentPosts: 5
};

export type SiteMetadata = typeof siteMetadata;

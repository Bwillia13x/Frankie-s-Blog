export const siteMetadata = {
  title: "Francisco Rojas",
  author: 'Francisco Rojas',
  description: 'A passionate writer and tech enthusiast exploring the latest trends, sharing insights, and discussing exciting developments in the world of technology.',
  nav: [
    { title: 'About', href: '/about' },
    { title: 'Blog', href: '/' },
    { title: 'Projects', href: '/projects' },
    { title: 'Contact', href: '/contact' },
  ],
  social: {
    twitter: 'https://twitter.com/frankie_rojas',
    github: 'https://github.com/frankie-rojas',
    linkedin: 'https://linkedin.com/in/francisco-rojas',
  },
} as const;

export type SiteMetadata = typeof siteMetadata;

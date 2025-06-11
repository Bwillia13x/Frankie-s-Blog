export const siteMetadata = {
  title: "Francisco Rojas",
  author: 'Francisco Rojas',
  description: 'A passionate software engineer with expertise in full-stack development, cloud technologies, and building scalable applications that solve real-world problems.',
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
  social: {
    twitter: 'https://twitter.com/frankie_rojas',
    github: 'https://github.com/frankie-rojas',
    linkedin: 'https://linkedin.com/in/francisco-rojas',
  },
} as const;

export type SiteMetadata = typeof siteMetadata;

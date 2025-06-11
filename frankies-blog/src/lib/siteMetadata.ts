export const siteMetadata = {
  title: "Frankie's Blog",
  author: 'Frankie',
  description: 'A personal blog built with Next.js',
  nav: [
    { title: 'Home', href: '/' },
    { title: 'Blog', href: '/blog' },
    { title: 'About', href: '/about' },
  ],
  social: {
    twitter: 'https://twitter.com/frankie',
    github: 'https://github.com/frankie',
    linkedin: 'https://linkedin.com/in/frankie',
  },
} as const;

export type SiteMetadata = typeof siteMetadata;

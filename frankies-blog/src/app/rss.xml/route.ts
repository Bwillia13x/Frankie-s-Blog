import { siteMetadata } from '@/lib/siteMetadata'

const posts = [
  {
    title: "Building Scalable React Applications: Lessons from Production",
    slug: "building-scalable-react-applications",
    excerpt: "Key insights and patterns I've learned from building React applications that serve millions of users.",
    publishedAt: "2024-12-15T10:00:00.000Z",
    category: "Frontend Development"
  },
  {
    title: "API Design Best Practices: Creating APIs Developers Love",
    slug: "api-design-best-practices",
    excerpt: "A comprehensive guide to designing REST APIs that are intuitive, maintainable, and scalable.",
    publishedAt: "2024-11-28T10:00:00.000Z",
    category: "Backend Development"
  },
  {
    title: "Microservices Architecture: When and How to Use It",
    slug: "microservices-architecture",
    excerpt: "Understanding when microservices make sense and how to implement them effectively.",
    publishedAt: "2024-12-01T10:00:00.000Z",
    category: "Architecture"
  },
  {
    title: "Modern Frontend Testing Strategies",
    slug: "frontend-testing-strategies",
    excerpt: "A comprehensive guide to testing React applications in 2024.",
    publishedAt: "2024-11-15T10:00:00.000Z",
    category: "Testing"
  },
  {
    title: "Database Design for Scalable Applications",
    slug: "database-design-patterns",
    excerpt: "Patterns and practices for designing databases that scale with your application.",
    publishedAt: "2024-10-20T10:00:00.000Z",
    category: "Database"
  }
]

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://francisco-rojas.dev'
  
  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${siteMetadata.title} - Blog</title>
    <description>${siteMetadata.description}</description>
    <link>${baseUrl}</link>
    <language>en-us</language>
    <managingEditor>${siteMetadata.author}</managingEditor>
    <webMaster>${siteMetadata.author}</webMaster>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    ${posts
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
      .map(
        (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.excerpt}]]></description>
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${baseUrl}/blog/${post.slug}</guid>
      <category><![CDATA[${post.category}]]></category>
    </item>`
      )
      .join('')}
  </channel>
</rss>`

  return new Response(rssXml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=1200, stale-while-revalidate=600',
    },
  })
} 
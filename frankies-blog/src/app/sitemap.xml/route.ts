import { NextRequest, NextResponse } from 'next/server';
import { getBlogPosts } from '@/lib/data/blogPosts';
import { siteMetadata } from '@/lib/siteMetadata';

export async function GET(request: NextRequest) {
  const blogPosts = getBlogPosts();
  
  const baseUrl = siteMetadata.siteUrl;
  const currentDate = new Date().toISOString();

  // Static pages
  const staticPages = [
    {
      url: '',
      lastModified: currentDate,
      changeFreq: 'daily',
      priority: '1.0'
    },
    {
      url: '/blog',
      lastModified: currentDate,
      changeFreq: 'daily', 
      priority: '0.9'
    },
    {
      url: '/about',
      lastModified: currentDate,
      changeFreq: 'monthly',
      priority: '0.8'
    },
    {
      url: '/contact',
      lastModified: currentDate,
      changeFreq: 'monthly',
      priority: '0.7'
    },
    {
      url: '/projects',
      lastModified: currentDate,
      changeFreq: 'weekly',
      priority: '0.8'
    },
    {
      url: '/resources',
      lastModified: currentDate,
      changeFreq: 'weekly',
      priority: '0.7'
    },
    {
      url: '/newsletter',
      lastModified: currentDate,
      changeFreq: 'monthly',
      priority: '0.6'
    },
    {
      url: '/bookmarks',
      lastModified: currentDate,
      changeFreq: 'weekly',
      priority: '0.5'
    },
    {
      url: '/speaking',
      lastModified: currentDate,
      changeFreq: 'monthly',
      priority: '0.6'
    },
    {
      url: '/uses',
      lastModified: currentDate,
      changeFreq: 'monthly',
      priority: '0.5'
    }
  ];

  // Blog post pages
  const blogPages = blogPosts.map(post => ({
    url: `/blog/${post.slug}`,
    lastModified: post.publishedAt,
    changeFreq: 'monthly',
    priority: '0.8'
  }));

  // Category pages
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));
  const categoryPages = categories.map(category => ({
    url: `/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`,
    lastModified: currentDate,
    changeFreq: 'weekly',
    priority: '0.6'
  }));

  // Tag pages
  const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));
  const tagPages = allTags.map(tag => ({
    url: `/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`,
    lastModified: currentDate,
    changeFreq: 'weekly',
    priority: '0.5'
  }));

  const allPages = [...staticPages, ...blogPages, ...categoryPages, ...tagPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${allPages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastModified}</lastmod>
    <changefreq>${page.changeFreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600', // Cache for 1 hour
    },
  });
} 
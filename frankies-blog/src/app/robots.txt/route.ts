import { NextResponse } from 'next/server';
import { siteMetadata } from '@/lib/siteMetadata';

export async function GET() {
  const baseUrl = siteMetadata.siteUrl;
  
  const robotsTxt = `User-agent: *
Allow: /

# Important pages
Allow: /blog
Allow: /projects
Allow: /about
Allow: /contact

# Disallow admin and API routes
Disallow: /admin
Disallow: /api/
Disallow: /_next/
Disallow: /private/

# Sitemap location
Sitemap: ${baseUrl}/sitemap.xml

# Crawl delay (optional, be considerate)
Crawl-delay: 1`;

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400', // Cache for 24 hours
    },
  });
} 
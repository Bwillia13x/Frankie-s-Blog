'use client';

import { useEffect } from 'react';
import Head from 'next/head';
import { usePathname } from 'next/navigation';
import { siteMetadata } from '@/lib/siteMetadata';

interface BlogPostSEOProps {
  title: string;
  description: string;
  content: string;
  publishedAt: string;
  modifiedAt?: string;
  category: string;
  tags: string[];
  author: {
    name: string;
    url?: string;
    image?: string;
  };
  image?: string;
  slug: string;
  readingTime?: string;
  wordCount?: number;
}

interface WebsiteSEOProps {
  title?: string;
  description?: string;
  image?: string;
  type?: 'website' | 'article' | 'profile';
}

// Advanced SEO for blog posts
export function BlogPostSEO({
  title,
  description,
  content,
  publishedAt,
  modifiedAt,
  category,
  tags,
  author,
  image,
  slug,
  readingTime,
  wordCount
}: BlogPostSEOProps) {
  const pathname = usePathname();
  const canonicalUrl = `${siteMetadata.siteUrl}${pathname}`;
  const imageUrl = image ? `${siteMetadata.siteUrl}${image}` : `${siteMetadata.siteUrl}/images/og-default.png`;

  // Generate JSON-LD structured data
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: description,
    image: [imageUrl],
    datePublished: publishedAt,
    dateModified: modifiedAt || publishedAt,
    author: {
      '@type': 'Person',
      name: author.name,
      url: author.url || siteMetadata.siteUrl,
      image: author.image
    },
    publisher: {
      '@type': 'Organization',
      name: siteMetadata.author,
      logo: {
        '@type': 'ImageObject',
        url: `${siteMetadata.siteUrl}/images/logo.png`
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl
    },
    articleSection: category,
    keywords: tags.join(', '),
    wordCount: wordCount,
    timeRequired: readingTime,
    url: canonicalUrl,
    isPartOf: {
      '@type': 'Blog',
      name: siteMetadata.title,
      url: siteMetadata.siteUrl
    }
  };

  // Article structured data
  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: imageUrl,
    datePublished: publishedAt,
    dateModified: modifiedAt || publishedAt,
    author: {
      '@type': 'Person',
      name: author.name
    },
    publisher: {
      '@type': 'Organization',
      name: siteMetadata.author,
      logo: {
        '@type': 'ImageObject',
        url: `${siteMetadata.siteUrl}/images/logo.png`
      }
    }
  };

  // Breadcrumb structured data
  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteMetadata.siteUrl
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `${siteMetadata.siteUrl}/blog`
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: title,
        item: canonicalUrl
      }
    ]
  };

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{`${title} | ${siteMetadata.title}`}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={tags.join(', ')} />
      <meta name="author" content={author.name} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content={siteMetadata.title} />
      <meta property="og:locale" content="en_US" />

      {/* Article-specific Open Graph */}
      <meta property="article:published_time" content={publishedAt} />
      <meta property="article:modified_time" content={modifiedAt || publishedAt} />
      <meta property="article:author" content={author.name} />
      <meta property="article:section" content={category} />
      {tags.map((tag) => (
        <meta key={tag} property="article:tag" content={tag} />
      ))}

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={siteMetadata.social?.twitter || ''} />
      <meta name="twitter:creator" content={siteMetadata.social?.twitter || ''} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={title} />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="referrer" content="origin-when-cross-origin" />
      
      {/* Reading Time and Word Count */}
      {readingTime && <meta name="reading-time" content={readingTime} />}
      {wordCount && <meta name="word-count" content={wordCount.toString()} />}

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
    </Head>
  );
}

// Advanced SEO for general pages
export function WebsiteSEO({
  title,
  description,
  image,
  type = 'website'
}: WebsiteSEOProps) {
  const pathname = usePathname();
  const canonicalUrl = `${siteMetadata.siteUrl}${pathname}`;
  const imageUrl = image ? `${siteMetadata.siteUrl}${image}` : `${siteMetadata.siteUrl}/images/og-default.png`;
  
  const pageTitle = title ? `${title} | ${siteMetadata.title}` : siteMetadata.title;
  const pageDescription = description || siteMetadata.description;

  // Website structured data
  const websiteStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    author: {
      '@type': 'Person',
      name: siteMetadata.author
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteMetadata.siteUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };

  // Organization structured data
  const organizationStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteMetadata.author,
    url: siteMetadata.siteUrl,
    logo: `${siteMetadata.siteUrl}/images/logo.png`,
    sameAs: [
      siteMetadata.social?.twitter && `https://twitter.com/${siteMetadata.social.twitter}`,
      siteMetadata.social?.github && `https://github.com/${siteMetadata.social.github}`,
      siteMetadata.social?.linkedin && `https://linkedin.com/in/${siteMetadata.social.linkedin}`
    ].filter(Boolean)
  };

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={siteMetadata.title} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={siteMetadata.social?.twitter || ''} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
      />
    </Head>
  );
}

// Blog listing page SEO
export function BlogListingSEO() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: `${siteMetadata.title} Blog`,
    description: 'Articles about web development, React, Next.js, and modern JavaScript',
    url: `${siteMetadata.siteUrl}/blog`,
    author: {
      '@type': 'Person',
      name: siteMetadata.author
    },
    publisher: {
      '@type': 'Organization',
      name: siteMetadata.author,
      logo: {
        '@type': 'ImageObject',
        url: `${siteMetadata.siteUrl}/images/logo.png`
      }
    }
  };

  return (
    <Head>
      <title>{`Blog | ${siteMetadata.title}`}</title>
      <meta name="description" content="Articles about web development, React, Next.js, and modern JavaScript" />
      <link rel="canonical" href={`${siteMetadata.siteUrl}/blog`} />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  );
}

// Performance monitoring hook
export function usePerformanceMonitoring() {
  useEffect(() => {
    // Web Vitals monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime);
          }
          if (entry.entryType === 'first-input') {
            const input = entry as PerformanceEntry & { processingStart?: number };
            console.log('FID:', (input.processingStart ?? 0) - input.startTime);
          }
          if (entry.entryType === 'layout-shift') {
            if (!(entry as any).hadRecentInput) {
              console.log('CLS:', (entry as any).value);
            }
          }
        });
      });

      try {
        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
      } catch (e) {
        // Browser doesn't support some metrics
        console.log('Performance monitoring partially supported');
      }

      return () => observer.disconnect();
    }
  }, []);
}

// Generate sitemap data
export function generateSitemapData() {
  // This would typically fetch from your CMS or file system
  const pages = [
    { url: '/', lastModified: new Date(), priority: 1.0 },
    { url: '/blog', lastModified: new Date(), priority: 0.9 },
    { url: '/about', lastModified: new Date(), priority: 0.8 },
    { url: '/contact', lastModified: new Date(), priority: 0.7 },
    { url: '/projects', lastModified: new Date(), priority: 0.8 },
    { url: '/bookmarks', lastModified: new Date(), priority: 0.6 }
  ];

  return pages;
}

// Rich snippets for FAQ sections
export function FAQStructuredData({ faqs }: { faqs: Array<{ question: string; answer: string }> }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

// Rich snippets for How-to articles
export function HowToStructuredData({ 
  name, 
  description, 
  steps 
}: { 
  name: string; 
  description: string; 
  steps: Array<{ name: string; text: string; image?: string }>;
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      image: step.image ? `${siteMetadata.siteUrl}${step.image}` : undefined
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
} 
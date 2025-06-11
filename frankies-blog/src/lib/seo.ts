import { Metadata } from 'next';
import { siteMetadata } from './siteMetadata';

interface PageSeoProps {
  title: string;
  description: string;
  path: string; // Should be absolute path starting with '/'
  image?: string; // Optional: Relative path to an image from /public or full external URL
  type?: 'website' | 'article' | 'profile'; // Add more as needed
}

export function generatePageMetadata({
  title,
  description,
  path,
  image,
  type = 'website',
}: PageSeoProps): Metadata {
  const pageUrl = `${siteMetadata.siteUrl}${path}`;

  let imageUrl: string | undefined = undefined;
  if (image) {
    if (image.startsWith('http')) {
      imageUrl = image;
    } else {
      // For relative paths, metadataBase in layout.tsx will handle prepending siteUrl
      // However, it's often better to be explicit for social cards.
      imageUrl = `${siteMetadata.siteUrl}${image.startsWith('/') ? '' : '/'}${image}`;
    }
  } else {
    imageUrl = `${siteMetadata.siteUrl}${siteMetadata.socialBanner}`;
  }

  const images = imageUrl ? [{ url: imageUrl }] : [];

  return {
    title, // Page-specific title; layout.tsx will add "| Site Name"
    description,
    openGraph: {
      title: title,
      description: description,
      url: pageUrl,
      siteName: siteMetadata.title,
      images: images,
      locale: 'en_US',
      type: type,
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: imageUrl ? [imageUrl] : [], // Twitter images also need to be absolute URLs
      creator: siteMetadata.twitterHandle,
      // site: siteMetadata.twitterHandle, // Optional: if the site has its own Twitter handle
    },
    alternates: {
      canonical: pageUrl,
    },
    // robots: { // Optional: define default robots meta tag
    //   index: true,
    //   follow: true,
    //   googleBot: {
    //     index: true,
    //     follow: true,
    //     'max-video-preview': -1,
    //     'max-image-preview': 'large',
    //     'max-snippet': -1,
    //   },
    // },
  };
}

import { Badge } from "@/components/ui/badge"
import React, { useCallback, useMemo } from 'react'; // Import useCallback and useMemo
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarIcon, ClockIcon, EyeIcon, HeartIcon, MessageCircleIcon, ShareIcon, ArrowLeftIcon, BookmarkIcon } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { blogPosts } from "../../../../lib/data/blogPosts";
import type { BlogPost } from "../../../../types";
import { PageHeader, EngagementMetrics, AuthorCard, NewsletterCTA } from "../../../../components/common";
import { generatePageMetadata as generatePageSeoMetadata } from '@/lib/seo'; // Renamed import
import { siteMetadata } from '@/lib/siteMetadata';
import { Metadata } from 'next';

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

// This function is duplicated from the page component. Ideally, it should be in a shared lib/utils.
// For now, keeping it here to satisfy generateMetadata's needs.
const getPostBySlugForMeta = (slug: string): BlogPost | undefined => {
  return blogPosts.find(p => p.slug === slug);
};

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getPostBySlugForMeta(params.slug);
  if (!post) {
    // Optionally, return default metadata or handle notFound if preferred
    // For now, returning metadata for a generic "Not Found" page if post is not found
    return generatePageSeoMetadata({
      title: `Post Not Found - ${siteMetadata.title}`,
      description: "The requested blog post could not be found.",
      path: `/blog/${params.slug}`,
    });
  }

  return generatePageSeoMetadata({
    title: post.title, // PageHeader will use template, so no need for siteMetadata.title here
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.image, // Optional image for the post
    type: 'article', // This is an article page
    // Potentially add author details if available and desired in metadata
    // publishedTime: post.publishedAt (if OpenGraph 'article' type supports it well)
  });
}


const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(p => p.slug === slug);
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound()
  }

  const handleNewsletterSubmit = useCallback((email: string) => {
    console.log("Newsletter submitted for:", email);
  }, []);

  const authorCardDetails = useMemo(() => ({
    authorName: post.author || "Francisco",
    authorTitle: "Full-Stack Developer & Tech Lead",
    avatarFallback: post.author ? post.author.charAt(0).toUpperCase() : "F",
    bio: "Passionate about building scalable applications and sharing knowledge with the developer community.",
    stats: [
      { label: "Posts", value: blogPosts.length },
      { label: "Followers", value: "2.8K" },
      { label: "Following", value: "892" },
    ],
    actionLink: { href: "/contact", label: "Follow" }
  }), [post.author, blogPosts.length]);


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="container mx-auto px-4 py-12">
        {/* Back Navigation */}
        <div className="mb-8">
          <Button asChild variant="ghost" className="text-slate-400 hover:text-white hover:bg-slate-800">
            <Link href="/blog">
              <ArrowLeftIcon className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <article className="lg:col-span-3">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg">
              <PageHeader
                title={post.title}
                description={post.excerpt} // Use excerpt here
                className="p-8 border-b border-slate-700 text-left mb-0"
              />

              <div className="p-8 border-b border-slate-700">
                <div className="mb-4">
                    <Badge className="bg-blue-500/20 text-blue-300 border-blue-400/30">
                        {post.category}
                    </Badge>
                    {post.featured && (
                        <Badge className="ml-2 bg-yellow-500/20 text-yellow-300 border-yellow-400/30">
                        ⭐ Featured
                        </Badge>
                    )}
                </div>
                <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {post.author ? post.author.charAt(0).toUpperCase() : 'A'}
                    </div>
                    <span className="text-slate-300">{post.author || "Author Name"}</span>
                  </div>
                  <span className="flex items-center gap-1">
                    <CalendarIcon className="w-4 h-4" />
                    {new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </span>
                  <span className="flex items-center gap-1">
                    <ClockIcon className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>

                <EngagementMetrics views={post.views} likes={post.likes} comments={post.comments} className="mb-6" />

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-slate-700 text-slate-300 hover:bg-slate-600">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Article Content */}
              <div className="p-8">
                <div className="prose prose-invert prose-lg max-w-none">
                  <div className="text-slate-300 leading-relaxed">
                    {post.content}
                  </div>
                </div>
              </div>

              {/* Article Footer */}
              <div className="p-8 border-t border-slate-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-red-500/20 hover:border-red-400/50">
                      <HeartIcon className="w-4 h-4 mr-2" />
                      Like ({post.likes})
                    </Button>
                    <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-blue-500/20 hover:border-blue-400/50">
                      <MessageCircleIcon className="w-4 h-4 mr-2" />
                      Comment ({post.comments})
                    </Button>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                      <BookmarkIcon className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                      <ShareIcon className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-8">
            <AuthorCard {...authorCardDetails} />
            <NewsletterCTA
              title="📬 Join the Newsletter"
              description="Get the latest posts and insights delivered to your inbox weekly."
              buttonText="Subscribe"
              onSubmit={handleNewsletterSubmit} // Or provide buttonLink="/newsletter" if it's a page link
              className="bg-gradient-to-r from-blue-600 to-purple-600 border-0" // Custom styling for this instance
              // The input/button styling in NewsletterCTA is slightly different than original here
            />
          </aside>
        </div>
      </div>
    </div>
  )
}

// Generate static params for known blog posts
export async function generateStaticParams() {
  // This should now use the slugs from the imported blogPosts array
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}
// Ensure BlogPost interface is also imported if not already. It is now.
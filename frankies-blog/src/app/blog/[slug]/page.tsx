import React from 'react';
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarIcon, ClockIcon, EyeIcon, HeartIcon, MessageCircleIcon, ShareIcon, ArrowLeftIcon, BookmarkIcon } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getBlogPost, getAllBlogSlugs } from "@/lib/mdx";
import type { BlogPost } from "@/types";
import { PageHeader, EngagementMetrics, AuthorCard, NewsletterCTA } from "@/components/common";
import { generatePageMetadata as generatePageSeoMetadata } from '@/lib/seo';
import { siteMetadata } from '@/lib/siteMetadata';
import { Metadata } from 'next';

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPost(params.slug);
  if (!post) {
    return generatePageSeoMetadata({
      title: `Post Not Found - ${siteMetadata.title}`,
      description: "The requested blog post could not be found.",
      path: `/blog/${params.slug}`,
    });
  }

  return generatePageSeoMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.image,
    type: 'article',
  });
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#111b22]">
      <div className="container mx-auto px-4 py-12">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link href="/blog" className="inline-flex items-center text-[#1993e5] hover:text-white transition-colors duration-200">
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Article Header */}
          <Card className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 mb-8">
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

              <h1 className="text-4xl font-bold text-white mb-6 leading-tight">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {post.author ? post.author.charAt(0).toUpperCase() : 'F'}
                  </div>
                  <span className="text-slate-300">{post.author || "Francisco Rojas"}</span>
                </div>
                <span className="flex items-center gap-1">
                  <CalendarIcon className="w-4 h-4" />
                  {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
                <span className="flex items-center gap-1">
                  <ClockIcon className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>

              <EngagementMetrics 
                views={post.views} 
                likes={post.likes} 
                comments={post.comments} 
                className="mb-6" 
              />

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-slate-700 text-slate-300 hover:bg-slate-600">
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="p-6 flex flex-wrap gap-4">
              <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white">
                <HeartIcon className="w-4 h-4 mr-2" />
                Like ({post.likes})
              </Button>
              <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white">
                <MessageCircleIcon className="w-4 h-4 mr-2" />
                Comment ({post.comments})
              </Button>
              <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white">
                <ShareIcon className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white">
                <BookmarkIcon className="w-4 h-4 mr-2" />
                Save
              </Button>
            </div>
          </Card>

          {/* Article Content */}
          <Card className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 mb-8">
            <CardContent className="p-8">
              <div 
                className="prose prose-invert prose-lg max-w-none
                  prose-headings:text-white 
                  prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-6 prose-h1:border-b prose-h1:border-slate-700 prose-h1:pb-4
                  prose-h2:text-3xl prose-h2:font-semibold prose-h2:mb-4 prose-h2:mt-8
                  prose-h3:text-2xl prose-h3:font-semibold prose-h3:mb-3 prose-h3:mt-6
                  prose-p:text-slate-300 prose-p:mb-4 prose-p:leading-relaxed
                  prose-strong:text-white prose-strong:font-semibold
                  prose-em:text-slate-200 prose-em:italic
                  prose-code:bg-slate-800 prose-code:text-blue-300 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
                  prose-pre:bg-slate-900 prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto prose-pre:text-sm prose-pre:mb-6
                  prose-pre:code:bg-transparent prose-pre:code:text-green-300 prose-pre:code:p-0
                  prose-ul:text-slate-300 prose-ul:mb-4 prose-ul:ml-6 prose-ul:space-y-2
                  prose-ol:text-slate-300 prose-ol:mb-4 prose-ol:ml-6 prose-ol:space-y-2 prose-ol:list-decimal
                  prose-li:relative prose-li:pl-2
                  prose-a:text-blue-400 prose-a:underline hover:prose-a:text-blue-300 prose-a:transition-colors prose-a:duration-200
                  prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-4 prose-blockquote:my-6 
                  prose-blockquote:italic prose-blockquote:text-slate-300 prose-blockquote:bg-slate-800/50 prose-blockquote:py-2"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </CardContent>
          </Card>

          {/* Author Card */}
          <div className="mb-8">
            <AuthorCard 
              authorName={post.author || "Francisco Rojas"}
              authorTitle="Full-Stack Developer & Tech Lead"
              bio="Passionate about building scalable applications and sharing knowledge with the developer community. I write about React, Node.js, and modern web development."
              location="San Francisco, CA"
              experience="8+ years"
              stats={[
                { label: "Blog Posts", value: "50+" },
                { label: "GitHub Stars", value: "2.1k" },
                { label: "Followers", value: "1.2k" }
              ]}
            />
          </div>

          {/* Newsletter CTA */}
          <NewsletterCTA 
            variant="card"
            title="📬 Never Miss a Post"
            description="Subscribe to get the latest posts delivered straight to your inbox."
            className="mb-8"
          />
        </div>
      </div>
    </div>
  );
}
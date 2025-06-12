import React, { useMemo, useCallback } from 'react';
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarIcon, ClockIcon, ArrowRightIcon, EyeIcon, MessageCircleIcon, HeartIcon, ChevronDownIcon, FilterIcon } from "lucide-react"
import Link from "next/link"
import { blogPosts, categories, popularTags } from "@/lib/data/blogPosts";
import type { BlogPost } from "@/types";
import { PageHeader, EngagementMetrics, AuthorCard, NewsletterCTA } from "@/components/common";
import { SearchBar } from "@/components/ui/search-bar";
import { ReadingTime } from "@/components/ui/reading-time";
import { generatePageMetadata } from '@/lib/seo'; // Assuming @ is configured for src
import { siteMetadata } from '@/lib/siteMetadata';
import { Metadata } from 'next';
import { SidebarDropdown } from "@/components/blog/SidebarDropdown";

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata({
    title: `Blog - ${siteMetadata.title}`,
    description: 'Explore articles on software development, tech insights, and career growth.',
    path: '/blog',
  });
}

export default function BlogPage() {
  const featuredPosts: BlogPost[] = blogPosts.filter(post => post.featured);
  const regularPosts: BlogPost[] = blogPosts.filter(post => !post.featured);

  // authorDetails can be memoized if its construction is complex or if BlogPage re-renders often
  // For now, it's a simple object definition.
  const authorDetails = {
    authorName: "Francisco",
    authorTitle: "Senior Software Engineer",
    avatarFallback: "FR",
    bio: "Senior Software Engineer sharing real-world experiences from building scalable applications and leading development teams.",
    location: "San Francisco, CA",
    experience: "5+ years experience",
    userCount: "100K+ users served",
    actionLink: { href: "/contact", label: "Get In Touch" }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <PageHeader
          title="Stories, Insights & Code"
          description="Welcome to my corner of the internet where I share real-world experiences, technical deep-dives, and lessons learned from building software that scales. Join thousands of developers who read my weekly insights."
          badgeText="💡 Developer Blog"
          className="mb-12"
        />
        
        <NewsletterCTA
          title="📬 Weekly Dev Insights"
          buttonText="Subscribe"
          subscriberCount="2,500+"
          buttonLink="/newsletter"
          variant="inline"
          className="mb-12"
        />

        {/* Enhanced Search */}
        <div className="mb-8 max-w-2xl mx-auto">
          <SearchBar posts={blogPosts} className="w-full" />
        </div>

        {/* Filter Tags */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Badge 
                key={category.name}
                variant="outline" 
                className="cursor-pointer hover:bg-blue-500/20 border-slate-600 text-slate-300 hover:text-blue-300 hover:border-blue-400"
              >
                {category.name} ({category.count})
              </Badge>
            ))}
          </div>
        </div>

        {/* Sidebar Dropdown */}
        <SidebarDropdown authorDetails={authorDetails} popularTags={popularTags} />

        {/* Main Content - Centered */}
        <div className="max-w-5xl mx-auto">
          {/* Featured Posts */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              ⭐ Featured Stories
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Card key={post.slug} className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-blue-500/50 transition-all duration-300 group overflow-hidden">
                  <div className="relative overflow-hidden">
                    <div className="h-48 bg-gradient-to-r from-blue-600 to-purple-600 relative">
                      <div className="absolute inset-0 bg-black/40"></div>
                      <div className="absolute bottom-4 left-4">
                        <Badge className="bg-blue-600 text-white">
                          {post.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-4 text-sm text-slate-400 mb-2">
                      <span className="flex items-center gap-1">
                        <CalendarIcon className="w-4 h-4" />
                        {new Date(post.publishedAt).toLocaleDateString()}
                      </span>
                      <ReadingTime content={post.content} />
                    </div>
                    <CardTitle className="text-white group-hover:text-blue-300 transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-slate-300 line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <EngagementMetrics views={post.views} comments={post.comments} likes={post.likes} />
                    </div>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs bg-slate-700 text-slate-300">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                      <Link href={`/blog/${post.slug}`}>
                        Read Full Story <ArrowRightIcon className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Regular Posts */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8 text-center">📚 All Posts</h2>
            <div className="space-y-8">
              {regularPosts.map((post) => (
                <Card key={post.slug} className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-blue-500/50 transition-all duration-300 group">
                  <div className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex-shrink-0">
                        <div className="w-full h-full bg-black/40 rounded-lg flex items-center justify-center">
                          <Badge className="bg-blue-600 text-white text-sm">
                            {post.category}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-4 text-sm text-slate-400 mb-3">
                          <span className="flex items-center gap-1">
                            <CalendarIcon className="w-4 h-4" />
                            {new Date(post.publishedAt).toLocaleDateString()}
                          </span>
                          <ReadingTime content={post.content} />
                        </div>
                        <h3 className="text-2xl font-semibold text-white group-hover:text-blue-300 transition-colors mb-4 line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-slate-300 mb-6 line-clamp-3 text-lg leading-relaxed">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <EngagementMetrics views={post.views} comments={post.comments} likes={post.likes} />
                          <Button asChild variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:bg-blue-500/20 hover:border-blue-400">
                            <Link href={`/blog/${post.slug}`}>
                              Read More <ArrowRightIcon className="w-4 h-4 ml-1" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 max-w-2xl mx-auto">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-0">
            <CardContent className="p-8 text-center">
              <h3 className="text-white font-bold text-2xl mb-3">💼 Work With Me</h3>
              <p className="text-blue-100 mb-6 text-lg">
                Looking for a senior engineer to help scale your product?
              </p>
              <Button asChild variant="secondary" className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-3">
                <Link href="/projects">View My Work</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
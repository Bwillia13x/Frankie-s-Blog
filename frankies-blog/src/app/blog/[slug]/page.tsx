import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarIcon, ClockIcon, EyeIcon, HeartIcon, MessageCircleIcon, ShareIcon, ArrowLeftIcon, BookmarkIcon } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

// Sample blog posts data - in a real app, this would come from a CMS or database
const blogPosts = {
  "building-scalable-react-applications": {
    title: "Building Scalable React Applications: Lessons from Production",
    excerpt: "Key insights and patterns I've learned from building React applications that serve millions of users.",
    content: "This is the full content of the blog post about building scalable React applications...",
    author: "Francisco",
    publishedAt: "2024-12-15",
    readTime: "8 min read",
    tags: ["React", "Performance", "Architecture", "Scaling"],
    views: 15420,
    likes: 234,
    comments: 42,
    category: "Frontend Development",
    featured: true
  },
  "api-design-best-practices": {
    title: "API Design Best Practices: Creating APIs Developers Love",
    excerpt: "A comprehensive guide to designing REST APIs that are intuitive, maintainable, and scalable.",
    content: "This is the full content of the blog post about API design best practices...",
    author: "Francisco",
    publishedAt: "2024-11-28",
    readTime: "12 min read",
    tags: ["API Design", "REST", "Backend", "Best Practices"],
    views: 8920,
    likes: 156,
    comments: 28,
    category: "Backend Development",
    featured: false
  }
}

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params
  const post = blogPosts[slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

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
              {/* Article Header */}
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
                
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  {post.title}
                </h1>
                
                <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      F
                    </div>
                    <span className="text-slate-300">{post.author}</span>
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

                {/* Engagement Metrics */}
                <div className="flex items-center gap-6 text-sm text-slate-400 mb-6">
                  <span className="flex items-center gap-1">
                    <EyeIcon className="w-4 h-4" />
                    {post.views.toLocaleString()} views
                  </span>
                  <span className="flex items-center gap-1">
                    <HeartIcon className="w-4 h-4" />
                    {post.likes} likes
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircleIcon className="w-4 h-4" />
                    {post.comments} comments
                  </span>
                </div>

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
            {/* Author Card */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-3">
                    F
                  </div>
                  <h3 className="text-lg font-semibold text-white">Francisco</h3>
                  <p className="text-sm text-slate-400">Full-Stack Developer & Tech Lead</p>
                </div>
                <p className="text-sm text-slate-300 text-center mb-4">
                  Passionate about building scalable applications and sharing knowledge with the developer community.
                </p>
                <div className="grid grid-cols-3 gap-3 text-center text-xs">
                  <div>
                    <div className="font-bold text-white">47</div>
                    <div className="text-slate-400">Posts</div>
                  </div>
                  <div>
                    <div className="font-bold text-white">2.8K</div>
                    <div className="text-slate-400">Followers</div>
                  </div>
                  <div>
                    <div className="font-bold text-white">892</div>
                    <div className="text-slate-400">Following</div>
                  </div>
                </div>
                <Button asChild className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                  <Link href="/contact">Follow</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-0">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-bold text-white mb-2">📬 Join the Newsletter</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Get the latest posts and insights delivered to your inbox weekly.
                </p>
                <Button asChild variant="secondary" className="w-full bg-white text-blue-600 hover:bg-slate-100">
                  <Link href="/newsletter">Subscribe</Link>
                </Button>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  )
}

// Generate static params for known blog posts
export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }))
} 
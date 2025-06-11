import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarIcon, ClockIcon, ArrowRightIcon, EyeIcon, MessageCircleIcon, HeartIcon } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable React Applications: Lessons from TaskFlow Pro",
    description: "A deep dive into the architecture decisions and performance optimizations that helped TaskFlow Pro serve 100,000+ users efficiently.",
    excerpt: "When TaskFlow Pro started experiencing performance issues at 50,000 users, I knew it was time for a complete architecture overhaul. Here's how I transformed a monolithic React app into a scalable, performant system...",
    category: "Case Study",
    readTime: "8 min read",
    publishDate: "2025-01-10",
    featured: true,
    tags: ["React", "Performance", "Architecture", "Scaling"],
    image: "/blog/taskflow-architecture.jpg",
    views: 2847,
    comments: 34,
    likes: 156
  },
  {
    id: 2,
    title: "The Art of API Design: Creating Developer-Friendly Interfaces",
    description: "Best practices and real-world examples from designing APIs that developers actually love to use.",
    excerpt: "Great API design is like great UX design - it should be intuitive, consistent, and delightful to use. After designing APIs for multiple startups, here are the principles I swear by...",
    category: "Tutorial",
    readTime: "6 min read",
    publishDate: "2025-01-05",
    featured: false,
    tags: ["API", "Backend", "Best Practices", "Developer Experience"],
    image: "/blog/api-design.jpg",
    views: 1923,
    comments: 28,
    likes: 89
  },
  {
    id: 3,
    title: "From Startup to Scale: My Journey Building E-Commerce Platforms",
    description: "Personal insights and technical challenges from building e-commerce solutions that handle millions in transactions.",
    excerpt: "Three years ago, I joined a startup with big dreams but a shaky technical foundation. Today, that platform processes over $2M in monthly transactions. Here's the complete story...",
    category: "Story",
    readTime: "12 min read",
    publishDate: "2024-12-28",
    featured: true,
    tags: ["E-commerce", "Startups", "Career", "Leadership"],
    image: "/blog/startup-journey.jpg",
    views: 4156,
    comments: 67,
    likes: 234
  },
  {
    id: 4,
    title: "Modern CSS Techniques: Beyond Bootstrap and Tailwind",
    description: "Exploring CSS Grid, Container Queries, and other modern features that are changing how we build interfaces.",
    excerpt: "While frameworks like Tailwind have revolutionized how we write CSS, there's a whole world of native CSS features that can make your code cleaner and more maintainable...",
    category: "Technical",
    readTime: "10 min read",
    publishDate: "2024-12-20",
    featured: false,
    tags: ["CSS", "Frontend", "Modern Web", "UI/UX"],
    image: "/blog/modern-css.jpg",
    views: 3289,
    comments: 45,
    likes: 178
  },
  {
    id: 5,
    title: "Remote Work Success: Building Culture in Distributed Teams",
    description: "Strategies and tools for maintaining team cohesion and productivity in remote-first environments.",
    excerpt: "Leading a remote team of 12 developers across 6 time zones taught me that culture isn't built in an office - it's built through intentional practices and authentic connections...",
    category: "Leadership",
    readTime: "7 min read",
    publishDate: "2024-12-15",
    featured: false,
    tags: ["Remote Work", "Team Management", "Culture", "Productivity"],
    image: "/blog/remote-team.jpg",
    views: 2156,
    comments: 38,
    likes: 97
  },
  {
    id: 6,
    title: "The Future of Web Development: AI, WebAssembly, and Edge Computing",
    description: "Exploring emerging technologies that will shape the next decade of web development.",
    excerpt: "As AI tools become more sophisticated and edge computing goes mainstream, the landscape of web development is shifting dramatically. Here's what I think comes next...",
    category: "Insights",
    readTime: "9 min read",
    publishDate: "2024-12-10",
    featured: false,
    tags: ["AI", "WebAssembly", "Edge Computing", "Future Tech"],
    image: "/blog/future-web.jpg",
    views: 1876,
    comments: 23,
    likes: 112
  }
]

const categories = [
  { name: "All", count: 6 },
  { name: "Case Study", count: 1 },
  { name: "Tutorial", count: 1 },
  { name: "Story", count: 1 },
  { name: "Technical", count: 1 },
  { name: "Leadership", count: 1 },
  { name: "Insights", count: 1 }
]

const popularTags = [
  "React", "API", "Performance", "Architecture", "Leadership", "Remote Work", 
  "E-commerce", "CSS", "JavaScript", "Career", "Startups", "Best Practices"
]

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-blue-500/20 text-blue-300 border-blue-400/30">
            💡 Developer Blog
          </Badge>
          <h1 className="text-5xl font-bold text-white mb-6">
            Stories, Insights & Code
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Welcome to my corner of the internet where I share real-world experiences, 
            technical deep-dives, and lessons learned from building software that scales. 
            Join thousands of developers who read my weekly insights.
          </p>
          
          {/* Newsletter Signup */}
          <div className="mt-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 max-w-md mx-auto">
            <h3 className="text-lg font-semibold text-white mb-3">📬 Weekly Dev Insights</h3>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="your@email.com" 
                className="flex-1 px-3 py-2 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button className="bg-blue-600 hover:bg-blue-700">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-slate-400 mt-2">2,500+ developers already subscribed</p>
          </div>
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

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Posts */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                ⭐ Featured Stories
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {featuredPosts.map((post) => (
                  <Card key={post.id} className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-blue-500/50 transition-all duration-300 group overflow-hidden">
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
                          {new Date(post.publishDate).toLocaleDateString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <ClockIcon className="w-4 h-4" />
                          {post.readTime}
                        </span>
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
                        <div className="flex items-center gap-4 text-sm text-slate-400">
                          <span className="flex items-center gap-1">
                            <EyeIcon className="w-4 h-4" />
                            {post.views.toLocaleString()}
                          </span>
                          <span className="flex items-center gap-1">
                            <MessageCircleIcon className="w-4 h-4" />
                            {post.comments}
                          </span>
                          <span className="flex items-center gap-1">
                            <HeartIcon className="w-4 h-4" />
                            {post.likes}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {post.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs bg-slate-700 text-slate-300">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                        <Link href={`/blog/${post.id}`}>
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
              <h2 className="text-2xl font-bold text-white mb-6">📚 All Posts</h2>
              <div className="space-y-6">
                {regularPosts.map((post) => (
                  <Card key={post.id} className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-blue-500/50 transition-all duration-300 group">
                    <div className="p-6">
                      <div className="flex items-start gap-6">
                        <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex-shrink-0">
                          <div className="w-full h-full bg-black/40 rounded-lg flex items-center justify-center">
                            <Badge className="bg-blue-600 text-white text-xs">
                              {post.category}
                            </Badge>
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-4 text-sm text-slate-400 mb-2">
                            <span className="flex items-center gap-1">
                              <CalendarIcon className="w-4 h-4" />
                              {new Date(post.publishDate).toLocaleDateString()}
                            </span>
                            <span className="flex items-center gap-1">
                              <ClockIcon className="w-4 h-4" />
                              {post.readTime}
                            </span>
                          </div>
                          <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors mb-3 line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-slate-300 mb-4 line-clamp-2">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 text-sm text-slate-400">
                              <span className="flex items-center gap-1">
                                <EyeIcon className="w-4 h-4" />
                                {post.views.toLocaleString()}
                              </span>
                              <span className="flex items-center gap-1">
                                <MessageCircleIcon className="w-4 h-4" />
                                {post.comments}
                              </span>
                              <span className="flex items-center gap-1">
                                <HeartIcon className="w-4 h-4" />
                                {post.likes}
                              </span>
                            </div>
                            <Button asChild variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:bg-blue-500/20 hover:border-blue-400">
                              <Link href={`/blog/${post.id}`}>
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

          {/* Sidebar */}
          <div className="space-y-8">
            {/* About Me Widget */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">👋 About Francisco</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4 flex items-center justify-center text-white font-bold text-xl">
                  FR
                </div>
                <p className="text-slate-300 text-sm mb-4">
                  Senior Software Engineer sharing real-world experiences from building scalable applications and leading development teams.
                </p>
                <div className="space-y-2 text-sm text-slate-400">
                  <div>📍 San Francisco, CA</div>
                  <div>💼 5+ years experience</div>
                  <div>🚀 100K+ users served</div>
                </div>
                <Button asChild className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                  <Link href="/contact">Get In Touch</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Popular Tags */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">🏷️ Popular Topics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag) => (
                    <Badge 
                      key={tag}
                      variant="outline" 
                      className="cursor-pointer hover:bg-blue-500/20 border-slate-600 text-slate-300 hover:text-blue-300 hover:border-blue-400 text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">📈 Blog Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-slate-300">Total Posts</span>
                  <span className="text-white font-semibold">24</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Total Views</span>
                  <span className="text-white font-semibold">45,231</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Subscribers</span>
                  <span className="text-white font-semibold">2,500+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Comments</span>
                  <span className="text-white font-semibold">892</span>
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-0">
              <CardContent className="p-6 text-center">
                <h3 className="text-white font-bold text-lg mb-2">💼 Work With Me</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Looking for a senior engineer to help scale your product?
                </p>
                <Button asChild variant="secondary" className="w-full">
                  <Link href="/projects">View My Work</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
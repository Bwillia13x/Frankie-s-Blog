import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MailIcon, UsersIcon, CalendarIcon, TrendingUpIcon, CheckCircleIcon, StarIcon, ArrowRightIcon } from "lucide-react"
import Link from "next/link"

const newsletterStats = [
  { label: "Subscribers", value: "2,500+", icon: <UsersIcon className="w-5 h-5" /> },
  { label: "Open Rate", value: "68%", icon: <MailIcon className="w-5 h-5" /> },
  { label: "Issues Sent", value: "52", icon: <CalendarIcon className="w-5 h-5" /> },
  { label: "Avg. Rating", value: "4.8/5", icon: <StarIcon className="w-5 h-5" /> }
]

const recentIssues = [
  {
    title: "Building Scalable React Architecture",
    date: "January 8, 2025",
    preview: "This week I dive deep into the architecture patterns that helped TaskFlow Pro scale to 100k+ users. Includes real code examples and performance metrics...",
    topics: ["React", "Architecture", "Performance"],
    readTime: "6 min read"
  },
  {
    title: "The Developer's Guide to Effective Remote Work",
    date: "January 1, 2025",
    preview: "New Year, new habits! I'm sharing the productivity systems and communication strategies that transformed my remote work experience...",
    topics: ["Remote Work", "Productivity", "Leadership"],
    readTime: "4 min read"
  },
  {
    title: "2024 Year in Review: Lessons from Building Products",
    date: "December 25, 2024",
    preview: "A reflection on the biggest wins, failures, and insights from a year of building software. Plus my predictions for 2025...",
    topics: ["Career", "Reflection", "Trends"],
    readTime: "8 min read"
  }
]

const benefitsData = [
  {
    title: "Weekly Deep Dives",
    description: "Get detailed technical articles on React, Node.js, system design, and more. No fluff, just actionable insights.",
    icon: "📚"
  },
  {
    title: "Exclusive Resources",
    description: "First access to my templates, guides, and tools. Plus subscriber-only code snippets and checklists.",
    icon: "🎁"
  },
  {
    title: "Behind the Scenes",
    description: "Personal stories from building products, leading teams, and navigating the tech industry.",
    icon: "👥"
  },
  {
    title: "Community Access",
    description: "Join our private Discord community of developers sharing knowledge and career opportunities.",
    icon: "💬"
  },
  {
    title: "Job Opportunities",
    description: "Curated job postings from my network of startups and tech companies looking for talented developers.",
    icon: "🚀"
  },
  {
    title: "Early Access",
    description: "Be the first to know about new projects, courses, and collaborations before they go public.",
    icon: "⚡"
  }
]

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Senior Frontend Developer",
    company: "Stripe",
    content: "Francisco's newsletter is the highlight of my Tuesday mornings. His practical insights have directly improved how I architect React applications.",
    avatar: "SC"
  },
  {
    name: "Marcus Rodriguez",
    role: "Engineering Manager",
    company: "Airbnb",
    content: "The leadership advice in Francisco's newsletter helped me transition from IC to manager. His remote team insights are particularly valuable.",
    avatar: "MR"
  },
  {
    name: "Alex Kim",
    role: "Full Stack Developer",
    company: "Notion",
    content: "I've implemented several of Francisco's API design patterns in production. The code quality and performance improvements were immediate.",
    avatar: "AK"
  }
]

const upcomingTopics = [
  "Microservices vs Monoliths: When to Choose What",
  "The Complete Guide to Database Optimization",
  "Building Real-time Features with WebSockets",
  "Career Growth: From Senior to Staff Engineer",
  "Modern Testing Strategies for Full-Stack Apps"
]

export default function NewsletterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-blue-500/20 text-blue-300 border-blue-400/30">
            📬 Weekly Newsletter
          </Badge>
          <h1 className="text-5xl font-bold text-white mb-6">
            The Developer's Edge
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Join 2,500+ developers who get weekly insights on building better software, 
            scaling applications, and advancing their careers. No spam, just value.
          </p>
          
          {/* Newsletter Signup Form */}
          <Card className="max-w-md mx-auto bg-slate-800/50 backdrop-blur-sm border-slate-700">
            <CardContent className="p-6">
              <div className="flex flex-col gap-3">
                <input 
                  type="email" 
                  placeholder="your@email.com" 
                  className="px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Button className="bg-blue-600 hover:bg-blue-700 py-3">
                  <MailIcon className="w-4 h-4 mr-2" />
                  Subscribe Free
                </Button>
              </div>
              <p className="text-xs text-slate-400 mt-3 text-center">
                Unsubscribe anytime. Your email is safe with me.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {newsletterStats.map((stat, index) => (
            <Card key={index} className="bg-slate-800/50 backdrop-blur-sm border-slate-700 text-center">
              <CardContent className="p-6">
                <div className="text-blue-400 mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Recent Issues */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                📖 Recent Issues
              </h2>
              <div className="space-y-6">
                {recentIssues.map((issue, index) => (
                  <Card key={index} className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-blue-500/50 transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-4 text-sm text-slate-400 mb-2">
                        <span className="flex items-center gap-1">
                          <CalendarIcon className="w-4 h-4" />
                          {issue.date}
                        </span>
                        <span>{issue.readTime}</span>
                      </div>
                      <CardTitle className="text-white">{issue.title}</CardTitle>
                      <CardDescription className="text-slate-300">
                        {issue.preview}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {issue.topics.map((topic) => (
                          <Badge key={topic} variant="outline" className="text-xs border-slate-600 text-slate-400">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                      <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:bg-blue-500/20">
                        Read Full Issue <ArrowRightIcon className="w-4 h-4 ml-1" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* What You'll Get */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-8">
                What You'll Get
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {benefitsData.map((benefit, index) => (
                  <Card key={index} className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
                    <CardContent className="p-6">
                      <div className="text-2xl mb-3">{benefit.icon}</div>
                      <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                      <p className="text-slate-300 text-sm">{benefit.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Testimonials */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-8">
                What Readers Say
              </h2>
              <div className="space-y-6">
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                          {testimonial.avatar}
                        </div>
                        <div className="flex-1">
                          <p className="text-slate-300 mb-3 italic">"{testimonial.content}"</p>
                          <div>
                            <div className="font-semibold text-white">{testimonial.name}</div>
                            <div className="text-sm text-slate-400">{testimonial.role} at {testimonial.company}</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Newsletter CTA */}
            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-0">
              <CardContent className="p-6 text-center">
                <MailIcon className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Join Today</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Get weekly insights delivered to your inbox every Tuesday
                </p>
                <input 
                  type="email" 
                  placeholder="your@email.com" 
                  className="w-full px-3 py-2 mb-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <Button variant="secondary" className="w-full bg-white text-blue-600 hover:bg-slate-100">
                  Subscribe Now
                </Button>
              </CardContent>
            </Card>

            {/* Upcoming Topics */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  📅 Coming Up
                </CardTitle>
                <CardDescription className="text-slate-300">
                  Topics I'm working on for future issues
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {upcomingTopics.map((topic, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <CheckCircleIcon className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">{topic}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Newsletter Schedule */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">📬 Schedule</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Frequency</span>
                  <span className="text-white font-semibold">Weekly</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Day</span>
                  <span className="text-white font-semibold">Tuesday</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Time</span>
                  <span className="text-white font-semibold">9:00 AM PST</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Length</span>
                  <span className="text-white font-semibold">5-7 min read</span>
                </div>
              </CardContent>
            </Card>

            {/* Archive */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">📚 Archive</CardTitle>
                <CardDescription className="text-slate-300">
                  Browse all previous issues
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full border-slate-600 text-slate-300 hover:bg-blue-500/20">
                  <Link href="/newsletter/archive">
                    View All Issues
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Connect */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">🤝 Connect</CardTitle>
                <CardDescription className="text-slate-300">
                  Questions about the newsletter?
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full border-slate-600 text-slate-300 hover:bg-blue-500/20">
                  <Link href="/contact">
                    Get In Touch
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Final CTA */}
        <section className="mt-16 text-center">
          <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <TrendingUpIcon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Level Up?</h3>
              <p className="text-slate-300 mb-6">
                Join thousands of developers who rely on The Developer's Edge for weekly insights, 
                practical tips, and career advice. Start getting smarter about software development.
              </p>
              <div className="flex gap-2 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="your@email.com" 
                  className="flex-1 px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Button className="bg-blue-600 hover:bg-blue-700 px-6">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-slate-400 mt-3">
                Free forever. No spam. Unsubscribe with one click.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
} 
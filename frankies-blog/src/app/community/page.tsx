import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { UsersIcon, MessageCircleIcon, TrophyIcon, CalendarIcon, ExternalLinkIcon, HeartIcon, ShareIcon, BookOpenIcon } from "lucide-react"
import Link from "next/link"

const communityStats = [
  { label: "Active Members", value: "1,247", icon: <UsersIcon className="w-6 h-6" /> },
  { label: "Daily Messages", value: "127", icon: <MessageCircleIcon className="w-6 h-6" /> },
  { label: "Code Reviews", value: "89", icon: <BookOpenIcon className="w-6 h-6" /> },
  { label: "Success Stories", value: "156", icon: <TrophyIcon className="w-6 h-6" /> }
]

const discussionTopics = [
  {
    title: "🚀 Show Your Work",
    description: "Share your latest projects, get feedback, and celebrate wins",
    memberCount: 342,
    latestPost: "2 hours ago",
    pinned: true
  },
  {
    title: "💼 Career Discussions",
    description: "Salary negotiations, interviews, career transitions, and growth",
    memberCount: 567,
    latestPost: "1 hour ago",
    pinned: false
  },
  {
    title: "🔧 Code Review Corner",
    description: "Get your code reviewed by experienced developers",
    memberCount: 289,
    latestPost: "30 minutes ago",
    pinned: false
  },
  {
    title: "📚 Learning Resources",
    description: "Share and discover the best books, courses, and tutorials",
    memberCount: 445,
    latestPost: "3 hours ago",
    pinned: false
  },
  {
    title: "🤝 Collaboration Hub",
    description: "Find project partners, mentors, and team members",
    memberCount: 234,
    latestPost: "4 hours ago",
    pinned: false
  }
]

const recentDiscussions = [
  {
    title: "How I Got My First Senior Engineer Role",
    author: "Sarah Chen",
    avatar: "SC",
    timeAgo: "2 hours ago",
    category: "Career",
    replies: 23,
    likes: 67,
    preview: "After 3 years as a mid-level developer, I finally made the jump to senior. Here's what I learned about the interview process and salary negotiation..."
  },
  {
    title: "React 19 Features I'm Most Excited About",
    author: "Alex Kim",
    avatar: "AK",
    timeAgo: "4 hours ago",
    category: "Technical",
    replies: 15,
    likes: 42,
    preview: "The React team has been working on some incredible improvements. Let's discuss the new features and how they'll change how we build apps..."
  },
  {
    title: "My Side Project Just Hit $1K MRR!",
    author: "Marcus Rodriguez",
    avatar: "MR",
    timeAgo: "6 hours ago",
    category: "Success Story",
    replies: 31,
    likes: 89,
    preview: "After 8 months of building nights and weekends, my SaaS tool finally crossed $1,000 in monthly recurring revenue. Here's the complete journey..."
  },
  {
    title: "Best Practices for API Error Handling",
    author: "Priya Patel",
    avatar: "PP",
    timeAgo: "1 day ago",
    category: "Technical",
    replies: 18,
    likes: 34,
    preview: "I've been thinking about standardizing error responses across our microservices. What patterns do you use for consistent error handling?"
  }
]

const upcomingEvents = [
  {
    title: "Virtual Coffee Chat",
    date: "Jan 15, 2025",
    time: "9:00 AM PST",
    type: "Social",
    attendees: 23,
    description: "Casual conversation with fellow developers over coffee"
  },
  {
    title: "Code Review Session",
    date: "Jan 17, 2025",
    time: "6:00 PM PST",
    type: "Learning",
    attendees: 15,
    description: "Live code review of community member projects"
  },
  {
    title: "Career AMA with Tech Lead",
    date: "Jan 20, 2025",
    time: "7:00 PM PST",
    type: "Career",
    attendees: 67,
    description: "Ask anything about growing from senior to staff engineer"
  }
]

const successStories = [
  {
    name: "Jennifer Liu",
    achievement: "Got promoted to Tech Lead",
    company: "Spotify",
    story: "The community helped me prepare for my promotion interview with mock sessions and feedback on my technical presentation.",
    timeframe: "3 months ago"
  },
  {
    name: "David Thompson",
    achievement: "Landed dream job at startup",
    company: "Vercel",
    story: "Found this opportunity through a community member who referred me. The interview prep resources here were incredible.",
    timeframe: "1 month ago"
  },
  {
    name: "Lisa Wang",
    achievement: "Launched successful side project",
    company: "Independent",
    story: "Built my SaaS with help from community code reviews and feedback. Now at $3K MRR and growing!",
    timeframe: "6 months ago"
  }
]

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-blue-500/20 text-blue-300 border-blue-400/30">
            👥 Developer Community
          </Badge>
          <h1 className="text-5xl font-bold text-white mb-6">
            Join the Developer Community
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Connect with 1,200+ developers sharing knowledge, reviewing code, and growing their careers together. 
            From junior to senior engineers, everyone is welcome.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex gap-4 justify-center mt-8">
            <Button asChild className="bg-blue-600 hover:bg-blue-700 px-8 py-3">
              <Link href="https://discord.gg/francirojas-dev" target="_blank">
                <MessageCircleIcon className="w-5 h-5 mr-2" />
                Join Discord
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-slate-600 text-slate-300 hover:bg-blue-500/20 px-8 py-3">
              <Link href="/newsletter">
                📬 Subscribe to Newsletter
              </Link>
            </Button>
          </div>
        </div>

        {/* Community Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {communityStats.map((stat, index) => (
            <Card key={index} className="bg-slate-800/50 backdrop-blur-sm border-slate-700 text-center">
              <CardContent className="p-6">
                <div className="text-blue-400 mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Recent Discussions */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                💬 Recent Discussions
              </h2>
              <div className="space-y-6">
                {recentDiscussions.map((discussion, index) => (
                  <Card key={index} className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-blue-500/50 transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3 flex-1">
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                            {discussion.avatar}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-semibold text-white">{discussion.author}</span>
                              <span className="text-xs text-slate-400">{discussion.timeAgo}</span>
                              <Badge variant="outline" className="text-xs border-slate-600 text-slate-400">
                                {discussion.category}
                              </Badge>
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">{discussion.title}</h3>
                            <p className="text-slate-300 text-sm line-clamp-2">{discussion.preview}</p>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-slate-400">
                          <span className="flex items-center gap-1">
                            <MessageCircleIcon className="w-4 h-4" />
                            {discussion.replies} replies
                          </span>
                          <span className="flex items-center gap-1">
                            <HeartIcon className="w-4 h-4" />
                            {discussion.likes} likes
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 hover:bg-blue-500/20">
                            Reply
                          </Button>
                          <Button size="sm" variant="ghost" className="text-slate-400 hover:text-blue-400">
                            <ShareIcon className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Success Stories */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                🏆 Success Stories
              </h2>
              <div className="space-y-6">
                {successStories.map((story, index) => (
                  <Card key={index} className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                          {story.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-semibold text-white">{story.name}</h3>
                            <Badge className="bg-green-500/20 text-green-300 border-green-400/30">
                              {story.achievement}
                            </Badge>
                          </div>
                          <div className="text-sm text-slate-400 mb-3">
                            {story.company} • {story.timeframe}
                          </div>
                          <p className="text-slate-300 text-sm italic">"{story.story}"</p>
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
            {/* Join CTA */}
            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-0">
              <CardContent className="p-6 text-center">
                <UsersIcon className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Join Our Discord</h3>
                <p className="text-blue-100 text-sm mb-4">
                  24/7 chat, code reviews, career advice, and daily developer discussions
                </p>
                <Button asChild variant="secondary" className="w-full bg-white text-blue-600 hover:bg-slate-100">
                  <Link href="https://discord.gg/francirojas-dev" target="_blank">
                    Join for Free
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Discussion Topics */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">🗂️ Discussion Topics</CardTitle>
                <CardDescription className="text-slate-300">
                  Active channels in our community
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {discussionTopics.map((topic, index) => (
                    <div key={index} className="p-3 bg-slate-900/50 rounded-lg border border-slate-700">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h4 className="font-semibold text-white text-sm mb-1">{topic.title}</h4>
                          <p className="text-xs text-slate-400 mb-2">{topic.description}</p>
                          <div className="flex items-center gap-3 text-xs text-slate-500">
                            <span>{topic.memberCount} members</span>
                            <span>Last: {topic.latestPost}</span>
                          </div>
                        </div>
                        {topic.pinned && (
                          <Badge variant="secondary" className="text-xs bg-yellow-500/20 text-yellow-300">
                            📌 Pinned
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <CalendarIcon className="w-5 h-5" />
                  Upcoming Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="p-3 bg-slate-900/50 rounded-lg border border-slate-700">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h4 className="font-semibold text-white text-sm mb-1">{event.title}</h4>
                          <p className="text-xs text-slate-400 mb-2">{event.description}</p>
                          <div className="flex items-center gap-2 text-xs text-slate-500">
                            <span>{event.date}</span>
                            <span>•</span>
                            <span>{event.time}</span>
                          </div>
                          <div className="text-xs text-slate-500 mt-1">
                            {event.attendees} attending
                          </div>
                        </div>
                        <Badge variant="outline" className="text-xs border-slate-600 text-slate-400">
                          {event.type}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Community Guidelines */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">📋 Community Guidelines</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    Be respectful and inclusive
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    Share knowledge freely
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    Ask questions, no matter the level
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    Help others when you can
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    No spam or self-promotion
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Resources */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">🛠️ Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button asChild variant="outline" size="sm" className="w-full justify-start border-slate-600 text-slate-300 hover:bg-blue-500/20">
                  <Link href="/resources">
                    📚 Developer Resources
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm" className="w-full justify-start border-slate-600 text-slate-300 hover:bg-blue-500/20">
                  <Link href="/blog">
                    📝 Read the Blog
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm" className="w-full justify-start border-slate-600 text-slate-300 hover:bg-blue-500/20">
                  <Link href="/newsletter">
                    📬 Join Newsletter
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
</rewritten_file>
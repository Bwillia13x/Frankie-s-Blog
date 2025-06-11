import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarIcon, MapPinIcon, UsersIcon, PlayIcon, ExternalLinkIcon, MicIcon } from "lucide-react"
import Link from "next/link"

const upcomingTalks = [
  {
    title: "Building Scalable React Applications at Enterprise Scale",
    event: "ReactConf 2025",
    date: "March 15, 2025",
    location: "San Francisco, CA",
    type: "Conference",
    attendees: "2,000+",
    description: "A deep dive into the architecture patterns and performance optimizations that help React applications serve millions of users.",
    topics: ["React", "Performance", "Architecture", "Scaling"],
    status: "confirmed"
  },
  {
    title: "The Future of Full-Stack Development",
    event: "TechTalk SF Meetup",
    date: "February 20, 2025",
    location: "San Francisco, CA",
    type: "Meetup",
    attendees: "150",
    description: "Exploring emerging trends in full-stack development and how AI is changing the way we build applications.",
    topics: ["Full-Stack", "AI", "Trends", "Future Tech"],
    status: "confirmed"
  }
]

const pastTalks = [
  {
    title: "Microservices Architecture: Lessons from the Trenches",
    event: "DevOps World 2024",
    date: "September 12, 2024",
    location: "Las Vegas, NV",
    type: "Conference",
    attendees: "3,500+",
    description: "Real-world experiences building and scaling microservices, including common pitfalls and best practices.",
    topics: ["Microservices", "DevOps", "Architecture", "Best Practices"],
    videoUrl: "https://youtube.com/watch?v=example1",
    slidesUrl: "https://slides.com/francisco/microservices-lessons",
    rating: 4.8,
    feedback: "Excellent practical insights with real-world examples that teams can implement immediately."
  },
  {
    title: "Modern API Design Patterns",
    event: "API World 2024",
    date: "June 8, 2024",
    location: "San Jose, CA",
    type: "Conference",
    attendees: "1,800+",
    description: "Best practices for designing APIs that developers love, including REST, GraphQL, and emerging patterns.",
    topics: ["API Design", "REST", "GraphQL", "Developer Experience"],
    videoUrl: "https://youtube.com/watch?v=example2",
    slidesUrl: "https://slides.com/francisco/api-design-patterns",
    rating: 4.9,
    feedback: "One of the most practical API talks I've ever attended. Clear examples and actionable advice."
  },
  {
    title: "Remote Team Leadership in Tech",
    event: "Remote Work Summit 2024",
    date: "April 15, 2024",
    location: "Virtual Event",
    type: "Summit",
    attendees: "500+",
    description: "Strategies for building and leading high-performing remote development teams.",
    topics: ["Remote Work", "Leadership", "Team Management", "Culture"],
    videoUrl: "https://youtube.com/watch?v=example3",
    slidesUrl: "https://slides.com/francisco/remote-leadership",
    rating: 4.7,
    feedback: "Francisco's insights on remote team dynamics were incredibly valuable for our distributed team."
  },
  {
    title: "Building Your First SaaS: A Technical Deep Dive",
    event: "Indie Hackers Meetup",
    date: "January 10, 2024",
    location: "San Francisco, CA",
    type: "Meetup",
    attendees: "80",
    description: "Technical considerations for indie developers building their first software-as-a-service product.",
    topics: ["SaaS", "Indie Development", "Architecture", "Startups"],
    slidesUrl: "https://slides.com/francisco/building-first-saas",
    rating: 4.6,
    feedback: "Great mix of technical depth and practical business advice. Perfect for aspiring indie developers."
  }
]

const speakingTopics = [
  {
    title: "React & Frontend Architecture",
    description: "Performance optimization, state management, and scaling React applications",
    icon: "⚛️",
    experience: "5+ talks"
  },
  {
    title: "Microservices & Backend Systems",
    description: "Distributed systems design, API architecture, and scalability patterns",
    icon: "🏗️",
    experience: "8+ talks"
  },
  {
    title: "Team Leadership & Remote Work",
    description: "Building high-performing teams, remote culture, and engineering management",
    icon: "👥",
    experience: "6+ talks"
  },
  {
    title: "Developer Experience & Productivity",
    description: "Tools, workflows, and practices that make developers more effective",
    icon: "🛠️",
    experience: "4+ talks"
  }
]

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Conference Organizer",
    company: "ReactConf",
    content: "Francisco was one of our highest-rated speakers. His technical depth combined with clear communication made complex topics accessible to everyone.",
    avatar: "SC"
  },
  {
    name: "Mike Rodriguez",
    role: "Engineering Director",
    company: "TechCorp",
    content: "After Francisco's talk on microservices, our team completely redesigned our architecture. The results have been incredible - 40% reduction in latency.",
    avatar: "MR"
  },
  {
    name: "Jennifer Wu",
    role: "Developer Relations Manager",
    company: "DevTools Inc",
    content: "Francisco has a unique ability to break down complex technical concepts into actionable insights. Our developers still reference his talk months later.",
    avatar: "JW"
  }
]

export default function SpeakingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-blue-500/20 text-blue-300 border-blue-400/30">
            🎤 Speaking Engagements
          </Badge>
          <h1 className="text-5xl font-bold text-white mb-6">
            Speaking & Talks
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            I love sharing knowledge with the developer community through conference talks, 
            meetups, and workshops. Here's where you can catch me speaking or watch my past presentations.
          </p>
          
          {/* Speaking Stats */}
          <div className="grid md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-1">25+</div>
              <div className="text-sm text-slate-400">Total Talks</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-1">10K+</div>
              <div className="text-sm text-slate-400">People Reached</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-1">15</div>
              <div className="text-sm text-slate-400">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-1">4.8</div>
              <div className="text-sm text-slate-400">Avg Rating</div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Upcoming Talks */}
            {upcomingTalks.length > 0 && (
              <section>
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                  📅 Upcoming Talks
                </h2>
                <div className="space-y-6">
                  {upcomingTalks.map((talk, index) => (
                    <Card key={index} className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-blue-500/50 transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <Badge className="mb-3 bg-green-500/20 text-green-300 border-green-400/30">
                              {talk.status === 'confirmed' ? '✓ Confirmed' : 'Pending'}
                            </Badge>
                            <CardTitle className="text-white mb-2">{talk.title}</CardTitle>
                            <CardDescription className="text-slate-300 mb-4">
                              {talk.description}
                            </CardDescription>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 mb-3">
                              <span className="flex items-center gap-1">
                                <CalendarIcon className="w-4 h-4" />
                                {talk.date}
                              </span>
                              <span className="flex items-center gap-1">
                                <MapPinIcon className="w-4 h-4" />
                                {talk.location}
                              </span>
                              <span className="flex items-center gap-1">
                                <UsersIcon className="w-4 h-4" />
                                {talk.attendees} attendees
                              </span>
                            </div>
                          </div>
                          <Badge variant="outline" className="border-slate-600 text-slate-400">
                            {talk.type}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-1 mb-4">
                          {talk.topics.map((topic) => (
                            <Badge key={topic} variant="secondary" className="text-xs bg-slate-700 text-slate-300">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                        <p className="text-sm text-slate-400">
                          Event: <span className="text-slate-300 font-medium">{talk.event}</span>
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            )}

            {/* Past Talks */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                🎥 Past Talks
              </h2>
              <div className="space-y-6">
                {pastTalks.map((talk, index) => (
                  <Card key={index} className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-blue-500/50 transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-white mb-2">{talk.title}</CardTitle>
                          <CardDescription className="text-slate-300 mb-4">
                            {talk.description}
                          </CardDescription>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 mb-3">
                            <span className="flex items-center gap-1">
                              <CalendarIcon className="w-4 h-4" />
                              {talk.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPinIcon className="w-4 h-4" />
                              {talk.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <UsersIcon className="w-4 h-4" />
                              {talk.attendees} attendees
                            </span>
                            <span className="flex items-center gap-1">
                              ⭐ {talk.rating}/5.0
                            </span>
                          </div>
                        </div>
                        <Badge variant="outline" className="border-slate-600 text-slate-400">
                          {talk.type}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {talk.topics.map((topic) => (
                          <Badge key={topic} variant="secondary" className="text-xs bg-slate-700 text-slate-300">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                      <div className="p-3 bg-slate-900/50 rounded-lg border border-slate-700 mb-4">
                        <p className="text-sm text-slate-300 italic">"{talk.feedback}"</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-slate-400">
                          <span className="text-slate-300 font-medium">{talk.event}</span>
                        </p>
                        <div className="flex gap-2">
                          {talk.videoUrl && (
                            <Button asChild size="sm" variant="outline" className="border-slate-600 text-slate-300 hover:bg-blue-500/20">
                              <Link href={talk.videoUrl} target="_blank">
                                <PlayIcon className="w-4 h-4 mr-1" />
                                Watch
                              </Link>
                            </Button>
                          )}
                          <Button asChild size="sm" variant="outline" className="border-slate-600 text-slate-300 hover:bg-blue-500/20">
                            <Link href={talk.slidesUrl} target="_blank">
                              <ExternalLinkIcon className="w-4 h-4 mr-1" />
                              Slides
                            </Link>
                          </Button>
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
            {/* Invite Me CTA */}
            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-0">
              <CardContent className="p-6 text-center">
                <MicIcon className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Invite Me to Speak</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Looking for a speaker for your event? I'd love to share my experience with your audience.
                </p>
                <Button asChild variant="secondary" className="w-full bg-white text-blue-600 hover:bg-slate-100">
                  <Link href="/contact">Get In Touch</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Speaking Topics */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">🎯 Speaking Topics</CardTitle>
                <CardDescription className="text-slate-300">
                  Areas I'm passionate about speaking on
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {speakingTopics.map((topic, index) => (
                    <div key={index} className="p-3 bg-slate-900/50 rounded-lg border border-slate-700">
                      <div className="flex items-start gap-3">
                        <div className="text-xl">{topic.icon}</div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-white text-sm mb-1">{topic.title}</h4>
                          <p className="text-xs text-slate-400 mb-2">{topic.description}</p>
                          <Badge variant="outline" className="text-xs border-slate-600 text-slate-500">
                            {topic.experience}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Testimonials */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">💬 What People Say</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="p-3 bg-slate-900/50 rounded-lg border border-slate-700">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
                          {testimonial.avatar}
                        </div>
                        <div className="flex-1">
                          <p className="text-xs text-slate-300 mb-2 italic">"{testimonial.content}"</p>
                          <div className="text-xs text-slate-400">
                            <span className="font-medium text-slate-300">{testimonial.name}</span>
                            <br />
                            {testimonial.role} at {testimonial.company}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Resources */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">📚 Resources</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button asChild variant="outline" size="sm" className="w-full justify-start border-slate-600 text-slate-300 hover:bg-blue-500/20">
                  <Link href="/blog">
                    📝 Read My Blog
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm" className="w-full justify-start border-slate-600 text-slate-300 hover:bg-blue-500/20">
                  <Link href="/resources">
                    🛠️ Developer Resources
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
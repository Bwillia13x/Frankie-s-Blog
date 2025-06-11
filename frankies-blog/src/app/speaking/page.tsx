import React from 'react';
import { Metadata } from 'next';
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLinkIcon, CalendarIcon, MapPinIcon, UsersIcon, PlayIcon, ClockIcon } from "lucide-react"
import Link from "next/link"
import { PageHeader, StatsGrid } from "@/components/common";
import { generatePageMetadata } from '@/lib/seo';
import { siteMetadata } from '@/lib/siteMetadata';

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata({
    title: `Speaking - ${siteMetadata.title}`,
    description: 'Speaking engagements, conference talks, and workshops on React, TypeScript, system design, and software architecture.',
    path: '/speaking',
  });
}

const speakingStats = [
  { id: 'talks', label: "Conference Talks", value: "25+", iconName: "Calendar" },
  { id: 'attendees', label: "Total Attendees", value: "12K+", iconName: "Users" },
  { id: 'workshops', label: "Workshops", value: "8", iconName: "Clock" },
  { id: 'podcasts', label: "Podcast Appearances", value: "15", iconName: "Play" }
];

const upcomingTalks = [
  {
    title: "Building Scalable React Applications",
    event: "React Conf 2025",
    date: "March 15, 2025",
    location: "San Francisco, CA",
    type: "Conference Talk",
    duration: "45 min",
    description: "Strategies for scaling React applications from 10K to 100K+ users with real-world case studies from TaskFlow Pro.",
    topics: ["React", "Performance", "Scaling", "Architecture"],
    status: "confirmed",
    attendees: "~1,500"
  },
  {
    title: "TypeScript Beyond the Basics",
    event: "TypeScript Summit",
    date: "April 8, 2025",
    location: "Virtual",
    type: "Workshop",
    duration: "3 hours",
    description: "Advanced TypeScript patterns, generic constraints, and type-level programming for building robust applications.",
    topics: ["TypeScript", "Advanced Patterns", "Type Safety"],
    status: "confirmed",
    attendees: "~300"
  },
  {
    title: "Microservices vs Monoliths: Decision Framework",
    event: "Architecture Summit",
    date: "May 20, 2025",
    location: "New York, NY",
    type: "Conference Talk",
    duration: "30 min",
    description: "A practical framework for deciding between microservices and monoliths based on team size, complexity, and business needs.",
    topics: ["Architecture", "Microservices", "Decision Making"],
    status: "proposed",
    attendees: "~800"
  }
];

const pastTalks = [
  {
    title: "React Performance: Beyond React.memo",
    event: "React Day Berlin 2024",
    date: "December 10, 2024",
    location: "Berlin, Germany",
    type: "Conference Talk",
    videoUrl: "https://youtube.com/watch?v=example1",
    slidesUrl: "https://slides.com/francisco/react-performance",
    description: "Deep dive into React performance optimization techniques including concurrent features, suspense, and advanced memoization patterns.",
    topics: ["React", "Performance", "Optimization"],
    attendees: "1,200",
    rating: 4.8
  },
  {
    title: "Full-Stack TypeScript Development",
    event: "JSConf EU 2024",
    date: "September 15, 2024",
    location: "Munich, Germany",
    type: "Workshop",
    videoUrl: "https://youtube.com/watch?v=example2",
    slidesUrl: "https://slides.com/francisco/fullstack-typescript",
    description: "Building end-to-end TypeScript applications with Next.js, Prisma, and type-safe APIs.",
    topics: ["TypeScript", "Full-Stack", "Next.js"],
    attendees: "150",
    rating: 4.9
  },
  {
    title: "State Management in Modern React",
    event: "React Miami 2024",
    date: "May 18, 2024",
    location: "Miami, FL",
    type: "Conference Talk",
    videoUrl: "https://youtube.com/watch?v=example3",
    slidesUrl: "https://slides.com/francisco/state-management",
    description: "Comparing state management solutions: Context, Zustand, Redux Toolkit, and Jotai for different use cases.",
    topics: ["React", "State Management", "Context"],
    attendees: "900",
    rating: 4.7
  },
  {
    title: "API Design Best Practices",
    event: "API World 2024",
    date: "April 12, 2024",
    location: "San Francisco, CA",
    type: "Conference Talk",
    videoUrl: "https://youtube.com/watch?v=example4",
    slidesUrl: "https://slides.com/francisco/api-design",
    description: "RESTful API design principles, versioning strategies, and GraphQL vs REST decision making.",
    topics: ["API Design", "REST", "GraphQL"],
    attendees: "700",
    rating: 4.6
  }
];

const talkTopics = [
  {
    category: "Frontend Development",
    topics: [
      "React Performance Optimization",
      "TypeScript Advanced Patterns",
      "State Management Strategies",
      "Modern CSS and Styling",
      "Build Tools and Bundlers"
    ]
  },
  {
    category: "Backend & Architecture",
    topics: [
      "API Design and REST vs GraphQL",
      "Microservices Architecture",
      "Database Design and Optimization",
      "Serverless and Edge Computing",
      "System Design Principles"
    ]
  },
  {
    category: "Team & Process",
    topics: [
      "Code Review Best Practices",
      "Technical Leadership",
      "Remote Team Management",
      "DevOps and CI/CD",
      "Testing Strategies"
    ]
  }
];

const testimonials = [
  {
    quote: "Francisco's talk on React performance was incredibly practical. I implemented his suggestions and saw immediate improvements in our app's performance.",
    author: "Sarah Chen",
    role: "Senior Developer",
    company: "Stripe",
    event: "React Day Berlin 2024"
  },
  {
    quote: "The TypeScript workshop was exactly what our team needed. Francisco's teaching style makes complex concepts accessible.",
    author: "Marcus Rodriguez",
    role: "Tech Lead",
    company: "Airbnb",
    event: "JSConf EU 2024"
  },
  {
    quote: "One of the best talks on system design I've attended. Great balance of theory and real-world experience.",
    author: "Alex Kim",
    role: "Engineering Manager",
    company: "Notion",
    event: "Architecture Summit 2024"
  }
];

export default function SpeakingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="container mx-auto px-4 py-12">
        <PageHeader
          title="Speaking & Workshops"
          description="I share insights from building scalable applications and leading development teams at conferences, workshops, and podcasts worldwide. Available for speaking engagements on React, TypeScript, architecture, and technical leadership."
          badgeText="🎤 Speaker"
        />

        {/* Speaking Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {speakingStats.map((stat) => (
            <Card key={stat.id} className="bg-slate-800/50 backdrop-blur-sm border-slate-700 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Upcoming Talks */}
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
                          <div className="flex items-center gap-2 mb-2">
                            <CardTitle className="text-white">{talk.title}</CardTitle>
                            <Badge 
                              variant={talk.status === 'confirmed' ? 'default' : 'outline'} 
                              className={talk.status === 'confirmed' ? 'bg-green-500/20 text-green-300' : 'border-yellow-500 text-yellow-300'}
                            >
                              {talk.status}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-slate-400 mb-3">
                            <span className="flex items-center gap-1">
                              <CalendarIcon className="w-4 h-4" />
                              {talk.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPinIcon className="w-4 h-4" />
                              {talk.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <ClockIcon className="w-4 h-4" />
                              {talk.duration}
                            </span>
                          </div>
                          <CardDescription className="text-slate-300 mb-3">
                            {talk.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {talk.topics.map((topic) => (
                          <Badge key={topic} variant="outline" className="text-xs border-slate-600 text-slate-400">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-slate-400">
                          <span className="font-semibold">{talk.event}</span> • {talk.attendees} expected attendees
                        </div>
                        <Badge variant="outline" className="border-slate-600 text-slate-400">
                          {talk.type}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Past Talks */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-8">
                🎥 Past Talks & Workshops
              </h2>
              <div className="space-y-6">
                {pastTalks.map((talk, index) => (
                  <Card key={index} className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-blue-500/50 transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-white mb-2">{talk.title}</CardTitle>
                          <div className="flex items-center gap-4 text-sm text-slate-400 mb-3">
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
                          <CardDescription className="text-slate-300 mb-3">
                            {talk.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {talk.topics.map((topic) => (
                          <Badge key={topic} variant="outline" className="text-xs border-slate-600 text-slate-400">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                          <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700">
                            <Link href={talk.videoUrl} target="_blank">
                              <PlayIcon className="w-4 h-4 mr-1" />
                              Watch Video
                            </Link>
                          </Button>
                          <Button asChild size="sm" variant="outline" className="border-slate-600 text-slate-300 hover:bg-blue-500/20">
                            <Link href={talk.slidesUrl} target="_blank">
                              <ExternalLinkIcon className="w-4 h-4 mr-1" />
                              View Slides
                            </Link>
                          </Button>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-yellow-400 text-sm">★ {talk.rating}</span>
                          <Badge variant="outline" className="border-slate-600 text-slate-400">
                            {talk.type}
                          </Badge>
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
            {/* Talk Topics */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">💡 Talk Topics</CardTitle>
                <CardDescription className="text-slate-300">
                  Areas I speak about
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {talkTopics.map((category, index) => (
                  <div key={index}>
                    <h4 className="font-semibold text-white text-sm mb-3">{category.category}</h4>
                    <div className="space-y-2">
                      {category.topics.map((topic, topicIndex) => (
                        <div key={topicIndex} className="text-xs text-slate-400 py-1">
                          • {topic}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Testimonials */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">💬 Feedback</CardTitle>
                <CardDescription className="text-slate-300">
                  What attendees say
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="p-4 bg-slate-900/50 rounded-lg border border-slate-700">
                    <p className="text-slate-300 text-sm mb-3 italic">"{testimonial.quote}"</p>
                    <div className="text-xs text-slate-400">
                      <div className="font-semibold text-slate-300">{testimonial.author}</div>
                      <div>{testimonial.role}, {testimonial.company}</div>
                      <div className="text-slate-500 mt-1">{testimonial.event}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Speaking Inquiry CTA */}
            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-0">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-2">Book Me to Speak</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Available for conferences, workshops, podcasts, and corporate events
                </p>
                <Button asChild variant="secondary" className="w-full bg-white text-blue-600 hover:bg-slate-100">
                  <Link href="/contact">
                    Speaking Inquiry
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">🔗 Speaking Resources</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button asChild variant="outline" size="sm" className="w-full justify-start border-slate-600 text-slate-300 hover:bg-blue-500/20">
                  <Link href="/blog">
                    📝 Read My Blog
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm" className="w-full justify-start border-slate-600 text-slate-300 hover:bg-blue-500/20">
                  <Link href="/projects">
                    💼 View Projects
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm" className="w-full justify-start border-slate-600 text-slate-300 hover:bg-blue-500/20">
                  <Link href="/newsletter">
                    📬 Newsletter
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
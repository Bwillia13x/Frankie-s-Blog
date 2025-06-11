import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import React, { useMemo } from 'react'; // Import useMemo
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarIcon, MapPinIcon, UsersIcon, PlayIcon, ExternalLinkIcon, MicIcon } from "lucide-react"
import Link from "next/link"
import { speakingEngagements } from "../../../lib/data/speakingEngagements";
import type { SpeakingEngagement } from "../../../types";
import { PageHeader, SocialProof, Testimonial } from "../../components/common";
import { generatePageMetadata } from '@/lib/seo';
import { siteMetadata } from '@/lib/siteMetadata';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata({
    title: `Speaking Engagements - ${siteMetadata.title}`,
    description: 'Discover past and upcoming speaking engagements, conferences, and workshops.',
    path: '/speaking',
  });
}

// speakingTopics remain as page-specific content for now.
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

// Original testimonials data structure
const pageTestimonials = [
  {
    id: "testimonial-sarah",
    name: "Sarah Chen",
    role: "Conference Organizer",
    company: "ReactConf",
    content: "Francisco was one of our highest-rated speakers. His technical depth combined with clear communication made complex topics accessible to everyone.",
    avatar: "SC"
  },
  {
    id: "testimonial-mike",
    name: "Mike Rodriguez",
    role: "Engineering Director",
    company: "TechCorp",
    content: "After Francisco's talk on microservices, our team completely redesigned our architecture. The results have been incredible - 40% reduction in latency.",
    avatar: "MR"
  },
  {
    id: "testimonial-jennifer",
    name: "Jennifer Wu",
    role: "Developer Relations Manager",
    company: "DevTools Inc",
    content: "Francisco has a unique ability to break down complex technical concepts into actionable insights. Our developers still reference his talk months later.",
    avatar: "JW"
  }
];

export default function SpeakingPage() {
  const upcomingTalks: SpeakingEngagement[] = useMemo(() =>
    speakingEngagements.filter(talk => talk.status === "confirmed" || talk.status === "upcoming" || talk.status === "pending"),
    [speakingEngagements]
  );
  const pastTalks: SpeakingEngagement[] = useMemo(() =>
    speakingEngagements.filter(talk => talk.status === "past"),
    [speakingEngagements]
  );

  const transformedTestimonials: Testimonial[] = useMemo(() =>
    pageTestimonials.map(t => ({
      id: t.id,
      name: t.name,
      role: t.role,
      company: t.company,
      content: t.content,
      avatar: t.avatar,
    })),
    [pageTestimonials] // Assuming pageTestimonials is stable (defined outside component or memoized itself if props)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="container mx-auto px-4 py-12">
        <PageHeader
          title="Speaking & Talks"
          description="I love sharing knowledge with the developer community through conference talks, meetups, and workshops. Here's where you can catch me speaking or watch my past presentations."
          badgeText="🎤 Speaking Engagements"
        />
          
        {/* Speaking Stats - Kept separate as PageHeader doesn't handle this complex middle content currently */}
        <div className="grid md:grid-cols-4 gap-6 mt-[-2rem] mb-16 max-w-4xl mx-auto"> {/* Adjusted margin */}
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

            {/* Testimonials replaced by SocialProof component */}
            <SocialProof
              testimonials={transformedTestimonials}
              title="💬 What People Say"
              className="py-0" // Remove default py-12 for in-sidebar use
              cardClassName="bg-slate-800/50 backdrop-blur-sm border-slate-700"
            />

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
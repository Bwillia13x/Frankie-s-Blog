import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { UsersIcon, MessageCircleIcon, TrophyIcon, CalendarIcon, ExternalLinkIcon, HeartIcon, ShareIcon, BookOpenIcon } from "lucide-react"
import Link from "next/link"
import {
  communityStatsData,
  discussionTopicsData,
  recentDiscussionsData,
  upcomingEventsData,
  successStoriesData,
  SuccessStory as SuccessStoryType
} from "../../../lib/data/communityData";
import { PageHeader, StatsGrid, SocialProof, Testimonial } from "../../components/common";
import { generatePageMetadata } from '@/lib/seo';
import { siteMetadata } from '@/lib/siteMetadata';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata({
    title: `Community - ${siteMetadata.title}`,
    description: 'Join our developer community to connect, learn, and grow together.',
    path: '/community',
  });
}

// Helper to map icon names to actual components for communityStats
const CommunityIconMap: { [key: string]: React.ElementType } = {
  UsersIcon,
  MessageCircleIcon,
  BookOpenIcon,
  TrophyIcon,
};

export default function CommunityPage() {
  const communityStats = communityStatsData.map(stat => ({ ...stat, id: stat.label }));
  const discussionTopics = discussionTopicsData;
  const recentDiscussions = recentDiscussionsData;
  const upcomingEvents = upcomingEventsData;

  const transformedSuccessStories: Testimonial[] = successStoriesData.map((story, index) => ({
    id: index,
    name: story.name,
    role: story.achievement, // Using achievement as role
    company: story.company,
    content: story.story,
    avatar: story.name.split(' ').map(n => n[0]).join(''), // Initials for avatar
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="container mx-auto px-4 py-12">
        <PageHeader
          title="Join the Developer Community"
          description="Connect with 1,200+ developers sharing knowledge, reviewing code, and growing their careers together. From junior to senior engineers, everyone is welcome."
          badgeText="👥 Developer Community"
        />

        {/* CTA Buttons - kept separate as PageHeader doesn't include generic children for this yet */}
        <div className="flex gap-4 justify-center mt-[-2rem] mb-16"> {/* Adjusted margin due to PageHeader's own margin-bottom */}
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

        <StatsGrid stats={communityStats} iconMap={CommunityIconMap} />

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

            <SocialProof testimonials={transformedSuccessStories} title="🏆 Success Stories" />

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
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MonitorIcon, KeyboardIcon, MouseIcon, HeadphonesIcon, CoffeeIcon, ExternalLinkIcon } from "lucide-react"
import Link from "next/link"
import { setupCategoriesData } from "../../../lib/data/setupItems";
import { PageHeader } from "../../components/common";
import { generatePageMetadata } from '@/lib/seo';
import { siteMetadata } from '@/lib/siteMetadata';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata({
    title: `What I Use - ${siteMetadata.title}`,
    description: 'A detailed look at the hardware, software, and tools I use daily.',
    path: '/uses',
  });
}

// workflowTips remains as page-specific content
const workflowTips = [
  {
    title: "Morning Routine",
    description: "I start each day by reviewing my Notion dashboard, checking GitHub notifications, and planning my top 3 priorities.",
    icon: "🌅"
  },
  {
    title: "Focus Sessions",
    description: "I use the Pomodoro Technique with 45-minute focused work sessions followed by 15-minute breaks.",
    icon: "⏰"
  },
  {
    title: "Code Reviews",
    description: "I dedicate specific times for reviewing PRs to maintain code quality without interrupting deep work.",
    icon: "👁️"
  },
  {
    title: "Learning Time",
    description: "I block 1 hour every Friday afternoon for exploring new technologies and updating my skills.",
    icon: "📚"
  }
]

// Helper to map icon names to actual components for setupCategories
const SetupIconMap: { [key: string]: React.ElementType } = {
  MonitorIcon,
  KeyboardIcon,
  MouseIcon, // Not used in current data but good to have if items change
  HeadphonesIcon, // Not used
  CoffeeIcon,
};

export default function UsesPage() {
  const setupCategories = setupCategoriesData;

  const pageDescription = (
    <>
      A detailed look at the hardware, software, and tools I use daily for development,
      productivity, and content creation. Updated regularly as my setup evolves.
      <div className="mt-6 text-sm text-slate-400">
        Last updated: January 11, 2025
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="container mx-auto px-4 py-12">
        <PageHeader
          title="What I Use"
          description={pageDescription}
          badgeText="⚙️ My Setup"
        />

        {/* Setup Categories */}
        <div className="space-y-16">
          {setupCategories.map((category) => {
            const IconComponent = category.iconName ? SetupIconMap[category.iconName] : null;
            return (
              <section key={category.id}>
                <div className="flex items-center gap-3 mb-8">
                  <div className="text-blue-400">
                    {IconComponent && <IconComponent className="w-6 h-6" />}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white">{category.name}</h2>
                    <p className="text-slate-300 mt-1">{category.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                {category.items.map((item, index) => (
                  <Card key={index} className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-blue-500/50 transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-white mb-2 flex items-center gap-2">
                            {item.name}
                            {item.price !== "Free" && (
                              <Badge variant="outline" className="text-xs border-slate-600 text-slate-400">
                                {item.price}
                              </Badge>
                            )}
                            {item.price === "Free" && (
                              <Badge className="text-xs bg-green-500/20 text-green-300 border-green-400/30">
                                Free
                              </Badge>
                            )}
                          </CardTitle>
                          <CardDescription className="text-slate-300">
                            {item.description}
                          </CardDescription>
                        </div>
                        <Button asChild size="sm" variant="ghost" className="text-slate-400 hover:text-blue-400">
                          <Link href={item.link} target="_blank">
                            <ExternalLinkIcon className="w-4 h-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="p-3 bg-slate-900/50 rounded-lg border border-slate-700">
                        <div className="text-sm text-slate-400 mb-1">Why I chose this:</div>
                        <div className="text-sm text-slate-300 italic">"{item.why}"</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Workflow Section */}
        <section className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              My <span className="text-blue-400">Workflow</span>
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Beyond tools, here are the processes and habits that keep me productive and focused.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {workflowTips.map((tip, index) => (
              <Card key={index} className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-2xl">{tip.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">{tip.title}</h3>
                      <p className="text-slate-300 text-sm">{tip.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Affiliate Disclaimer */}
        <section className="mt-16">
          <Card className="bg-slate-800/30 border-slate-700">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-semibold text-white mb-3">💡 Transparency Note</h3>
              <p className="text-slate-300 text-sm max-w-2xl mx-auto">
                Some links on this page may be affiliate links. This means I may earn a small commission 
                if you purchase through these links, at no additional cost to you. I only recommend products 
                I genuinely use and believe in. Your support helps me create more content like this!
              </p>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-0 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Questions About My Setup?</h3>
              <p className="text-blue-100 mb-6">
                I love talking about tools and productivity! Feel free to ask me anything about 
                my setup or suggest improvements.
              </p>
              <div className="flex gap-3 justify-center">
                <Button asChild variant="secondary" className="bg-white text-blue-600 hover:bg-slate-100">
                  <Link href="/contact">Get In Touch</Link>
                </Button>
                <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link href="/blog">Read My Blog</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
} 
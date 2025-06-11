import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MonitorIcon, KeyboardIcon, MouseIcon, HeadphonesIcon, CoffeeIcon, ExternalLinkIcon } from "lucide-react"
import Link from "next/link"

const setupCategories = [
  {
    id: "hardware",
    name: "Hardware & Desk Setup",
    icon: <MonitorIcon className="w-6 h-6" />,
    description: "My physical workspace and equipment",
    items: [
      {
        name: "MacBook Pro 14\" (M3 Pro)",
        description: "My main development machine with 18GB RAM and 512GB SSD",
        link: "https://apple.com/macbook-pro-14",
        price: "$2,199",
        why: "Perfect balance of performance and portability for development work"
      },
      {
        name: "LG UltraFine 27\" 4K Monitor",
        description: "Primary external display for coding and design work",
        link: "https://lg.com/us/monitors/lg-27up850-w",
        price: "$449",
        why: "Crisp text rendering and great color accuracy for UI work"
      },
      {
        name: "Herman Miller Aeron Chair",
        description: "Ergonomic office chair for long coding sessions",
        link: "https://hermanmiller.com/products/seating/office-chairs/aeron-chairs/",
        price: "$1,395",
        why: "Worth every penny for back health during 8+ hour coding days"
      },
      {
        name: "Keychron K3 Mechanical Keyboard",
        description: "Low-profile mechanical keyboard with brown switches",
        link: "https://keychron.com/products/keychron-k3-wireless-mechanical-keyboard",
        price: "$84",
        why: "Great tactile feedback without the noise of traditional mechanical keyboards"
      },
      {
        name: "Logitech MX Master 3S",
        description: "Wireless mouse with precision scrolling",
        link: "https://logitech.com/en-us/products/mice/mx-master-3s.html",
        price: "$99",
        why: "Best mouse I've ever used for productivity and precision work"
      },
      {
        name: "Sony WH-1000XM5 Headphones",
        description: "Noise-cancelling headphones for focus and calls",
        link: "https://sony.com/en/electronics/headband-headphones/wh-1000xm5",
        price: "$399",
        why: "Incredible noise cancellation for open office environments"
      }
    ]
  },
  {
    id: "software",
    name: "Development Software",
    icon: <KeyboardIcon className="w-6 h-6" />,
    description: "Tools and applications I use daily",
    items: [
      {
        name: "Visual Studio Code",
        description: "Primary code editor with custom extensions and theme",
        link: "https://code.visualstudio.com",
        price: "Free",
        why: "Unbeatable extension ecosystem and great TypeScript support"
      },
      {
        name: "iTerm2 + Oh My Zsh",
        description: "Terminal with custom shell configuration",
        link: "https://iterm2.com",
        price: "Free",
        why: "Much better than default Terminal with great customization options"
      },
      {
        name: "Docker Desktop",
        description: "Containerization for consistent development environments",
        link: "https://docker.com/products/docker-desktop",
        price: "Free",
        why: "Essential for microservices development and deployment"
      },
      {
        name: "Figma",
        description: "Design tool for UI/UX work and collaboration",
        link: "https://figma.com",
        price: "Free/Pro",
        why: "Best collaboration tool for working with designers"
      },
      {
        name: "Notion",
        description: "All-in-one workspace for notes and project management",
        link: "https://notion.so",
        price: "$8/month",
        why: "My second brain for everything from todos to documentation"
      },
      {
        name: "1Password",
        description: "Password manager and secure storage",
        link: "https://1password.com",
        price: "$2.99/month",
        why: "Essential for security with unique passwords for every service"
      }
    ]
  },
  {
    id: "productivity",
    name: "Productivity & Utilities",
    icon: <CoffeeIcon className="w-6 h-6" />,
    description: "Apps that keep me organized and efficient",
    items: [
      {
        name: "Raycast",
        description: "Spotlight replacement with powerful extensions",
        link: "https://raycast.com",
        price: "Free",
        why: "Lightning-fast app launcher with clipboard history and snippets"
      },
      {
        name: "CleanMyMac X",
        description: "System optimization and maintenance",
        link: "https://macpaw.com/cleanmymac",
        price: "$89.95",
        why: "Keeps my Mac running smoothly and frees up storage space"
      },
      {
        name: "Bartender 4",
        description: "Menu bar organization tool",
        link: "https://macbartender.com",
        price: "$16",
        why: "Cleans up the menu bar and hides less important icons"
      },
      {
        name: "RescueTime",
        description: "Automatic time tracking and productivity insights",
        link: "https://rescuetime.com",
        price: "$12/month",
        why: "Great for understanding where time goes and improving focus"
      },
      {
        name: "Spotify",
        description: "Music streaming for focus and background noise",
        link: "https://spotify.com",
        price: "$9.99/month",
        why: "Essential for maintaining focus during deep work sessions"
      },
      {
        name: "Arc Browser",
        description: "Modern browser with better tab management",
        link: "https://arc.net",
        price: "Free",
        why: "Revolutionary approach to browsing with spaces and sidebar organization"
      }
    ]
  }
]

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

export default function UsesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-blue-500/20 text-blue-300 border-blue-400/30">
            ⚙️ My Setup
          </Badge>
          <h1 className="text-5xl font-bold text-white mb-6">
            What I Use
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            A detailed look at the hardware, software, and tools I use daily for development, 
            productivity, and content creation. Updated regularly as my setup evolves.
          </p>
          <div className="mt-6 text-sm text-slate-400">
            Last updated: January 11, 2025
          </div>
        </div>

        {/* Setup Categories */}
        <div className="space-y-16">
          {setupCategories.map((category) => (
            <section key={category.id}>
              <div className="flex items-center gap-3 mb-8">
                <div className="text-blue-400">
                  {category.icon}
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
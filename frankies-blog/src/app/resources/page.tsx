import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLinkIcon, DownloadIcon, StarIcon, BookOpenIcon, CodeIcon, ToolIcon, GraduationCapIcon, RocketIcon } from "lucide-react"
import Link from "next/link"

const toolCategories = [
  {
    id: "development",
    name: "Development Tools",
    icon: <CodeIcon className="w-5 h-5" />,
    description: "Essential tools for modern web development",
    tools: [
      {
        name: "Visual Studio Code",
        description: "My go-to code editor with these essential extensions",
        category: "Editor",
        link: "https://code.visualstudio.com/",
        rating: 5,
        free: true,
        note: "Must-have extensions: Prettier, ESLint, GitLens, Thunder Client"
      },
      {
        name: "Figma",
        description: "For UI/UX design and prototyping",
        category: "Design",
        link: "https://figma.com",
        rating: 5,
        free: true,
        note: "Great for developer-designer collaboration"
      },
      {
        name: "Postman",
        description: "API development and testing",
        category: "API Testing",
        link: "https://postman.com",
        rating: 4,
        free: true,
        note: "Perfect for API documentation and testing"
      },
      {
        name: "Docker",
        description: "Containerization for consistent development environments",
        category: "DevOps",
        link: "https://docker.com",
        rating: 5,
        free: true,
        note: "Essential for modern deployment workflows"
      }
    ]
  },
  {
    id: "productivity",
    name: "Productivity & Organization",
    icon: <ToolIcon className="w-5 h-5" />,
    description: "Tools that help me stay organized and efficient",
    tools: [
      {
        name: "Notion",
        description: "All-in-one workspace for notes, docs, and project management",
        category: "Organization",
        link: "https://notion.so",
        rating: 5,
        free: true,
        note: "My second brain for everything"
      },
      {
        name: "Linear",
        description: "Issue tracking and project management for dev teams",
        category: "Project Management",
        link: "https://linear.app",
        rating: 5,
        free: false,
        note: "Best issue tracker I've used"
      },
      {
        name: "Loom",
        description: "Screen recording for async communication",
        category: "Communication",
        link: "https://loom.com",
        rating: 4,
        free: true,
        note: "Great for code reviews and demos"
      },
      {
        name: "RescueTime",
        description: "Automatic time tracking and productivity insights",
        category: "Time Management",
        link: "https://rescuetime.com",
        rating: 4,
        free: false,
        note: "Eye-opening productivity data"
      }
    ]
  }
]

const guides = [
  {
    title: "Complete React Performance Guide",
    description: "A comprehensive guide to optimizing React applications for scale",
    type: "Technical Guide",
    readTime: "25 min read",
    downloadUrl: "/guides/react-performance.pdf",
    topics: ["React", "Performance", "Optimization", "Best Practices"],
    featured: true
  },
  {
    title: "API Design Checklist",
    description: "30-point checklist for designing developer-friendly APIs",
    type: "Checklist",
    readTime: "5 min read",
    downloadUrl: "/guides/api-design-checklist.pdf",
    topics: ["API", "Backend", "REST", "Design"],
    featured: false
  },
  {
    title: "Remote Team Leadership Playbook",
    description: "Strategies and frameworks for leading distributed development teams",
    type: "Playbook",
    readTime: "20 min read",
    downloadUrl: "/guides/remote-leadership.pdf",
    topics: ["Leadership", "Remote Work", "Team Management"],
    featured: true
  },
  {
    title: "Modern CSS Layout Techniques",
    description: "From Grid to Flexbox to Container Queries - master them all",
    type: "Tutorial",
    readTime: "15 min read",
    downloadUrl: "/guides/css-layouts.pdf",
    topics: ["CSS", "Layout", "Frontend", "Modern Web"],
    featured: false
  }
]

const codeTemplates = [
  {
    name: "Next.js SaaS Starter",
    description: "Production-ready Next.js template with authentication, payments, and dashboard",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
    githubUrl: "https://github.com/franciscorojas/nextjs-saas-starter",
    demoUrl: "https://saas-demo.franciscorojas.dev",
    stars: 847,
    downloads: "12k+",
    featured: true
  },
  {
    name: "React Component Library",
    description: "Reusable component library built with TypeScript and Storybook",
    tech: ["React", "TypeScript", "Storybook", "Jest"],
    githubUrl: "https://github.com/franciscorojas/react-components",
    demoUrl: "https://components.franciscorojas.dev",
    stars: 234,
    downloads: "3.2k+",
    featured: false
  },
  {
    name: "Express API Boilerplate",
    description: "Scalable Express.js API with authentication, validation, and testing",
    tech: ["Express.js", "MongoDB", "JWT", "Jest"],
    githubUrl: "https://github.com/franciscorojas/express-api-boilerplate",
    demoUrl: "",
    stars: 156,
    downloads: "1.8k+",
    featured: false
  }
]

const learningResources = [
  {
    title: "My Developer Reading List",
    description: "Books that shaped my understanding of software engineering",
    type: "Book List",
    items: [
      "Clean Code by Robert Martin",
      "System Design Interview by Alex Xu",
      "The Pragmatic Programmer by David Thomas",
      "Building Microservices by Sam Newman"
    ]
  },
  {
    title: "Favorite YouTube Channels",
    description: "Channels I follow to stay updated with tech trends",
    type: "Video Content",
    items: [
      "Theo - t3.gg",
      "Web Dev Simplified",
      "Fireship",
      "The Primeagen"
    ]
  },
  {
    title: "Newsletter Subscriptions",
    description: "Weekly reads that keep me informed",
    type: "Newsletters",
    items: [
      "JavaScript Weekly",
      "React Status",
      "Node Weekly",
      "Frontend Focus"
    ]
  }
]

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-blue-500/20 text-blue-300 border-blue-400/30">
            🛠️ Developer Resources
          </Badge>
          <h1 className="text-5xl font-bold text-white mb-6">
            Tools, Guides & Templates
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            A curated collection of tools, guides, and resources I use daily to build better software. 
            Everything here has been battle-tested in real projects and teams.
          </p>
        </div>

        {/* Tools Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <ToolIcon className="w-8 h-8 text-blue-400" />
            Essential Tools
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {toolCategories.map((category) => (
              <Card key={category.id} className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-3">
                    {category.icon}
                    {category.name}
                  </CardTitle>
                  <CardDescription className="text-slate-300">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.tools.map((tool) => (
                      <div key={tool.name} className="p-4 bg-slate-900/50 rounded-lg border border-slate-700">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-semibold text-white">{tool.name}</h4>
                              {tool.free && (
                                <Badge variant="secondary" className="text-xs bg-green-500/20 text-green-300">
                                  Free
                                </Badge>
                              )}
                            </div>
                            <p className="text-sm text-slate-300 mb-2">{tool.description}</p>
                            <p className="text-xs text-slate-400 italic">{tool.note}</p>
                          </div>
                          <div className="flex items-center gap-2 ml-4">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <StarIcon 
                                  key={i} 
                                  className={`w-3 h-3 ${i < tool.rating ? 'text-yellow-400' : 'text-slate-600'}`}
                                  fill="currentColor"
                                />
                              ))}
                            </div>
                            <Button asChild size="sm" variant="outline" className="border-slate-600 text-slate-300 hover:bg-blue-500/20">
                              <Link href={tool.link} target="_blank">
                                <ExternalLinkIcon className="w-3 h-3" />
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Guides Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <BookOpenIcon className="w-8 h-8 text-blue-400" />
            Free Guides & Resources
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {guides.map((guide) => (
              <Card key={guide.title} className={`bg-slate-800/50 backdrop-blur-sm border-slate-700 ${guide.featured ? 'ring-2 ring-blue-500/30' : ''}`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <Badge variant="secondary" className="mb-3 bg-blue-500/20 text-blue-300">
                        {guide.type}
                      </Badge>
                      {guide.featured && (
                        <Badge className="mb-3 ml-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                          ⭐ Featured
                        </Badge>
                      )}
                      <CardTitle className="text-white mb-2">{guide.title}</CardTitle>
                      <CardDescription className="text-slate-300 mb-3">
                        {guide.description}
                      </CardDescription>
                      <div className="text-sm text-slate-400">{guide.readTime}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {guide.topics.map((topic) => (
                      <Badge key={topic} variant="outline" className="text-xs border-slate-600 text-slate-400">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                  <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                    <Link href={guide.downloadUrl}>
                      <DownloadIcon className="w-4 h-4 mr-2" />
                      Download Guide
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Code Templates Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <CodeIcon className="w-8 h-8 text-blue-400" />
            Code Templates & Starters
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {codeTemplates.map((template) => (
              <Card key={template.name} className={`bg-slate-800/50 backdrop-blur-sm border-slate-700 ${template.featured ? 'ring-2 ring-blue-500/30' : ''}`}>
                <CardHeader>
                  {template.featured && (
                    <Badge className="mb-2 w-fit bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                      ⭐ Popular
                    </Badge>
                  )}
                  <CardTitle className="text-white">{template.name}</CardTitle>
                  <CardDescription className="text-slate-300">
                    {template.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {template.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs border-slate-600 text-slate-400">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                    <span className="flex items-center gap-1">
                      <StarIcon className="w-4 h-4" />
                      {template.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <DownloadIcon className="w-4 h-4" />
                      {template.downloads}
                    </span>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button asChild size="sm" className="flex-1 bg-slate-700 hover:bg-slate-600">
                      <Link href={template.githubUrl} target="_blank">
                        GitHub
                      </Link>
                    </Button>
                    {template.demoUrl && (
                      <Button asChild size="sm" variant="outline" className="border-slate-600 text-slate-300">
                        <Link href={template.demoUrl} target="_blank">
                          Demo
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Learning Resources Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <GraduationCapIcon className="w-8 h-8 text-blue-400" />
            Learning Resources
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {learningResources.map((resource) => (
              <Card key={resource.title} className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">{resource.title}</CardTitle>
                  <CardDescription className="text-slate-300">
                    {resource.description}
                  </CardDescription>
                  <Badge variant="secondary" className="w-fit bg-blue-500/20 text-blue-300">
                    {resource.type}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {resource.items.map((item) => (
                      <li key={item} className="text-slate-300 text-sm flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-0 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <RocketIcon className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Want More Resources?</h3>
              <p className="text-blue-100 mb-6">
                Join my newsletter to get exclusive templates, guides, and tools delivered to your inbox weekly.
              </p>
              <div className="flex gap-2 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="your@email.com" 
                  className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <Button variant="secondary" className="bg-white text-blue-600 hover:bg-slate-100">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-blue-200 mt-2">No spam, unsubscribe anytime</p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
} 
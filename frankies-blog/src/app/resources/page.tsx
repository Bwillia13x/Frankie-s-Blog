import React from 'react';
import { Metadata } from 'next';
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLinkIcon, StarIcon, DownloadIcon, GitForkIcon } from "lucide-react"
import Link from "next/link"
import { PageHeader } from "@/components/common";
import { generatePageMetadata } from '@/lib/seo';
import { siteMetadata } from '@/lib/siteMetadata';

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata({
    title: `Developer Resources - ${siteMetadata.title}`,
    description: 'A curated collection of developer tools, libraries, and resources to accelerate your development workflow.',
    path: '/resources',
  });
}

const codeTemplates = [
  {
    name: "Next.js 14 Starter",
    description: "Production-ready Next.js template with TypeScript, Tailwind CSS, and essential configurations",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/francisco/nextjs-starter",
    demoUrl: "https://nextjs-starter-demo.vercel.app",
    stars: 1247,
    downloads: "15k+",
    featured: true
  },
  {
    name: "React Component Library",
    description: "Reusable React components with Storybook documentation and comprehensive testing",
    tech: ["React", "Storybook", "Jest"],
    githubUrl: "https://github.com/francisco/react-components",
    stars: 892,
    downloads: "8k+",
    featured: true
  },
  {
    name: "Node.js API Boilerplate",
    description: "Scalable REST API template with authentication, database integration, and deployment configs",
    tech: ["Node.js", "Express", "PostgreSQL"],
    githubUrl: "https://github.com/francisco/api-boilerplate",
    stars: 634,
    downloads: "12k+",
    featured: false
  }
];

const developerTools = [
  {
    category: "Development Environment",
    tools: [
      { name: "VS Code Extensions", description: "My curated list of essential VS Code extensions", type: "guide" },
      { name: "Terminal Setup", description: "Zsh + Oh My Zsh configuration for productivity", type: "config" },
      { name: "Git Workflow", description: "Branch strategy and commit conventions I use", type: "guide" }
    ]
  },
  {
    category: "Design & UI",
    tools: [
      { name: "Figma Component System", description: "Design system components for rapid prototyping", type: "template" },
      { name: "Tailwind Config", description: "Custom Tailwind configuration with design tokens", type: "config" },
      { name: "Icon Collection", description: "Curated SVG icons optimized for web", type: "assets" }
    ]
  },
  {
    category: "Backend & DevOps",
    tools: [
      { name: "Docker Templates", description: "Multi-stage Dockerfiles for different tech stacks", type: "template" },
      { name: "CI/CD Workflows", description: "GitHub Actions workflows for automated deployment", type: "config" },
      { name: "Database Schemas", description: "Common database patterns and migrations", type: "template" }
    ]
  }
];

const learningResources = [
  {
    title: "System Design Fundamentals",
    description: "Learn how to design scalable systems through real-world examples",
    type: "Course",
    level: "Intermediate",
    duration: "6 hours",
    link: "/blog/system-design-series"
  },
  {
    title: "React Performance Optimization",
    description: "Advanced techniques to optimize React applications for production",
    type: "Workshop",
    level: "Advanced",
    duration: "4 hours",
    link: "/blog/react-performance"
  },
  {
    title: "Full-Stack Development Path",
    description: "Complete roadmap from beginner to senior full-stack developer",
    type: "Guide",
    level: "All Levels",
    duration: "Self-paced",
    link: "/blog/fullstack-roadmap"
  }
];

export default function ResourcesPage() {
  const featuredTemplates = codeTemplates.filter(template => template.featured);
  const allTemplates = codeTemplates.filter(template => !template.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="container mx-auto px-4 py-12">
        <PageHeader
          title="Developer Resources"
          description="A curated collection of tools, templates, and resources I've built and use daily to accelerate development workflows. Free and open-source for the community."
          badgeText="🛠️ Tools & Resources"
        />

        {/* Featured Code Templates */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            ⭐ Featured Templates
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredTemplates.map((template, index) => (
              <Card key={index} className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-blue-500/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-white flex items-center gap-2">
                        {template.name}
                        <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-300">
                          Featured
                        </Badge>
                      </CardTitle>
                      <CardDescription className="text-slate-300 mt-2">
                        {template.description}
                      </CardDescription>
                    </div>
                  </div>
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
                    <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700">
                      <Link href={template.githubUrl} target="_blank">
                        <GitForkIcon className="w-4 h-4 mr-1" />
                        Use Template
                      </Link>
                    </Button>
                    {template.demoUrl && (
                      <Button asChild size="sm" variant="outline" className="border-slate-600 text-slate-300 hover:bg-blue-500/20">
                        <Link href={template.demoUrl} target="_blank">
                          <ExternalLinkIcon className="w-4 h-4 mr-1" />
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

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Developer Tools */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-8">
                🔧 Developer Tools
              </h2>
              <div className="space-y-8">
                {developerTools.map((category, categoryIndex) => (
                  <div key={categoryIndex}>
                    <h3 className="text-xl font-semibold text-white mb-4">{category.category}</h3>
                    <div className="grid gap-4">
                      {category.tools.map((tool, toolIndex) => (
                        <Card key={toolIndex} className="bg-slate-800/30 backdrop-blur-sm border-slate-700 hover:border-blue-500/30 transition-all duration-300">
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                              <div className="flex-1">
                                <h4 className="font-semibold text-white mb-1">{tool.name}</h4>
                                <p className="text-sm text-slate-300">{tool.description}</p>
                              </div>
                              <Badge variant="outline" className="text-xs border-slate-600 text-slate-400 ml-4">
                                {tool.type}
                              </Badge>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Learning Resources */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-8">
                📚 Learning Resources
              </h2>
              <div className="space-y-4">
                {learningResources.map((resource, index) => (
                  <Card key={index} className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-blue-500/50 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-lg font-semibold text-white">{resource.title}</h3>
                            <Badge variant="outline" className="text-xs border-slate-600 text-slate-400">
                              {resource.type}
                            </Badge>
                          </div>
                          <p className="text-slate-300 text-sm mb-3">{resource.description}</p>
                          <div className="flex items-center gap-4 text-xs text-slate-400">
                            <span>Level: {resource.level}</span>
                            <span>Duration: {resource.duration}</span>
                          </div>
                        </div>
                        <Button asChild size="sm" variant="outline" className="border-slate-600 text-slate-300 hover:bg-blue-500/20 ml-4">
                          <Link href={resource.link}>
                            <ExternalLinkIcon className="w-4 h-4 mr-1" />
                            View
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Links */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">🔗 Quick Links</CardTitle>
                <CardDescription className="text-slate-300">
                  Frequently accessed resources
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button asChild variant="outline" size="sm" className="w-full justify-start border-slate-600 text-slate-300 hover:bg-blue-500/20">
                  <Link href="/blog">
                    📝 Technical Blog
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm" className="w-full justify-start border-slate-600 text-slate-300 hover:bg-blue-500/20">
                  <Link href="/projects">
                    💼 Portfolio Projects
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm" className="w-full justify-start border-slate-600 text-slate-300 hover:bg-blue-500/20">
                  <Link href="/uses">
                    🛠️ Tools I Use
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm" className="w-full justify-start border-slate-600 text-slate-300 hover:bg-blue-500/20">
                  <Link href="/community">
                    👥 Join Community
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* All Templates */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">📦 More Templates</CardTitle>
                <CardDescription className="text-slate-300">
                  Additional code templates and starters
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {allTemplates.map((template, index) => (
                  <div key={index} className="p-3 bg-slate-900/50 rounded-lg border border-slate-700">
                    <h4 className="font-semibold text-white text-sm mb-2">{template.name}</h4>
                    <p className="text-xs text-slate-400 mb-2">{template.description}</p>
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <div className="flex items-center gap-2">
                        <span className="flex items-center gap-1">
                          <StarIcon className="w-3 h-3" />
                          {template.stars}
                        </span>
                        <span>{template.downloads}</span>
                      </div>
                      <Button asChild size="sm" variant="ghost" className="h-6 px-2 text-xs">
                        <Link href={template.githubUrl} target="_blank">
                          View
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Contact CTA */}
            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-0">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-2">Need Custom Solutions?</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Looking for custom templates or consulting on your project architecture?
                </p>
                <Button asChild variant="secondary" className="w-full bg-white text-blue-600 hover:bg-slate-100">
                  <Link href="/contact">
                    Get In Touch
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
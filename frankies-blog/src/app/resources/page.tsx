import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLinkIcon, DownloadIcon, StarIcon, BookOpenIcon, CodeIcon, ToolIcon, GraduationCapIcon, RocketIcon } from "lucide-react"
import Link from "next/link"
import {
  toolCategoriesData,
  guidesData,
  codeTemplatesData,
  learningResourcesData
} from "../../../lib/data/resources";
import { PageHeader, NewsletterCTA } from "../../components/common";
import { generatePageMetadata } from '@/lib/seo';
import { siteMetadata } from '@/lib/siteMetadata';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata({
    title: `Developer Resources - ${siteMetadata.title}`,
    description: 'A curated collection of tools, guides, and templates for software developers.',
    path: '/resources',
  });
}

// Helper to map icon names to actual components
const IconMap: { [key: string]: React.ElementType } = {
  CodeIcon,
  ToolIcon,
};

export default function ResourcesPage() {
  const toolCategories = toolCategoriesData;
  const guides = guidesData;
  const codeTemplates = codeTemplatesData;
  const learningResources = learningResourcesData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="container mx-auto px-4 py-12">
        <PageHeader
          title="Tools, Guides & Templates"
          description="A curated collection of tools, guides, and resources I use daily to build better software. Everything here has been battle-tested in real projects and teams."
          badgeText="🛠️ Developer Resources"
        />

        {/* Tools Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <ToolIcon className="w-8 h-8 text-blue-400" />
            Essential Tools
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {toolCategories.map((category) => {
              const IconComponent = category.iconName ? IconMap[category.iconName] : null;
              return (
                <Card key={category.id} className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-3">
                      {IconComponent && <IconComponent className="w-5 h-5" />}
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
          <NewsletterCTA
            title="Want More Resources?"
            description="Join my newsletter to get exclusive templates, guides, and tools delivered to your inbox weekly."
            buttonText="Subscribe"
            // Assuming NewsletterCTA's default card style is desired, otherwise, adjust variant and className.
            // The input field styling in NewsletterCTA is slightly different, but acceptable for this refactor.
            // The RocketIcon is not part of the generic NewsletterCTA, but the MailIcon is.
            className="bg-gradient-to-r from-blue-600 to-purple-600 border-0 max-w-2xl mx-auto"
            // To make the input and button more similar to the original:
            // Pass custom styling through props if NewsletterCTA supports it, or accept the default.
            // For now, I'm using the default NewsletterCTA styling.
          />
        </section>
      </div>
    </div>
  )
}
import React from 'react';
import { Metadata } from 'next';
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLinkIcon, MonitorIcon, KeyboardIcon, MouseIcon } from "lucide-react"
import Link from "next/link"
import { PageHeader } from "@/components/common";
import { generatePageMetadata } from '@/lib/seo';
import { siteMetadata } from '@/lib/siteMetadata';

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata({
    title: `Uses - ${siteMetadata.title}`,
    description: 'The tools, software, and hardware that I use for development, design, and productivity.',
    path: '/uses',
  });
}

const categories = [
  {
    title: 'Development Tools',
    items: [
      {
        name: 'Visual Studio Code',
        description: 'My go-to code editor with custom themes and extensions for maximum productivity.',
        link: 'https://code.visualstudio.com/',
      },
      {
        name: 'iTerm2',
        description: 'Terminal replacement for macOS with better customization and features.',
        link: 'https://iterm2.com/',
      },
      {
        name: 'GitHub Desktop',
        description: 'For complex git operations and visualizing repository changes.',
        link: 'https://desktop.github.com/',
      },
      {
        name: 'Postman',
        description: 'API development and testing tool for building and testing APIs.',
        link: 'https://www.postman.com/',
      },
    ],
  },
  {
    title: 'Languages & Frameworks',
    items: [
      {
        name: 'TypeScript',
        description: 'Primary language for all new projects. Provides excellent type safety and developer experience.',
        link: 'https://www.typescriptlang.org/',
      },
      {
        name: 'Next.js',
        description: 'My framework of choice for React applications with great performance and DX.',
        link: 'https://nextjs.org/',
      },
      {
        name: 'Tailwind CSS',
        description: 'Utility-first CSS framework that speeds up styling significantly.',
        link: 'https://tailwindcss.com/',
      },
      {
        name: 'Node.js',
        description: 'Runtime for backend APIs and tooling, with Express or Fastify frameworks.',
        link: 'https://nodejs.org/',
      },
    ],
  },
  {
    title: 'Design & Media',
    items: [
      {
        name: 'Figma',
        description: 'Collaborative design tool for creating mockups, prototypes, and design systems.',
        link: 'https://figma.com/',
      },
      {
        name: 'Unsplash',
        description: 'High-quality stock photos for projects and design inspiration.',
        link: 'https://unsplash.com/',
      },
      {
        name: 'Heroicons',
        description: 'Beautiful hand-crafted SVG icons made by the makers of Tailwind CSS.',
        link: 'https://heroicons.com/',
      },
      {
        name: 'Excalidraw',
        description: 'Virtual collaborative whiteboard for sketching hand-drawn like diagrams.',
        link: 'https://excalidraw.com/',
      },
    ],
  },
  {
    title: 'Productivity',
    items: [
      {
        name: 'Notion',
        description: 'All-in-one workspace for notes, project management, and knowledge base.',
        link: 'https://notion.so/',
      },
      {
        name: 'Obsidian',
        description: 'Knowledge management and note-taking app with powerful linking capabilities.',
        link: 'https://obsidian.md/',
      },
      {
        name: 'CleanMyMac X',
        description: 'Mac optimization and cleaning tool to keep my system running smoothly.',
        link: 'https://cleanmymac.com/',
      },
      {
        name: 'Rectangle',
        description: 'Window management tool for macOS to organize and resize windows efficiently.',
        link: 'https://rectangleapp.com/',
      },
    ],
  },
  {
    title: 'Hardware',
    items: [
      {
        name: 'MacBook Pro M1',
        description: '14-inch MacBook Pro with M1 Pro chip, 16GB RAM, and 512GB SSD.',
        link: 'https://apple.com/macbook-pro/',
      },
      {
        name: 'LG UltraWide Monitor',
        description: '34-inch curved ultrawide monitor for immersive coding and multitasking.',
        link: 'https://lg.com/monitors',
      },
      {
        name: 'Mechanical Keyboard',
        description: 'Custom mechanical keyboard with Cherry MX switches for optimal typing experience.',
        link: '#',
      },
      {
        name: 'AirPods Pro',
        description: 'Wireless earbuds with active noise cancellation for focused work sessions.',
        link: 'https://apple.com/airpods-pro/',
      },
    ],
  },
]

export default function UsesPage() {
  return (
    <div className="px-40 flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="@container">
          <div className="@[480px]:p-4">
            <div className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10 bg-[#111b22]">
              <div className="flex flex-col gap-2 text-left">
                <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                  Uses
                </h1>
                <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                  The tools, software, and hardware that power my development workflow
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* Tools Categories */}
        <div className="flex flex-col gap-10 px-4 py-10">
          {categories.map((category) => (
            <div key={category.title} className="flex flex-col gap-6">
              <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3">
                {category.title}
              </h2>
              <div className="grid grid-cols-1 gap-4 @[480px]:grid-cols-2">
                {category.items.map((item) => (
                  <div key={item.name} className="flex flex-col gap-3 p-4 bg-[#243947]/30 rounded-lg hover:bg-[#243947]/50 transition-colors">
                    <div className="flex items-center justify-between">
                      <h3 className="text-white font-semibold">{item.name}</h3>
                      {item.link !== '#' && (
                        <a 
                          href={item.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-[#1993e5] hover:text-white transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                    </div>
                    <p className="text-[#93b3c8] text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="flex px-4 py-6 justify-center">
          <div className="bg-[#243947]/30 rounded-lg p-6 text-center max-w-2xl">
            <h3 className="text-white font-semibold mb-2">Constantly Evolving</h3>
            <p className="text-[#93b3c8] text-sm leading-relaxed">
              This list is constantly evolving as I discover new tools and refine my workflow. 
              I'm always open to recommendations for tools that could improve productivity and development experience.
            </p>
            <div className="mt-4">
              <a href="/contact" className="text-[#1993e5] hover:text-white transition-colors text-sm font-medium">
                Suggest a tool →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 
'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  content: string;
  className?: string;
}

export function TableOfContents({ content, className }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // Parse headings from content
    const headingRegex = /<h([1-6])[^>]*id="([^"]*)"[^>]*>([^<]*)</g;
    const matches: TOCItem[] = [];
    let match;

    while ((match = headingRegex.exec(content)) !== null) {
      matches.push({
        id: match[2],
        text: match[3].trim(),
        level: parseInt(match[1])
      });
    }

    setHeadings(matches);
  }, [content]);

  useEffect(() => {
    // Handle scroll to update active heading
    const handleScroll = () => {
      const headingElements = headings.map(h => document.getElementById(h.id)).filter(Boolean);
      
      const current = headingElements.find(element => {
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (current) {
        setActiveId(current.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [headings]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (headings.length === 0) return null;

  return (
    <div className={cn("sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto", className)}>
      <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-lg p-4">
        <h3 className="text-sm font-semibold text-white mb-3">Table of Contents</h3>
        <nav className="space-y-1">
          {headings.map((heading) => (
            <button
              key={heading.id}
              onClick={() => scrollToHeading(heading.id)}
              className={cn(
                "block w-full text-left text-sm transition-colors duration-200 hover:text-blue-300 py-1",
                heading.level === 1 ? "pl-0" : 
                heading.level === 2 ? "pl-3" : 
                heading.level === 3 ? "pl-6" : "pl-9",
                activeId === heading.id
                  ? "text-blue-400 font-medium"
                  : "text-slate-400"
              )}
            >
              {heading.text}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
} 
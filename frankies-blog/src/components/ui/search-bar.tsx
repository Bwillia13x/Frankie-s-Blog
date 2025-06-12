'use client';

import { useState, useEffect, useRef } from 'react';
import { Search, X, Filter } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { BlogPost } from '@/types';
import Link from 'next/link';

interface SearchBarProps {
  posts: BlogPost[];
  onSearch?: (results: BlogPost[]) => void;
  className?: string;
}

interface SearchFilters {
  category?: string;
  tags?: string[];
  readTimeRange?: 'short' | 'medium' | 'long';
}

export function SearchBar({ posts, onSearch, className }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState<BlogPost[]>([]);
  const [filters, setFilters] = useState<SearchFilters>({});
  const [showFilters, setShowFilters] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Get unique categories and tags for filters
  const categories = Array.from(new Set(posts.map(post => post.category)));
  const allTags = Array.from(new Set(posts.flatMap(post => post.tags)));

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setShowFilters(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (query.length === 0) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    // Simple fuzzy search implementation
    const searchResults = posts.filter(post => {
      const searchText = `${post.title} ${post.excerpt} ${post.tags.join(' ')} ${post.category}`.toLowerCase();
      const queryWords = query.toLowerCase().split(' ');
      
      // Check if all query words are found in the search text
      const matchesQuery = queryWords.every(word => 
        searchText.includes(word) || 
        // Fuzzy matching - allow for small typos
        searchText.split(' ').some(textWord => 
          textWord.includes(word) || word.includes(textWord)
        )
      );

      if (!matchesQuery) return false;

      // Apply filters
      if (filters.category && post.category !== filters.category) return false;
      
      if (filters.tags && filters.tags.length > 0) {
        const hasMatchingTag = filters.tags.some(tag => post.tags.includes(tag));
        if (!hasMatchingTag) return false;
      }

      if (filters.readTimeRange) {
        const readTimeMinutes = parseInt(post.readTime.split(' ')[0]);
        switch (filters.readTimeRange) {
          case 'short':
            if (readTimeMinutes > 5) return false;
            break;
          case 'medium':
            if (readTimeMinutes <= 5 || readTimeMinutes > 15) return false;
            break;
          case 'long':
            if (readTimeMinutes <= 15) return false;
            break;
        }
      }

      return true;
    });

    setResults(searchResults.slice(0, 5)); // Limit to 5 results
    setIsOpen(searchResults.length > 0);
    
    if (onSearch) {
      onSearch(searchResults);
    }
  }, [query, filters, posts, onSearch]);

  const clearSearch = () => {
    setQuery('');
    setResults([]);
    setIsOpen(false);
    setFilters({});
  };

  const highlightMatch = (text: string, query: string) => {
    if (!query) return text;
    
    const queryWords = query.toLowerCase().split(' ');
    let highlightedText = text;
    
    queryWords.forEach(word => {
      const regex = new RegExp(`(${word})`, 'gi');
      highlightedText = highlightedText.replace(regex, '<mark class="bg-blue-200 dark:bg-blue-800">$1</mark>');
    });
    
    return highlightedText;
  };

  return (
    <div ref={searchRef} className={cn("relative", className)}>
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query && setIsOpen(true)}
          placeholder="Search articles..."
          className="w-full pl-10 pr-20 py-2 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
        
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={cn(
              "p-1 rounded hover:bg-slate-700 transition-colors",
              showFilters ? "text-blue-400" : "text-slate-400"
            )}
          >
            <Filter className="w-4 h-4" />
          </button>
          
          {query && (
            <button
              onClick={clearSearch}
              className="p-1 rounded hover:bg-slate-700 transition-colors text-slate-400"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Filters */}
      {showFilters && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-slate-800 border border-slate-600 rounded-lg p-4 z-50">
          <div className="space-y-4">
            <div>
              <label className="text-sm text-slate-300 mb-2 block">Category</label>
              <select
                value={filters.category || ''}
                onChange={(e) => setFilters(prev => ({ ...prev, category: e.target.value || undefined }))}
                className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-1 text-sm text-white"
              >
                <option value="">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-sm text-slate-300 mb-2 block">Reading Time</label>
              <select
                value={filters.readTimeRange || ''}
                onChange={(e) => setFilters(prev => ({ ...prev, readTimeRange: e.target.value as any || undefined }))}
                className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-1 text-sm text-white"
              >
                <option value="">Any Length</option>
                <option value="short">Quick Read (≤5 min)</option>
                <option value="medium">Medium Read (5-15 min)</option>
                <option value="long">Long Read (&gt;15 min)</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Search Results */}
      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-slate-800 border border-slate-600 rounded-lg shadow-lg z-40 max-h-80 overflow-y-auto">
          {results.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block p-4 hover:bg-slate-700 transition-colors border-b border-slate-600 last:border-b-0"
              onClick={() => setIsOpen(false)}
            >
              <h4 
                className="font-medium text-white mb-1"
                dangerouslySetInnerHTML={{ __html: highlightMatch(post.title, query) }}
              />
              <p 
                className="text-sm text-slate-400 line-clamp-2"
                dangerouslySetInnerHTML={{ __html: highlightMatch(post.excerpt, query) }}
              />
              <div className="flex items-center gap-2 mt-2">
                <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">
                  {post.category}
                </span>
                <span className="text-xs text-slate-500">{post.readTime}</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
} 
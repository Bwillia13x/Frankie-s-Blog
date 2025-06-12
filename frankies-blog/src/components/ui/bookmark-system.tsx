'use client';

import React, { useState, useEffect } from 'react';
import { 
  Bookmark, 
  BookmarkCheck, 
  BookOpen, 
  Clock, 
  Tag, 
  Calendar,
  Trash2,
  ExternalLink,
  Search,
  Filter
} from 'lucide-react';
import { Button } from './button';
import { Card, CardContent, CardHeader, CardTitle } from './card';
import { Badge } from './badge';
import { ReadingTime } from './reading-time';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export interface BookmarkedPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  publishedAt: string;
  bookmarkedAt: number;
  isRead?: boolean;
  notes?: string;
}

interface BookmarkButtonProps {
  post: {
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    category: string;
    tags: string[];
    publishedAt: string;
  };
  className?: string;
  size?: 'default' | 'sm' | 'lg';
  showLabel?: boolean;
}

// Hook for bookmark functionality
export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState<BookmarkedPost[]>([]);

  useEffect(() => {
    const savedBookmarks = localStorage.getItem('blog-bookmarks');
    if (savedBookmarks) {
      setBookmarks(JSON.parse(savedBookmarks));
    }
  }, []);

  const saveBookmarks = (newBookmarks: BookmarkedPost[]) => {
    setBookmarks(newBookmarks);
    localStorage.setItem('blog-bookmarks', JSON.stringify(newBookmarks));
  };

  const addBookmark = (post: BookmarkButtonProps['post']) => {
    const bookmark: BookmarkedPost = {
      ...post,
      bookmarkedAt: Date.now(),
      isRead: false
    };
    
    const newBookmarks = [...bookmarks, bookmark];
    saveBookmarks(newBookmarks);
    
    // Analytics tracking
    const event = new CustomEvent('bookmark-added', { detail: { slug: post.slug, title: post.title } });
    window.dispatchEvent(event);
  };

  const removeBookmark = (slug: string) => {
    const newBookmarks = bookmarks.filter(bookmark => bookmark.slug !== slug);
    saveBookmarks(newBookmarks);
    
    // Analytics tracking
    const event = new CustomEvent('bookmark-removed', { detail: { slug } });
    window.dispatchEvent(event);
  };

  const toggleBookmark = (post: BookmarkButtonProps['post']) => {
    const isBookmarked = bookmarks.some(bookmark => bookmark.slug === post.slug);
    
    if (isBookmarked) {
      removeBookmark(post.slug);
    } else {
      addBookmark(post);
    }
  };

  const markAsRead = (slug: string) => {
    const newBookmarks = bookmarks.map(bookmark => 
      bookmark.slug === slug 
        ? { ...bookmark, isRead: true }
        : bookmark
    );
    saveBookmarks(newBookmarks);
  };

  const addNotes = (slug: string, notes: string) => {
    const newBookmarks = bookmarks.map(bookmark => 
      bookmark.slug === slug 
        ? { ...bookmark, notes }
        : bookmark
    );
    saveBookmarks(newBookmarks);
  };

  const isBookmarked = (slug: string) => {
    return bookmarks.some(bookmark => bookmark.slug === slug);
  };

  const getBookmarkStats = () => {
    const total = bookmarks.length;
    const read = bookmarks.filter(b => b.isRead).length;
    const unread = total - read;
    const categories = Array.from(new Set(bookmarks.map(b => b.category)));
    
    return {
      total,
      read,
      unread,
      categories: categories.length
    };
  };

  return {
    bookmarks,
    addBookmark,
    removeBookmark,
    toggleBookmark,
    markAsRead,
    addNotes,
    isBookmarked,
    getBookmarkStats
  };
}

// Bookmark button component
export function BookmarkButton({ 
  post, 
  className, 
  size = 'default', 
  showLabel = false 
}: BookmarkButtonProps) {
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const bookmarked = isBookmarked(post.slug);
  
  const sizeClasses = {
    default: 'h-10 w-10',
    sm: 'h-8 w-8',
    lg: 'h-12 w-12'
  };

  const iconSizes = {
    default: 'h-5 w-5',
    sm: 'h-4 w-4',
    lg: 'h-6 w-6'
  };

  return (
    <Button
      variant="ghost"
      size={size}
      onClick={() => toggleBookmark(post)}
      className={cn(
        "transition-colors duration-200",
        bookmarked 
          ? "text-yellow-500 hover:text-yellow-600" 
          : "text-slate-400 hover:text-yellow-500",
        !showLabel && sizeClasses[size],
        className
      )}
      title={bookmarked ? 'Remove bookmark' : 'Add bookmark'}
    >
      {bookmarked ? (
        <BookmarkCheck className={iconSizes[size]} />
      ) : (
        <Bookmark className={iconSizes[size]} />
      )}
      {showLabel && (
        <span className="ml-2">
          {bookmarked ? 'Bookmarked' : 'Bookmark'}
        </span>
      )}
    </Button>
  );
}

// Bookmarks list component
export function BookmarksList({ className }: { className?: string }) {
  const { bookmarks, removeBookmark, markAsRead, getBookmarkStats } = useBookmarks();
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'read' | 'unread'>('all');
  const [sortBy, setSortBy] = useState<'recent' | 'oldest' | 'title'>('recent');

  const stats = getBookmarkStats();
  const categories = Array.from(new Set(bookmarks.map(b => b.category)));

  // Filter and sort bookmarks
  const filteredBookmarks = bookmarks
    .filter(bookmark => {
      const matchesSearch = searchQuery === '' || 
        bookmark.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        bookmark.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        bookmark.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = filterCategory === '' || bookmark.category === filterCategory;
      
      const matchesStatus = filterStatus === 'all' || 
        (filterStatus === 'read' && bookmark.isRead) ||
        (filterStatus === 'unread' && !bookmark.isRead);
      
      return matchesSearch && matchesCategory && matchesStatus;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'recent':
          return b.bookmarkedAt - a.bookmarkedAt;
        case 'oldest':
          return a.bookmarkedAt - b.bookmarkedAt;
        case 'title':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

  if (bookmarks.length === 0) {
    return (
      <div className={cn("text-center py-12", className)}>
        <Bookmark className="w-16 h-16 text-slate-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">No bookmarks yet</h3>
        <p className="text-slate-400 mb-6">
          Start bookmarking articles you want to read later
        </p>
        <Link href="/blog">
          <Button className="bg-blue-600 hover:bg-blue-700">
            Browse Articles
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className={cn("space-y-6", className)}>
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-400">{stats.total}</div>
            <div className="text-sm text-slate-400">Total Saved</div>
          </CardContent>
        </Card>
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-400">{stats.read}</div>
            <div className="text-sm text-slate-400">Read</div>
          </CardContent>
        </Card>
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-yellow-400">{stats.unread}</div>
            <div className="text-sm text-slate-400">To Read</div>
          </CardContent>
        </Card>
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-purple-400">{stats.categories}</div>
            <div className="text-sm text-slate-400">Categories</div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search bookmarks..."
                className="w-full pl-10 pr-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            {/* Category Filter */}
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white"
            >
              <option value="">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            
            {/* Status Filter */}
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value as any)}
              className="bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white"
            >
              <option value="all">All Status</option>
              <option value="unread">Unread</option>
              <option value="read">Read</option>
            </select>
            
            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white"
            >
              <option value="recent">Most Recent</option>
              <option value="oldest">Oldest First</option>
              <option value="title">Title A-Z</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Bookmarks List */}
      <div className="space-y-4">
        {filteredBookmarks.map((bookmark) => (
          <Card key={bookmark.slug} className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge 
                      variant="secondary" 
                      className="bg-slate-700 text-slate-300"
                    >
                      {bookmark.category}
                    </Badge>
                    {bookmark.isRead ? (
                      <Badge variant="secondary" className="bg-green-500/20 text-green-300">
                        Read
                      </Badge>
                    ) : (
                      <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-300">
                        To Read
                      </Badge>
                    )}
                    <span className="text-xs text-slate-400">
                      Saved {new Date(bookmark.bookmarkedAt).toLocaleDateString()}
                    </span>
                  </div>

                  <h3 className="font-semibold text-white mb-2 hover:text-blue-300 transition-colors">
                    <Link href={`/blog/${bookmark.slug}`}>
                      {bookmark.title}
                    </Link>
                  </h3>

                  <p className="text-slate-300 text-sm mb-3 line-clamp-2">
                    {bookmark.excerpt}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-slate-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(bookmark.publishedAt).toLocaleDateString()}
                    </span>
                    <ReadingTime content={bookmark.content} />
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {bookmark.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs border-slate-600 text-slate-400">
                        #{tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <Button asChild variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300">
                      <Link href={`/blog/${bookmark.slug}`}>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Read Article
                      </Link>
                    </Button>
                    
                    {!bookmark.isRead && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => markAsRead(bookmark.slug)}
                        className="text-green-400 hover:text-green-300"
                      >
                        <BookOpen className="w-4 h-4 mr-2" />
                        Mark as Read
                      </Button>
                    )}
                    
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeBookmark(bookmark.slug)}
                      className="text-red-400 hover:text-red-300"
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredBookmarks.length === 0 && bookmarks.length > 0 && (
        <div className="text-center py-8">
          <Filter className="w-12 h-12 text-slate-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-white mb-2">No bookmarks match your filters</h3>
          <p className="text-slate-400">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
} 
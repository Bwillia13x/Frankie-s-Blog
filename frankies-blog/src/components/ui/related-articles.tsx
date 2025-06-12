import React from 'react';
import Link from 'next/link';
import { Badge } from './badge';
import { Card, CardContent, CardHeader, CardTitle } from './card';
import { Button } from './button';
import { CalendarIcon, ArrowRightIcon } from 'lucide-react';
import { ReadingTime } from './reading-time';
import type { BlogPost } from '@/types';

interface RelatedArticlesProps {
  currentPost: BlogPost;
  allPosts: BlogPost[];
  maxRelated?: number;
  className?: string;
}

export function RelatedArticles({ 
  currentPost, 
  allPosts, 
  maxRelated = 3,
  className = ''
}: RelatedArticlesProps) {
  const getRelatedPosts = (): BlogPost[] => {
    // Filter out the current post
    const otherPosts = allPosts.filter(post => post.slug !== currentPost.slug);
    
    // Score posts based on relevance
    const scoredPosts = otherPosts.map(post => {
      let score = 0;
      
      // Same category gets highest score
      if (post.category === currentPost.category) {
        score += 10;
      }
      
      // Shared tags get points
      const sharedTags = post.tags.filter(tag => currentPost.tags.includes(tag));
      score += sharedTags.length * 3;
      
      // Recently published posts get slight boost
      const daysSincePublished = (Date.now() - new Date(post.publishedAt).getTime()) / (1000 * 60 * 60 * 24);
      if (daysSincePublished < 30) {
        score += 2;
      }
      
      // Featured posts get slight boost
      if (post.featured) {
        score += 1;
      }
      
      return { post, score };
    });
    
    // Sort by score and return top results
    return scoredPosts
      .sort((a, b) => b.score - a.score)
      .slice(0, maxRelated)
      .map(item => item.post);
  };

  const relatedPosts = getRelatedPosts();

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <div className={className}>
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
        🔗 Related Articles
      </h2>
      <div className="grid gap-6">
        {relatedPosts.map((post) => (
          <Card 
            key={post.slug} 
            className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-blue-500/50 transition-all duration-300 group"
          >
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex-shrink-0">
                  <div className="w-full h-full bg-black/40 rounded-lg flex items-center justify-center">
                    <Badge className="bg-blue-600 text-white text-xs">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-4 text-sm text-slate-400 mb-2">
                    <span className="flex items-center gap-1">
                      <CalendarIcon className="w-4 h-4" />
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </span>
                    <ReadingTime content={post.content} />
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-300 text-sm mb-3 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs bg-slate-700 text-slate-300">
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                    <Button asChild variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300">
                      <Link href={`/blog/${post.slug}`}>
                        Read <ArrowRightIcon className="w-3 h-3 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

// Compact version for sidebar
export function RelatedArticlesSidebar({ 
  currentPost, 
  allPosts, 
  maxRelated = 4,
  className = ''
}: RelatedArticlesProps) {
  const getRelatedPosts = (): BlogPost[] => {
    const otherPosts = allPosts.filter(post => post.slug !== currentPost.slug);
    
    const scoredPosts = otherPosts.map(post => {
      let score = 0;
      if (post.category === currentPost.category) score += 10;
      const sharedTags = post.tags.filter(tag => currentPost.tags.includes(tag));
      score += sharedTags.length * 3;
      if (post.featured) score += 1;
      return { post, score };
    });
    
    return scoredPosts
      .sort((a, b) => b.score - a.score)
      .slice(0, maxRelated)
      .map(item => item.post);
  };

  const relatedPosts = getRelatedPosts();

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <Card className={`bg-slate-800/50 backdrop-blur-sm border-slate-700 ${className}`}>
      <CardHeader>
        <CardTitle className="text-white text-lg">🔗 Related Articles</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {relatedPosts.map((post) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              className="block group"
            >
              <div className="p-3 rounded-lg border border-slate-700 hover:border-blue-500/50 transition-colors">
                <h4 className="text-sm font-medium text-white group-hover:text-blue-300 transition-colors line-clamp-2 mb-2">
                  {post.title}
                </h4>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Badge variant="secondary" className="text-xs bg-slate-700 text-slate-300">
                    {post.category}
                  </Badge>
                  <ReadingTime content={post.content} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
} 
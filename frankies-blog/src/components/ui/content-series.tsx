'use client';

import React from 'react';
import Link from 'next/link';
import { Badge } from './badge';
import { Card, CardContent, CardHeader, CardTitle } from './card';
import { Button } from './button';
import { 
  ChevronLeft, 
  ChevronRight, 
  BookOpen, 
  CheckCircle, 
  Circle, 
  Clock,
  Trophy,
  BarChart3
} from 'lucide-react';
import { ReadingTime } from './reading-time';
import { cn } from '@/lib/utils';

export interface SeriesPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  isCompleted?: boolean;
  estimatedTime?: string;
}

export interface ContentSeries {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  totalPosts: number;
  estimatedTime: string;
  posts: SeriesPost[];
  tags: string[];
}

interface SeriesNavigationProps {
  series: ContentSeries;
  currentPostSlug: string;
  className?: string;
}

export function SeriesNavigation({ series, currentPostSlug, className }: SeriesNavigationProps) {
  const currentIndex = series.posts.findIndex(post => post.slug === currentPostSlug);
  const currentPost = series.posts[currentIndex];
  const previousPost = currentIndex > 0 ? series.posts[currentIndex - 1] : null;
  const nextPost = currentIndex < series.posts.length - 1 ? series.posts[currentIndex + 1] : null;
  const completedPosts = series.posts.filter(post => post.isCompleted).length;
  const progressPercentage = (completedPosts / series.totalPosts) * 100;

  return (
    <div className={cn("space-y-6", className)}>
      {/* Series Header */}
      <Card className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/30">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-5 h-5 text-blue-400" />
                <Badge variant="outline" className="border-blue-400 text-blue-300">
                  Series
                </Badge>
                <Badge 
                  variant="secondary" 
                  className={cn(
                    "text-xs",
                    series.difficulty === 'Beginner' && "bg-green-500/20 text-green-300",
                    series.difficulty === 'Intermediate' && "bg-yellow-500/20 text-yellow-300",
                    series.difficulty === 'Advanced' && "bg-red-500/20 text-red-300"
                  )}
                >
                  {series.difficulty}
                </Badge>
              </div>
              <CardTitle className="text-white mb-2">{series.title}</CardTitle>
              <p className="text-slate-300 text-sm mb-3">{series.description}</p>
              
              <div className="flex items-center gap-4 text-sm text-slate-400">
                <span className="flex items-center gap-1">
                  <BarChart3 className="w-4 h-4" />
                  {completedPosts}/{series.totalPosts} completed
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {series.estimatedTime} total
                </span>
              </div>
            </div>
            
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-400">
                {Math.round(progressPercentage)}%
              </div>
              <div className="text-xs text-slate-400">Progress</div>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-slate-700 rounded-full h-2 mt-4">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </CardHeader>
      </Card>

      {/* Current Post Context */}
      <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-slate-400 mb-1">
                Part {currentIndex + 1} of {series.totalPosts}
              </div>
              <h3 className="font-semibold text-white">{currentPost?.title}</h3>
            </div>
            <div className="flex items-center gap-2">
              {currentPost?.isCompleted ? (
                <CheckCircle className="w-5 h-5 text-green-500" />
              ) : (
                <Circle className="w-5 h-5 text-slate-500" />
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation Buttons */}
      <div className="flex justify-between gap-4">
        {previousPost ? (
          <Button asChild variant="outline" className="flex-1 border-slate-600 text-slate-300 hover:bg-slate-700">
            <Link href={`/blog/${previousPost.slug}`} className="flex items-center gap-2">
              <ChevronLeft className="w-4 h-4" />
              <div className="text-left">
                <div className="text-xs opacity-60">Previous</div>
                <div className="text-sm font-medium truncate">{previousPost.title}</div>
              </div>
            </Link>
          </Button>
        ) : (
          <div className="flex-1" />
        )}

        {nextPost ? (
          <Button asChild className="flex-1 bg-blue-600 hover:bg-blue-700">
            <Link href={`/blog/${nextPost.slug}`} className="flex items-center gap-2">
              <div className="text-right">
                <div className="text-xs opacity-60">Next</div>
                <div className="text-sm font-medium truncate">{nextPost.title}</div>
              </div>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </Button>
        ) : (
          <Button className="flex-1 bg-green-600 hover:bg-green-700">
            <Trophy className="w-4 h-4 mr-2" />
            Series Complete!
          </Button>
        )}
      </div>
    </div>
  );
}

// Series overview component for series landing pages
export function SeriesOverview({ series, className }: { series: ContentSeries; className?: string }) {
  const completedPosts = series.posts.filter(post => post.isCompleted).length;
  const progressPercentage = (completedPosts / series.totalPosts) * 100;

  return (
    <div className={cn("space-y-6", className)}>
      {/* Series Header */}
      <Card className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/30">
        <CardHeader>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <BookOpen className="w-8 h-8 text-blue-400" />
              <Badge variant="outline" className="border-blue-400 text-blue-300">
                {series.category} Series
              </Badge>
            </div>
            <CardTitle className="text-3xl font-bold text-white mb-4">{series.title}</CardTitle>
            <p className="text-slate-300 text-lg mb-6 max-w-2xl mx-auto">{series.description}</p>
            
            <div className="flex items-center justify-center gap-8 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{series.totalPosts}</div>
                <div className="text-slate-400">Articles</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">{series.estimatedTime}</div>
                <div className="text-slate-400">Total Time</div>
              </div>
              <div className="text-center">
                <div className={cn(
                  "text-2xl font-bold",
                  series.difficulty === 'Beginner' && "text-green-400",
                  series.difficulty === 'Intermediate' && "text-yellow-400",
                  series.difficulty === 'Advanced' && "text-red-400"
                )}>
                  {series.difficulty}
                </div>
                <div className="text-slate-400">Level</div>
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Posts List */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-white mb-4">Series Content</h3>
        {series.posts.map((post, index) => (
          <Card key={post.slug} className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-blue-500/50 transition-colors">
            <CardContent className="p-4">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-700 text-white font-bold text-sm flex-shrink-0">
                  {index + 1}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    {post.isCompleted ? (
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    ) : (
                      <Circle className="w-4 h-4 text-slate-500" />
                    )}
                    <span className="text-xs text-slate-400">
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </span>
                    {post.estimatedTime && (
                      <span className="text-xs text-slate-400">
                        • {post.estimatedTime}
                      </span>
                    )}
                  </div>
                  
                  <h4 className="font-semibold text-white mb-2 hover:text-blue-300 transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h4>
                  
                  <p className="text-slate-300 text-sm mb-3 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <ReadingTime content={post.content} />
                    <Button asChild variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300">
                      <Link href={`/blog/${post.slug}`}>
                        {post.isCompleted ? 'Review' : 'Start Reading'} →
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Series Tags */}
      <div>
        <h4 className="text-sm font-semibold text-slate-400 mb-2">Topics Covered</h4>
        <div className="flex flex-wrap gap-2">
          {series.tags.map(tag => (
            <Badge key={tag} variant="secondary" className="bg-slate-700 text-slate-300">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}

// Compact series card for displaying multiple series
export function SeriesCard({ series, className }: { series: ContentSeries; className?: string }) {
  const completedPosts = series.posts.filter(post => post.isCompleted).length;
  const progressPercentage = (completedPosts / series.totalPosts) * 100;

  return (
    <Card className={cn("bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-blue-500/50 transition-all duration-300 group", className)}>
      <CardContent className="p-6">
        <div className="flex items-start gap-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="outline" className="border-blue-400 text-blue-300 text-xs">
                Series
              </Badge>
              <Badge 
                variant="secondary" 
                className={cn(
                  "text-xs",
                  series.difficulty === 'Beginner' && "bg-green-500/20 text-green-300",
                  series.difficulty === 'Intermediate' && "bg-yellow-500/20 text-yellow-300",
                  series.difficulty === 'Advanced' && "bg-red-500/20 text-red-300"
                )}
              >
                {series.difficulty}
              </Badge>
            </div>
            <h3 className="font-semibold text-white group-hover:text-blue-300 transition-colors line-clamp-2">
              {series.title}
            </h3>
          </div>
        </div>

        <p className="text-slate-300 text-sm mb-4 line-clamp-2">
          {series.description}
        </p>

        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm text-slate-400">
            <span>{completedPosts}/{series.totalPosts} completed</span>
            <span className="font-medium text-blue-400">{Math.round(progressPercentage)}%</span>
          </div>
          
          <div className="w-full bg-slate-700 rounded-full h-1.5">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-1.5 rounded-full transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-xs text-slate-400">
              <span>{series.totalPosts} parts</span>
              <span>{series.estimatedTime}</span>
            </div>
            <Button asChild variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300">
              <Link href={`/series/${series.id}`}>
                Continue →
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 
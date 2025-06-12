'use client';

import { useEffect, useRef } from 'react';
import { MessageCircle, Users, Clock } from 'lucide-react';

interface CommentsProps {
  slug: string;
  title: string;
  className?: string;
}

export function Comments({ slug, title, className = '' }: CommentsProps) {
  const commentsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', 'your-username/your-repo'); // Replace with your repo
    script.setAttribute('data-repo-id', 'your-repo-id'); // Replace with your repo ID
    script.setAttribute('data-category', 'General');
    script.setAttribute('data-category-id', 'your-category-id'); // Replace with your category ID
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'bottom');
    script.setAttribute('data-theme', 'dark');
    script.setAttribute('data-lang', 'en');
    script.setAttribute('data-loading', 'lazy');
    script.crossOrigin = 'anonymous';
    script.async = true;

    if (commentsRef.current) {
      commentsRef.current.appendChild(script);
    }

    return () => {
      if (commentsRef.current) {
        commentsRef.current.innerHTML = '';
      }
    };
  }, [slug]);

  return (
    <div className={`bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-lg p-6 ${className}`}>
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
          <MessageCircle className="w-5 h-5 text-blue-400" />
          Discussion
        </h3>
        <p className="text-slate-400 text-sm">
          Join the conversation about "{title}". Comments are powered by GitHub Discussions.
        </p>
      </div>
      
      <div ref={commentsRef} />
    </div>
  );
}

// Fallback comment component for when Giscus is not configured
export function CommentsFallback({ 
  commentCount = 0, 
  className = '' 
}: { 
  commentCount?: number;
  className?: string;
}) {
  return (
    <div className={`bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-lg p-8 text-center ${className}`}>
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 bg-slate-700/50 rounded-full flex items-center justify-center">
          <MessageCircle className="w-8 h-8 text-slate-400" />
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">
            Comments Coming Soon
          </h3>
          <p className="text-slate-400 text-sm mb-4">
            We're working on enabling discussions for this post. In the meantime, feel free to share your thoughts on social media!
          </p>
        </div>

        <div className="flex items-center gap-6 text-sm text-slate-500">
          <span className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            {commentCount} comments
          </span>
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            Comments enabled soon
          </span>
        </div>
      </div>
    </div>
  );
}

// Simple comment form for future implementation
export function CommentForm({ 
  onSubmit, 
  className = '' 
}: { 
  onSubmit?: (comment: string) => void;
  className?: string;
}) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const comment = formData.get('comment') as string;
    if (onSubmit && comment.trim()) {
      onSubmit(comment);
      e.currentTarget.reset();
    }
  };

  return (
    <div className={`bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-lg p-6 ${className}`}>
      <h3 className="text-lg font-semibold text-white mb-4">Leave a Comment</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          name="comment"
          placeholder="Share your thoughts..."
          rows={4}
          className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          required
        />
        
        <div className="flex justify-between items-center">
          <p className="text-xs text-slate-500">
            Your comment will be reviewed before being published.
          </p>
          
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
          >
            Post Comment
          </button>
        </div>
      </form>
    </div>
  );
} 
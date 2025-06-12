import { Clock } from 'lucide-react';

interface ReadingTimeProps {
  content: string;
  className?: string;
}

export function ReadingTime({ content, className }: ReadingTimeProps) {
  // Calculate reading time based on average reading speed of 200 words per minute
  const calculateReadingTime = (text: string): string => {
    // Remove HTML tags and count words
    const plainText = text.replace(/<[^>]*>/g, '');
    const words = plainText.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / 200);
    
    if (minutes === 1) return '1 min read';
    return `${minutes} min read`;
  };

  const readingTime = calculateReadingTime(content);

  return (
    <span className={`flex items-center gap-1 text-sm text-slate-400 ${className || ''}`}>
      <Clock className="w-4 h-4" />
      {readingTime}
    </span>
  );
} 
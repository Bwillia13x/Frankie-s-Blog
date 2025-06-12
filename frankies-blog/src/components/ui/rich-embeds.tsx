'use client';

import React, { useState, useEffect } from 'react';
import { Play, ExternalLink, Code, Twitter, Github, Calendar, Clock } from 'lucide-react';
import { Card, CardContent } from './card';
import { Button } from './button';
import { Badge } from './badge';
import { cn } from '@/lib/utils';

interface EmbedProps {
  className?: string;
}

// YouTube embed component
export function YouTubeEmbed({ 
  videoId, 
  title, 
  autoplay = false, 
  className 
}: { 
  videoId: string; 
  title?: string; 
  autoplay?: boolean; 
  className?: string;
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [thumbnailUrl, setThumbnailUrl] = useState('');

  useEffect(() => {
    setThumbnailUrl(`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`);
  }, [videoId]);

  const embedUrl = `https://www.youtube.com/embed/${videoId}${autoplay ? '?autoplay=1' : ''}`;

  return (
    <div className={cn("relative w-full", className)}>
      <div className="aspect-video bg-slate-900 rounded-lg overflow-hidden">
        {!isLoaded ? (
          <div 
            className="relative w-full h-full cursor-pointer group"
            onClick={() => setIsLoaded(true)}
          >
            {thumbnailUrl && (
              <img
                src={thumbnailUrl}
                alt={title || 'YouTube video'}
                className="w-full h-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-white ml-1" />
              </div>
            </div>
            {title && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-white font-semibold">{title}</h3>
              </div>
            )}
          </div>
        ) : (
          <iframe
            src={embedUrl}
            title={title || 'YouTube video'}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        )}
      </div>
    </div>
  );
}

// Twitter embed component
export function TwitterEmbed({ 
  tweetId, 
  theme = 'dark', 
  className 
}: { 
  tweetId: string; 
  theme?: 'light' | 'dark'; 
  className?: string;
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Load Twitter widgets script
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    script.onload = () => setIsLoaded(true);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const tweetUrl = `https://twitter.com/twitter/status/${tweetId}`;

  return (
    <div className={cn("w-full max-w-lg mx-auto", className)}>
      {!isLoaded ? (
        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <Twitter className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <div className="h-4 bg-slate-700 rounded mb-2" />
                <div className="h-3 bg-slate-700 rounded w-3/4 mb-2" />
                <div className="h-3 bg-slate-700 rounded w-1/2" />
              </div>
            </div>
            <div className="mt-4 text-center">
              <Button asChild variant="outline" size="sm">
                <a href={tweetUrl} target="_blank" rel="noopener noreferrer">
                  View on Twitter
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <blockquote className="twitter-tweet" data-theme={theme}>
          <a href={tweetUrl}>Loading tweet...</a>
        </blockquote>
      )}
    </div>
  );
}

// CodePen embed component
export function CodePenEmbed({ 
  penId, 
  user, 
  title, 
  height = 400, 
  defaultTab = 'html,result', 
  className 
}: { 
  penId: string; 
  user: string; 
  title?: string; 
  height?: number; 
  defaultTab?: string; 
  className?: string;
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  
  const embedUrl = `https://codepen.io/${user}/embed/${penId}?default-tab=${defaultTab}&theme-id=dark&editable=true`;
  const penUrl = `https://codepen.io/${user}/pen/${penId}`;

  return (
    <div className={cn("w-full", className)}>
      <Card className="bg-slate-900 border-slate-700 overflow-hidden">
        <div className="bg-slate-800 p-4 border-b border-slate-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Code className="w-5 h-5 text-green-400" />
              <div>
                {title && <h3 className="font-semibold text-white">{title}</h3>}
                <p className="text-sm text-slate-400">by {user} on CodePen</p>
              </div>
            </div>
            <Button asChild variant="outline" size="sm">
              <a href={penUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Open in CodePen
              </a>
            </Button>
          </div>
        </div>
        
        <div style={{ height }}>
          {!isLoaded ? (
            <div 
              className="w-full h-full bg-slate-800 flex items-center justify-center cursor-pointer hover:bg-slate-700 transition-colors"
              onClick={() => setIsLoaded(true)}
            >
              <div className="text-center">
                <Code className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                <p className="text-slate-300 font-semibold mb-2">Click to load CodePen</p>
                <p className="text-slate-400 text-sm">Interactive code editor will load here</p>
              </div>
            </div>
          ) : (
            <iframe
              src={embedUrl}
              style={{ width: '100%', height: '100%' }}
              frameBorder="0"
              allowFullScreen
              title={title || 'CodePen Embed'}
            />
          )}
        </div>
      </Card>
    </div>
  );
}

// GitHub Gist embed component
export function GitHubGistEmbed({ 
  gistId, 
  file, 
  className 
}: { 
  gistId: string; 
  file?: string; 
  className?: string;
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [gistContent, setGistContent] = useState('');
  
  const gistUrl = `https://gist.github.com/${gistId}${file ? `#file-${file}` : ''}`;
  const embedUrl = `https://gist.github.com/${gistId}.js${file ? `?file=${file}` : ''}`;

  return (
    <div className={cn("w-full", className)}>
      <Card className="bg-slate-900 border-slate-700 overflow-hidden">
        <div className="bg-slate-800 p-4 border-b border-slate-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Github className="w-5 h-5 text-white" />
              <div>
                <h3 className="font-semibold text-white">GitHub Gist</h3>
                <p className="text-sm text-slate-400">{gistId}</p>
              </div>
            </div>
            <Button asChild variant="outline" size="sm">
              <a href={gistUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                View on GitHub
              </a>
            </Button>
          </div>
        </div>
        
        <div className="p-4">
          {!isLoaded ? (
            <div 
              className="w-full h-32 bg-slate-800 rounded flex items-center justify-center cursor-pointer hover:bg-slate-700 transition-colors"
              onClick={() => setIsLoaded(true)}
            >
              <div className="text-center">
                <Github className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                <p className="text-slate-300 text-sm">Click to load Gist</p>
              </div>
            </div>
          ) : (
            <script src={embedUrl}></script>
          )}
        </div>
      </Card>
    </div>
  );
}

// Generic embed component for other services
export function GenericEmbed({ 
  src, 
  title, 
  aspectRatio = '16:9', 
  provider,
  className 
}: { 
  src: string; 
  title: string; 
  aspectRatio?: '16:9' | '4:3' | '1:1' | 'custom'; 
  provider?: string;
  className?: string;
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  
  const aspectClasses = {
    '16:9': 'aspect-video',
    '4:3': 'aspect-[4/3]',
    '1:1': 'aspect-square',
    'custom': ''
  };

  return (
    <div className={cn("w-full", className)}>
      <Card className="bg-slate-900 border-slate-700 overflow-hidden">
        {provider && (
          <div className="bg-slate-800 p-3 border-b border-slate-700">
            <div className="flex items-center gap-2">
              <ExternalLink className="w-4 h-4 text-slate-400" />
              <span className="text-sm text-slate-300">{provider}</span>
            </div>
          </div>
        )}
        
        <div className={aspectClasses[aspectRatio]}>
          {!isLoaded ? (
            <div 
              className="w-full h-full bg-slate-800 flex items-center justify-center cursor-pointer hover:bg-slate-700 transition-colors"
              onClick={() => setIsLoaded(true)}
            >
              <div className="text-center">
                <ExternalLink className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                <p className="text-slate-300 text-sm">Click to load {title}</p>
              </div>
            </div>
          ) : (
            <iframe
              src={src}
              title={title}
              className="w-full h-full"
              frameBorder="0"
              allowFullScreen
            />
          )}
        </div>
      </Card>
    </div>
  );
}

// Calendar embed for events
export function CalendarEmbed({ 
  eventTitle, 
  date, 
  time, 
  description, 
  location,
  calendarUrl,
  className 
}: { 
  eventTitle: string;
  date: string;
  time: string;
  description?: string;
  location?: string;
  calendarUrl?: string;
  className?: string;
}) {
  return (
    <Card className={cn("bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/30", className)}>
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
            <Calendar className="w-6 h-6 text-white" />
          </div>
          
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Badge className="bg-blue-600 text-white">
                Event
              </Badge>
            </div>
            
            <h3 className="text-lg font-semibold text-white mb-2">{eventTitle}</h3>
            
            <div className="flex items-center gap-4 text-sm text-slate-300 mb-3">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {time}
              </span>
            </div>
            
            {description && (
              <p className="text-slate-300 mb-3">{description}</p>
            )}
            
            {location && (
              <p className="text-sm text-slate-400 mb-4">📍 {location}</p>
            )}
            
            {calendarUrl && (
              <Button asChild variant="outline" size="sm">
                <a href={calendarUrl} target="_blank" rel="noopener noreferrer">
                  Add to Calendar
                </a>
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Media gallery component
export function MediaGallery({ 
  images, 
  className 
}: { 
  images: Array<{ src: string; alt: string; caption?: string }>; 
  className?: string;
}) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <>
      <div className={cn("grid grid-cols-2 md:grid-cols-3 gap-4", className)}>
        {images.map((image, index) => (
          <div
            key={index}
            className="relative aspect-square bg-slate-800 rounded-lg overflow-hidden cursor-pointer group"
            onClick={() => setSelectedImage(index)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="max-w-full max-h-full object-contain"
            />
            {images[selectedImage].caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4">
                <p className="text-center">{images[selectedImage].caption}</p>
              </div>
            )}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
} 
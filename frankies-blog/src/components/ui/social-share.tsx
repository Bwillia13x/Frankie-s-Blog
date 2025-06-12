'use client';

import React, { useState } from 'react';
import { 
  Twitter, 
  Facebook, 
  Linkedin, 
  Link as LinkIcon, 
  Mail, 
  MessageCircle,
  Share2,
  Check
} from 'lucide-react';
import { Button } from './button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@radix-ui/react-dropdown-menu';

interface SocialShareProps {
  title: string;
  url: string;
  description?: string;
  hashtags?: string[];
  className?: string;
  showLabels?: boolean;
  size?: 'default' | 'sm' | 'lg';
  variant?: 'buttons' | 'dropdown';
}

export function SocialShare({ 
  title, 
  url, 
  description = '', 
  hashtags = [],
  className = '',
  showLabels = false,
  size = 'default',
  variant = 'buttons'
}: SocialShareProps) {
  const [copied, setCopied] = useState(false);
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);
  const encodedDescription = encodeURIComponent(description);
  const hashtagString = hashtags.map(tag => `#${tag}`).join(' ');

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}${hashtagString ? `&hashtags=${hashtags.join(',')}` : ''}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    reddit: `https://reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%20${encodedUrl}`,
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy URL:', err);
    }
  };

  const handleShare = (platform: string) => {
    if (platform === 'copy') {
      copyToClipboard();
      return;
    }
    
    const shareUrl = shareLinks[platform as keyof typeof shareLinks];
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm': return 'h-8 w-8';
      case 'lg': return 'h-12 w-12';
      default: return 'h-10 w-10';
    }
  };

  const shareButtons = [
    {
      name: 'Twitter',
      icon: Twitter,
      platform: 'twitter',
      className: 'hover:bg-blue-500/20 hover:text-blue-400',
    },
    {
      name: 'Facebook',
      icon: Facebook,
      platform: 'facebook',
      className: 'hover:bg-blue-600/20 hover:text-blue-500',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      platform: 'linkedin',
      className: 'hover:bg-blue-700/20 hover:text-blue-600',
    },
    {
      name: 'Email',
      icon: Mail,
      platform: 'email',
      className: 'hover:bg-gray-500/20 hover:text-gray-400',
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      platform: 'whatsapp',
      className: 'hover:bg-green-500/20 hover:text-green-400',
    },
  ];

  if (variant === 'dropdown') {
    return (
      <div className={className}>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
              <Share2 className="h-4 w-4" />
              {showLabels && <span className="ml-2">Share</span>}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent 
            align="end" 
            className="bg-slate-800 border border-slate-700 rounded-md shadow-lg p-2 min-w-[160px]"
          >
            {shareButtons.map((button) => (
              <DropdownMenuItem
                key={button.platform}
                onClick={() => handleShare(button.platform)}
                className="flex items-center gap-3 px-3 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white rounded cursor-pointer"
              >
                <button.icon className="h-4 w-4" />
                {button.name}
              </DropdownMenuItem>
            ))}
            <DropdownMenuItem
              onClick={() => handleShare('copy')}
              className="flex items-center gap-3 px-3 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white rounded cursor-pointer"
            >
              {copied ? <Check className="h-4 w-4" /> : <LinkIcon className="h-4 w-4" />}
              {copied ? 'Copied!' : 'Copy Link'}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {shareButtons.map((button) => (
        <Button
          key={button.platform}
          variant="ghost"
          size="sm"
          onClick={() => handleShare(button.platform)}
          className={`${getSizeClasses()} text-slate-400 transition-colors duration-200 ${button.className}`}
          title={`Share on ${button.name}`}
        >
          <button.icon className="h-4 w-4" />
          {showLabels && <span className="ml-2 text-sm">{button.name}</span>}
        </Button>
      ))}
      <Button
        variant="ghost"
        size="sm"
        onClick={copyToClipboard}
        className={`${getSizeClasses()} text-slate-400 hover:bg-slate-700/50 hover:text-white transition-colors duration-200`}
        title="Copy link"
      >
        {copied ? <Check className="h-4 w-4" /> : <LinkIcon className="h-4 w-4" />}
        {showLabels && <span className="ml-2 text-sm">{copied ? 'Copied!' : 'Copy'}</span>}
      </Button>
    </div>
  );
}

// Click-to-tweet component for highlighting quotable text
export function ClickToTweet({ 
  quote, 
  url, 
  author,
  className = '' 
}: { 
  quote: string; 
  url: string; 
  author?: string;
  className?: string;
}) {
  const tweetText = author ? `"${quote}" - ${author}` : `"${quote}"`;
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}&url=${encodeURIComponent(url)}`;

  return (
    <blockquote className={`relative group ${className}`}>
      <div className="border-l-4 border-blue-500 pl-4 my-6 bg-slate-800/50 p-4 rounded-r-lg">
        <p className="text-slate-300 italic mb-3">{quote}</p>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => window.open(tweetUrl, '_blank', 'width=600,height=400')}
          className="text-blue-400 hover:text-blue-300 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        >
          <Twitter className="h-4 w-4 mr-2" />
          Tweet this quote
        </Button>
      </div>
    </blockquote>
  );
} 
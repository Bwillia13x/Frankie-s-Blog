'use client';

import React, { useState } from 'react';
import { 
  Download, 
  FileText, 
  CheckCircle, 
  Star, 
  Gift,
  Mail,
  ArrowRight,
  X
} from 'lucide-react';
import { Button } from './button';
import { Card, CardContent } from './card';
import { Badge } from './badge';
import { cn } from '@/lib/utils';

interface ContentUpgrade {
  id: string;
  title: string;
  description: string;
  type: 'pdf' | 'checklist' | 'template' | 'guide' | 'toolkit' | 'course';
  value: string;
  benefits: string[];
  downloadUrl?: string;
  thumbnailUrl?: string;
  tags: string[];
}

interface ContentUpgradeProps {
  upgrade: ContentUpgrade;
  variant?: 'inline' | 'sidebar' | 'popup' | 'banner';
  className?: string;
  onDownload?: (upgradeId: string, email: string) => void;
}

// Content upgrade component
export function ContentUpgrade({ 
  upgrade, 
  variant = 'inline', 
  className,
  onDownload 
}: ContentUpgradeProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (onDownload) {
      onDownload(upgrade.id, email);
    }
    
    setIsSuccess(true);
    
    // Analytics tracking
    const event = new CustomEvent('content-upgrade-downloaded', { 
      detail: { upgradeId: upgrade.id, email, title: upgrade.title } 
    });
    window.dispatchEvent(event);
    
    setIsSubmitting(false);
  };

  const getTypeIcon = () => {
    switch (upgrade.type) {
      case 'pdf': return <FileText className="w-5 h-5" />;
      case 'checklist': return <CheckCircle className="w-5 h-5" />;
      case 'template': return <Star className="w-5 h-5" />;
      case 'guide': return <Download className="w-5 h-5" />;
      case 'toolkit': return <Gift className="w-5 h-5" />;
      case 'course': return <Mail className="w-5 h-5" />;
      default: return <Download className="w-5 h-5" />;
    }
  };

  const getTypeColor = () => {
    switch (upgrade.type) {
      case 'pdf': return 'text-red-400 bg-red-500/20';
      case 'checklist': return 'text-green-400 bg-green-500/20';
      case 'template': return 'text-yellow-400 bg-yellow-500/20';
      case 'guide': return 'text-blue-400 bg-blue-500/20';
      case 'toolkit': return 'text-purple-400 bg-purple-500/20';
      case 'course': return 'text-indigo-400 bg-indigo-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  if (variant === 'banner') {
    return (
      <div className={cn(
        "bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/30 rounded-lg p-4",
        className
      )}>
        {isSuccess ? (
          <div className="flex items-center gap-3">
            <CheckCircle className="w-6 h-6 text-green-500" />
            <div>
              <h4 className="font-semibold text-white">Download started!</h4>
              <p className="text-sm text-slate-300">Check your email for the download link.</p>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center", getTypeColor())}>
              {getTypeIcon()}
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-white">{upgrade.title}</h4>
              <p className="text-sm text-slate-300">{upgrade.description}</p>
            </div>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="bg-slate-800 border border-slate-600 rounded px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                required
              />
              <Button type="submit" disabled={isSubmitting} size="sm">
                {isSubmitting ? 'Sending...' : 'Get Free'}
              </Button>
            </form>
          </div>
        )}
      </div>
    );
  }

  if (variant === 'sidebar') {
    return (
      <Card className={cn("bg-slate-800/50 backdrop-blur-sm border-slate-700", className)}>
        <CardContent className="p-6">
          {isSuccess ? (
            <div className="text-center">
              <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="font-bold text-white mb-2">Download Started!</h3>
              <p className="text-sm text-slate-300">Check your email for the download link.</p>
            </div>
          ) : (
            <>
              <div className="text-center mb-4">
                <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3", getTypeColor())}>
                  {getTypeIcon()}
                </div>
                <Badge className="bg-blue-600 text-white mb-2">
                  FREE {upgrade.type.toUpperCase()}
                </Badge>
                <h3 className="font-bold text-white mb-2">{upgrade.title}</h3>
                <p className="text-sm text-slate-300 mb-3">{upgrade.description}</p>
                <div className="text-lg font-bold text-blue-400">{upgrade.value} Value</div>
              </div>

              <ul className="space-y-2 mb-4">
                {upgrade.benefits.slice(0, 3).map((benefit, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>

              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  required
                />
                <Button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 hover:bg-blue-700">
                  {isSubmitting ? 'Sending...' : 'Download Free'}
                  <Download className="w-4 h-4 ml-2" />
                </Button>
              </form>

              <p className="text-xs text-slate-500 text-center mt-3">
                No spam. Unsubscribe anytime.
              </p>
            </>
          )}
        </CardContent>
      </Card>
    );
  }

  // Inline variant (default)
  return (
    <div className={cn(
      "bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/30 rounded-xl p-6 my-8",
      className
    )}>
      {isSuccess ? (
        <div className="text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2">Download Started! 🎉</h3>
          <p className="text-slate-300">Check your email for the download link and bonus content.</p>
        </div>
      ) : (
        <div className="flex items-start gap-6">
          <div className={cn("w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0", getTypeColor())}>
            {getTypeIcon()}
          </div>
          
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Badge className="bg-green-600 text-white">
                FREE {upgrade.type.toUpperCase()}
              </Badge>
              <Badge variant="outline" className="border-yellow-400 text-yellow-300">
                {upgrade.value} Value
              </Badge>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-2">{upgrade.title}</h3>
            <p className="text-slate-300 mb-4">{upgrade.description}</p>
            
            <ul className="space-y-2 mb-6">
              {upgrade.benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-2 text-slate-300">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>
            
            <form onSubmit={handleSubmit} className="flex gap-3 max-w-md">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your best email"
                className="flex-1 bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <Button type="submit" disabled={isSubmitting} className="bg-blue-600 hover:bg-blue-700 whitespace-nowrap">
                {isSubmitting ? 'Sending...' : 'Get Free'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>
            
            <p className="text-xs text-slate-500 mt-3">
              Join 2,500+ developers. No spam, unsubscribe anytime.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

// Contextual content upgrade that appears based on content
export function ContextualUpgrade({ 
  trigger, 
  upgrade, 
  className 
}: { 
  trigger: string; 
  upgrade: ContentUpgrade; 
  className?: string;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  React.useEffect(() => {
    const checkForTrigger = () => {
      const content = document.body.textContent?.toLowerCase() || '';
      const triggerFound = content.includes(trigger.toLowerCase());
      
      if (triggerFound && !hasShown) {
        // Delay showing the upgrade
        setTimeout(() => {
          setIsVisible(true);
          setHasShown(true);
        }, 2000);
      }
    };

    checkForTrigger();
  }, [trigger, hasShown]);

  if (!isVisible) return null;

  return (
    <div className={cn("fixed bottom-6 right-6 max-w-sm z-50", className)}>
      <Card className="bg-slate-800 border border-blue-500/50 shadow-2xl">
        <CardContent className="p-4 relative">
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-2 right-2 text-slate-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
          
          <div className="flex items-start gap-3">
            <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center", upgrade.type === 'checklist' ? 'text-green-400 bg-green-500/20' : 'text-blue-400 bg-blue-500/20')}>
              {getTypeIcon()}
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-white text-sm mb-1">
                Related to what you're reading
              </h4>
              <p className="text-xs text-slate-300 mb-3">
                {upgrade.title}
              </p>
              <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-xs">
                Get Free {upgrade.type}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  function getTypeIcon() {
    switch (upgrade.type) {
      case 'checklist': return <CheckCircle className="w-5 h-5" />;
      case 'template': return <Star className="w-5 h-5" />;
      default: return <Download className="w-5 h-5" />;
    }
  }
}

// Content upgrade data examples
export const contentUpgrades: ContentUpgrade[] = [
  {
    id: 'react-performance-checklist',
    title: 'React Performance Optimization Checklist',
    description: 'A comprehensive 15-point checklist to identify and fix React performance issues in your applications.',
    type: 'checklist',
    value: '$29',
    benefits: [
      'Identify performance bottlenecks in minutes',
      'Step-by-step optimization instructions', 
      'Before/after code examples',
      'Tools and debugging techniques'
    ],
    tags: ['react', 'performance', 'optimization'],
    downloadUrl: '/downloads/react-performance-checklist.pdf'
  },
  {
    id: 'nextjs-deployment-guide',
    title: 'Next.js Production Deployment Guide',
    description: 'Complete guide to deploying Next.js applications to production with best practices and common pitfalls.',
    type: 'guide',
    value: '$39',
    benefits: [
      'Production-ready deployment strategies',
      'Environment configuration templates',
      'Performance monitoring setup',
      'Security best practices checklist'
    ],
    tags: ['nextjs', 'deployment', 'production'],
    downloadUrl: '/downloads/nextjs-deployment-guide.pdf'
  },
  {
    id: 'api-design-template',
    title: 'REST API Design Template',
    description: 'Professional API design template with documentation examples, error handling patterns, and testing strategies.',
    type: 'template',
    value: '$25',
    benefits: [
      'Ready-to-use API documentation template',
      'Error response standardization',
      'Authentication patterns',
      'Testing checklist and examples'
    ],
    tags: ['api', 'backend', 'documentation'],
    downloadUrl: '/downloads/api-design-template.zip'
  }
]; 
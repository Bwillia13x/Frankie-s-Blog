'use client';

import React, { useState, useEffect, useRef } from 'react';
import { X, Mail, Gift, TrendingUp, Users, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from './button';
import { Card, CardContent } from './card';
import { cn } from '@/lib/utils';

interface NewsletterEnhancedProps {
  variant?: 'popup' | 'inline' | 'sidebar' | 'floating';
  title?: string;
  description?: string;
  incentive?: string;
  stats?: {
    subscribers?: string;
    openRate?: string;
    frequency?: string;
  };
  className?: string;
  onSubscribe?: (email: string) => void;
}

// Exit-intent popup component
export function ExitIntentNewsletter() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    // Check if user has already seen this popup or subscribed
    const hasSeenPopup = localStorage.getItem('newsletter-popup-seen');
    const isSubscribed = localStorage.getItem('newsletter-subscribed');
    
    if (hasSeenPopup || isSubscribed || hasShown) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
        localStorage.setItem('newsletter-popup-seen', 'true');
      }
    };

    // Also trigger on scroll-up behavior (mobile-friendly)
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY < lastScrollY - 50 && window.scrollY > 200 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
        localStorage.setItem('newsletter-popup-seen', 'true');
      }
      lastScrollY = window.scrollY;
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasShown]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSuccess(true);
    localStorage.setItem('newsletter-subscribed', 'true');
    
    setTimeout(() => {
      setIsVisible(false);
    }, 2000);
    
    setIsSubmitting(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
      <div className="bg-slate-800 border border-slate-700 rounded-2xl max-w-md w-full p-8 relative animate-scale-in">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Welcome aboard! 🎉</h3>
            <p className="text-slate-300">Check your email for a confirmation link.</p>
          </div>
        ) : (
          <>
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Wait! Don't miss out
              </h3>
              <p className="text-slate-300">
                Join 2,500+ developers getting weekly insights on React, Next.js, and modern web development.
              </p>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mb-6">
              <div className="flex items-center gap-2 text-blue-300 mb-2">
                <Gift className="w-4 h-4" />
                <span className="font-semibold">Exclusive Bonus</span>
              </div>
              <p className="text-sm text-slate-300">
                Get my "React Performance Checklist" (usually $29) free when you subscribe!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your best email"
                required
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3"
              >
                {isSubmitting ? 'Subscribing...' : 'Get Free Access'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>

            <p className="text-xs text-slate-500 text-center mt-4">
              No spam, unsubscribe anytime. Read by 2,500+ developers.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

// Enhanced inline newsletter component
export function NewsletterEnhanced({
  variant = 'inline',
  title = "📬 Join the Developer Community",
  description = "Get weekly insights on React, Next.js, and modern web development. Trusted by 2,500+ developers.",
  incentive = "🎁 Free React Performance Checklist included",
  stats = {
    subscribers: "2,500+",
    openRate: "45%",
    frequency: "Weekly"
  },
  className,
  onSubscribe
}: NewsletterEnhancedProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (onSubscribe) {
      onSubscribe(email);
    }
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSuccess(true);
    localStorage.setItem('newsletter-subscribed', 'true');
    setIsSubmitting(false);
  };

  if (variant === 'floating') {
    return (
      <div className={cn(
        "fixed bottom-6 right-6 max-w-sm bg-slate-800 border border-slate-700 rounded-xl p-4 shadow-2xl z-50",
        className
      )}>
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
            <Mail className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-white text-sm mb-1">
              New post every week
            </h4>
            <p className="text-xs text-slate-400 mb-3">
              Join {stats.subscribers} developers
            </p>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="flex-1 bg-slate-700 border border-slate-600 rounded px-3 py-1 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
              <Button type="submit" size="sm" disabled={isSubmitting}>
                Join
              </Button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'sidebar') {
    return (
      <Card className={cn("bg-slate-800/50 backdrop-blur-sm border-slate-700", className)}>
        <CardContent className="p-6">
          <div className="text-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-bold text-white mb-2">{title}</h3>
            <p className="text-sm text-slate-300 mb-3">{description}</p>
          </div>

          {incentive && (
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3 mb-4">
              <p className="text-sm text-blue-300 text-center">{incentive}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              required
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </Button>
          </form>

          <div className="flex justify-center gap-4 mt-4 text-xs text-slate-500">
            <span>{stats.subscribers} readers</span>
            <span>{stats.openRate} open rate</span>
            <span>{stats.frequency}</span>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Inline variant (default)
  return (
    <div className={cn(
      "bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/30 rounded-xl p-6",
      className
    )}>
      {isSuccess ? (
        <div className="text-center">
          <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Thanks for subscribing! 🎉</h3>
          <p className="text-slate-300">Check your email for confirmation and your free bonus.</p>
        </div>
      ) : (
        <>
          <div className="flex items-start gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
              <p className="text-slate-300 mb-4">{description}</p>
              
              {incentive && (
                <div className="flex items-center gap-2 text-blue-300 mb-4">
                  <Gift className="w-4 h-4" />
                  <span className="text-sm font-medium">{incentive}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex gap-3 mb-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your best email"
                  className="flex-1 bg-slate-800 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-600 hover:bg-blue-700 whitespace-nowrap"
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </Button>
              </form>

              <div className="flex items-center gap-6 text-sm text-slate-400">
                <span className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  {stats.subscribers} subscribers
                </span>
                <span className="flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" />
                  {stats.openRate} open rate
                </span>
                <span>{stats.frequency} emails</span>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <Mail className="w-10 h-10 text-white" />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
} 
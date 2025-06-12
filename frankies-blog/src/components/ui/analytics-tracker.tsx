'use client';

import { useEffect, useRef, useState } from 'react';

export interface AnalyticsEvent {
  type: 'page_view' | 'scroll_depth' | 'time_on_page' | 'reading_complete' | 'engagement' | 'click' | 'share' | 'content-upgrade-downloaded';
  slug?: string;
  data: Record<string, any>;
  timestamp: number;
}

interface ReadingAnalyticsProps {
  slug: string;
  title: string;
  category: string;
  tags: string[];
  contentLength: number;
  onEvent?: (event: AnalyticsEvent) => void;
}

// Main analytics tracker component
export function ReadingAnalytics({ 
  slug, 
  title, 
  category, 
  tags, 
  contentLength,
  onEvent 
}: ReadingAnalyticsProps) {
  const [startTime] = useState(Date.now());
  const [scrollDepths, setScrollDepths] = useState<Set<number>>(new Set());
  const [isReading, setIsReading] = useState(false);
  const [readingTime, setReadingTime] = useState(0);
  const [hasCompletedReading, setHasCompletedReading] = useState(false);
  const lastActivityRef = useRef(Date.now());
  const readingTimerRef = useRef<NodeJS.Timeout>();

  // Track scroll depth
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = Math.round((scrollTop / docHeight) * 100);
      
      // Track major scroll milestones
      const milestones = [25, 50, 75, 90, 100];
      const newDepth = milestones.find(milestone => 
        scrollPercentage >= milestone && !scrollDepths.has(milestone)
      );
      
      if (newDepth) {
        setScrollDepths(prev => new Set([...prev, newDepth]));
        
        // Send scroll depth event
        const event: AnalyticsEvent = {
          type: 'scroll_depth',
          slug,
          data: {
            depth: newDepth,
            title,
            category,
            tags,
            scrollPercentage,
            timeOnPage: Date.now() - startTime
          },
          timestamp: Date.now()
        };
        
        onEvent?.(event);
        
        // Mark as reading complete at 90%
        if (newDepth >= 90 && !hasCompletedReading) {
          setHasCompletedReading(true);
          const completeEvent: AnalyticsEvent = {
            type: 'reading_complete',
            slug,
            data: {
              title,
              category,
              tags,
              readingTime,
              contentLength,
              timeToComplete: Date.now() - startTime
            },
            timestamp: Date.now()
          };
          onEvent?.(completeEvent);
        }
      }
      
      lastActivityRef.current = Date.now();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [slug, title, category, tags, scrollDepths, startTime, contentLength, readingTime, hasCompletedReading, onEvent]);

  // Track reading time (only when user is actively reading)
  useEffect(() => {
    const updateReadingTime = () => {
      const now = Date.now();
      const timeSinceLastActivity = now - lastActivityRef.current;
      
      // Consider user as reading if they were active within last 10 seconds
      const isCurrentlyReading = timeSinceLastActivity < 10000;
      
      if (isCurrentlyReading && !isReading) {
        setIsReading(true);
      } else if (!isCurrentlyReading && isReading) {
        setIsReading(false);
      }
      
      if (isCurrentlyReading) {
        setReadingTime(prev => prev + 1000);
      }
    };

    readingTimerRef.current = setInterval(updateReadingTime, 1000);
    return () => {
      if (readingTimerRef.current) {
        clearInterval(readingTimerRef.current);
      }
    };
  }, [isReading]);

  // Track user activity (mouse movement, clicks, key presses)
  useEffect(() => {
    const handleActivity = () => {
      lastActivityRef.current = Date.now();
    };

    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
    events.forEach(event => {
      document.addEventListener(event, handleActivity, { passive: true });
    });

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, handleActivity);
      });
    };
  }, []);

  // Send page view event on mount
  useEffect(() => {
    const pageViewEvent: AnalyticsEvent = {
      type: 'page_view',
      slug,
      data: {
        title,
        category,
        tags,
        contentLength,
        referrer: document.referrer,
        userAgent: navigator.userAgent,
        viewport: {
          width: window.innerWidth,
          height: window.innerHeight
        }
      },
      timestamp: Date.now()
    };
    
    onEvent?.(pageViewEvent);
  }, [slug, title, category, tags, contentLength, onEvent]);

  // Send time on page event when component unmounts
  useEffect(() => {
    return () => {
      const timeOnPageEvent: AnalyticsEvent = {
        type: 'time_on_page',
        slug,
        data: {
          title,
          category,
          tags,
          timeOnPage: Date.now() - startTime,
          readingTime,
          maxScrollDepth: Math.max(...Array.from(scrollDepths), 0),
          completedReading: hasCompletedReading,
          scrollMilestones: Array.from(scrollDepths).sort()
        },
        timestamp: Date.now()
      };
      
      onEvent?.(timeOnPageEvent);
    };
  }, [slug, title, category, tags, startTime, readingTime, scrollDepths, hasCompletedReading, onEvent]);

  return null; // This component doesn't render anything
}

// Click tracking component
export function ClickTracker({ 
  elementId, 
  eventName, 
  data = {},
  onEvent 
}: {
  elementId: string;
  eventName: string;
  data?: Record<string, any>;
  onEvent?: (event: AnalyticsEvent) => void;
}) {
  useEffect(() => {
    const element = document.getElementById(elementId);
    if (!element) return;

    const handleClick = (e: MouseEvent) => {
      const clickEvent: AnalyticsEvent = {
        type: 'click',
        data: {
          eventName,
          elementId,
          elementType: element.tagName,
          elementText: element.textContent?.substring(0, 100),
          ...data
        },
        timestamp: Date.now()
      };
      
      onEvent?.(clickEvent);
    };

    element.addEventListener('click', handleClick);
    return () => element.removeEventListener('click', handleClick);
  }, [elementId, eventName, data, onEvent]);

  return null;
}

// Hook for manual event tracking
export function useAnalytics() {
  const buffer = useRef<AnalyticsEvent[]>([]);
  const writeTimer = useRef<NodeJS.Timeout>();
  const flushTimer = useRef<NodeJS.Timeout>();

  const flushBuffer = async () => {
    if (buffer.current.length === 0) return;
    const events = buffer.current.splice(0, buffer.current.length);
    try {
      const res = await fetch('/api/analytics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ events }),
      });
      if (res.status === 429) {
        buffer.current.unshift(...events);
      }
    } catch {
      buffer.current.unshift(...events);
    }
  };

  const scheduleFlush = () => {
    if (flushTimer.current) return;
    flushTimer.current = setTimeout(async () => {
      await flushBuffer();
      flushTimer.current = undefined;
    }, 1000);
  };

  const scheduleWrite = () => {
    if (writeTimer.current) return;
    writeTimer.current = setTimeout(() => {
      const existing = JSON.parse(localStorage.getItem('blog-analytics') || '[]');
      localStorage.setItem('blog-analytics', JSON.stringify([...existing, ...buffer.current]));
      writeTimer.current = undefined;
    }, 500);
  };

  const sendEvent = (event: Omit<AnalyticsEvent, 'timestamp'>) => {
    const fullEvent: AnalyticsEvent = { ...event, timestamp: Date.now() };
    buffer.current.push(fullEvent);
    scheduleWrite();
    scheduleFlush();
  };

  const trackShare = (platform: string, url: string, title: string) => {
    sendEvent({
      type: 'share',
      data: {
        platform,
        url,
        title,
        timestamp: Date.now()
      }
    });
  };

  const trackEngagement = (action: string, data: Record<string, any> = {}) => {
    sendEvent({
      type: 'engagement',
      data: {
        action,
        ...data
      }
    });
  };

  const getAnalyticsData = () => {
    return JSON.parse(localStorage.getItem('blog-analytics') || '[]');
  };

  const clearAnalyticsData = () => {
    localStorage.removeItem('blog-analytics');
  };

  useEffect(() => {
    return () => {
      if (flushTimer.current) {
        clearTimeout(flushTimer.current);
        flushTimer.current = undefined;
      }
      if (writeTimer.current) {
        clearTimeout(writeTimer.current);
        writeTimer.current = undefined;
      }
      flushBuffer();
    };
  }, []);

  return {
    sendEvent,
    trackShare,
    trackEngagement,
    getAnalyticsData,
    clearAnalyticsData
  };
}

// Analytics dashboard component for admin
export function AnalyticsDashboard() {
  const [events, setEvents] = useState<AnalyticsEvent[]>([]);
  const { getAnalyticsData, clearAnalyticsData } = useAnalytics();

  useEffect(() => {
    setEvents(getAnalyticsData());
  }, [getAnalyticsData]);

  const pageViews = events.filter(e => e.type === 'page_view').length;
  const avgTimeOnPage = events
    .filter(e => e.type === 'time_on_page')
    .reduce((acc, e) => acc + (e.data.timeOnPage || 0), 0) / events.filter(e => e.type === 'time_on_page').length;
  
  const completedReadings = events.filter(e => e.type === 'reading_complete').length;
  const shares = events.filter(e => e.type === 'share').length;

  const scrollDepthData = events
    .filter(e => e.type === 'scroll_depth')
    .reduce((acc, e) => {
      const depth = e.data.depth;
      acc[depth] = (acc[depth] || 0) + 1;
      return acc;
    }, {} as Record<number, number>);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Analytics Dashboard</h2>
        <button
          onClick={clearAnalyticsData}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm"
        >
          Clear Data
        </button>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-slate-800 p-4 rounded-lg">
          <div className="text-2xl font-bold text-blue-400">{pageViews}</div>
          <div className="text-sm text-slate-400">Page Views</div>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg">
          <div className="text-2xl font-bold text-green-400">
            {Math.round(avgTimeOnPage / 1000)}s
          </div>
          <div className="text-sm text-slate-400">Avg Time</div>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg">
          <div className="text-2xl font-bold text-purple-400">{completedReadings}</div>
          <div className="text-sm text-slate-400">Completed</div>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg">
          <div className="text-2xl font-bold text-yellow-400">{shares}</div>
          <div className="text-sm text-slate-400">Shares</div>
        </div>
      </div>

      {/* Scroll Depth Chart */}
      <div className="bg-slate-800 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-white mb-4">Scroll Depth</h3>
        <div className="space-y-2">
          {Object.entries(scrollDepthData).map(([depth, count]) => (
            <div key={depth} className="flex items-center gap-4">
              <div className="w-12 text-sm text-slate-400">{depth}%</div>
              <div className="flex-1 bg-slate-700 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: `${(count / pageViews) * 100}%` }}
                />
              </div>
              <div className="w-12 text-sm text-slate-400">{count}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Events */}
      <div className="bg-slate-800 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-white mb-4">Recent Events</h3>
        <div className="space-y-2 max-h-64 overflow-y-auto">
          {events.slice(-20).reverse().map((event, index) => (
            <div key={index} className="flex items-center gap-4 text-sm p-2 bg-slate-700/50 rounded">
              <div className="w-20 text-slate-400">{event.type}</div>
              <div className="flex-1 text-slate-300 truncate">
                {event.data.title || event.data.eventName || 'N/A'}
              </div>
              <div className="w-24 text-slate-400">
                {new Date(event.timestamp).toLocaleTimeString()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 
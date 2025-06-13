'use client';

import { useEffect, useState, useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

// Lazy loading component for images
interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  placeholder?: string;
  quality?: number;
}

export function LazyImage({ 
  src, 
  alt, 
  className, 
  width, 
  height, 
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiNmMWYxZjEiLz4KPHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIxIDEwSDNNMjEgMTRIM00yMSA2SDNNMjEgMThIM00xMyAydjIwIiBzdHJva2U9IiNjOWNhY2IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo8L3N2Zz4K',
  quality = 75
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Use intersection observer to trigger loading when image comes into view
  useIntersectionObserver(imgRef, (entry) => {
    if (entry.isIntersecting) {
      setIsInView(true);
    }
  }, { rootMargin: '100px' }); // Start loading 100px before coming into view

  useEffect(() => {
    if (isInView && imgRef.current) {
      const img = new Image();
      img.onload = () => setIsLoaded(true);
      img.src = src;
    }
  }, [isInView, src]);

  return (
    <div className="relative overflow-hidden">
      <img
        ref={imgRef}
        src={isLoaded ? src : placeholder}
        alt={alt}
        className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-70'} ${className}`}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
      />
      {!isLoaded && isInView && (
        <div className="absolute inset-0 bg-slate-200 animate-pulse" />
      )}
    </div>
  );
}

// Lazy loading wrapper for any component
interface LazyComponentProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  rootMargin?: string;
  threshold?: number;
}

export function LazyComponent({ 
  children, 
  fallback = <div className="h-32 bg-slate-200 animate-pulse rounded" />,
  rootMargin = '100px',
  threshold = 0.1
}: LazyComponentProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useIntersectionObserver(ref, (entry) => {
    if (entry.isIntersecting) {
      setIsVisible(true);
    }
  }, { rootMargin, threshold });

  return (
    <div ref={ref}>
      {isVisible ? children : fallback}
    </div>
  );
}

// Code splitting component for dynamic imports
interface DynamicComponentProps {
  loader: () => Promise<{ default: React.ComponentType<any> }>;
  fallback?: React.ReactNode;
  props?: any;
}

export function DynamicComponent({ 
  loader, 
  fallback = <div className="flex items-center justify-center p-8"><div className="animate-spin w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full" /></div>,
  props = {}
}: DynamicComponentProps) {
  const [Component, setComponent] = useState<React.ComponentType<any> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    loader()
      .then((module) => {
        setComponent(() => module.default);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, [loader]);

  if (isLoading) return <>{fallback}</>;
  if (error) return <div className="text-red-500 p-4">Failed to load component</div>;
  if (!Component) return null;

  return <Component {...props} />;
}

// Performance metrics tracking
export function usePerformanceMetrics() {
  const [metrics, setMetrics] = useState<{
    lcp?: number;
    fid?: number;
    cls?: number;
    ttfb?: number;
    fcp?: number;
  }>({});

  useEffect(() => {
    if (typeof window === 'undefined' || !('performance' in window)) return;

    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        switch (entry.entryType) {
          case 'largest-contentful-paint':
            setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
            break;
          case 'first-input':
            const fidEntry = entry as any;
            setMetrics(prev => ({ ...prev, fid: fidEntry.processingStart - fidEntry.startTime }));
            break;
          case 'layout-shift':
            const clsEntry = entry as any;
            if (!clsEntry.hadRecentInput) {
              setMetrics(prev => ({ ...prev, cls: (prev.cls || 0) + clsEntry.value }));
            }
            break;
          case 'navigation':
            const navEntry = entry as PerformanceNavigationTiming;
            setMetrics(prev => ({
              ...prev,
              ttfb: navEntry.responseStart - navEntry.requestStart,
              fcp: navEntry.domContentLoadedEventEnd - navEntry.startTime
            }));
            break;
        }
      });
    });

    try {
      observer.observe({
        entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift', 'navigation']
      });
    } catch (e) {
      console.warn('Some performance metrics not supported:', e);
    }

    return () => observer.disconnect();
  }, []);

  return metrics;
}

// Bundle size analyzer (development only)
export function BundleAnalyzer() {
  const [bundleInfo, setBundleInfo] = useState<{
    totalSize: number;
    gzippedSize: number;
    chunks: Array<{ name: string; size: number }>;
  } | null>(null);

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      // Simulate bundle analysis
      setBundleInfo({
        totalSize: 1.2, // MB
        gzippedSize: 0.4, // MB
        chunks: [
          { name: 'main', size: 0.3 },
          { name: 'vendor', size: 0.6 },
          { name: 'runtime', size: 0.1 },
          { name: 'async-components', size: 0.2 }
        ]
      });
    }
  }, []);

  if (process.env.NODE_ENV !== 'development' || !bundleInfo) return null;

  return (
    <div className="fixed bottom-4 left-4 bg-slate-800 text-white p-4 rounded-lg shadow-lg z-50 max-w-xs">
      <h4 className="font-bold mb-2">Bundle Info</h4>
      <div className="text-sm space-y-1">
        <div>Total: {bundleInfo.totalSize}MB</div>
        <div>Gzipped: {bundleInfo.gzippedSize}MB</div>
        <div className="mt-2">
          {bundleInfo.chunks.map(chunk => (
            <div key={chunk.name} className="flex justify-between">
              <span>{chunk.name}:</span>
              <span>{chunk.size}MB</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Critical CSS inliner
export function CriticalCSS({ css }: { css: string }) {
  useEffect(() => {
    // Inline critical CSS
    const style = document.createElement('style');
    style.textContent = css;
    style.setAttribute('data-critical', 'true');
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [css]);

  return null;
}

// Preload important resources
export function ResourcePreloader({ 
  images = [], 
  fonts = [], 
  scripts = [] 
}: {
  images?: string[];
  fonts?: Array<{ href: string; type?: string }>;
  scripts?: string[];
}) {
  useEffect(() => {
    // Preload images
    images.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });

    // Preload fonts
    fonts.forEach(font => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'font';
      link.type = font.type || 'font/woff2';
      link.href = font.href;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });

    // Preload scripts
    scripts.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'script';
      link.href = src;
      document.head.appendChild(link);
    });
  }, [images, fonts, scripts]);

  return null;
}

// Service worker registration
export function ServiceWorkerRegistration() {
  useEffect(() => {
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    }
  }, []);

  return null;
}

// Memory usage monitor (development only)
export function MemoryMonitor() {
  const [memoryInfo, setMemoryInfo] = useState<{
    used: number;
    total: number;
    percentage: number;
  } | null>(null);

  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return;

    const updateMemoryInfo = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        const used = memory.usedJSHeapSize / (1024 * 1024); // MB
        const total = memory.totalJSHeapSize / (1024 * 1024); // MB
        const percentage = (used / total) * 100;

        setMemoryInfo({ used, total, percentage });
      }
    };

    updateMemoryInfo();
    const interval = setInterval(updateMemoryInfo, 5000);

    return () => clearInterval(interval);
  }, []);

  if (process.env.NODE_ENV !== 'development' || !memoryInfo) return null;

  return (
    <div className="fixed top-4 right-4 bg-slate-800 text-white p-3 rounded-lg shadow-lg z-50">
      <div className="text-xs">
        <div>Memory: {memoryInfo.used.toFixed(1)}MB / {memoryInfo.total.toFixed(1)}MB</div>
        <div className="flex items-center mt-1">
          <div className="w-20 h-2 bg-slate-600 rounded-full overflow-hidden">
            <div 
              className={`h-full transition-all duration-300 ${
                memoryInfo.percentage > 80 ? 'bg-red-500' : 
                memoryInfo.percentage > 60 ? 'bg-yellow-500' : 'bg-green-500'
              }`}
              style={{ width: `${memoryInfo.percentage}%` }}
            />
          </div>
          <span className="ml-2 text-xs">{memoryInfo.percentage.toFixed(1)}%</span>
        </div>
      </div>
    </div>
  );
}

// Network speed detector
export function useNetworkSpeed() {
  const [connectionType, setConnectionType] = useState<string>('unknown');
  const [effectiveType, setEffectiveType] = useState<string>('4g');

  useEffect(() => {
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      
      const updateConnectionInfo = () => {
        setConnectionType(connection.type || 'unknown');
        setEffectiveType(connection.effectiveType || '4g');
      };

      updateConnectionInfo();
      connection.addEventListener('change', updateConnectionInfo);

      return () => {
        connection.removeEventListener('change', updateConnectionInfo);
      };
    }
  }, []);

  return { connectionType, effectiveType };
}

// Adaptive loading based on network speed
export function AdaptiveLoader({ 
  children, 
  lowBandwidthFallback 
}: { 
  children: React.ReactNode;
  lowBandwidthFallback: React.ReactNode;
}) {
  const { effectiveType } = useNetworkSpeed();
  const isSlowConnection = effectiveType === 'slow-2g' || effectiveType === '2g';

  return <>{isSlowConnection ? lowBandwidthFallback : children}</>;
} 
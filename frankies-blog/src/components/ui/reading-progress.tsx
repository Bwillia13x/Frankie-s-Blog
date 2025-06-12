'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface ReadingProgressProps {
  className?: string;
  height?: number;
  color?: string;
}

export function ReadingProgress({ 
  className, 
  height = 3, 
  color = 'bg-blue-500' 
}: ReadingProgressProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (scrollTop / docHeight) * 100;
      setProgress(Math.min(Math.max(scrollProgress, 0), 100));
    };

    const handleScroll = () => {
      requestAnimationFrame(calculateProgress);
    };

    window.addEventListener('scroll', handleScroll);
    calculateProgress(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={cn("fixed top-0 left-0 right-0 z-50", className)}>
      <div 
        className="bg-slate-700/20 backdrop-blur-sm"
        style={{ height: `${height}px` }}
      >
        <div
          className={cn("h-full transition-all duration-150 ease-out", color)}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

// Alternative circular progress indicator for sidebar
export function CircularReadingProgress({ 
  size = 60, 
  strokeWidth = 4,
  className 
}: {
  size?: number;
  strokeWidth?: number;
  className?: string;
}) {
  const [progress, setProgress] = useState(0);
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  useEffect(() => {
    const calculateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (scrollTop / docHeight) * 100;
      setProgress(Math.min(Math.max(scrollProgress, 0), 100));
    };

    const handleScroll = () => {
      requestAnimationFrame(calculateProgress);
    };

    window.addEventListener('scroll', handleScroll);
    calculateProgress();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={cn("relative", className)}>
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          className="text-slate-700"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className="text-blue-500 transition-all duration-300 ease-out"
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xs font-medium text-slate-400">
          {Math.round(progress)}%
        </span>
      </div>
    </div>
  );
} 
import React from 'react';

const SkeletonElement: React.FC<{ className?: string }> = ({ className = "bg-slate-700" }) => (
  <div className={`animate-pulse rounded ${className}`}></div>
);

export const SpeakingLoadingSkeleton: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header Skeleton */}
      <div className="text-center mb-16">
        <SkeletonElement className="h-6 w-40 mb-4 mx-auto" /> {/* Badge */}
        <SkeletonElement className="h-12 w-1/2 mb-6 mx-auto" /> {/* Title */}
        <SkeletonElement className="h-4 w-full max-w-2xl mb-3 mx-auto" /> {/* Description line 1 */}
        <SkeletonElement className="h-4 w-3/4 max-w-xl mb-8 mx-auto" /> {/* Description line 2 */}
        {/* Stats Skeleton */}
        <div className="grid md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="text-center space-y-2">
              <SkeletonElement className="h-8 w-1/2 mx-auto" />
              <SkeletonElement className="h-4 w-3/4 mx-auto" />
            </div>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content Skeleton */}
        <div className="lg:col-span-2 space-y-12">
          {/* Upcoming Talks Skeleton */}
          <section>
            <SkeletonElement className="h-8 w-1/3 mb-8" /> {/* Section Title */}
            <div className="space-y-6">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="bg-slate-800/50 p-6 rounded-lg space-y-3">
                  <SkeletonElement className="h-5 w-1/4 mb-2" /> {/* Status Badge */}
                  <SkeletonElement className="h-6 w-3/4" /> {/* Talk Title */}
                  <SkeletonElement className="h-4 w-full" /> {/* Description */}
                  <SkeletonElement className="h-4 w-5/6" />
                  <div className="flex flex-wrap items-center gap-4 mt-2">
                    <SkeletonElement className="h-4 w-24" /> {/* Date */}
                    <SkeletonElement className="h-4 w-24" /> {/* Location */}
                    <SkeletonElement className="h-4 w-20" /> {/* Attendees */}
                  </div>
                  <div className="flex flex-wrap gap-1 mt-2">
                     {[...Array(3)].map((_, ti) => <SkeletonElement key={ti} className="h-5 w-16" />)} {/* Topics */}
                  </div>
                </div>
              ))}
            </div>
          </section>
          {/* Past Talks Skeleton (similar structure) */}
          <section>
            <SkeletonElement className="h-8 w-1/3 mb-8" /> {/* Section Title */}
            <div className="space-y-6">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="bg-slate-800/50 p-6 rounded-lg space-y-3">
                  <SkeletonElement className="h-6 w-3/4" /> {/* Talk Title */}
                  <SkeletonElement className="h-4 w-full" /> {/* Description */}
                  <SkeletonElement className="h-4 w-5/6" />
                  <div className="flex flex-wrap items-center gap-4 mt-2">
                    <SkeletonElement className="h-4 w-24" /> {/* Date */}
                    <SkeletonElement className="h-4 w-24" /> {/* Location */}
                  </div>
                   <SkeletonElement className="h-6 w-full mt-2" /> {/* Feedback/Links */}
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar Skeleton */}
        <div className="space-y-8">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-slate-800/50 p-6 rounded-lg space-y-3">
              <SkeletonElement className="h-6 w-1/2 mb-2" /> {/* Card Title */}
              <SkeletonElement className="h-4 w-3/4" />
              <SkeletonElement className="h-4 w-5/6" />
              <SkeletonElement className="h-8 w-full mt-2" /> {/* Button or list items */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

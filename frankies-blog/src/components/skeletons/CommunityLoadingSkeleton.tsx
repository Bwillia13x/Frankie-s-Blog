import React from 'react';

const SkeletonElement: React.FC<{ className?: string }> = ({ className = "bg-slate-700" }) => (
  <div className={`animate-pulse rounded ${className}`}></div>
);

export const CommunityLoadingSkeleton: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header Skeleton */}
      <div className="text-center mb-16">
        <SkeletonElement className="h-6 w-40 mb-4 mx-auto" /> {/* Badge */}
        <SkeletonElement className="h-12 w-3/4 mb-6 mx-auto" /> {/* Title */}
        <SkeletonElement className="h-4 w-full max-w-2xl mb-3 mx-auto" /> {/* Description line 1 */}
        <SkeletonElement className="h-4 w-3/4 max-w-xl mb-8 mx-auto" /> {/* Description line 2 */}
        {/* CTA Buttons Skeleton */}
        <div className="flex gap-4 justify-center mt-8">
          <SkeletonElement className="h-12 w-32" />
          <SkeletonElement className="h-12 w-40" />
        </div>
      </div>

      {/* Community Stats Skeleton */}
      <div className="grid md:grid-cols-4 gap-6 mb-16">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-slate-800/50 p-6 rounded-lg text-center space-y-2">
            <SkeletonElement className="h-8 w-8 mx-auto mb-3" /> {/* Icon */}
            <SkeletonElement className="h-8 w-1/2 mx-auto" /> {/* Value */}
            <SkeletonElement className="h-4 w-3/4 mx-auto" /> {/* Label */}
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content Skeleton */}
        <div className="lg:col-span-2 space-y-12">
          {/* Recent Discussions Skeleton */}
          <section>
            <SkeletonElement className="h-8 w-1/3 mb-8" /> {/* Section Title */}
            <div className="space-y-6">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="bg-slate-800/50 p-4 rounded-lg space-y-3">
                  <div className="flex items-start gap-3">
                    <SkeletonElement className="h-10 w-10 rounded-full" /> {/* Avatar */}
                    <div className="flex-1 space-y-2">
                      <SkeletonElement className="h-4 w-1/2" /> {/* Author, time, category */}
                      <SkeletonElement className="h-5 w-3/4" /> {/* Title */}
                      <SkeletonElement className="h-4 w-full" /> {/* Preview */}
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                     <SkeletonElement className="h-5 w-1/3" /> {/* Replies & Likes */}
                     <SkeletonElement className="h-8 w-20" /> {/* Button */}
                  </div>
                </div>
              ))}
            </div>
          </section>
          {/* Success Stories Skeleton (Simplified) */}
          <section>
            <SkeletonElement className="h-8 w-1/3 mb-8" /> {/* Section Title */}
            <div className="space-y-6">
                {[...Array(2)].map((_, i) => (
                    <div key={i} className="bg-slate-800/50 p-6 rounded-lg flex items-start gap-4">
                        <SkeletonElement className="h-12 w-12 rounded-full" />
                        <div className="flex-1 space-y-2">
                            <SkeletonElement className="h-5 w-1/2" />
                            <SkeletonElement className="h-4 w-3/4" />
                            <SkeletonElement className="h-4 w-full" />
                        </div>
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
              <SkeletonElement className="h-4 w-full" />
              <SkeletonElement className="h-8 w-full mt-2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

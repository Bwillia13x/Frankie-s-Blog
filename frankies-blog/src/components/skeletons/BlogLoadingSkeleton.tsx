import React from 'react';

const SkeletonElement: React.FC<{ className?: string }> = ({ className = "bg-slate-700" }) => (
  <div className={`animate-pulse rounded ${className}`}></div>
);

export const BlogLoadingSkeleton: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header Skeleton */}
      <div className="text-center mb-16">
        <SkeletonElement className="h-6 w-32 mb-4 mx-auto" /> {/* Badge */}
        <SkeletonElement className="h-12 w-3/4 mb-6 mx-auto" /> {/* Title */}
        <SkeletonElement className="h-4 w-full max-w-2xl mb-3 mx-auto" /> {/* Description line 1 */}
        <SkeletonElement className="h-4 w-3/4 max-w-xl mb-8 mx-auto" /> {/* Description line 2 */}
        {/* Newsletter CTA Skeleton */}
        <div className="mt-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 max-w-md mx-auto">
          <SkeletonElement className="h-5 w-1/2 mb-3" />
          <div className="flex gap-2">
            <SkeletonElement className="h-10 flex-1" />
            <SkeletonElement className="h-10 w-24" />
          </div>
          <SkeletonElement className="h-3 w-1/3 mt-2" />
        </div>
      </div>

      {/* Filter Tags Skeleton */}
      <div className="mb-12 flex flex-wrap gap-2 justify-center">
        {[...Array(5)].map((_, i) => (
          <SkeletonElement key={i} className="h-6 w-20" />
        ))}
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Main Content Skeleton */}
        <div className="lg:col-span-3 space-y-12">
          {/* Featured Posts Skeleton */}
          <div>
            <SkeletonElement className="h-8 w-1/3 mb-6" /> {/* Section Title */}
            <div className="grid md:grid-cols-2 gap-6">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="bg-slate-800/50 p-4 rounded-lg space-y-3">
                  <SkeletonElement className="h-40 w-full" /> {/* Image */}
                  <SkeletonElement className="h-4 w-1/4" /> {/* Category Badge */}
                  <SkeletonElement className="h-5 w-3/4" /> {/* Title */}
                  <SkeletonElement className="h-4 w-full" /> {/* Excerpt line 1 */}
                  <SkeletonElement className="h-4 w-5/6" /> {/* Excerpt line 2 */}
                  <SkeletonElement className="h-8 w-full mt-2" /> {/* Button */}
                </div>
              ))}
            </div>
          </div>
          {/* Regular Posts Skeleton */}
          <div>
            <SkeletonElement className="h-8 w-1/4 mb-6" /> {/* Section Title */}
            <div className="space-y-6">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="bg-slate-800/50 p-4 rounded-lg flex gap-4">
                  <SkeletonElement className="h-24 w-24 flex-shrink-0" /> {/* Image */}
                  <div className="flex-1 space-y-3">
                    <SkeletonElement className="h-4 w-1/2" /> {/* Meta */}
                    <SkeletonElement className="h-5 w-3/4" /> {/* Title */}
                    <SkeletonElement className="h-4 w-full" /> {/* Excerpt */}
                    <SkeletonElement className="h-4 w-5/6" /> {/* Excerpt */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Skeleton */}
        <div className="space-y-8">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-slate-800/50 p-4 rounded-lg space-y-3">
              <SkeletonElement className="h-6 w-1/2 mb-2" /> {/* Card Title */}
              <SkeletonElement className="h-4 w-3/4" />
              <SkeletonElement className="h-4 w-5/6" />
              <SkeletonElement className="h-4 w-full" />
              <SkeletonElement className="h-8 w-full mt-2" /> {/* Button or list items */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

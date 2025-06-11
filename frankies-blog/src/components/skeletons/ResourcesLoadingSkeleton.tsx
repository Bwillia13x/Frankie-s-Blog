import React from 'react';

const SkeletonElement: React.FC<{ className?: string }> = ({ className = "bg-slate-700" }) => (
  <div className={`animate-pulse rounded ${className}`}></div>
);

export const ResourcesLoadingSkeleton: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header Skeleton */}
      <div className="text-center mb-16">
        <SkeletonElement className="h-6 w-40 mb-4 mx-auto" /> {/* Badge */}
        <SkeletonElement className="h-12 w-3/4 mb-6 mx-auto" /> {/* Title */}
        <SkeletonElement className="h-4 w-full max-w-2xl mb-3 mx-auto" /> {/* Description line 1 */}
        <SkeletonElement className="h-4 w-3/4 max-w-xl mb-8 mx-auto" /> {/* Description line 2 */}
      </div>

      {/* Tools Section Skeleton */}
      <section className="mb-16">
        <SkeletonElement className="h-8 w-1/3 mb-8" /> {/* Section Title */}
        <div className="grid lg:grid-cols-2 gap-8">
          {[...Array(2)].map((_, catIdx) => (
            <div key={catIdx} className="bg-slate-800/50 p-6 rounded-lg space-y-4">
              <SkeletonElement className="h-6 w-1/2" /> {/* Category Name */}
              <SkeletonElement className="h-4 w-3/4" /> {/* Category Description */}
              <div className="space-y-3">
                {[...Array(2)].map((_, toolIdx) => (
                  <div key={toolIdx} className="p-4 bg-slate-900/50 rounded-lg">
                    <SkeletonElement className="h-5 w-1/3 mb-1" /> {/* Tool Name */}
                    <SkeletonElement className="h-4 w-full" /> {/* Tool Description */}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Guides Section Skeleton */}
      <section className="mb-16">
        <SkeletonElement className="h-8 w-1/3 mb-8" /> {/* Section Title */}
        <div className="grid md:grid-cols-2 gap-6">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="bg-slate-800/50 p-6 rounded-lg space-y-3">
              <SkeletonElement className="h-5 w-1/4 mb-2" /> {/* Type Badge */}
              <SkeletonElement className="h-6 w-3/4" /> {/* Title */}
              <SkeletonElement className="h-4 w-full" /> {/* Description */}
              <SkeletonElement className="h-8 w-full mt-2" /> {/* Button */}
            </div>
          ))}
        </div>
      </section>

      {/* Code Templates Section Skeleton */}
      <section className="mb-16">
        <SkeletonElement className="h-8 w-1/3 mb-8" /> {/* Section Title */}
        <div className="grid md:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-slate-800/50 p-6 rounded-lg space-y-3">
              <SkeletonElement className="h-6 w-3/4" /> {/* Name */}
              <SkeletonElement className="h-4 w-full" /> {/* Description */}
              <SkeletonElement className="h-4 w-5/6" />
            </div>
          ))}
        </div>
      </section>

      {/* Learning Resources Skeleton */}
       <section className="mb-16">
        <SkeletonElement className="h-8 w-1/3 mb-8" /> {/* Section Title */}
        <div className="grid md:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-slate-800/50 p-6 rounded-lg space-y-3">
              <SkeletonElement className="h-6 w-3/4 mb-2" /> {/* Title */}
              <SkeletonElement className="h-4 w-full" />
              <SkeletonElement className="h-4 w-5/6" />
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

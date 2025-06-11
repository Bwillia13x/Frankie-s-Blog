import React from 'react';

const SkeletonElement: React.FC<{ className?: string }> = ({ className = "bg-slate-700" }) => (
  <div className={`animate-pulse rounded ${className}`}></div>
);

export const UsesLoadingSkeleton: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header Skeleton */}
      <div className="text-center mb-16">
        <SkeletonElement className="h-6 w-32 mb-4 mx-auto" /> {/* Badge */}
        <SkeletonElement className="h-12 w-1/2 mb-6 mx-auto" /> {/* Title */}
        <SkeletonElement className="h-4 w-full max-w-2xl mb-2 mx-auto" /> {/* Description line 1 */}
        <SkeletonElement className="h-4 w-3/4 max-w-xl mb-3 mx-auto" /> {/* Description line 2 */}
        <SkeletonElement className="h-3 w-1/4 mx-auto" /> {/* Last updated */}
      </div>

      {/* Setup Categories Skeleton */}
      <div className="space-y-16">
        {[...Array(2)].map((_, catIdx) => ( // Assuming 2-3 categories
          <section key={catIdx}>
            {/* Category Header Skeleton */}
            <div className="flex items-center gap-3 mb-8">
              <SkeletonElement className="h-10 w-10" /> {/* Icon */}
              <div>
                <SkeletonElement className="h-8 w-64 mb-1" /> {/* Category Name */}
                <SkeletonElement className="h-4 w-80" /> {/* Category Description */}
              </div>
            </div>

            {/* Items Skeleton */}
            <div className="grid md:grid-cols-2 gap-6">
              {[...Array(3)].map((_, itemIdx) => ( // Assuming 2-4 items per category
                <div key={itemIdx} className="bg-slate-800/50 p-6 rounded-lg space-y-3">
                  <div className="flex items-start justify-between">
                    <SkeletonElement className="h-6 w-3/5" /> {/* Item Name */}
                    <SkeletonElement className="h-6 w-12" /> {/* Price Badge / Link Icon */}
                  </div>
                  <SkeletonElement className="h-4 w-full" /> {/* Item Description */}
                  <div className="p-3 bg-slate-900/50 rounded-lg mt-2">
                    <SkeletonElement className="h-4 w-1/4 mb-1" /> {/* "Why I chose this" */}
                    <SkeletonElement className="h-4 w-full" /> {/* Reason */}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
      {/* Workflow Section Skeleton - simplified */}
      <section className="mt-20">
        <div className="text-center mb-12">
          <SkeletonElement className="h-8 w-1/3 mx-auto mb-4" />
          <SkeletonElement className="h-4 w-1/2 mx-auto" />
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[...Array(2)].map((_, i) => (
             <div key={i} className="bg-slate-800/50 p-6 rounded-lg flex items-start gap-4">
                <SkeletonElement className="h-8 w-8"/>
                <div className="flex-1 space-y-2">
                    <SkeletonElement className="h-5 w-1/2"/>
                    <SkeletonElement className="h-4 w-full"/>
                </div>
             </div>
          ))}
        </div>
      </section>
    </div>
  );
};

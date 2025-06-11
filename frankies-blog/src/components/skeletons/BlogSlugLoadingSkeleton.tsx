import React from 'react';

const SkeletonElement: React.FC<{ className?: string }> = ({ className = "bg-slate-700" }) => (
  <div className={`animate-pulse rounded ${className}`}></div>
);

export const BlogSlugLoadingSkeleton: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Back Navigation Skeleton */}
      <div className="mb-8">
        <SkeletonElement className="h-8 w-32" /> {/* Back to Blog button */}
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Main Content Skeleton */}
        <article className="lg:col-span-3">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg">
            {/* Article Header Skeleton */}
            <div className="p-8 border-b border-slate-700">
              <div className="mb-4 flex gap-2">
                <SkeletonElement className="h-6 w-24" /> {/* Category Badge */}
                <SkeletonElement className="h-6 w-24" /> {/* Featured Badge (optional) */}
              </div>
              <SkeletonElement className="h-10 md:h-12 w-3/4 mb-6" /> {/* Title */}
              <SkeletonElement className="h-5 w-full mb-2" /> {/* Excerpt line 1 */}
              <SkeletonElement className="h-5 w-5/6 mb-6" /> {/* Excerpt line 2 */}

              {/* Meta Information Skeleton */}
              <div className="flex flex-wrap items-center gap-6 text-sm mb-6">
                <div className="flex items-center gap-2">
                  <SkeletonElement className="h-8 w-8 rounded-full" /> {/* Avatar */}
                  <SkeletonElement className="h-5 w-24" /> {/* Author Name */}
                </div>
                <SkeletonElement className="h-5 w-32" /> {/* Date */}
                <SkeletonElement className="h-5 w-20" /> {/* Read Time */}
              </div>

              {/* Engagement Metrics Skeleton */}
              <div className="flex items-center gap-6 text-sm mb-6">
                <SkeletonElement className="h-5 w-20" /> {/* Views */}
                <SkeletonElement className="h-5 w-16" /> {/* Likes */}
                <SkeletonElement className="h-5 w-20" /> {/* Comments */}
              </div>

              {/* Tags Skeleton */}
              <div className="flex flex-wrap gap-2">
                {[...Array(4)].map((_, i) => (
                  <SkeletonElement key={i} className="h-5 w-16" />
                ))}
              </div>
            </div>

            {/* Article Content Skeleton */}
            <div className="p-8 space-y-3">
              <SkeletonElement className="h-4 w-full" />
              <SkeletonElement className="h-4 w-5/6" />
              <SkeletonElement className="h-4 w-full" />
              <SkeletonElement className="h-4 w-3/4" />
              <SkeletonElement className="h-4 w-full" />
              <SkeletonElement className="h-4 w-full" />
              <SkeletonElement className="h-4 w-5/6" />
              <br />
              <SkeletonElement className="h-4 w-full" />
              <SkeletonElement className="h-4 w-3/4" />
            </div>
          </div>
        </article>

        {/* Sidebar Skeleton */}
        <aside className="space-y-8">
          {[...Array(2)].map((_, i) => ( // Assuming 2 sidebar cards (Author, Newsletter)
            <div key={i} className="bg-slate-800/50 p-6 rounded-lg space-y-4">
              <SkeletonElement className="h-6 w-1/2 mb-2" /> {/* Card Title */}
              <SkeletonElement className="h-10 w-10 rounded-full mx-auto mb-2" /> {/* Avatar for Author */}
              <SkeletonElement className="h-4 w-3/4" />
              <SkeletonElement className="h-4 w-5/6" />
              <SkeletonElement className="h-4 w-full" />
              <SkeletonElement className="h-8 w-full mt-2" /> {/* Button */}
            </div>
          ))}
        </aside>
      </div>
    </div>
  );
};

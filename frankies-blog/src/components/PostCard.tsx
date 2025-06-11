import Link from 'next/link';
import { PostMeta } from '@/lib/posts';

interface PostCardProps {
  post: PostMeta;
  imageUrl?: string;
  index?: number;
}

export default function PostCard({ post, imageUrl, index = 0 }: PostCardProps) {
  // Curated high-quality images for different tech topics
  const defaultImages = [
    "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&h=800&fit=crop&auto=format&q=80",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=800&fit=crop&auto=format&q=80", 
    "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1200&h=800&fit=crop&auto=format&q=80",
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=800&fit=crop&auto=format&q=80",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&auto=format&q=80"
  ];
  
  const postImage = imageUrl || defaultImages[index % defaultImages.length];

  return (
    <article className="group @container animate-slide-up mb-8">
      <div className="bg-[#0f1b22] border border-[#243947] rounded-2xl overflow-hidden hover:border-[#1993e5] transition-all duration-300 hover:shadow-2xl hover:shadow-[#1993e5]/10 hover:-translate-y-1">
        <div className="flex flex-col @2xl:flex-row">
          {/* Image Section */}
          <div className="relative @2xl:w-2/5 aspect-[16/10] @2xl:aspect-auto overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat group-hover:scale-105 transition-transform duration-500"
              style={{ backgroundImage: `url("${postImage}")` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111b22]/60 via-transparent to-transparent @2xl:bg-gradient-to-r @2xl:from-transparent @2xl:via-transparent @2xl:to-[#111b22]/60" />
            
            {/* Reading time badge */}
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#1993e5]/90 text-white backdrop-blur-sm">
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                5 min read
              </span>
            </div>
          </div>

          {/* Content Section */}
          <div className="@2xl:w-3/5 p-8 @2xl:p-10 flex flex-col justify-between">
            <div className="space-y-4">
              {/* Date */}
              <time className="text-sm font-medium text-muted uppercase tracking-wider">
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </time>

              {/* Title */}
              <h2 className="text-2xl @2xl:text-3xl font-bold text-white leading-tight group-hover:text-[#1993e5] transition-colors duration-200">
                <Link href={`/${post.slug}`} className="after:absolute after:inset-0">
                  {post.title}
                </Link>
              </h2>

              {/* Excerpt */}
              <p className="text-muted text-lg leading-relaxed line-clamp-3">
                {post.excerpt || 'Discover insights and practical knowledge that will help you stay ahead in the rapidly evolving world of technology and software development.'}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#243947] text-muted-dark">
                  Technology
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#243947] text-muted-dark">
                  Development
                </span>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-6 flex items-center justify-between">
              <Link 
                href={`/${post.slug}`}
                className="inline-flex items-center text-[#1993e5] font-semibold hover:text-accent-hover transition-colors group/link"
              >
                Read full article
                <svg className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              {/* Author info */}
              <div className="flex items-center space-x-3">
                <div 
                  className="w-8 h-8 rounded-full bg-cover bg-center"
                  style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face&auto=format&q=60")'
                  }}
                />
                <span className="text-sm font-medium text-muted">Francisco Rojas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

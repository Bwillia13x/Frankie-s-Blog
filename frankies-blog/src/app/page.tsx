import Hero from '@/components/Hero';
import PostCard from '@/components/PostCard';
import { getAllPosts } from '@/lib/posts';

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />
      
      {/* Blog Posts Section */}
      <section className="relative py-20 px-4 @lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#1993e5]/10 border border-[#1993e5]/20 mb-6">
              <svg className="w-4 h-4 mr-2 text-[#1993e5]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-[#1993e5] text-sm font-semibold">Latest Content</span>
            </div>
            <h2 className="text-4xl @lg:text-5xl font-bold text-white mb-4">
              Latest <span className="text-[#1993e5]">Posts</span>
            </h2>
            <p className="text-muted text-xl max-w-2xl mx-auto leading-relaxed">
              Discover in-depth articles, tutorials, and insights on the latest trends in technology, programming, and software development.
            </p>
          </div>

          {/* Posts Grid */}
          <div className="space-y-8">
            {posts.length > 0 ? (
              posts.map((post, index) => (
                <PostCard key={post.slug} post={post} index={index} />
              ))
            ) : (
              <div className="text-center py-20">
                <div className="w-24 h-24 mx-auto mb-6 bg-[#243947] rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">No posts yet</h3>
                <p className="text-muted">Check back soon for exciting new content!</p>
              </div>
            )}
          </div>

          {/* Newsletter Signup Section */}
          <div className="mt-24 text-center">
            <div className="bg-gradient-to-r from-[#1993e5]/10 to-[#243947]/20 border border-[#243947] rounded-3xl p-12 @lg:p-16 backdrop-blur-sm">
              <h3 className="text-3xl @lg:text-4xl font-bold text-white mb-4">
                Stay in the <span className="text-[#1993e5]">Loop</span>
              </h3>
              <p className="text-muted text-lg mb-8 max-w-2xl mx-auto">
                Get notified when new articles are published. Join our community of developers and tech enthusiasts.
              </p>
              <div className="flex flex-col @sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-[#243947] border border-[#243947] rounded-2xl text-white placeholder-muted focus:outline-none focus:ring-2 focus:ring-[#1993e5] focus:border-transparent"
                />
                <button className="px-8 py-4 bg-[#1993e5] text-white font-semibold rounded-2xl hover:bg-accent-hover transition-colors duration-300 hover:scale-105 transform">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

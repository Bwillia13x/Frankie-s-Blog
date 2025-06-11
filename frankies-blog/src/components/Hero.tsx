import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative overflow-hidden animate-fade-in">
      {/* Background with enhanced gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1993e5]/10 via-[#111b22] to-[#243947]/20" />
      
      <div className="relative @container">
        <div className="px-4 py-16 @lg:py-24">
          <div
            className="relative flex min-h-[600px] @lg:min-h-[700px] flex-col gap-8 bg-cover bg-center bg-no-repeat rounded-3xl items-start justify-end p-8 @lg:p-16 overflow-hidden group"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(25, 147, 229, 0.1) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.8) 100%), url("https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&h=900&fit=crop&auto=format&q=80")`
            }}
          >
            {/* Animated background overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#111b22]/90 via-[#111b22]/40 to-transparent" />
            
            {/* Floating elements for visual interest */}
            <div className="absolute top-8 right-8 w-32 h-32 bg-[#1993e5]/10 rounded-full blur-2xl animate-pulse" />
            <div className="absolute bottom-1/3 left-8 w-24 h-24 bg-[#243947]/30 rounded-full blur-xl" />
            
            <div className="relative z-10 flex flex-col gap-6 text-left max-w-4xl">
              {/* Welcome badge */}
              <div className="inline-flex items-center w-fit px-4 py-2 rounded-full bg-[#1993e5]/20 border border-[#1993e5]/30 backdrop-blur-sm">
                <span className="text-[#1993e5] text-sm font-semibold tracking-wide">
                  ✨ Welcome to my digital space
                </span>
              </div>

              {/* Main heading with enhanced typography */}
              <h1 className="text-white text-5xl @lg:text-7xl @2xl:text-8xl font-black leading-tight tracking-tight">
                <span className="block">Welcome to</span>
                <span className="block bg-gradient-to-r from-[#1993e5] to-[#93b3c8] bg-clip-text text-transparent">
                  My Blog
                </span>
              </h1>

              {/* Enhanced description */}
              <div className="space-y-4">
                <p className="text-white text-xl @lg:text-2xl font-medium leading-relaxed">
                  I&apos;m <span className="text-[#1993e5] font-bold">Francisco Rojas</span>, a passionate writer and tech enthusiast.
                </p>
                <p className="text-muted text-lg @lg:text-xl leading-relaxed max-w-3xl">
                  Join me as I explore cutting-edge technologies, share practical insights, and discuss the exciting developments shaping our digital future. From AI and machine learning to web development and software engineering.
                </p>
              </div>

              {/* Enhanced call-to-action buttons */}
              <div className="flex flex-col @sm:flex-row gap-4 mt-8">
                <Link href="/hello-world">
                  <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-[#1993e5] rounded-2xl hover:bg-accent-hover transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#1993e5]/25 overflow-hidden">
                    <span className="relative z-10 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      Read Latest Post
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0d7cbf] to-[#1993e5] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                </Link>
                
                <Link href="/about">
                  <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-[#243947]/80 border border-[#243947] rounded-2xl hover:bg-[#243947] hover:border-[#1993e5] transition-all duration-300 backdrop-blur-sm">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    About Me
                  </button>
                </Link>
              </div>

              {/* Stats or highlights */}
              <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-[#243947]/50">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">50+</div>
                  <div className="text-sm text-muted">Articles Written</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">10K+</div>
                  <div className="text-sm text-muted">Readers Reached</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">5+</div>
                  <div className="text-sm text-muted">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

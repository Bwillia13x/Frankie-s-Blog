export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 @lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#1993e5]/10 border border-[#1993e5]/20 mb-6">
              <svg className="w-4 h-4 mr-2 text-[#1993e5]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-[#1993e5] text-sm font-semibold">Software Engineer</span>
            </div>
            <h1 className="text-4xl @lg:text-6xl font-bold text-white mb-6">
              Hi, I'm <span className="text-[#1993e5]">Francisco</span>
            </h1>
            <p className="text-muted text-xl max-w-3xl mx-auto leading-relaxed mb-8">
              A passionate software engineer with expertise in full-stack development, 
              cloud technologies, and building scalable applications that solve real-world problems.
            </p>
            <div className="flex flex-col @sm:flex-row gap-4 justify-center">
              <a href="/projects" className="px-8 py-4 bg-[#1993e5] text-white font-semibold rounded-2xl hover:bg-accent-hover transition-all duration-300 hover:scale-105 transform inline-block">
                View My Work
              </a>
              <a href="/blog" className="px-8 py-4 border border-[#243947] text-white font-semibold rounded-2xl hover:bg-[#243947]/50 transition-all duration-300 inline-block">
                Read My Blog
              </a>
              <a href="/contact" className="px-8 py-4 border border-[#243947] text-white font-semibold rounded-2xl hover:bg-[#243947]/50 transition-all duration-300 inline-block">
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-20 px-4 @lg:px-8 bg-[#243947]/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#1993e5]/10 border border-[#1993e5]/20 mb-6">
              <svg className="w-4 h-4 mr-2 text-[#1993e5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="text-[#1993e5] text-sm font-semibold">About Me</span>
            </div>
            <h2 className="text-3xl @lg:text-5xl font-bold text-white mb-6">
              Crafting Digital <span className="text-[#1993e5]">Experiences</span>
            </h2>
          </div>
          
          <div className="grid @lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-muted text-lg leading-relaxed">
                I'm a dedicated software engineer with over 5 years of experience building web applications 
                and distributed systems. My journey in technology started with a curiosity about how things work, 
                which led me to pursue computer science and develop a deep passion for creating elegant solutions 
                to complex problems.
              </p>
              <p className="text-muted text-lg leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or sharing knowledge with the developer community through writing and mentoring.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-6 bg-[#243947]/30 border border-[#243947] rounded-2xl hover:border-[#1993e5]/50 transition-all duration-300 hover:transform hover:-translate-y-1">
                  <div className="text-3xl font-bold text-[#1993e5] mb-2">5+</div>
                  <div className="text-sm text-muted">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-[#243947]/30 border border-[#243947] rounded-2xl hover:border-[#1993e5]/50 transition-all duration-300 hover:transform hover:-translate-y-1">
                  <div className="text-3xl font-bold text-[#1993e5] mb-2">100K+</div>
                  <div className="text-sm text-muted">Users Served</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-[#1993e5]/20 to-[#243947]/30 border border-[#243947] rounded-3xl p-8 backdrop-blur-sm">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#1993e5]/20 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#1993e5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Fast & Efficient</h3>
                      <p className="text-sm text-muted">Optimized for performance</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#1993e5]/20 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#1993e5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Secure & Reliable</h3>
                      <p className="text-sm text-muted">Enterprise-grade security</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#1993e5]/20 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#1993e5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Responsive Design</h3>
                      <p className="text-sm text-muted">Works on any device</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="relative py-20 px-4 @lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#1993e5]/10 border border-[#1993e5]/20 mb-6">
              <svg className="w-4 h-4 mr-2 text-[#1993e5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
              </svg>
              <span className="text-[#1993e5] text-sm font-semibold">Professional Journey</span>
            </div>
            <h2 className="text-3xl @lg:text-5xl font-bold text-white mb-6">
              Work <span className="text-[#1993e5]">Experience</span>
            </h2>
          </div>
          
          <div className="space-y-8">
            <div className="group">
              <div className="bg-[#243947]/30 border border-[#243947] rounded-3xl p-8 hover:border-[#1993e5]/50 transition-all duration-500 hover:transform hover:-translate-y-2">
                <div className="flex flex-col @lg:flex-row @lg:items-center @lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#1993e5] transition-colors duration-300 mb-2">Senior Software Engineer</h3>
                    <p className="text-[#1993e5] font-semibold text-lg">TechCorp Inc.</p>
                  </div>
                  <div className="flex items-center gap-2 mt-4 @lg:mt-0">
                    <div className="px-4 py-2 bg-[#1993e5]/20 text-[#1993e5] rounded-xl border border-[#1993e5]/20 font-medium">
                      2022 - Present
                    </div>
                  </div>
                </div>
                <p className="text-muted leading-relaxed mb-6">
                  Lead development of microservices architecture serving 100K+ users daily. 
                  Implemented CI/CD pipelines and mentored junior developers in modern development practices.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#1993e5]/10 text-[#1993e5] rounded-full text-sm font-medium border border-[#1993e5]/20">Microservices</span>
                  <span className="px-3 py-1 bg-[#1993e5]/10 text-[#1993e5] rounded-full text-sm font-medium border border-[#1993e5]/20">AWS</span>
                  <span className="px-3 py-1 bg-[#1993e5]/10 text-[#1993e5] rounded-full text-sm font-medium border border-[#1993e5]/20">Docker</span>
                  <span className="px-3 py-1 bg-[#1993e5]/10 text-[#1993e5] rounded-full text-sm font-medium border border-[#1993e5]/20">Team Leadership</span>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-[#243947]/30 border border-[#243947] rounded-3xl p-8 hover:border-[#1993e5]/50 transition-all duration-500 hover:transform hover:-translate-y-2">
                <div className="flex flex-col @lg:flex-row @lg:items-center @lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#1993e5] transition-colors duration-300 mb-2">Full Stack Developer</h3>
                    <p className="text-[#1993e5] font-semibold text-lg">StartupXYZ</p>
                  </div>
                  <div className="flex items-center gap-2 mt-4 @lg:mt-0">
                    <div className="px-4 py-2 bg-[#1993e5]/20 text-[#1993e5] rounded-xl border border-[#1993e5]/20 font-medium">
                      2020 - 2022
                    </div>
                  </div>
                </div>
                <p className="text-muted leading-relaxed mb-6">
                  Built responsive web applications using React, Node.js, and PostgreSQL. 
                  Collaborated with design team to implement pixel-perfect UIs and optimize user experience.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#1993e5]/10 text-[#1993e5] rounded-full text-sm font-medium border border-[#1993e5]/20">React</span>
                  <span className="px-3 py-1 bg-[#1993e5]/10 text-[#1993e5] rounded-full text-sm font-medium border border-[#1993e5]/20">Node.js</span>
                  <span className="px-3 py-1 bg-[#1993e5]/10 text-[#1993e5] rounded-full text-sm font-medium border border-[#1993e5]/20">PostgreSQL</span>
                  <span className="px-3 py-1 bg-[#1993e5]/10 text-[#1993e5] rounded-full text-sm font-medium border border-[#1993e5]/20">UI/UX</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="relative py-20 px-4 @lg:px-8 bg-[#243947]/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#1993e5]/10 border border-[#1993e5]/20 mb-6">
              <svg className="w-4 h-4 mr-2 text-[#1993e5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
              <span className="text-[#1993e5] text-sm font-semibold">Academic Background</span>
            </div>
            <h2 className="text-3xl @lg:text-5xl font-bold text-white mb-6">
              <span className="text-[#1993e5]">Education</span>
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="group">
              <div className="bg-[#243947]/30 border border-[#243947] rounded-3xl p-8 @lg:p-12 hover:border-[#1993e5]/50 transition-all duration-500 hover:transform hover:-translate-y-2">
                <div className="flex flex-col @lg:flex-row @lg:items-center @lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl @lg:text-3xl font-bold text-white group-hover:text-[#1993e5] transition-colors duration-300 mb-2">Bachelor of Science in Computer Science</h3>
                    <p className="text-[#1993e5] font-semibold text-lg">University of Technology</p>
                  </div>
                  <div className="flex items-center gap-2 mt-4 @lg:mt-0">
                    <div className="px-4 py-2 bg-[#1993e5]/20 text-[#1993e5] rounded-xl border border-[#1993e5]/20 font-medium">
                      2016 - 2020
                    </div>
                  </div>
                </div>
                <p className="text-muted leading-relaxed text-lg mb-6">
                  Graduated Magna Cum Laude with specialization in Software Engineering and Database Systems. 
                  Active in computer science club and hackathon competitions.
                </p>
                <div className="grid @md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-[#1993e5]/10 border border-[#1993e5]/20 rounded-2xl">
                    <div className="text-xl font-bold text-[#1993e5] mb-1">3.8</div>
                    <div className="text-sm text-muted">GPA</div>
                  </div>
                  <div className="text-center p-4 bg-[#1993e5]/10 border border-[#1993e5]/20 rounded-2xl">
                    <div className="text-xl font-bold text-[#1993e5] mb-1">Magna Cum Laude</div>
                    <div className="text-sm text-muted">Honor</div>
                  </div>
                  <div className="text-center p-4 bg-[#1993e5]/10 border border-[#1993e5]/20 rounded-2xl">
                    <div className="text-xl font-bold text-[#1993e5] mb-1">CS Club</div>
                    <div className="text-sm text-muted">President</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative py-20 px-4 @lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#1993e5]/10 border border-[#1993e5]/20 mb-6">
              <svg className="w-4 h-4 mr-2 text-[#1993e5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              <span className="text-[#1993e5] text-sm font-semibold">Technical Expertise</span>
            </div>
            <h2 className="text-3xl @lg:text-5xl font-bold text-white mb-6">
              Skills & <span className="text-[#1993e5]">Technologies</span>
            </h2>
          </div>
          
          <div className="grid @md:grid-cols-2 @xl:grid-cols-3 gap-8">
            <div className="group">
              <div className="bg-[#243947]/30 border border-[#243947] rounded-3xl p-8 hover:border-[#1993e5]/50 transition-all duration-500 hover:transform hover:-translate-y-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-[#1993e5]/20 text-[#1993e5] rounded-xl group-hover:bg-[#1993e5] group-hover:text-white transition-all duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#1993e5] transition-colors duration-300">Frontend</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#1993e5]/10 text-[#1993e5] rounded-full text-sm font-medium border border-[#1993e5]/20">React</span>
                  <span className="px-3 py-1 bg-[#1993e5]/10 text-[#1993e5] rounded-full text-sm font-medium border border-[#1993e5]/20">Next.js</span>
                  <span className="px-3 py-1 bg-[#1993e5]/10 text-[#1993e5] rounded-full text-sm font-medium border border-[#1993e5]/20">TypeScript</span>
                  <span className="px-3 py-1 bg-[#1993e5]/10 text-[#1993e5] rounded-full text-sm font-medium border border-[#1993e5]/20">Tailwind CSS</span>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-[#243947]/30 border border-[#243947] rounded-3xl p-8 hover:border-[#1993e5]/50 transition-all duration-500 hover:transform hover:-translate-y-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-[#1993e5]/20 text-[#1993e5] rounded-xl group-hover:bg-[#1993e5] group-hover:text-white transition-all duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#1993e5] transition-colors duration-300">Backend</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#1993e5]/10 text-[#1993e5] rounded-full text-sm font-medium border border-[#1993e5]/20">Node.js</span>
                  <span className="px-3 py-1 bg-[#1993e5]/10 text-[#1993e5] rounded-full text-sm font-medium border border-[#1993e5]/20">Python</span>
                  <span className="px-3 py-1 bg-[#1993e5]/10 text-[#1993e5] rounded-full text-sm font-medium border border-[#1993e5]/20">PostgreSQL</span>
                  <span className="px-3 py-1 bg-[#1993e5]/10 text-[#1993e5] rounded-full text-sm font-medium border border-[#1993e5]/20">MongoDB</span>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-[#243947]/30 border border-[#243947] rounded-3xl p-8 hover:border-[#1993e5]/50 transition-all duration-500 hover:transform hover:-translate-y-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-[#1993e5]/20 text-[#1993e5] rounded-xl group-hover:bg-[#1993e5] group-hover:text-white transition-all duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#1993e5] transition-colors duration-300">Cloud & DevOps</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#1993e5]/10 text-[#1993e5] rounded-full text-sm font-medium border border-[#1993e5]/20">AWS</span>
                  <span className="px-3 py-1 bg-[#1993e5]/10 text-[#1993e5] rounded-full text-sm font-medium border border-[#1993e5]/20">Docker</span>
                  <span className="px-3 py-1 bg-[#1993e5]/10 text-[#1993e5] rounded-full text-sm font-medium border border-[#1993e5]/20">Kubernetes</span>
                  <span className="px-3 py-1 bg-[#1993e5]/10 text-[#1993e5] rounded-full text-sm font-medium border border-[#1993e5]/20">CI/CD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="relative py-20 px-4 @lg:px-8 bg-[#243947]/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#1993e5]/10 border border-[#1993e5]/20 mb-6">
              <svg className="w-4 h-4 mr-2 text-[#1993e5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="text-[#1993e5] text-sm font-semibold">Beyond Code</span>
            </div>
            <h2 className="text-3xl @lg:text-5xl font-bold text-white mb-6">
              Interests & <span className="text-[#1993e5]">Passions</span>
            </h2>
          </div>
          
          <div className="grid @md:grid-cols-2 @xl:grid-cols-4 gap-8">
            <div className="group text-center">
              <div className="bg-[#243947]/30 border border-[#243947] rounded-3xl p-8 hover:border-[#1993e5]/50 transition-all duration-500 hover:transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-[#1993e5]/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#1993e5] group-hover:scale-110 transition-all duration-300">
                  <svg className="w-8 h-8 text-[#1993e5] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#1993e5] transition-colors duration-300">Open Source</h3>
                <p className="text-muted leading-relaxed">Contributing to community projects and sharing knowledge through code.</p>
              </div>
            </div>
            
            <div className="group text-center">
              <div className="bg-[#243947]/30 border border-[#243947] rounded-3xl p-8 hover:border-[#1993e5]/50 transition-all duration-500 hover:transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-[#1993e5]/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#1993e5] group-hover:scale-110 transition-all duration-300">
                  <svg className="w-8 h-8 text-[#1993e5] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#1993e5] transition-colors duration-300">Learning</h3>
                <p className="text-muted leading-relaxed">Always exploring new technologies and keeping up with industry trends.</p>
              </div>
            </div>
            
            <div className="group text-center">
              <div className="bg-[#243947]/30 border border-[#243947] rounded-3xl p-8 hover:border-[#1993e5]/50 transition-all duration-500 hover:transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-[#1993e5]/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#1993e5] group-hover:scale-110 transition-all duration-300">
                  <svg className="w-8 h-8 text-[#1993e5] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#1993e5] transition-colors duration-300">Mentoring</h3>
                <p className="text-muted leading-relaxed">Helping junior developers grow their skills and advance their careers.</p>
              </div>
            </div>
            
            <div className="group text-center">
              <div className="bg-[#243947]/30 border border-[#243947] rounded-3xl p-8 hover:border-[#1993e5]/50 transition-all duration-500 hover:transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-[#1993e5]/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#1993e5] group-hover:scale-110 transition-all duration-300">
                  <svg className="w-8 h-8 text-[#1993e5] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#1993e5] transition-colors duration-300">Travel</h3>
                <p className="text-muted leading-relaxed">Exploring different cultures and gaining new perspectives around the world.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-20 px-4 @lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-[#1993e5]/10 to-[#243947]/20 border border-[#243947] rounded-3xl p-12 @lg:p-16 backdrop-blur-sm">
            <h3 className="text-3xl @lg:text-4xl font-bold text-white mb-4">
              Let's Work <span className="text-[#1993e5]">Together</span>
            </h3>
            <p className="text-muted text-lg mb-8 max-w-2xl mx-auto">
              I'm always interested in hearing about new opportunities and interesting projects. 
              Let's discuss how we can bring your ideas to life.
            </p>
            <div className="flex flex-col @sm:flex-row gap-4 justify-center">
              <a href="/contact" className="px-8 py-4 bg-[#1993e5] text-white font-semibold rounded-2xl hover:bg-accent-hover transition-all duration-300 hover:scale-105 transform inline-block">
                Get In Touch
              </a>
              <a href="/projects" className="px-8 py-4 border border-[#243947] text-white font-semibold rounded-2xl hover:bg-[#243947]/50 transition-all duration-300 inline-block">
                View Projects
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 @lg:px-8">
        <div className="max-w-4xl mx-auto">
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
              <button className="px-8 py-4 bg-[#1993e5] text-white font-semibold rounded-2xl hover:bg-accent-hover transition-all duration-300 hover:scale-105 transform">
                View My Work
              </button>
              <button className="px-8 py-4 border border-[#243947] text-white font-semibold rounded-2xl hover:bg-[#243947]/50 transition-all duration-300">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-20 px-4 @lg:px-8 bg-[#243947]/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl @lg:text-4xl font-bold text-white mb-8 text-center">About Me</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-muted text-lg leading-relaxed mb-6">
              I'm a dedicated software engineer with over 5 years of experience building web applications 
              and distributed systems. My journey in technology started with a curiosity about how things work, 
              which led me to pursue computer science and develop a deep passion for creating elegant solutions 
              to complex problems.
            </p>
            <p className="text-muted text-lg leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or sharing knowledge with the developer community through writing and mentoring.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="relative py-20 px-4 @lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl @lg:text-4xl font-bold text-white mb-12 text-center">Experience</h2>
          <div className="space-y-8">
            <div className="bg-[#243947]/30 border border-[#243947] rounded-2xl p-6">
              <div className="flex flex-col @md:flex-row @md:items-center @md:justify-between mb-4">
                <h3 className="text-xl font-bold text-white">Senior Software Engineer</h3>
                <span className="text-[#1993e5] font-medium">2022 - Present</span>
              </div>
              <p className="text-[#1993e5] font-medium mb-3">TechCorp Inc.</p>
              <p className="text-muted leading-relaxed">
                Lead development of microservices architecture serving 100K+ users daily. 
                Implemented CI/CD pipelines and mentored junior developers.
              </p>
            </div>
            <div className="bg-[#243947]/30 border border-[#243947] rounded-2xl p-6">
              <div className="flex flex-col @md:flex-row @md:items-center @md:justify-between mb-4">
                <h3 className="text-xl font-bold text-white">Full Stack Developer</h3>
                <span className="text-[#1993e5] font-medium">2020 - 2022</span>
              </div>
              <p className="text-[#1993e5] font-medium mb-3">StartupXYZ</p>
              <p className="text-muted leading-relaxed">
                Built responsive web applications using React, Node.js, and PostgreSQL. 
                Collaborated with design team to implement pixel-perfect UIs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="relative py-20 px-4 @lg:px-8 bg-[#243947]/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl @lg:text-4xl font-bold text-white mb-12 text-center">Education</h2>
          <div className="bg-[#243947]/30 border border-[#243947] rounded-2xl p-6">
            <div className="flex flex-col @md:flex-row @md:items-center @md:justify-between mb-4">
              <h3 className="text-xl font-bold text-white">Bachelor of Science in Computer Science</h3>
              <span className="text-[#1993e5] font-medium">2016 - 2020</span>
            </div>
            <p className="text-[#1993e5] font-medium mb-3">University of Technology</p>
            <p className="text-muted leading-relaxed">
              Graduated Magna Cum Laude with specialization in Software Engineering and Database Systems.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative py-20 px-4 @lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl @lg:text-4xl font-bold text-white mb-12 text-center">Skills</h2>
          <div className="grid @md:grid-cols-2 @lg:grid-cols-3 gap-6">
            <div className="bg-[#243947]/30 border border-[#243947] rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#1993e5]/20 text-[#1993e5] rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-[#1993e5]/20 text-[#1993e5] rounded-full text-sm">Next.js</span>
                <span className="px-3 py-1 bg-[#1993e5]/20 text-[#1993e5] rounded-full text-sm">TypeScript</span>
                <span className="px-3 py-1 bg-[#1993e5]/20 text-[#1993e5] rounded-full text-sm">Tailwind CSS</span>
              </div>
            </div>
            <div className="bg-[#243947]/30 border border-[#243947] rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#1993e5]/20 text-[#1993e5] rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-[#1993e5]/20 text-[#1993e5] rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-[#1993e5]/20 text-[#1993e5] rounded-full text-sm">PostgreSQL</span>
                <span className="px-3 py-1 bg-[#1993e5]/20 text-[#1993e5] rounded-full text-sm">MongoDB</span>
              </div>
            </div>
            <div className="bg-[#243947]/30 border border-[#243947] rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Cloud & DevOps</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#1993e5]/20 text-[#1993e5] rounded-full text-sm">AWS</span>
                <span className="px-3 py-1 bg-[#1993e5]/20 text-[#1993e5] rounded-full text-sm">Docker</span>
                <span className="px-3 py-1 bg-[#1993e5]/20 text-[#1993e5] rounded-full text-sm">Kubernetes</span>
                <span className="px-3 py-1 bg-[#1993e5]/20 text-[#1993e5] rounded-full text-sm">CI/CD</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="relative py-20 px-4 @lg:px-8 bg-[#243947]/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl @lg:text-4xl font-bold text-white mb-12 text-center">Interests</h2>
          <div className="grid @md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1993e5]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#1993e5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Open Source</h3>
              <p className="text-muted">Contributing to community projects and sharing knowledge through code.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1993e5]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#1993e5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Learning</h3>
              <p className="text-muted">Always exploring new technologies and keeping up with industry trends.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1993e5]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#1993e5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Mentoring</h3>
              <p className="text-muted">Helping junior developers grow their skills and advance their careers.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1993e5]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#1993e5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Travel</h3>
              <p className="text-muted">Exploring different cultures and gaining new perspectives around the world.</p>
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
              <button className="px-8 py-4 bg-[#1993e5] text-white font-semibold rounded-2xl hover:bg-accent-hover transition-all duration-300 hover:scale-105 transform">
                Get In Touch
              </button>
              <button className="px-8 py-4 border border-[#243947] text-white font-semibold rounded-2xl hover:bg-[#243947]/50 transition-all duration-300">
                View Projects
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

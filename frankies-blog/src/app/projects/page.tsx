import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects - Francisco Rojas',
  description: 'Explore my portfolio of web applications, innovative projects, and technical achievements that showcase my expertise in full-stack development and modern technologies.',
};

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: 'web-app' | 'mobile' | 'open-source' | 'api';
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  metrics?: {
    users?: string;
    performance?: string;
    impact?: string;
  };
}

const projects: Project[] = [
  {
    id: 'taskflow-pro',
    title: 'TaskFlow Pro',
    description: 'A comprehensive project management platform with real-time collaboration, built for modern teams.',
    longDescription: 'TaskFlow Pro revolutionizes project management with AI-powered task prioritization, real-time collaboration, and advanced analytics. Built with scalability in mind, it handles thousands of concurrent users.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Socket.io', 'Redis', 'Docker'],
    category: 'web-app',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop&crop=center&auto=format&q=60',
    liveUrl: 'https://taskflow-pro.demo.com',
    githubUrl: 'https://github.com/frankie-rojas/taskflow-pro',
    featured: true,
    metrics: {
      users: '10K+ active users',
      performance: '99.9% uptime',
      impact: '40% productivity increase'
    }
  },
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with advanced inventory management and payment processing.',
    longDescription: 'A complete e-commerce ecosystem featuring advanced inventory tracking, multi-payment gateway integration, and sophisticated analytics dashboard. Designed to scale from startup to enterprise.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS', 'Elasticsearch'],
    category: 'web-app',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center&auto=format&q=60',
    liveUrl: 'https://ecommerce-demo.vercel.app',
    githubUrl: 'https://github.com/frankie-rojas/ecommerce-platform',
    featured: true,
    metrics: {
      users: '5K+ merchants',
      performance: '2s page load time',
      impact: '$2M+ processed'
    }
  },
  {
    id: 'weather-app',
    title: 'React Weather App',
    description: 'Beautiful, responsive weather application with location-based forecasts and interactive maps.',
    longDescription: 'An elegant weather application featuring detailed forecasts, interactive weather maps, and location-based services. Optimized for performance with caching and offline capabilities.',
    technologies: ['React Native', 'Expo', 'TypeScript', 'Weather API', 'Maps SDK'],
    category: 'mobile',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop&crop=center&auto=format&q=60',
    liveUrl: 'https://weather-app-demo.netlify.app',
    githubUrl: 'https://github.com/frankie-rojas/weather-app',
    featured: false,
    metrics: {
      users: '50K+ downloads',
      performance: '4.8/5 rating',
      impact: '99% accuracy'
    }
  },
  {
    id: 'design-system',
    title: 'Component Library',
    description: 'Comprehensive React component library with TypeScript support and Storybook documentation.',
    longDescription: 'A production-ready component library designed for enterprise applications. Features comprehensive TypeScript definitions, accessibility compliance, and extensive documentation.',
    technologies: ['React', 'TypeScript', 'Storybook', 'Rollup', 'Testing Library', 'SCSS'],
    category: 'open-source',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop&crop=center&auto=format&q=60',
    githubUrl: 'https://github.com/frankie-rojas/component-library',
    featured: true,
    metrics: {
      users: '1K+ GitHub stars',
      performance: 'Tree-shakeable',
      impact: '200+ components'
    }
  },
  {
    id: 'api-gateway',
    title: 'Microservices API Gateway',
    description: 'Scalable API gateway with authentication, rate limiting, and monitoring capabilities.',
    longDescription: 'Enterprise-grade API gateway built to handle high-traffic microservices architecture. Features include JWT authentication, rate limiting, request/response transformation, and comprehensive monitoring.',
    technologies: ['Node.js', 'Express', 'Redis', 'JWT', 'Winston', 'Prometheus'],
    category: 'api',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&crop=center&auto=format&q=60',
    githubUrl: 'https://github.com/frankie-rojas/api-gateway',
    featured: false,
    metrics: {
      performance: '10K+ req/sec',
      impact: '99.99% reliability',
      users: 'Enterprise clients'
    }
  },
  {
    id: 'ai-chat-bot',
    title: 'AI-Powered Chatbot',
    description: 'Intelligent customer service chatbot with natural language processing and learning capabilities.',
    longDescription: 'Advanced chatbot leveraging machine learning for intelligent customer interactions. Features sentiment analysis, context awareness, and continuous learning from user interactions.',
    technologies: ['Python', 'TensorFlow', 'FastAPI', 'PostgreSQL', 'Docker', 'OpenAI API'],
    category: 'web-app',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop&crop=center&auto=format&q=60',
    liveUrl: 'https://chatbot-demo.herokuapp.com',
    githubUrl: 'https://github.com/frankie-rojas/ai-chatbot',
    featured: false,
    metrics: {
      users: '95% satisfaction',
      performance: '500ms response',
      impact: '60% query resolution'
    }
  }
];

const categories = [
  { id: 'all', label: 'All Projects', count: projects.length },
  { id: 'web-app', label: 'Web Apps', count: projects.filter(p => p.category === 'web-app').length },
  { id: 'mobile', label: 'Mobile', count: projects.filter(p => p.category === 'mobile').length },
  { id: 'open-source', label: 'Open Source', count: projects.filter(p => p.category === 'open-source').length },
  { id: 'api', label: 'APIs', count: projects.filter(p => p.category === 'api').length }
];

export default function ProjectsPage() {
  const featuredProjects = projects.filter(project => project.featured);
  const allProjects = projects;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 @lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#1993e5]/10 border border-[#1993e5]/20 mb-6">
              <svg className="w-4 h-4 mr-2 text-[#1993e5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span className="text-[#1993e5] text-sm font-semibold">Portfolio</span>
            </div>
            <h1 className="text-4xl @lg:text-6xl font-bold text-white mb-6">
              My <span className="text-[#1993e5]">Projects</span>
            </h1>
            <p className="text-muted text-xl max-w-3xl mx-auto leading-relaxed">
              A collection of projects that showcase my passion for creating scalable, 
              user-focused applications using modern technologies and best practices.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="relative py-20 px-4 @lg:px-8 bg-[#243947]/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl @lg:text-4xl font-bold text-white mb-12 text-center">Featured Projects</h2>
          <div className="grid @lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div key={project.id} className="group">
                <div className="bg-[#243947]/30 border border-[#243947] rounded-3xl p-8 hover:border-[#1993e5]/50 transition-all duration-500 hover:transform hover:-translate-y-2">
                  <div className="relative overflow-hidden rounded-2xl mb-6">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold text-white group-hover:text-[#1993e5] transition-colors duration-300">
                        {project.title}
                      </h3>
                      <div className="flex gap-3">
                        {project.liveUrl && (
                          <a 
                            href={project.liveUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-2 bg-[#1993e5]/20 text-[#1993e5] rounded-xl hover:bg-[#1993e5] hover:text-white transition-all duration-300"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        )}
                        {project.githubUrl && (
                          <a 
                            href={project.githubUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-2 bg-[#243947] text-muted rounded-xl hover:bg-[#1993e5] hover:text-white transition-all duration-300"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-muted leading-relaxed">{project.longDescription}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-3 py-1 bg-[#1993e5]/10 text-[#1993e5] rounded-full text-sm font-medium border border-[#1993e5]/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {project.metrics && (
                      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#243947]">
                        {project.metrics.users && (
                          <div className="text-center">
                            <div className="text-[#1993e5] font-semibold text-sm">{project.metrics.users}</div>
                            <div className="text-muted text-xs">Users</div>
                          </div>
                        )}
                        {project.metrics.performance && (
                          <div className="text-center">
                            <div className="text-[#1993e5] font-semibold text-sm">{project.metrics.performance}</div>
                            <div className="text-muted text-xs">Performance</div>
                          </div>
                        )}
                        {project.metrics.impact && (
                          <div className="text-center">
                            <div className="text-[#1993e5] font-semibold text-sm">{project.metrics.impact}</div>
                            <div className="text-muted text-xs">Impact</div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects with Filter */}
      <section className="relative py-20 px-4 @lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl @lg:text-4xl font-bold text-white mb-12 text-center">All Projects</h2>
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                className="px-6 py-3 bg-[#243947]/30 border border-[#243947] text-muted rounded-2xl hover:border-[#1993e5]/50 hover:text-[#1993e5] transition-all duration-300 focus:outline-none focus:border-[#1993e5] focus:text-[#1993e5]"
              >
                {category.label}
                <span className="ml-2 px-2 py-1 bg-[#1993e5]/20 text-[#1993e5] rounded-full text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid @md:grid-cols-2 @xl:grid-cols-3 gap-8">
            {allProjects.map((project) => (
              <div key={project.id} className="group">
                <div className="bg-[#243947]/30 border border-[#243947] rounded-2xl overflow-hidden hover:border-[#1993e5]/50 transition-all duration-500 hover:transform hover:-translate-y-1">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-xs rounded-full">
                        {categories.find(c => c.id === project.category)?.label.replace(/s$/, '') || project.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-white group-hover:text-[#1993e5] transition-colors duration-300">
                        {project.title}
                      </h3>
                      <div className="flex gap-2">
                        {project.liveUrl && (
                          <a 
                            href={project.liveUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-1.5 bg-[#1993e5]/20 text-[#1993e5] rounded-lg hover:bg-[#1993e5] hover:text-white transition-all duration-300"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        )}
                        {project.githubUrl && (
                          <a 
                            href={project.githubUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-1.5 bg-[#243947] text-muted rounded-lg hover:bg-[#1993e5] hover:text-white transition-all duration-300"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-muted text-sm leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span 
                          key={tech} 
                          className="px-2 py-1 bg-[#1993e5]/10 text-[#1993e5] rounded-md text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-[#243947] text-muted rounded-md text-xs">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 @lg:px-8 bg-[#243947]/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-[#1993e5]/10 to-[#243947]/20 border border-[#243947] rounded-3xl p-12 @lg:p-16 backdrop-blur-sm">
            <h3 className="text-3xl @lg:text-4xl font-bold text-white mb-4">
              Let's Build Something <span className="text-[#1993e5]">Amazing</span>
            </h3>
            <p className="text-muted text-lg mb-8 max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your ideas to life with cutting-edge technology and thoughtful design.
            </p>
            <div className="flex flex-col @sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-[#1993e5] text-white font-semibold rounded-2xl hover:bg-accent-hover transition-all duration-300 hover:scale-105 transform">
                Start a Project
              </button>
              <button className="px-8 py-4 border border-[#243947] text-white font-semibold rounded-2xl hover:bg-[#243947]/50 transition-all duration-300">
                View Resume
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 
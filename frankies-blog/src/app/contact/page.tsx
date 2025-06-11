import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - Francisco Rojas',
  description: 'Get in touch with Francisco Rojas for collaboration opportunities, project inquiries, or just to say hello. Let\'s build something amazing together.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 @lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#1993e5]/10 border border-[#1993e5]/20 mb-6">
              <svg className="w-4 h-4 mr-2 text-[#1993e5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-[#1993e5] text-sm font-semibold">Get in Touch</span>
            </div>
            <h1 className="text-4xl @lg:text-6xl font-bold text-white mb-6">
              Let's <span className="text-[#1993e5]">Connect</span>
            </h1>
            <p className="text-muted text-xl max-w-3xl mx-auto leading-relaxed">
              Have a project in mind or want to collaborate? I'd love to hear from you. 
              Let's discuss how we can bring your ideas to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options & Form */}
      <section className="relative py-20 px-4 @lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid @lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <div className="space-y-8">
              <h2 className="text-3xl @lg:text-4xl font-bold text-white mb-8">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-[#243947]/30 border border-[#243947] rounded-2xl hover:border-[#1993e5]/50 transition-all duration-300">
                  <div className="p-3 bg-[#1993e5]/20 text-[#1993e5] rounded-xl">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                    <p className="text-muted">francisco.rojas@email.com</p>
                    <p className="text-sm text-muted mt-1">I typically respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-[#243947]/30 border border-[#243947] rounded-2xl hover:border-[#1993e5]/50 transition-all duration-300">
                  <div className="p-3 bg-[#1993e5]/20 text-[#1993e5] rounded-xl">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Twitter</h3>
                    <p className="text-muted">@frankie_rojas</p>
                    <p className="text-sm text-muted mt-1">Follow for tech insights and updates</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-[#243947]/30 border border-[#243947] rounded-2xl hover:border-[#1993e5]/50 transition-all duration-300">
                  <div className="p-3 bg-[#1993e5]/20 text-[#1993e5] rounded-xl">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">LinkedIn</h3>
                    <p className="text-muted">francisco-rojas</p>
                    <p className="text-sm text-muted mt-1">Let's connect professionally</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-[#243947]/30 border border-[#243947] rounded-2xl hover:border-[#1993e5]/50 transition-all duration-300">
                  <div className="p-3 bg-[#1993e5]/20 text-[#1993e5] rounded-xl">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">GitHub</h3>
                    <p className="text-muted">frankie-rojas</p>
                    <p className="text-sm text-muted mt-1">Check out my latest projects</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#243947]/30 border border-[#243947] rounded-3xl p-8 @lg:p-12">
              <h3 className="text-2xl @lg:text-3xl font-bold text-white mb-8">Send me a message</h3>
              
              <form className="space-y-6">
                <div className="grid @md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-white mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 bg-[#111b22] border border-[#243947] rounded-xl text-white placeholder-muted focus:outline-none focus:border-[#1993e5] transition-colors duration-300"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-white mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 bg-[#111b22] border border-[#243947] rounded-xl text-white placeholder-muted focus:outline-none focus:border-[#1993e5] transition-colors duration-300"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-[#111b22] border border-[#243947] rounded-xl text-white placeholder-muted focus:outline-none focus:border-[#1993e5] transition-colors duration-300"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 bg-[#111b22] border border-[#243947] rounded-xl text-white placeholder-muted focus:outline-none focus:border-[#1993e5] transition-colors duration-300"
                    placeholder="Project collaboration"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 bg-[#111b22] border border-[#243947] rounded-xl text-white placeholder-muted focus:outline-none focus:border-[#1993e5] transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project or how I can help..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-[#1993e5] text-white font-semibold rounded-xl hover:bg-accent-hover transition-all duration-300 hover:scale-105 transform"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="relative py-20 px-4 @lg:px-8 bg-[#243947]/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-[#1993e5]/10 to-[#243947]/20 border border-[#243947] rounded-3xl p-12 @lg:p-16 backdrop-blur-sm">
            <h3 className="text-3xl @lg:text-4xl font-bold text-white mb-4">
              Ready to Start Your <span className="text-[#1993e5]">Project?</span>
            </h3>
            <p className="text-muted text-lg mb-8 max-w-2xl mx-auto">
              Whether you're a startup looking to build your first app or an established company 
              needing to scale your development team, I'm here to help make it happen.
            </p>
            <div className="flex flex-col @sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:francisco.rojas@email.com" 
                className="px-8 py-4 bg-[#1993e5] text-white font-semibold rounded-2xl hover:bg-accent-hover transition-all duration-300 hover:scale-105 transform inline-block"
              >
                Email Me Directly
              </a>
              <a 
                href="https://calendly.com/francisco-rojas" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 border border-[#243947] text-white font-semibold rounded-2xl hover:bg-[#243947]/50 transition-all duration-300 inline-block"
              >
                Schedule a Call
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 
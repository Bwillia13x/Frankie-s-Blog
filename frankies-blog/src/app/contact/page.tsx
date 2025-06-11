'use client'

import { Metadata } from 'next'
import { useState } from 'react'

const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with me for collaboration opportunities, questions, or just to say hello.',
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setSubmitted(true)
    setIsSubmitting(false)
    setFormData({ name: '', email: '', subject: '', message: '' })
    
    setTimeout(() => setSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="px-40 flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="@container">
          <div className="@[480px]:p-4">
            <div className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10 bg-[#111b22]">
              <div className="flex flex-col gap-2 text-left">
                <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                  Get in Touch
                </h1>
                <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                  Let's discuss your project or just say hello
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Options */}
        <div className="flex flex-col gap-6 px-4 py-10">
          <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3">
            Ways to Connect
          </h2>
          <div className="grid grid-cols-1 gap-4 @[480px]:grid-cols-3">
            <div className="flex flex-col items-center gap-3 py-6 px-4 bg-[#243947]/30 rounded-lg">
              <div className="w-12 h-12 bg-[#1993e5]/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-[#1993e5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-center">
                <h3 className="text-white font-semibold">Email</h3>
                <p className="text-[#93b3c8] text-sm">francisco@example.com</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3 py-6 px-4 bg-[#243947]/30 rounded-lg">
              <div className="w-12 h-12 bg-[#1993e5]/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-[#1993e5]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <div className="text-center">
                <h3 className="text-white font-semibold">GitHub</h3>
                <p className="text-[#93b3c8] text-sm">@francisco-dev</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3 py-6 px-4 bg-[#243947]/30 rounded-lg">
              <div className="w-12 h-12 bg-[#1993e5]/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-[#1993e5]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <div className="text-center">
                <h3 className="text-white font-semibold">LinkedIn</h3>
                <p className="text-[#93b3c8] text-sm">Francisco Martinez</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex flex-col gap-6 px-4 py-6">
          <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3">
            Send a Message
          </h2>
          
          {submitted && (
            <div className="mx-4 p-4 bg-green-500/20 border border-green-500/50 rounded-lg">
              <p className="text-green-400 text-center">✅ Message sent successfully! I'll get back to you soon.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6 px-4">
            <div className="grid grid-cols-1 gap-4 @[480px]:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-[#243947] border border-[#243947] rounded-lg text-white placeholder-[#93b3c8] focus:outline-none focus:border-[#1993e5] transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-[#243947] border border-[#243947] rounded-lg text-white placeholder-[#93b3c8] focus:outline-none focus:border-[#1993e5] transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-white text-sm font-medium mb-2">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-[#243947] border border-[#243947] rounded-lg text-white placeholder-[#93b3c8] focus:outline-none focus:border-[#1993e5] transition-colors"
                placeholder="Project collaboration, question, etc."
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-white text-sm font-medium mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-3 py-2 bg-[#243947] border border-[#243947] rounded-lg text-white placeholder-[#93b3c8] focus:outline-none focus:border-[#1993e5] transition-colors resize-vertical"
                placeholder="Tell me about your project or question..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full px-6 py-3 rounded-lg font-medium transition-colors ${
                isSubmitting
                  ? 'bg-[#243947] text-[#93b3c8] cursor-not-allowed'
                  : 'bg-[#1993e5] text-white hover:bg-blue-600'
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        {/* Response Time */}
        <div className="flex px-4 py-6 justify-center">
          <div className="bg-[#243947]/30 rounded-lg p-6 text-center max-w-md">
            <h3 className="text-white font-semibold mb-2">Response Time</h3>
            <p className="text-[#93b3c8] text-sm">
              I typically respond to messages within 24-48 hours. For urgent matters, feel free to reach out via email directly.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 
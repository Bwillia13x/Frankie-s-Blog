'use client';
import Link from 'next/link';
import { siteMetadata } from '@/lib/siteMetadata';
import { useState, useEffect } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [menuOpen]);

  const NavLinks = () => (
    <>
      {siteMetadata.nav.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="relative px-4 py-2 text-lg font-medium text-muted hover:text-white transition-colors duration-200 rounded-xl hover:bg-[#243947]/50 group"
          onClick={() => setMenuOpen(false)}
        >
          {item.title}
          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-[#1993e5] scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
        </Link>
      ))}
    </>
  );

  return (
    <header className="sticky top-0 z-50 bg-[#111b22]/95 backdrop-blur-lg border-b border-[#243947]/50">
      <div className="max-w-7xl mx-auto px-4 @lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-[#1993e5] to-[#93b3c8] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white">
                  <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 22V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 7L12 12L22 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-[#1993e5]/20 to-[#93b3c8]/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <Link href="/">
              <h1 className="text-xl font-bold text-white hover:text-[#1993e5] transition-colors duration-200">
                {siteMetadata.title}
              </h1>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden @md:flex items-center space-x-1">
            <NavLinks />
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Search Button */}
            <button className="p-2 text-muted hover:text-white hover:bg-[#243947]/50 rounded-xl transition-all duration-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Theme Toggle */}
            <button className="p-2 text-muted hover:text-white hover:bg-[#243947]/50 rounded-xl transition-all duration-200 group">
              <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            </button>

            {/* Subscribe Button */}
            <button className="hidden @sm:flex items-center px-6 py-2 bg-[#1993e5] text-white font-semibold rounded-xl hover:bg-accent-hover transition-all duration-200 hover:scale-105">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 19.5A2.5 2.5 0 016.5 17H20" />
              </svg>
              Subscribe
            </button>

            {/* Profile Avatar */}
            <div className="relative group">
              <div 
                className="w-10 h-10 rounded-full bg-cover bg-center ring-2 ring-transparent group-hover:ring-[#1993e5] transition-all duration-200 cursor-pointer"
                style={{
                  backgroundImage: 'url("https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format&q=60")'
                }}
              />
              <div className="absolute -inset-1 bg-gradient-to-br from-[#1993e5]/20 to-[#93b3c8]/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Mobile Menu Button */}
            <button
              className="@md:hidden p-2 text-muted hover:text-white hover:bg-[#243947]/50 rounded-xl transition-all duration-200"
              onClick={() => setMenuOpen(true)}
              aria-label="Open Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#111b22]/95 backdrop-blur flex flex-col items-center justify-center space-y-6 animate-fade-in" role="dialog" aria-modal="true">
          <button
            className="absolute top-6 right-6 p-2 text-muted hover:text-white hover:bg-[#243947]/50 rounded-xl transition-all duration-200"
            onClick={() => setMenuOpen(false)}
            aria-label="Close Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <nav className="flex flex-col items-center space-y-6 text-xl">
            <NavLinks />
          </nav>
        </div>
      )}
    </header>
  );
}

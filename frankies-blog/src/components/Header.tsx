'use client';
import Link from 'next/link';
import { siteMetadata } from '@/lib/siteMetadata';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { ThemeToggle } from '@/components/ui/theme-toggle';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { data: session } = useSession();

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
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Admin Button - Only shown for admin users */}
            {session && (session.user as any)?.role === 'admin' && (
              <Link href="/admin/dashboard">
                <button className="hidden @sm:flex items-center px-4 py-2 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition-all duration-200 hover:scale-105">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Admin
                </button>
              </Link>
            )}

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
            {/* Admin link in mobile menu */}
            {session && (session.user as any)?.role === 'admin' && (
              <Link
                href="/admin/dashboard"
                className="relative px-4 py-2 text-lg font-medium text-purple-400 hover:text-white transition-colors duration-200 rounded-xl hover:bg-[#243947]/50 group"
                onClick={() => setMenuOpen(false)}
              >
                Admin Panel
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}

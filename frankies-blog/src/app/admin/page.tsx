'use client';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { AdminDashboard } from '@/components/admin/AdminDashboard';
import { LoadingSpinner } from '@/components/common/LoadingSpinner';

export default function AdminPage() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/admin/login');
    },
  });

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-[#111b22] flex items-center justify-center">
        <LoadingSpinner size="large" />
      </div>
    );
  }

  // Check if user has admin privileges
  // This would typically check against a database or API
  const isAdmin = session?.user?.email === 'admin@frankiesblog.com' ||
    ('role' in (session?.user ?? {}) && (session.user as Record<string, unknown>).role === 'admin');

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-[#111b22] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Access Denied</h1>
          <p className="text-slate-400">You don't have permission to access this page.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#111b22]">
      <div className="container mx-auto px-4 py-8">
        <AdminDashboard />
      </div>
    </div>
  );
} 
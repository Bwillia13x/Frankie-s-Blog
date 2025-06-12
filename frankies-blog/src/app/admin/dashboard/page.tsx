'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  BookOpenIcon, 
  FolderIcon, 
  Mic, 
  UsersIcon,
  PlusIcon,
  EditIcon,
  BarChart3Icon
} from 'lucide-react';

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return; // Still loading

    if (!session || (session.user as any)?.role !== 'admin') {
      router.push('/admin/login');
    }
  }, [session, status, router]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!session) {
    return null;
  }

  const managementSections = [
    {
      title: 'Blog Posts',
      description: 'Manage blog content and articles',
      icon: BookOpenIcon,
      href: '/admin/blog',
      stats: '8 posts',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Projects',
      description: 'Update portfolio projects',
      icon: FolderIcon,
      href: '/admin/projects',
      stats: '4 projects',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Speaking',
      description: 'Manage speaking engagements',
      icon: Mic,
      href: '/admin/speaking',
      stats: '6 events',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Community',
      description: 'Community and resources',
      icon: UsersIcon,
      href: '/admin/community',
      stats: '12 resources',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Header */}
      <div className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
              <h1 className="text-xl font-bold text-white">Content Management</h1>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-slate-400">Welcome, {session.user?.name}</span>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => router.push('/')}
                className="border-slate-600 text-slate-300 hover:bg-slate-700"
              >
                View Site
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Dashboard</h2>
          <p className="text-slate-400">Manage your blog content and settings</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Total Posts</p>
                  <p className="text-2xl font-bold text-white">8</p>
                </div>
                <BarChart3Icon className="w-8 h-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Projects</p>
                  <p className="text-2xl font-bold text-white">4</p>
                </div>
                <FolderIcon className="w-8 h-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Speaking Events</p>
                  <p className="text-2xl font-bold text-white">6</p>
                </div>
                <Mic className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Resources</p>
                  <p className="text-2xl font-bold text-white">12</p>
                </div>
                <UsersIcon className="w-8 h-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Management Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {managementSections.map((section) => {
            const IconComponent = section.icon;
            return (
              <Card key={section.href} className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-slate-600 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 bg-gradient-to-r ${section.color} rounded-lg flex items-center justify-center`}>
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-white">{section.title}</CardTitle>
                      <p className="text-sm text-slate-400">{section.stats}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 mb-4">{section.description}</p>
                  <div className="flex gap-2">
                    <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700">
                      <Link href={section.href}>
                        <EditIcon className="w-4 h-4 mr-2" />
                        Manage
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                      <PlusIcon className="w-4 h-4 mr-2" />
                      Add New
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Actions */}
        <Card className="mt-8 bg-slate-800/50 backdrop-blur-sm border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Button className="justify-start" variant="outline" size="sm">
                <PlusIcon className="w-4 h-4 mr-2" />
                New Blog Post
              </Button>
              <Button className="justify-start" variant="outline" size="sm">
                <PlusIcon className="w-4 h-4 mr-2" />
                Add Project
              </Button>
              <Button className="justify-start" variant="outline" size="sm">
                <EditIcon className="w-4 h-4 mr-2" />
                Edit About Page
              </Button>
              <Button className="justify-start" variant="outline" size="sm">
                <BarChart3Icon className="w-4 h-4 mr-2" />
                View Analytics
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 
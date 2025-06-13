'use client';

import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  Users, 
  FileText, 
  Eye, 
  TrendingUp, 
  Clock, 
  MessageSquare,
  Download,
  Settings,
  Globe,
  Search,
  Filter,
  Calendar,
  ArrowUpRight,
  Activity
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AnalyticsDashboard } from '@/components/ui/analytics-tracker';
import { useAnalytics } from '@/components/ui/analytics-tracker';
import { cn } from '@/lib/utils';

interface DashboardMetrics {
  totalViews: number;
  totalPosts: number;
  totalSubscribers: number;
  avgReadingTime: number;
  completionRate: number;
  topPosts: Array<{
    slug: string;
    title: string;
    views: number;
    completionRate: number;
  }>;
  recentActivity: Array<{
    type: string;
    description: string;
    timestamp: number;
  }>;
}

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'overview' | 'analytics' | 'content' | 'subscribers' | 'settings'>('overview');
  const [metrics, setMetrics] = useState<DashboardMetrics | null>(null);
  const [dateRange, setDateRange] = useState<'7d' | '30d' | '90d'>('30d');
  const { getAnalyticsData } = useAnalytics();

  useEffect(() => {
    // Simulate fetching dashboard metrics
    const analyticsData = getAnalyticsData();
    
    // Process analytics data into dashboard metrics
    const processedMetrics: DashboardMetrics = {
      totalViews: analyticsData.filter((e: any) => e.type === 'page_view').length,
      totalPosts: 25, // This would come from your content management system
      totalSubscribers: 2847,
      avgReadingTime: analyticsData
        .filter((e: any) => e.type === 'time_on_page')
        .reduce((acc: number, e: any) => acc + (e.data.readingTime || 0), 0) / 
        analyticsData.filter((e: any) => e.type === 'time_on_page').length || 0,
      completionRate: (analyticsData.filter((e: any) => e.type === 'reading_complete').length / 
        analyticsData.filter((e: any) => e.type === 'page_view').length) * 100 || 0,
      topPosts: [
        { slug: 'react-performance-optimization', title: 'React Performance Optimization', views: 1250, completionRate: 78 },
        { slug: 'nextjs-deployment-guide', title: 'Next.js Deployment Guide', views: 890, completionRate: 82 },
        { slug: 'typescript-best-practices', title: 'TypeScript Best Practices', views: 745, completionRate: 75 }
      ],
      recentActivity: analyticsData.slice(-10).map((event: any) => ({
        type: event.type,
        description: getActivityDescription(event),
        timestamp: event.timestamp
      }))
    };
    
    setMetrics(processedMetrics);
  }, [dateRange, getAnalyticsData]);

  const getActivityDescription = (event: any) => {
    switch (event.type) {
      case 'page_view':
        return `New page view: ${event.data.title}`;
      case 'reading_complete':
        return `Article completed: ${event.data.title}`;
      case 'share':
        return `Article shared on ${event.data.platform}`;
      case 'content-upgrade-downloaded':
        return `Content upgrade downloaded: ${event.data.title}`;
      default:
        return `${event.type} event occurred`;
    }
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toFixed(0);
  };

  const formatTime = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}m ${seconds}s`;
  };

  if (!metrics) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <Activity className="w-8 h-8 text-blue-500 mx-auto mb-4 animate-spin" />
          <p className="text-slate-400">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
          <p className="text-slate-400 mt-1">Manage your blog and track performance</p>
        </div>
        <div className="flex items-center gap-3">
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value as any)}
            className="bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 text-white"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
          </select>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </Button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex space-x-1 bg-slate-800 p-1 rounded-lg">
        {[
          { id: 'overview', label: 'Overview', icon: BarChart3 },
          { id: 'analytics', label: 'Analytics', icon: TrendingUp },
          { id: 'content', label: 'Content', icon: FileText },
          { id: 'subscribers', label: 'Subscribers', icon: Users },
          { id: 'settings', label: 'Settings', icon: Settings }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors",
              activeTab === tab.id
                ? "bg-blue-600 text-white"
                : "text-slate-400 hover:text-white hover:bg-slate-700"
            )}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">Total Views</p>
                    <p className="text-2xl font-bold text-white">{formatNumber(metrics.totalViews)}</p>
                  </div>
                  <Eye className="w-8 h-8 text-blue-500" />
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <ArrowUpRight className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-green-500">+12.5%</span>
                  <span className="text-slate-400 ml-1">vs last period</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">Published Posts</p>
                    <p className="text-2xl font-bold text-white">{metrics.totalPosts}</p>
                  </div>
                  <FileText className="w-8 h-8 text-green-500" />
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <ArrowUpRight className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-green-500">+3</span>
                  <span className="text-slate-400 ml-1">this month</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">Subscribers</p>
                    <p className="text-2xl font-bold text-white">{formatNumber(metrics.totalSubscribers)}</p>
                  </div>
                  <Users className="w-8 h-8 text-purple-500" />
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <ArrowUpRight className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-green-500">+187</span>
                  <span className="text-slate-400 ml-1">this month</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">Avg Reading Time</p>
                    <p className="text-2xl font-bold text-white">{formatTime(metrics.avgReadingTime)}</p>
                  </div>
                  <Clock className="w-8 h-8 text-yellow-500" />
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <ArrowUpRight className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-green-500">+8.2%</span>
                  <span className="text-slate-400 ml-1">vs last period</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Top Performing Posts */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Top Performing Posts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {metrics.topPosts.map((post, index) => (
                  <div key={post.slug} className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{post.title}</h4>
                        <p className="text-sm text-slate-400">{formatNumber(post.views)} views</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-400">{post.completionRate}%</div>
                      <div className="text-xs text-slate-400">completion rate</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {metrics.recentActivity.slice(0, 5).map((activity, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-slate-700/30 rounded">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <div className="flex-1">
                      <p className="text-sm text-white">{activity.description}</p>
                      <p className="text-xs text-slate-400">
                        {new Date(activity.timestamp).toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {activeTab === 'analytics' && (
        <AnalyticsDashboard />
      )}

      {activeTab === 'content' && (
        <ContentManagement />
      )}

      {activeTab === 'subscribers' && (
        <SubscriberManagement />
      )}

      {activeTab === 'settings' && (
        <AdminSettings />
      )}
    </div>
  );
}

// Content Management Component
function ContentManagement() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-white">Content Management</h2>
        <Button className="bg-green-600 hover:bg-green-700">
          <FileText className="w-4 h-4 mr-2" />
          New Post
        </Button>
      </div>

      {/* Content Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-6 text-center">
            <FileText className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">25</div>
            <div className="text-sm text-slate-400">Published Posts</div>
          </CardContent>
        </Card>
        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-6 text-center">
            <Clock className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">3</div>
            <div className="text-sm text-slate-400">Draft Posts</div>
          </CardContent>
        </Card>
        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-6 text-center">
            <Calendar className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">2</div>
            <div className="text-sm text-slate-400">Scheduled Posts</div>
          </CardContent>
        </Card>
      </div>

      {/* Content List */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-white">Recent Posts</CardTitle>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <FileText className="w-12 h-12 text-slate-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Content Management Coming Soon</h3>
            <p className="text-slate-400">Advanced content management features will be added here.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Subscriber Management Component
function SubscriberManagement() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-white">Subscriber Management</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-6 text-center">
            <Users className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">2,847</div>
            <div className="text-sm text-slate-400">Total Subscribers</div>
          </CardContent>
        </Card>
        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-6 text-center">
            <TrendingUp className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">187</div>
            <div className="text-sm text-slate-400">New This Month</div>
          </CardContent>
        </Card>
        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-6 text-center">
            <Activity className="w-8 h-8 text-purple-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">45.2%</div>
            <div className="text-sm text-slate-400">Open Rate</div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-slate-800 border-slate-700">
        <CardContent className="p-6">
          <div className="text-center py-8">
            <Users className="w-12 h-12 text-slate-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Subscriber Management Coming Soon</h3>
            <p className="text-slate-400">Advanced subscriber management features will be added here.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Admin Settings Component
function AdminSettings() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-white">Admin Settings</h2>
      
      <Card className="bg-slate-800 border-slate-700">
        <CardContent className="p-6">
          <div className="text-center py-8">
            <Settings className="w-12 h-12 text-slate-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Admin Settings Coming Soon</h3>
            <p className="text-slate-400">Advanced admin settings will be added here.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 
'use client';

import React from 'react';
import { BookmarksList } from '@/components/ui/bookmark-system';
import { PageHeader } from '@/components/common';
import { Bookmark } from 'lucide-react';

export default function BookmarksPage() {
  return (
    <div className="min-h-screen bg-[#111b22]">
      <div className="container mx-auto px-4 py-12">
        <PageHeader
          title="Your Reading List"
          description="Keep track of articles you want to read later. Your bookmarks are saved locally and sync across your devices."
          badgeText="📚 Bookmarks"
          className="mb-8"
        />

        <BookmarksList />
      </div>
    </div>
  );
} 
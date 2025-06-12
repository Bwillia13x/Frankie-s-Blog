"use client";

import React, { useState } from "react";
import { AuthorCard } from "@/components/common";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDownIcon, FilterIcon } from "lucide-react";

interface SidebarDropdownProps {
  authorDetails: any;
  popularTags: string[];
}

export const SidebarDropdown: React.FC<SidebarDropdownProps> = ({ authorDetails, popularTags }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-8 text-center">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-2 px-4 py-2 border border-slate-600 text-slate-300 hover:bg-blue-500/20 hover:border-blue-400 rounded-lg"
      >
        <FilterIcon className="w-4 h-4" />
        Blog Info & Stats
        <ChevronDownIcon
          className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <AuthorCard {...authorDetails} />

          {/* Popular Tags */}
          <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">🏷️ Popular Topics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="cursor-pointer hover:bg-blue-500/20 border-slate-600 text-slate-300 hover:text-blue-300 hover:border-blue-400 text-xs"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Blog Stats */}
          <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">📈 Blog Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-slate-300">Total Posts</span>
                <span className="text-white font-semibold">24</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">Total Views</span>
                <span className="text-white font-semibold">45,231</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">Subscribers</span>
                <span className="text-white font-semibold">2,500+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">Comments</span>
                <span className="text-white font-semibold">892</span>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}; 
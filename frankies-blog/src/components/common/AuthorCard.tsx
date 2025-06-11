import React from 'react';
import Image from 'next/image'; // Import next/image
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// For AuthorCard, AuthorLink and AuthorStats are specific enough to keep here or move if they become shared.
export interface AuthorLink { // Exporting if it might be used by parent to construct props
  href: string;
  label: string;
}

export interface AuthorStats { // Exporting for the same reason
  label: string;
  value: string | number;
}

interface AuthorCardProps {
  authorName: string;
  authorTitle: string;
  avatarImageUrl?: string;
  avatarFallback?: string;
  bio?: string;
  location?: string;
  experience?: string;
  userCount?: string;
  actionLink?: AuthorLink;
  stats?: AuthorStats[];
  className?: string;
}

const AuthorCardComponent: React.FC<AuthorCardProps> = ({
  authorName,
  authorTitle,
  avatarImageUrl,
  avatarFallback = "A",
  bio,
  location,
  experience,
  userCount,
  actionLink = { href: "/contact", label: "Get In Touch" }, // Default prop value
  stats,
  className = "bg-slate-800/50 backdrop-blur-sm border-slate-700",
}) => {
  // Note: If `stats` or `actionLink` objects are created inline in the parent component on every render,
  // React.memo might not prevent re-renders as object identities would change.
  // Parent components should memoize these props (e.g. with useMemo or by defining them outside render scope)
  // if they want to fully leverage React.memo here.
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="text-white">{`👋 About ${authorName}`}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center mb-4">
          {avatarImageUrl ? (
            <Image
              src={avatarImageUrl}
              alt={authorName}
              width={64} // Corresponds to w-16
              height={64} // Corresponds to h-16
              className="rounded-full mr-4"
            />
          ) : (
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
              {avatarFallback}
            </div>
          )}
          <div>
            <h3 className="text-lg font-semibold text-white">{authorName}</h3>
            <p className="text-sm text-slate-400">{authorTitle}</p>
          </div>
        </div>

        {bio && <p className="text-slate-300 text-sm mb-4">{bio}</p>}

        {(location || experience || userCount) && (
          <div className="space-y-2 text-sm text-slate-400 mb-4">
            {location && <div>📍 {location}</div>}
            {experience && <div>💼 {experience}</div>}
            {userCount && <div>🚀 {userCount}</div>}
          </div>
        )}

        {stats && stats.length > 0 && (
          <div className="grid grid-cols-3 gap-3 text-center text-xs mb-4">
            {stats.map(stat => (
              <div key={stat.label}> {/* Using label as key, ensure it's unique */}
                <div className="font-bold text-white">{stat.value}</div>
                <div className="text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        )}

        {actionLink && (
          <Button asChild className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
            <Link href={actionLink.href}>{actionLink.label}</Link>
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export const AuthorCard = React.memo(AuthorCardComponent);

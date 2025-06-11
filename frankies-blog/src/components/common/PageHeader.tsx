import React from 'react';
import { Badge } from "@/components/ui/badge"; // Assuming Badge component exists

interface PageHeaderProps {
  title: string;
  description: React.ReactNode; // React.ReactNode can cause unnecessary re-renders if it's an object that changes identity.
                               // However, for simple string or stable JSX, memo should still be beneficial.
  badgeText?: string;
  badgeVariant?: "default" | "secondary" | "destructive" | "outline";
  className?: string;
}

const PageHeaderComponent: React.FC<PageHeaderProps> = ({
  title,
  description,
  badgeText,
  badgeVariant = "secondary",
  className = "",
}) => {
  return (
    <div className={`text-center mb-16 ${className}`}>
      {badgeText && (
        <Badge variant={badgeVariant} className="mb-4 bg-blue-500/20 text-blue-300 border-blue-400/30">
          {badgeText}
        </Badge>
      )}
      <h1 className="text-5xl font-bold text-white mb-6">
        {title}
      </h1>
      {typeof description === 'string' ? (
        <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
      ) : (
        // If description is complex JSX, ensure its identity is stable or memoized from the parent
        <div className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          {description}
        </div>
      )}
    </div>
  );
};

export const PageHeader = React.memo(PageHeaderComponent);

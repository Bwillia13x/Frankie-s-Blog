import React from 'react';
import { EyeIcon, HeartIcon, MessageCircleIcon } from 'lucide-react';

interface EngagementMetricsProps {
  views?: number;
  likes?: number;
  comments?: number;
  className?: string;
  iconSize?: number;
  textSize?: string;
}

const EngagementMetricsComponent: React.FC<EngagementMetricsProps> = ({
  views,
  likes,
  comments,
  className = "flex items-center gap-4 text-sm text-slate-400",
  iconSize = 4, // Corresponds to w-4 h-4
  textSize = "text-sm",
}) => {
  const iconClasses = `w-${iconSize} h-${iconSize}`;

  return (
    <div className={`${className} ${textSize}`}>
      {typeof views === 'number' && (
        <span className="flex items-center gap-1">
          <EyeIcon className={iconClasses} />
          {views.toLocaleString()} {views === 1 ? 'view' : 'views'}
        </span>
      )}
      {typeof likes === 'number' && (
        <span className="flex items-center gap-1">
          <HeartIcon className={iconClasses} />
          {likes.toLocaleString()} {likes === 1 ? 'like' : 'likes'}
        </span>
      )}
      {typeof comments === 'number' && (
        <span className="flex items-center gap-1">
          <MessageCircleIcon className={iconClasses} />
          {comments.toLocaleString()} {comments === 1 ? 'comment' : 'comments'}
        </span>
      )}
    </div>
  );
};

export const EngagementMetrics = React.memo(EngagementMetricsComponent);

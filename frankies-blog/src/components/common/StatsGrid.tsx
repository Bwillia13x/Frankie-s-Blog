import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from 'lucide-react';

interface StatItemData {
  id: string | number;
  label: string;
  value: string;
  iconName?: string;
  IconComponent?: LucideIcon;
}

interface StatCardProps {
  stat: StatItemData;
  cardClassName?: string;
  iconMap?: { [key: string]: LucideIcon };
}

const StatCard: React.FC<StatCardProps> = React.memo(({ stat, cardClassName, iconMap = {} }) => {
  const Icon = stat.IconComponent || (stat.iconName ? iconMap[stat.iconName] : null);
  return (
    <Card className={cardClassName}>
      <CardContent className="p-6">
        {Icon && (
          <div className="text-blue-400 mb-3 flex justify-center">
            <Icon className="w-6 h-6" />
          </div>
        )}
        <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
        <div className="text-slate-400 text-sm">{stat.label}</div>
      </CardContent>
    </Card>
  );
});
StatCard.displayName = 'StatCard';


interface StatsGridProps {
  stats: StatItemData[];
  className?: string;
  cardClassName?: string;
  iconMap?: { [key: string]: LucideIcon };
}

const StatsGridComponent: React.FC<StatsGridProps> = ({
  stats,
  className = "grid md:grid-cols-4 gap-6 mb-16",
  cardClassName = "bg-slate-800/50 backdrop-blur-sm border-slate-700 text-center",
  iconMap = {},
}) => {
  return (
    <div className={className}>
      {stats.map((stat) => (
        <StatCard
          key={stat.id}
          stat={stat}
          cardClassName={cardClassName}
          iconMap={iconMap}
        />
      ))}
    </div>
  );
};

export const StatsGrid = React.memo(StatsGridComponent);

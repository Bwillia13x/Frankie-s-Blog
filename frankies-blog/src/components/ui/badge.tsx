import * as React from 'react'
import { cn } from '@/lib/utils'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'secondary' | 'outline'
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(({ className = '', variant = 'default', ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      'inline-flex items-center rounded-md px-2 py-1 text-xs font-medium',
      variant === 'default' && 'bg-blue-600 text-white',
      variant === 'secondary' && 'bg-slate-700 text-slate-300',
      variant === 'outline' && 'border border-slate-600 text-slate-400',
      className
    )}
    {...props}
  />
))
Badge.displayName = 'Badge'

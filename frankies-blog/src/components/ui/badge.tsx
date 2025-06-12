import * as React from 'react'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(({ className = '', ...props }, ref) => (
  <span ref={ref} className={`inline-flex items-center rounded-md bg-blue-600 px-2 py-1 text-xs font-medium text-white ${className}`} {...props} />
))
Badge.displayName = 'Badge'

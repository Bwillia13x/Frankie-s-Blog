import * as React from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: 'default' | 'secondary' | 'outline' | 'ghost'
  size?: 'default' | 'sm' | 'lg'
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', asChild, variant = 'default', size = 'default', children, ...props }, ref) => {
    const classes = cn(
      'inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none',
      variant === 'default' && 'bg-blue-600 text-white hover:bg-blue-700',
      variant === 'secondary' && 'bg-slate-700 text-slate-200 hover:bg-slate-600',
      variant === 'outline' && 'border border-slate-600 text-slate-300 hover:bg-slate-700/30',
      variant === 'ghost' && 'text-slate-300 hover:bg-slate-700/30',
      size === 'sm' && 'px-3 py-1.5 text-sm',
      size === 'lg' && 'px-6 py-3 text-lg',
      size === 'default' && 'px-4 py-2 text-sm',
      className
    )

    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children, {
        ref,
        className: cn((children as any).props.className, classes),
        ...props,
      })
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    )
  }
)
Button.displayName = 'Button'

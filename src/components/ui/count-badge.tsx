import * as React from 'react'
import {cva, type VariantProps} from 'class-variance-authority'
import {cn} from './utils'

const countBadgeVariants = cva(
  'inline-flex items-center justify-center rounded-full font-medium text-xs',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground',
        secondary: 'bg-secondary text-secondary-foreground',
        success: 'bg-success text-success-foreground',
        destructive: 'bg-destructive text-destructive-foreground',
        muted: 'bg-muted text-muted-foreground',
      },
      size: {
        sm: 'px-1.5 py-0.5 min-w-5 h-5',
        md: 'px-2 py-0.5 min-w-6 h-6',
        lg: 'px-2.5 py-1 min-w-7 h-7',
      },
    },
    defaultVariants: {
      variant: 'secondary',
      size: 'sm',
    },
  },
)

interface CountBadgeProps
  extends
    React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof countBadgeVariants> {
  count: number
}

export const CountBadge = React.forwardRef<HTMLSpanElement, CountBadgeProps>(
  ({className, variant, size, count, ...props}, ref) => {
    return (
      <span
        ref={ref}
        className={cn(countBadgeVariants({variant, size}), className)}
        {...props}
      >
        {count}
      </span>
    )
  },
)

CountBadge.displayName = 'CountBadge'

export type CountBadgeVariants = VariantProps<typeof countBadgeVariants>

export {countBadgeVariants}

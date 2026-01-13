import React from 'react'
import {cva, type VariantProps} from 'class-variance-authority'
import {cn} from '../ui/utils'
import type {WithNumberish} from './types'

/**
 * Stack - One-dimensional layout component
 *
 * Manages spacing between children in a single direction (vertical or horizontal).
 * Stack owns spacing - children should never define margins.
 *
 * @example
 * <Stack direction="vertical" gap="4" align="start">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 * </Stack>
 */

const stackVariants = cva('flex', {
  variants: {
    direction: {
      vertical: 'flex-col',
      horizontal: 'flex-row',
    },
    gap: {
      0: 'gap-0',
      1: 'gap-[var(--spacing-1)]',
      2: 'gap-[var(--spacing-2)]',
      3: 'gap-[var(--spacing-3)]',
      4: 'gap-[var(--spacing-4)]',
      6: 'gap-[var(--spacing-6)]',
      8: 'gap-[var(--spacing-8)]',
      12: 'gap-[var(--spacing-12)]',
      16: 'gap-[var(--spacing-16)]',
      20: 'gap-[var(--spacing-20)]',
    },
    align: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      stretch: 'items-stretch',
      baseline: 'items-baseline',
    },
    justify: {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      'space-between': 'justify-between',
      'space-around': 'justify-around',
      'space-evenly': 'justify-evenly',
    },
    wrap: {
      nowrap: 'flex-nowrap',
      wrap: 'flex-wrap',
      'wrap-reverse': 'flex-wrap-reverse',
    },
  },
  defaultVariants: {
    direction: 'vertical',
    gap: '4',
    align: 'stretch',
    justify: 'start',
    wrap: 'nowrap',
  },
})

type StackVariantProps = VariantProps<typeof stackVariants>

export interface StackProps
  extends React.HTMLAttributes<HTMLDivElement>, Omit<StackVariantProps, 'gap'> {
  as?: React.ElementType
  children?: React.ReactNode
  gap?: WithNumberish<StackVariantProps['gap']>
}

export const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  (
    {
      as: Component = 'div',
      className,
      direction,
      gap,
      align,
      justify,
      wrap,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <Component
        ref={ref}
        className={cn(
          stackVariants({direction, gap, align, justify, wrap}),
          className,
        )}
        {...props}
      >
        {children}
      </Component>
    )
  },
)

Stack.displayName = 'Stack'

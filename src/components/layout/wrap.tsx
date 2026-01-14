import React from 'react'
import {cva, type VariantProps} from 'class-variance-authority'
import {cn} from '../ui/utils'
import {normalizeNumberish, type WithNumberish} from './types'

/**
 * Wrap - Wrapping horizontal layout
 *
 * A horizontal layout that automatically wraps children onto multiple lines.
 * Ideal for tags, filters, and dynamic content collections.
 *
 * @example
 * <Wrap gap="2">
 *   <Badge>Tag 1</Badge>
 *   <Badge>Tag 2</Badge>
 *   <Badge>Tag 3</Badge>
 * </Wrap>
 */

const wrapVariants = cva('flex flex-wrap', {
  variants: {
    gap: {
      0: 'gap-0',
      1: 'gap-[var(--spacing-1)]',
      2: 'gap-[var(--spacing-2)]',
      3: 'gap-[var(--spacing-3)]',
      4: 'gap-[var(--spacing-4)]',
      6: 'gap-[var(--spacing-6)]',
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
    },
  },
  defaultVariants: {
    gap: 2,
    align: 'start',
    justify: 'start',
  },
})

type WrapVariantProps = VariantProps<typeof wrapVariants>

export interface WrapProps
  extends React.HTMLAttributes<HTMLDivElement>, Omit<WrapVariantProps, 'gap'> {
  as?: React.ElementType
  children?: React.ReactNode
  gap?: WithNumberish<WrapVariantProps['gap']>
}

export const Wrap = React.forwardRef<HTMLDivElement, WrapProps>(
  (
    {as: Component = 'div', className, gap, align, justify, children, ...props},
    ref,
  ) => {
    return (
      <Component
        ref={ref}
        className={cn(
          wrapVariants({gap: normalizeNumberish(gap), align, justify}),
          className,
        )}
        {...props}
      >
        {children}
      </Component>
    )
  },
)

Wrap.displayName = 'Wrap'

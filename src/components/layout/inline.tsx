import React from 'react'
import {cva, type VariantProps} from 'class-variance-authority'
import {cn} from '../ui/utils'
import type {WithNumberish} from './types'

/**
 * Inline - Horizontal layout for inline content
 *
 * Optimized for text-adjacent content like icons, badges, and metadata.
 * Always wraps and supports baseline alignment for text.
 *
 * @example
 * <Inline gap="2" align="center">
 *   <Icon />
 *   <span>Label</span>
 * </Inline>
 */

const inlineVariants = cva('inline-flex flex-wrap', {
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
      baseline: 'items-baseline',
    },
  },
  defaultVariants: {
    gap: '2',
    align: 'center',
  },
})

type InlineVariantProps = VariantProps<typeof inlineVariants>

export interface InlineProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    Omit<InlineVariantProps, 'gap'> {
  as?: React.ElementType
  children?: React.ReactNode
  gap?: WithNumberish<InlineVariantProps['gap']>
}

export const Inline = React.forwardRef<HTMLDivElement, InlineProps>(
  ({as: Component = 'div', className, gap, align, children, ...props}, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(inlineVariants({gap, align}), className)}
        {...props}
      >
        {children}
      </Component>
    )
  },
)

Inline.displayName = 'Inline'

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
    padding: {
      none: '',
      1: 'p-[var(--spacing-1)]',
      2: 'p-[var(--spacing-2)]',
      3: 'p-[var(--spacing-3)]',
      4: 'p-[var(--spacing-4)]',
      6: 'p-[var(--spacing-6)]',
      8: 'p-[var(--spacing-8)]',
      12: 'p-[var(--spacing-12)]',
      16: 'p-[var(--spacing-16)]',
      20: 'p-[var(--spacing-20)]',
    },
    margin: {
      none: '',
      1: 'm-[var(--spacing-1)]',
      2: 'm-[var(--spacing-2)]',
      3: 'm-[var(--spacing-3)]',
      4: 'm-[var(--spacing-4)]',
      6: 'm-[var(--spacing-6)]',
      8: 'm-[var(--spacing-8)]',
      12: 'm-[var(--spacing-12)]',
      16: 'm-[var(--spacing-16)]',
      20: 'm-[var(--spacing-20)]',
    },
    width: {
      auto: 'w-auto',
      full: 'w-full',
      fit: 'w-fit',
      screen: 'w-screen',
    },
    height: {
      auto: 'h-auto',
      full: 'h-full',
      fit: 'h-fit',
      screen: 'h-screen',
    },
    shadow: {
      none: 'shadow-none',
      sm: 'shadow-sm',
      md: 'shadow-md',
      lg: 'shadow-lg',
      xl: 'shadow-xl',
      '2xl': 'shadow-2xl',
      inner: 'shadow-inner',
      outline: 'shadow-outline',
      default: 'shadow',
    },
    display: {
      block: 'block',
      inline: 'inline',
      'inline-block': 'inline-block',
      flex: 'flex',
      'inline-flex': 'inline-flex',
      grid: 'grid',
    },
  },
  defaultVariants: {
    gap: 2,
    align: 'start',
    justify: 'start',
    padding: 'none',
    margin: 'none',
    width: 'auto',
    height: 'auto',
    shadow: 'none',
    display: 'flex',
  },
})

type WrapVariantProps = VariantProps<typeof wrapVariants>

export interface WrapProps
  extends React.HTMLAttributes<HTMLDivElement>, Omit<WrapVariantProps, 'gap'> {
  as?: React.ElementType
  children?: React.ReactNode
  gap?: WithNumberish<WrapVariantProps['gap']>
  padding?: VariantProps<typeof wrapVariants>['padding']
  margin?: VariantProps<typeof wrapVariants>['margin']
  width?: VariantProps<typeof wrapVariants>['width']
  height?: VariantProps<typeof wrapVariants>['height']
  shadow?: VariantProps<typeof wrapVariants>['shadow']
  display?: VariantProps<typeof wrapVariants>['display']
}

export const Wrap = React.forwardRef<HTMLDivElement, WrapProps>(
  (
    {
      as: Component = 'div',
      className,
      gap,
      align,
      justify,
      padding,
      margin,
      width,
      height,
      shadow,
      display,
      children,
      ...props
    },
    ref,
  ) => {
    // Only allow gap values that are defined in the variant
    const allowedGaps = [0, 1, 2, 3, 4, 6]
    let normalizedGap: WrapVariantProps['gap'] = undefined
    if (gap !== undefined) {
      const n = Number(normalizeNumberish(gap))
      normalizedGap = allowedGaps.includes(n)
        ? (n as WrapVariantProps['gap'])
        : undefined
    }
    return (
      <Component
        ref={ref}
        className={cn(
          wrapVariants({
            gap: normalizedGap,
            align,
            justify,
            padding,
            margin,
            width,
            height,
            shadow,
            display,
          }),
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

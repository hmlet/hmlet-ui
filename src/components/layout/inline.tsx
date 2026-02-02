import React from 'react'
import {cva, type VariantProps} from 'class-variance-authority'
import {cn} from '../ui/utils'
import {normalizeNumberish, type WithNumberish} from './types'

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

const inlineVariants = cva('flex-wrap', {
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
    align: 'center',
    padding: 'none',
    margin: 'none',
    width: 'auto',
    height: 'auto',
    shadow: 'none',
    display: 'inline-flex',
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
  padding?: VariantProps<typeof inlineVariants>['padding']
  margin?: VariantProps<typeof inlineVariants>['margin']
  width?: VariantProps<typeof inlineVariants>['width']
  height?: VariantProps<typeof inlineVariants>['height']
  shadow?: VariantProps<typeof inlineVariants>['shadow']
  display?: VariantProps<typeof inlineVariants>['display']
}

export const Inline = React.forwardRef<HTMLDivElement, InlineProps>(
  (
    {
      as: Component = 'div',
      className,
      gap,
      align,
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
    return (
      <Component
        ref={ref}
        className={cn(
          inlineVariants({
            gap: (() => {
              const allowed = [0, 1, 2, 3, 4, 6]
              const val =
                typeof gap === 'number'
                  ? gap
                  : gap !== undefined
                    ? Number(normalizeNumberish(gap))
                    : undefined
              return allowed.includes(val as number)
                ? (val as 0 | 1 | 2 | 3 | 4 | 6)
                : undefined
            })(),
            align,
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

Inline.displayName = 'Inline'

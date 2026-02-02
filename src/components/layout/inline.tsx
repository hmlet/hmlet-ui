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
    p: {
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
    px: {
      none: '',
      1: 'px-[var(--spacing-1)]',
      2: 'px-[var(--spacing-2)]',
      3: 'px-[var(--spacing-3)]',
      4: 'px-[var(--spacing-4)]',
      6: 'px-[var(--spacing-6)]',
      8: 'px-[var(--spacing-8)]',
      12: 'px-[var(--spacing-12)]',
      16: 'px-[var(--spacing-16)]',
      20: 'px-[var(--spacing-20)]',
    },
    py: {
      none: '',
      1: 'py-[var(--spacing-1)]',
      2: 'py-[var(--spacing-2)]',
      3: 'py-[var(--spacing-3)]',
      4: 'py-[var(--spacing-4)]',
      6: 'py-[var(--spacing-6)]',
      8: 'py-[var(--spacing-8)]',
      12: 'py-[var(--spacing-12)]',
      16: 'py-[var(--spacing-16)]',
      20: 'py-[var(--spacing-20)]',
    },
    m: {
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
    mx: {
      none: '',
      1: 'mx-[var(--spacing-1)]',
      2: 'mx-[var(--spacing-2)]',
      3: 'mx-[var(--spacing-3)]',
      4: 'mx-[var(--spacing-4)]',
      6: 'mx-[var(--spacing-6)]',
      8: 'mx-[var(--spacing-8)]',
      12: 'mx-[var(--spacing-12)]',
      16: 'mx-[var(--spacing-16)]',
      20: 'mx-[var(--spacing-20)]',
    },
    my: {
      none: '',
      1: 'my-[var(--spacing-1)]',
      2: 'my-[var(--spacing-2)]',
      3: 'my-[var(--spacing-3)]',
      4: 'my-[var(--spacing-4)]',
      6: 'my-[var(--spacing-6)]',
      8: 'my-[var(--spacing-8)]',
      12: 'my-[var(--spacing-12)]',
      16: 'my-[var(--spacing-16)]',
      20: 'my-[var(--spacing-20)]',
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
    p: 'none',
    px: 'none',
    py: 'none',
    m: 'none',
    mx: 'none',
    my: 'none',
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
    Omit<InlineVariantProps, 'gap' | 'padding' | 'margin'> {
  as?: React.ElementType
  children?: React.ReactNode
  gap?: WithNumberish<InlineVariantProps['gap']>
  p?: VariantProps<typeof inlineVariants>['p']
  px?: VariantProps<typeof inlineVariants>['px']
  py?: VariantProps<typeof inlineVariants>['py']
  m?: VariantProps<typeof inlineVariants>['m']
  mx?: VariantProps<typeof inlineVariants>['mx']
  my?: VariantProps<typeof inlineVariants>['my']
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
      p,
      px,
      py,
      m,
      mx,
      my,
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
            p,
            px,
            py,
            m,
            mx,
            my,
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

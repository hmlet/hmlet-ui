import React from 'react'
import {cva, type VariantProps} from './cva'
import {cn} from '../ui/utils'
import {normalizeNumberish, type WithNumberish} from './types'

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
    direction: 'vertical',
    gap: 4,
    align: 'stretch',
    justify: 'start',
    wrap: 'nowrap',
    p: 'none',
    px: 'none',
    py: 'none',
    m: 'none',
    mx: 'none',
    my: 'none',
    width: 'auto',
    height: 'auto',
    shadow: 'none',
    display: 'flex',
  },
}) satisfies ReturnType<typeof cva>

type StackVariantProps = VariantProps<typeof stackVariants>

export interface StackProps
  extends React.HTMLAttributes<HTMLDivElement>, Omit<StackVariantProps, 'gap'> {
  as?: React.ElementType
  children?: React.ReactNode
  gap?: WithNumberish<StackVariantProps['gap']>
  p?: VariantProps<typeof stackVariants>['p']
  px?: VariantProps<typeof stackVariants>['px']
  py?: VariantProps<typeof stackVariants>['py']
  m?: VariantProps<typeof stackVariants>['m']
  mx?: VariantProps<typeof stackVariants>['mx']
  my?: VariantProps<typeof stackVariants>['my']
  width?: VariantProps<typeof stackVariants>['width']
  height?: VariantProps<typeof stackVariants>['height']
  shadow?: VariantProps<typeof stackVariants>['shadow']
  display?: VariantProps<typeof stackVariants>['display']
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
    // Only allow gap values that are defined in the variant
    const allowedGaps = [0, 1, 2, 3, 4, 6, 8, 12, 16, 20]
    let normalizedGap: StackVariantProps['gap'] = undefined
    if (gap !== undefined) {
      const n = Number(normalizeNumberish(gap))
      normalizedGap = allowedGaps.includes(n)
        ? (n as StackVariantProps['gap'])
        : undefined
    }
    return (
      <Component
        ref={ref}
        className={cn(
          stackVariants({
            direction,
            gap: normalizedGap,
            align,
            justify,
            wrap,
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

Stack.displayName = 'Stack'

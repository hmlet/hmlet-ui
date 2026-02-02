import React from 'react'
import {cva, type VariantProps} from 'class-variance-authority'
import {cn} from '../ui/utils'

/**
 * Center - Content centering utility
 *
 * Centers content both horizontally and vertically using flexbox.
 * Useful for empty states, modals, and full-screen layouts.
 *
 * @example
 * <Center height="full">
 *   <div>Centered content</div>
 * </Center>
 */

const centerVariants = cva('items-center justify-center', {
  variants: {
    inline: {
      true: 'inline-flex',
      false: 'flex',
    },
    height: {
      auto: 'h-auto',
      full: 'h-full',
      screen: 'h-screen',
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
    inline: false,
    height: 'auto',
    padding: 'none',
    margin: 'none',
    width: 'auto',
    shadow: 'none',
    display: 'flex',
  },
})

export interface CenterProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof centerVariants> {
  as?: React.ElementType
  children?: React.ReactNode
}

export const Center = React.forwardRef<HTMLDivElement, CenterProps>(
  (
    {
      as: Component = 'div',
      className,
      inline,
      height,
      padding,
      margin,
      width,
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
          centerVariants({
            inline,
            height,
            padding,
            margin,
            width,
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

Center.displayName = 'Center'

import React from 'react'
import {cva, type VariantProps} from 'class-variance-authority'
import {cn} from '../ui/utils'

/**
 * Box - The most basic layout primitive
 *
 * A generic container component that provides spacing, sizing,
 * and basic layout control. All layout components are built on Box.
 *
 * @example
 * <Box padding="4" width="full">
 *   Content
 * </Box>
 */

const boxVariants = cva('', {
  variants: {
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
    paddingX: {
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
    paddingY: {
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
    marginX: {
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
    marginY: {
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
    padding: 'none',
    margin: 'none',
    width: 'auto',
    height: 'auto',
    shadow: 'none',
  },
})

export interface BoxProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof boxVariants> {
  as?: React.ElementType
  children?: React.ReactNode
}

export const Box = React.forwardRef<HTMLDivElement, BoxProps>(
  (
    {
      as: Component = 'div',
      className,
      padding,
      paddingX,
      paddingY,
      margin,
      marginX,
      marginY,
      shadow,
      width,
      height,
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
          boxVariants({
            padding,
            paddingX,
            paddingY,
            margin,
            marginX,
            marginY,
            shadow,
            width,
            height,
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

Box.displayName = 'Box'

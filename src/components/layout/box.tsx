import React from 'react'
import {cva, type VariantProps} from 'class-variance-authority'
import {cn} from '../ui/utils'
import type {WithNumberish} from './types'

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
    width: 'auto',
    height: 'auto',
  },
})

type BoxVariantProps = VariantProps<typeof boxVariants>

export interface BoxProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    Omit<BoxVariantProps, 'padding' | 'paddingX' | 'paddingY'> {
  as?: React.ElementType
  children?: React.ReactNode
  padding?: WithNumberish<BoxVariantProps['padding']>
  paddingX?: WithNumberish<BoxVariantProps['paddingX']>
  paddingY?: WithNumberish<BoxVariantProps['paddingY']>
}

export const Box = React.forwardRef<HTMLDivElement, BoxProps>(
  (
    {
      as: Component = 'div',
      className,
      padding,
      paddingX,
      paddingY,
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
          boxVariants({padding, paddingX, paddingY, width, height, display}),
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

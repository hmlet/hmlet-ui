import React from 'react'
import {cva, type VariantProps} from './cva'
import {cn} from '../ui/utils'

/**
 * Bleed - Escape parent padding
 *
 * Allows content to "bleed" outside of its parent's padding.
 * Useful for full-width images, hero sections, and breaking out of containers.
 *
 * @example
 * <Container padding="4">
 *   <p>Contained content</p>
 *   <Bleed horizontal>
 *     <img src="..." alt="Full-width image" />
 *   </Bleed>
 * </Container>
 */

const bleedVariants = cva('', {
  variants: {
    horizontal: {
      true: '-mx-[var(--spacing-4)]',
      false: '',
    },
    vertical: {
      true: '-my-[var(--spacing-4)]',
      false: '',
    },
    all: {
      true: '-m-[var(--spacing-4)]',
      false: '',
    },
  },
  defaultVariants: {
    horizontal: false,
    vertical: false,
    all: false,
  },
}) satisfies ReturnType<typeof cva>

export interface BleedProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof bleedVariants> {
  as?: React.ElementType
  children?: React.ReactNode
}

export const Bleed = React.forwardRef<HTMLDivElement, BleedProps>(
  (
    {
      as: Component = 'div',
      className,
      horizontal,
      vertical,
      all,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <Component
        ref={ref}
        className={cn(bleedVariants({horizontal, vertical, all}), className)}
        {...props}
      >
        {children}
      </Component>
    )
  },
)

Bleed.displayName = 'Bleed'

export type BleedVariants = VariantProps<typeof bleedVariants>

export {bleedVariants}

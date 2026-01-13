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

const centerVariants = cva('flex items-center justify-center', {
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
  },
  defaultVariants: {
    inline: false,
    height: 'auto',
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
    {as: Component = 'div', className, inline, height, children, ...props},
    ref,
  ) => {
    return (
      <Component
        ref={ref}
        className={cn(centerVariants({inline, height}), className)}
        {...props}
      >
        {children}
      </Component>
    )
  },
)

Center.displayName = 'Center'

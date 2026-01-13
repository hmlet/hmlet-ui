import React from 'react'
import {cva, type VariantProps} from 'class-variance-authority'
import {cn} from '../ui/utils'
import type {WithNumberish} from './types'

/**
 * Container - Content width constrainer
 *
 * Centers content horizontally and constrains maximum width.
 * Essential for readable content and consistent page layouts.
 *
 * @example
 * <Container maxWidth="lg" padding="4">
 *   <p>Centered, constrained content</p>
 * </Container>
 */

const containerVariants = cva('mx-auto w-full', {
  variants: {
    maxWidth: {
      sm: 'max-w-screen-sm', // 640px
      md: 'max-w-screen-md', // 768px
      lg: 'max-w-screen-lg', // 1024px
      xl: 'max-w-screen-xl', // 1280px
      '2xl': 'max-w-screen-2xl', // 1536px
      full: 'max-w-full',
    },
    padding: {
      none: '',
      4: 'px-[var(--spacing-4)]',
      6: 'px-[var(--spacing-6)]',
      8: 'px-[var(--spacing-8)]',
    },
  },
  defaultVariants: {
    maxWidth: 'xl',
    padding: '4',
  },
})

type ContainerVariantProps = VariantProps<typeof containerVariants>

export interface ContainerProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    Omit<ContainerVariantProps, 'padding'> {
  as?: React.ElementType
  children?: React.ReactNode
  padding?: WithNumberish<ContainerVariantProps['padding']>
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  (
    {as: Component = 'div', className, maxWidth, padding, children, ...props},
    ref,
  ) => {
    return (
      <Component
        ref={ref}
        className={cn(containerVariants({maxWidth, padding}), className)}
        {...props}
      >
        {children}
      </Component>
    )
  },
)

Container.displayName = 'Container'

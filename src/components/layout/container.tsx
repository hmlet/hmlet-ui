import React from 'react'
import {cva, type VariantProps} from 'class-variance-authority'
import {cn} from '../ui/utils'
import {type WithNumberish} from './types'

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
      sm: 'max-w-screen-sm',
      md: 'max-w-screen-md',
      lg: 'max-w-screen-lg',
      xl: 'max-w-screen-xl',
      '2xl': 'max-w-screen-2xl',
      full: 'max-w-full',
    },
    padding: {
      none: '',
      4: 'px-[var(--spacing-4)]',
      6: 'px-[var(--spacing-6)]',
      8: 'px-[var(--spacing-8)]',
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
    maxWidth: 'xl',
    padding: 4,
    margin: 'none',
    width: 'full',
    height: 'auto',
    shadow: 'none',
    display: 'block',
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
  margin?: ContainerVariantProps['margin']
  width?: ContainerVariantProps['width']
  height?: ContainerVariantProps['height']
  shadow?: ContainerVariantProps['shadow']
  display?: ContainerVariantProps['display']
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  (
    {
      as: Component = 'div',
      className,
      maxWidth,
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
          containerVariants({
            maxWidth,
            padding:
              padding === undefined || padding === null
                ? undefined
                : padding === 'none'
                  ? 'none'
                  : padding === 4
                    ? 4
                    : padding === 6
                      ? 6
                      : padding === 8
                        ? 8
                        : undefined,
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

Container.displayName = 'Container'

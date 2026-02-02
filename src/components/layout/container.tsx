import React from 'react'
import {cva, type VariantProps} from 'class-variance-authority'
import {cn} from '../ui/utils'

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
    p: {
      none: '',
      4: 'p-[var(--spacing-4)]',
      6: 'p-[var(--spacing-6)]',
      8: 'p-[var(--spacing-8)]',
    },
    px: {
      none: '',
      4: 'px-[var(--spacing-4)]',
      6: 'px-[var(--spacing-6)]',
      8: 'px-[var(--spacing-8)]',
    },
    py: {
      none: '',
      4: 'py-[var(--spacing-4)]',
      6: 'py-[var(--spacing-6)]',
      8: 'py-[var(--spacing-8)]',
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
      4: 'mx-[var(--spacing-4)]',
      6: 'mx-[var(--spacing-6)]',
      8: 'mx-[var(--spacing-8)]',
    },
    my: {
      none: '',
      4: 'my-[var(--spacing-4)]',
      6: 'my-[var(--spacing-6)]',
      8: 'my-[var(--spacing-8)]',
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
    p: 4,
    px: 'none',
    py: 'none',
    m: 'none',
    mx: 'none',
    my: 'none',
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
    Omit<ContainerVariantProps, 'padding' | 'margin'> {
  as?: React.ElementType
  children?: React.ReactNode
  p?: VariantProps<typeof containerVariants>['p']
  px?: VariantProps<typeof containerVariants>['px']
  py?: VariantProps<typeof containerVariants>['py']
  m?: VariantProps<typeof containerVariants>['m']
  mx?: VariantProps<typeof containerVariants>['mx']
  my?: VariantProps<typeof containerVariants>['my']
  width?: VariantProps<typeof containerVariants>['width']
  height?: VariantProps<typeof containerVariants>['height']
  shadow?: VariantProps<typeof containerVariants>['shadow']
  display?: VariantProps<typeof containerVariants>['display']
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  (
    {
      as: Component = 'div',
      className,
      maxWidth,
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
          containerVariants({
            maxWidth,
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

Container.displayName = 'Container'

import React from 'react'
import {cva, type VariantProps} from 'class-variance-authority'
import {cn} from '../ui/utils'

/**
 * Spacer - Flexible space component
 *
 * Expands to fill available space within flex containers (Stack, HStack, VStack, Inline).
 * Used to push elements apart or create flexible spacing.
 *
 * @example
 * <HStack>
 *   <div>Left</div>
 *   <Spacer />
 *   <div>Right (pushed to end)</div>
 * </HStack>
 */

const spacerVariants = cva('flex-1', {
  variants: {
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
    margin: 'none',
    width: 'auto',
    height: 'auto',
    shadow: 'none',
    display: undefined,
  },
})

export interface SpacerProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof spacerVariants> {
  as?: React.ElementType
}

export const Spacer = React.forwardRef<HTMLDivElement, SpacerProps>(
  (
    {
      as: Component = 'div',
      className,
      margin,
      width,
      height,
      shadow,
      display,
      ...props
    },
    ref,
  ) => {
    return (
      <Component
        ref={ref}
        className={cn(
          spacerVariants({margin, width, height, shadow, display}),
          className,
        )}
        aria-hidden="true"
        {...props}
      />
    )
  },
)

Spacer.displayName = 'Spacer'

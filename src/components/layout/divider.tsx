import React from 'react'
import {cva, type VariantProps} from './cva'
import {cn} from '../ui/utils'
import type {WithNumberish} from './types'

/**
 * Divider - Structural separator
 *
 * Visual separator between content blocks.
 * Can be horizontal or vertical, with configurable thickness.
 *
 * @example
 * <VStack gap="4">
 *   <div>Section 1</div>
 *   <Divider />
 *   <div>Section 2</div>
 * </VStack>
 */

const dividerVariants = cva('bg-border shrink-0', {
  variants: {
    orientation: {
      horizontal: 'h-px w-full',
      vertical: 'w-px h-full',
    },
    thickness: {
      1: '',
      2: '',
    },
    spacing: {
      none: '',
      2: '',
      4: '',
      6: '',
    },
  },
  compoundVariants: [
    // Thickness for horizontal
    {
      orientation: 'horizontal',
      thickness: 1,
      className: 'h-px',
    },
    {
      orientation: 'horizontal',
      thickness: 2,
      className: 'h-[2px]',
    },
    // Thickness for vertical
    {
      orientation: 'vertical',
      thickness: 1,
      className: 'w-px',
    },
    {
      orientation: 'vertical',
      thickness: 2,
      className: 'w-[2px]',
    },
    // Spacing for horizontal
    {
      orientation: 'horizontal',
      spacing: 2,
      className: 'my-[var(--spacing-2)]',
    },
    {
      orientation: 'horizontal',
      spacing: 4,
      className: 'my-[var(--spacing-4)]',
    },
    {
      orientation: 'horizontal',
      spacing: 6,
      className: 'my-[var(--spacing-6)]',
    },
    // Spacing for vertical
    {
      orientation: 'vertical',
      spacing: 2,
      className: 'mx-[var(--spacing-2)]',
    },
    {
      orientation: 'vertical',
      spacing: 4,
      className: 'mx-[var(--spacing-4)]',
    },
    {
      orientation: 'vertical',
      spacing: 6,
      className: 'mx-[var(--spacing-6)]',
    },
  ],
  defaultVariants: {
    orientation: 'horizontal',
    thickness: 1,
    spacing: 'none',
  },
}) satisfies ReturnType<typeof cva>

type DividerVariantProps = VariantProps<typeof dividerVariants>

export interface DividerProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    Omit<DividerVariantProps, 'thickness' | 'spacing'> {
  as?: React.ElementType
  thickness?: WithNumberish<DividerVariantProps['thickness']>
  spacing?: WithNumberish<DividerVariantProps['spacing']>
}

export const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  (
    {
      as: Component = 'div',
      className,
      orientation,
      thickness,
      spacing,
      ...props
    },
    ref,
  ) => {
    const normalizedThickness =
      typeof thickness === 'string'
        ? (Number(thickness) as DividerVariantProps['thickness'])
        : thickness

    const normalizedSpacing =
      typeof spacing === 'string' && spacing !== 'none'
        ? (Number(spacing) as DividerVariantProps['spacing'])
        : spacing

    return (
      <Component
        ref={ref}
        role="separator"
        aria-orientation={orientation}
        className={cn(
          dividerVariants({
            orientation,
            thickness: normalizedThickness,
            spacing: normalizedSpacing,
          }),
          className,
        )}
        {...props}
      />
    )
  },
)

Divider.displayName = 'Divider'

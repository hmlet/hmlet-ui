import React from 'react'
import {cva, type VariantProps} from 'class-variance-authority'
import {cn} from '../ui/utils'
import type {WithNumberish} from './types'

/**
 * Grid - Two-dimensional layout system
 *
 * CSS Grid-based layout for complex layouts like dashboards, card grids,
 * and responsive sections. Use with GridItem for precise control.
 *
 * @example
 * <Grid columns="3" gap="6">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </Grid>
 */

const gridVariants = cva('grid', {
  variants: {
    columns: {
      1: 'grid-cols-1',
      2: 'grid-cols-2',
      3: 'grid-cols-3',
      4: 'grid-cols-4',
      5: 'grid-cols-5',
      6: 'grid-cols-6',
      7: 'grid-cols-7',
      8: 'grid-cols-8',
      9: 'grid-cols-9',
      10: 'grid-cols-10',
      11: 'grid-cols-11',
      12: 'grid-cols-12',
    },
    gap: {
      0: 'gap-0',
      1: 'gap-[var(--spacing-1)]',
      2: 'gap-[var(--spacing-2)]',
      3: 'gap-[var(--spacing-3)]',
      4: 'gap-[var(--spacing-4)]',
      6: 'gap-[var(--spacing-6)]',
      8: 'gap-[var(--spacing-8)]',
      12: 'gap-[var(--spacing-12)]',
      16: 'gap-[var(--spacing-16)]',
      20: 'gap-[var(--spacing-20)]',
    },
    autoFlow: {
      row: 'grid-flow-row',
      column: 'grid-flow-col',
      dense: 'grid-flow-dense',
    },
    alignItems: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      stretch: 'items-stretch',
    },
    justifyItems: {
      start: 'justify-items-start',
      center: 'justify-items-center',
      end: 'justify-items-end',
      stretch: 'justify-items-stretch',
    },
  },
  defaultVariants: {
    columns: '1',
    gap: '4',
    autoFlow: 'row',
  },
})

type GridVariantProps = VariantProps<typeof gridVariants>

export interface GridProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    Omit<GridVariantProps, 'columns' | 'gap'> {
  as?: React.ElementType
  children?: React.ReactNode
  columns?: WithNumberish<GridVariantProps['columns']>
  gap?: WithNumberish<GridVariantProps['gap']>
}

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  (
    {
      as: Component = 'div',
      className,
      columns,
      gap,
      autoFlow,
      alignItems,
      justifyItems,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <Component
        ref={ref}
        className={cn(
          gridVariants({columns, gap, autoFlow, alignItems, justifyItems}),
          className,
        )}
        {...props}
      >
        {children}
      </Component>
    )
  },
)

Grid.displayName = 'Grid'

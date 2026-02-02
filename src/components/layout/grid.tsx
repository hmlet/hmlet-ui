import React from 'react'
import {cva, type VariantProps} from 'class-variance-authority'
import {cn} from '../ui/utils'

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
    p: {
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
    px: {
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
    py: {
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
    my: {
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
      // Responsive variants
      'responsive-2': 'grid-cols-1 md:grid-cols-2',
      'responsive-3': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
      'responsive-4': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
      'responsive-1-2-3-4':
        'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
      'responsive-2-3-4-5':
        'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5',
      'responsive-auto-fit': 'grid-cols-[repeat(auto-fit,minmax(280px,1fr))]',
      'responsive-auto-fill': 'grid-cols-[repeat(auto-fill,minmax(280px,1fr))]',
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
    columns: 1,
    gap: 4,
    autoFlow: 'row',
    p: 'none',
    px: 'none',
    py: 'none',
    m: 'none',
    mx: 'none',
    my: 'none',
  },
})

export interface GridProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    Omit<VariantProps<typeof gridVariants>, never> {
  as?: React.ElementType
  children?: React.ReactNode
  p?: VariantProps<typeof gridVariants>['p']
  px?: VariantProps<typeof gridVariants>['px']
  py?: VariantProps<typeof gridVariants>['py']
  m?: VariantProps<typeof gridVariants>['m']
  mx?: VariantProps<typeof gridVariants>['mx']
  my?: VariantProps<typeof gridVariants>['my']
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
      p,
      px,
      py,
      m,
      mx,
      my,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <Component
        ref={ref}
        className={cn(
          gridVariants({
            columns,
            gap,
            autoFlow,
            alignItems,
            justifyItems,
            p,
            px,
            py,
            m,
            mx,
            my,
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

Grid.displayName = 'Grid'

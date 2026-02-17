import React from 'react'
import {cva, type VariantProps} from 'class-variance-authority'
import {cn} from '../ui/utils'
import {type WithNumberish} from './types'

/**
 * GridItem - Grid child placement controller
 *
 * Controls how a child element spans and positions within a Grid.
 * Provides column/row spanning and self-alignment.
 *
 * @example
 * <Grid columns="12">
 *   <GridItem colSpan="8">Main content</GridItem>
 *   <GridItem colSpan="4">Sidebar</GridItem>
 * </Grid>
 */

const gridItemVariants = cva('', {
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
    colSpan: {
      1: 'col-span-1',
      2: 'col-span-2',
      3: 'col-span-3',
      4: 'col-span-4',
      5: 'col-span-5',
      6: 'col-span-6',
      7: 'col-span-7',
      8: 'col-span-8',
      9: 'col-span-9',
      10: 'col-span-10',
      11: 'col-span-11',
      12: 'col-span-12',
      full: 'col-span-full',
    },
    rowSpan: {
      1: 'row-span-1',
      2: 'row-span-2',
      3: 'row-span-3',
      4: 'row-span-4',
      5: 'row-span-5',
      6: 'row-span-6',
      full: 'row-span-full',
    },
    alignSelf: {
      auto: 'self-auto',
      start: 'self-start',
      center: 'self-center',
      end: 'self-end',
      stretch: 'self-stretch',
    },
    justifySelf: {
      auto: 'justify-self-auto',
      start: 'justify-self-start',
      center: 'justify-self-center',
      end: 'justify-self-end',
      stretch: 'justify-self-stretch',
    },
  },
  defaultVariants: {
    colSpan: 1,
    p: 'none',
    px: 'none',
    py: 'none',
    m: 'none',
    mx: 'none',
    my: 'none',
  },
}) satisfies ReturnType<typeof cva>

type GridItemVariantProps = VariantProps<typeof gridItemVariants>

export interface GridItemProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    Omit<GridItemVariantProps, 'colSpan' | 'rowSpan'> {
  as?: React.ElementType
  children?: React.ReactNode
  colSpan?: WithNumberish<GridItemVariantProps['colSpan']>
  rowSpan?: WithNumberish<GridItemVariantProps['rowSpan']>
  p?: VariantProps<typeof gridItemVariants>['p']
  px?: VariantProps<typeof gridItemVariants>['px']
  py?: VariantProps<typeof gridItemVariants>['py']
  m?: VariantProps<typeof gridItemVariants>['m']
  mx?: VariantProps<typeof gridItemVariants>['mx']
  my?: VariantProps<typeof gridItemVariants>['my']
}

export const GridItem = React.forwardRef<HTMLDivElement, GridItemProps>(
  (
    {
      as: Component = 'div',
      className,
      colSpan,
      rowSpan,
      alignSelf,
      justifySelf,
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
          gridItemVariants({
            colSpan:
              colSpan === undefined || colSpan === null
                ? undefined
                : (String(colSpan) as GridItemVariantProps['colSpan']),
            rowSpan:
              rowSpan === undefined || rowSpan === null
                ? undefined
                : (String(rowSpan) as GridItemVariantProps['rowSpan']),
            alignSelf,
            justifySelf,
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

GridItem.displayName = 'GridItem'

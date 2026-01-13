import React from 'react'
import {cva, type VariantProps} from 'class-variance-authority'
import {cn} from '../ui/utils'
import type {WithNumberish} from './types'

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
    colSpan: '1',
  },
})

type GridItemVariantProps = VariantProps<typeof gridItemVariants>

export interface GridItemProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    Omit<GridItemVariantProps, 'colSpan' | 'rowSpan'> {
  as?: React.ElementType
  children?: React.ReactNode
  colSpan?: WithNumberish<GridItemVariantProps['colSpan']>
  rowSpan?: WithNumberish<GridItemVariantProps['rowSpan']>
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
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <Component
        ref={ref}
        className={cn(
          gridItemVariants({colSpan, rowSpan, alignSelf, justifySelf}),
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

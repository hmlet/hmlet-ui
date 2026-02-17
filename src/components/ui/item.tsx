import * as React from 'react'
import {Slot} from '@radix-ui/react-slot'
import {cva, type VariantProps} from 'class-variance-authority'

import {Separator} from './separator'
import {cn} from './utils'

const itemVariants = cva(
  'group/item grid w-full grid-cols-[auto_1fr_auto] items-center gap-x-3 gap-y-2 rounded-md transition-colors',
  {
    variants: {
      variant: {
        default: 'hover:bg-muted focus:bg-muted focus:outline-none',
        outline:
          'border border-border bg-background hover:bg-muted focus:bg-muted focus:outline-none',
        muted: 'bg-muted/30 hover:bg-muted focus:bg-muted focus:outline-none',
      },
      size: {
        default: 'px-4 py-3',
        sm: 'px-3 py-2',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
) satisfies ReturnType<typeof cva>

type ItemVariantProps = VariantProps<typeof itemVariants>

interface ItemProps extends React.ComponentProps<'div'>, ItemVariantProps {
  asChild?: boolean
}

const Item = React.forwardRef<HTMLDivElement, ItemProps>(
  ({className, variant, size, asChild = false, ...props}, ref) => {
    const Comp = asChild ? Slot : 'div'

    return (
      <Comp
        ref={ref as never}
        data-slot="item"
        data-variant={variant}
        data-size={size}
        className={cn(itemVariants({variant, size, className}))}
        {...props}
      />
    )
  },
)

Item.displayName = 'Item'

function ItemGroup({className, ...props}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="item-group"
      className={cn('flex flex-col rounded-md border bg-card p-1', className)}
      {...props}
    />
  )
}

function ItemSeparator({
  className,
  ...props
}: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="item-separator"
      className={cn('mx-2 w-auto', className)}
      {...props}
    />
  )
}

const itemMediaVariants = cva(
  'col-start-1 row-start-2 flex shrink-0 items-center justify-center',
  {
    variants: {
      variant: {
        default: '',
        icon: 'text-muted-foreground [&_svg:not([class*="size-"])]:size-5',
        image:
          'overflow-hidden rounded-md bg-muted [&>img]:h-full [&>img]:w-full [&>img]:object-cover',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
) satisfies ReturnType<typeof cva>

interface ItemMediaProps
  extends React.ComponentProps<'div'>, VariantProps<typeof itemMediaVariants> {}

const ItemMedia = React.forwardRef<HTMLDivElement, ItemMediaProps>(
  ({className, variant, ...props}, ref) => {
    return (
      <div
        ref={ref}
        data-slot="item-media"
        data-variant={variant}
        className={cn(
          itemMediaVariants({variant}),
          'group-data-[size=default]/item:size-10 group-data-[size=sm]/item:size-8',
          className,
        )}
        {...props}
      />
    )
  },
)

ItemMedia.displayName = 'ItemMedia'

const ItemContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'>
>(({className, ...props}, ref) => {
  return (
    <div
      ref={ref}
      data-slot="item-content"
      className={cn(
        'col-start-2 row-start-2 flex min-w-0 flex-col gap-0.5',
        className,
      )}
      {...props}
    />
  )
})

ItemContent.displayName = 'ItemContent'

const ItemTitle = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({className, ...props}, ref) => {
    return (
      <div
        ref={ref}
        data-slot="item-title"
        className={cn('text-body-base font-medium text-foreground', className)}
        {...props}
      />
    )
  },
)

ItemTitle.displayName = 'ItemTitle'

const ItemDescription = React.forwardRef<
  HTMLParagraphElement,
  React.ComponentProps<'p'>
>(({className, ...props}, ref) => {
  return (
    <p
      ref={ref}
      data-slot="item-description"
      className={cn('text-body-sm text-muted-foreground', className)}
      {...props}
    />
  )
})

ItemDescription.displayName = 'ItemDescription'

const ItemActions = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'>
>(({className, ...props}, ref) => {
  return (
    <div
      ref={ref}
      data-slot="item-actions"
      className={cn(
        'col-start-3 row-start-2 flex items-center justify-end gap-2',
        className,
      )}
      {...props}
    />
  )
})

ItemActions.displayName = 'ItemActions'

const ItemHeader = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'>
>(({className, ...props}, ref) => {
  return (
    <div
      ref={ref}
      data-slot="item-header"
      className={cn(
        'col-span-3 row-start-1 text-body-sm text-muted-foreground',
        className,
      )}
      {...props}
    />
  )
})

ItemHeader.displayName = 'ItemHeader'

const ItemFooter = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'>
>(({className, ...props}, ref) => {
  return (
    <div
      ref={ref}
      data-slot="item-footer"
      className={cn(
        'col-span-3 row-start-3 text-body-sm text-muted-foreground',
        className,
      )}
      {...props}
    />
  )
})

ItemFooter.displayName = 'ItemFooter'

export type ItemVariants = VariantProps<typeof itemVariants>
export type ItemMediaVariants = VariantProps<typeof itemMediaVariants>

export {
  Item,
  ItemGroup,
  ItemSeparator,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemActions,
  ItemHeader,
  ItemFooter,
  itemVariants,
  itemMediaVariants,
}

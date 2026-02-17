'use client'

import * as React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import {cva, type VariantProps} from 'class-variance-authority'

import {cn} from './utils'

const segmentControlVariants = cva(
  'inline-flex items-center justify-center p-1 rounded-lg w-full',
  {
    variants: {
      variant: {
        primary: 'bg-primary-lightest',
        secondary: 'bg-secondary-lightest',
        neutral: 'bg-muted',
      },
    },
    defaultVariants: {
      variant: 'neutral',
    },
  },
) satisfies ReturnType<typeof cva>

const segmentItemVariants = cva(
  'inline-flex flex-1 items-center justify-center whitespace-nowrap rounded-md px-4 py-2.5 text-sm font-semibold transition-all duration-200 outline-none disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'text-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md',
        secondary:
          'text-secondary data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground data-[state=active]:shadow-md',
        neutral:
          'text-muted-foreground data-[state=active]:bg-card data-[state=active]:text-foreground data-[state=active]:shadow-md',
      },
    },
    defaultVariants: {
      variant: 'neutral',
    },
  },
) satisfies ReturnType<typeof cva>

interface SegmentControlProps
  extends
    React.ComponentProps<typeof TabsPrimitive.Root>,
    VariantProps<typeof segmentControlVariants> {
  children: React.ReactNode
}

interface SegmentControlListProps
  extends
    React.ComponentProps<typeof TabsPrimitive.List>,
    VariantProps<typeof segmentControlVariants> {}

interface SegmentControlItemProps
  extends
    React.ComponentProps<typeof TabsPrimitive.Trigger>,
    VariantProps<typeof segmentItemVariants> {}

const SegmentControl = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  SegmentControlProps
>(({className, children, ...props}, ref) => (
  <TabsPrimitive.Root
    ref={ref}
    className={cn('flex flex-col gap-4', className)}
    {...props}
  >
    {children}
  </TabsPrimitive.Root>
))
SegmentControl.displayName = 'SegmentControl'

const SegmentControlList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  SegmentControlListProps
>(({className, variant, ...props}, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(segmentControlVariants({variant}), className)}
    {...props}
  />
))
SegmentControlList.displayName = 'SegmentControlList'

const SegmentControlItem = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  SegmentControlItemProps
>(({className, variant, ...props}, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(segmentItemVariants({variant}), className)}
    {...props}
  />
))
SegmentControlItem.displayName = 'SegmentControlItem'

const SegmentControlContent = TabsPrimitive.Content

export type SegmentControlVariants = VariantProps<typeof segmentControlVariants>
export type SegmentItemVariants = VariantProps<typeof segmentItemVariants>

export {
  SegmentControl,
  SegmentControlList,
  SegmentControlItem,
  SegmentControlContent,
  segmentControlVariants,
  segmentItemVariants,
}

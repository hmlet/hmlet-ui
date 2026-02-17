import React from 'react'
import {cva, type VariantProps} from 'class-variance-authority'
import {cn} from '../ui/utils'

/**
 * AspectRatio - Fixed aspect ratio container
 *
 * Maintains a fixed width-to-height ratio regardless of content.
 * Essential for images, videos, and media content.
 *
 * @example
 * <AspectRatio ratio="16/9">
 *   <img src="..." alt="..." className="object-cover w-full h-full" />
 * </AspectRatio>
 */

const aspectRatioVariants = cva('relative w-full overflow-hidden', {
  variants: {
    ratio: {
      '1/1': 'aspect-square',
      '4/3': 'aspect-[4/3]',
      '16/9': 'aspect-video',
      '21/9': 'aspect-[21/9]',
      '3/4': 'aspect-[3/4]',
      '9/16': 'aspect-[9/16]',
    },
  },
  defaultVariants: {
    ratio: '16/9',
  },
})

export interface LayoutAspectRatioProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof aspectRatioVariants> {
  as?: React.ElementType
  children?: React.ReactNode
}

export const LayoutAspectRatio = React.forwardRef<
  HTMLDivElement,
  LayoutAspectRatioProps
>(({as: Component = 'div', className, ratio, children, ...props}, ref) => {
  return (
    <Component
      ref={ref}
      className={cn(aspectRatioVariants({ratio}), className)}
      {...props}
    >
      {children}
    </Component>
  )
})

LayoutAspectRatio.displayName = 'LayoutAspectRatio'

export type LayoutAspectRatioVariants = VariantProps<typeof aspectRatioVariants>

export {aspectRatioVariants}

import * as React from 'react'
import {Slot} from '@radix-ui/react-slot'
import {cva, type VariantProps} from 'class-variance-authority'

import {cn} from './utils'

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-semibold transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none",
  {
    variants: {
      variant: {
        // Primary Variants
        default:
          'bg-primary text-primary-foreground hover:bg-primary-dark active:bg-primary-dark focus:border-primary focus:shadow-[0_0_0_3px_rgba(37,31,66,0.1)] shadow-sm hover:shadow-md',
        primary:
          'bg-primary text-primary-foreground hover:bg-primary-dark active:bg-primary-dark focus:border-primary focus:shadow-[0_0_0_3px_rgba(37,31,66,0.1)] shadow-sm hover:shadow-md',
        'primary-outline':
          'border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground active:bg-primary-dark active:border-primary-dark focus:shadow-[0_0_0_3px_rgba(37,31,66,0.1)]',
        'primary-ghost':
          'text-primary hover:bg-primary-lightest active:bg-primary-lighter focus:bg-primary-lightest focus:shadow-[0_0_0_3px_rgba(37,31,66,0.1)]',

        // Secondary Variants
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary-dark active:bg-secondary-dark focus:border-secondary focus:shadow-[0_0_0_3px_rgba(255,121,96,0.1)] shadow-sm hover:shadow-md',
        'secondary-outline':
          'border-2 border-secondary text-secondary bg-transparent hover:bg-secondary hover:text-secondary-foreground active:bg-secondary-dark active:border-secondary-dark focus:shadow-[0_0_0_3px_rgba(255,121,96,0.1)]',
        'secondary-ghost':
          'text-secondary hover:bg-secondary-lightest active:bg-secondary-lighter focus:bg-secondary-lightest focus:shadow-[0_0_0_3px_rgba(255,121,96,0.1)]',

        // Semantic Variants
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive-dark active:bg-destructive-dark focus:shadow-[0_0_0_3px_rgba(209,113,113,0.1)] shadow-sm hover:shadow-md',
        success:
          'bg-success text-success-foreground hover:bg-success-dark active:bg-success-dark focus:shadow-[0_0_0_3px_rgba(2,177,107,0.1)] shadow-sm hover:shadow-md',

        // Neutral Variants
        outline:
          'border-2 border-border bg-transparent text-foreground hover:bg-muted active:bg-neutral-300 focus:border-primary focus:shadow-[0_0_0_3px_rgba(37,31,66,0.1)]',
        ghost:
          'text-foreground hover:bg-muted active:bg-neutral-300 focus:bg-muted focus:shadow-[0_0_0_3px_rgba(0,0,0,0.05)]',
        link: 'text-primary underline-offset-4 hover:underline focus:underline',
      },
      size: {
        sm: 'h-9 px-4 py-2 text-sm rounded-md', // Small
        md: 'h-11 px-6 py-3 text-base rounded-md', // Medium (default)
        lg: 'h-12 px-8 py-3 text-lg rounded-lg', // Large
        icon: 'size-10 rounded-md',
        'icon-sm': 'size-9 rounded-md',
        'icon-lg': 'size-12 rounded-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({variant, size, className}))}
      {...props}
    />
  )
}

export {Button, buttonVariants}

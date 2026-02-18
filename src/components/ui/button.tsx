import * as React from 'react'
import {Slot} from '@radix-ui/react-slot'
import {cva, type VariantProps} from './cva'
import {Loader2} from 'lucide-react'

import {cn} from './utils'

const buttonVariants = cva(
  "inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md font-semibold transition-all duration-200 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none",
  {
    variants: {
      variant: {
        // Primary Variants
        default:
          'bg-primary text-primary-foreground hover:bg-primary-dark active:bg-primary-dark focus:border-primary focus:ring-2 focus:ring-ring/20 shadow-sm hover:shadow-md',
        primary:
          'bg-primary text-primary-foreground hover:bg-primary-dark active:bg-primary-dark focus:border-primary focus:ring-2 focus:ring-ring/20 shadow-sm hover:shadow-md',
        'primary-outline':
          'border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground active:bg-primary-dark active:border-primary-dark focus:ring-2 focus:ring-ring/20',
        'primary-ghost':
          'text-primary hover:bg-primary-lightest dark:hover:bg-muted active:bg-primary-lighter dark:active:bg-muted/80 focus:bg-primary-lightest dark:focus:bg-muted focus:ring-2 focus:ring-ring/20',

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
          'border-2 border-border bg-transparent text-foreground hover:bg-muted active:bg-muted/80 dark:active:bg-muted/60 focus:border-primary focus:ring-2 focus:ring-ring/20',
        ghost:
          'text-foreground hover:bg-muted active:bg-muted/80 dark:active:bg-muted/60 focus:bg-muted focus:ring-2 focus:ring-ring/10',
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
) satisfies ReturnType<typeof cva>

function ButtonSpinner({className}: {className?: string}) {
  return (
    <Loader2
      aria-hidden="true"
      className={cn('animate-spin text-current', className)}
    />
  )
}

function Button({
  className,
  variant,
  size,
  asChild = false,
  loading = false,
  loadingText,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
    loading?: boolean
    loadingText?: React.ReactNode
  }) {
  const Comp = asChild ? Slot : 'button'
  const disabled = props.disabled || loading

  return (
    <Comp
      data-slot="button"
      data-loading={loading ? '' : undefined}
      aria-busy={loading || undefined}
      aria-disabled={disabled || undefined}
      disabled={asChild ? undefined : disabled}
      className={cn(buttonVariants({variant, size, className}))}
      {...props}
    >
      {loading ? (
        <>
          <ButtonSpinner className="size-4" />
          {loadingText ?? props.children}
        </>
      ) : (
        props.children
      )}
    </Comp>
  )
}

export type ButtonVariants = VariantProps<typeof buttonVariants>

export {Button, buttonVariants}

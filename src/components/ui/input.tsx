import * as React from 'react'
import {cva, type VariantProps} from 'class-variance-authority'

import {cn} from './utils'

const inputVariants = cva(
  'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex w-full min-w-0 rounded-md border px-3 py-2 text-base bg-input-background transition-all duration-200 outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'border-input hover:border-neutral-400 focus:border-primary focus:shadow-[0_0_0_3px_rgba(37,31,66,0.1)]',
        error:
          'border-destructive focus:border-destructive focus:shadow-[0_0_0_3px_rgba(209,113,113,0.1)]',
        success:
          'border-success focus:border-success focus:shadow-[0_0_0_3px_rgba(2,177,107,0.1)]',
      },
      inputSize: {
        sm: 'h-9 text-sm',
        md: 'h-11 text-base',
        lg: 'h-12 text-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      inputSize: 'md',
    },
  },
)

interface InputProps
  extends
    Omit<React.ComponentProps<'input'>, 'size'>,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({className, variant, inputSize, type, ...props}, ref) => {
    return (
      <input
        type={type}
        data-slot="input"
        className={cn(inputVariants({variant, inputSize}), className)}
        ref={ref}
        {...props}
      />
    )
  },
)
Input.displayName = 'Input'

export {Input, inputVariants}

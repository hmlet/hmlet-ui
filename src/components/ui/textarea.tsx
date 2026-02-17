import * as React from 'react'
import {cva, type VariantProps} from 'class-variance-authority'

import {cn} from './utils'

const textareaVariants = cva(
  'resize-none placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex min-h-16 w-full rounded-md border px-3 py-2 text-base bg-input-background transition-all duration-200 outline-none disabled:cursor-not-allowed disabled:opacity-50',
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
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

interface TextareaProps
  extends
    React.ComponentProps<'textarea'>,
    VariantProps<typeof textareaVariants> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({className, variant, ...props}, ref) => {
    return (
      <textarea
        data-slot="textarea"
        className={cn(textareaVariants({variant}), className)}
        ref={ref}
        {...props}
      />
    )
  },
)
Textarea.displayName = 'Textarea'

export type TextareaVariants = VariantProps<typeof textareaVariants>

export {Textarea, textareaVariants}

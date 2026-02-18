import * as React from 'react'
import {cva, type VariantProps} from './cva'

import {cn} from './utils'

const textareaVariants = cva(
  'resize-none placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex min-h-16 w-full rounded-md border px-3 py-2 text-base bg-input-background transition-all duration-200 outline-none disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'border-input hover:border-muted-foreground dark:hover:border-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/20',
        error:
          'border-destructive focus:border-destructive focus:ring-2 focus:ring-destructive/20',
        success:
          'border-success focus:border-success focus:ring-2 focus:ring-success/20',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
) satisfies ReturnType<typeof cva>

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

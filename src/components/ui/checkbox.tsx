'use client'

import * as React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import {CheckIcon} from 'lucide-react'
import {cva, type VariantProps} from 'class-variance-authority'

import {cn} from './utils'

const checkboxVariants = cva(
  'peer shrink-0 rounded-[4px] border shadow-sm transition-all duration-200 outline-none disabled:cursor-not-allowed disabled:opacity-50 bg-input-background',
  {
    variants: {
      variant: {
        primary:
          'border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary focus:border-primary focus:shadow-[0_0_0_3px_rgba(37,31,66,0.1)]',
        secondary:
          'border-input data-[state=checked]:bg-secondary data-[state=checked]:text-secondary-foreground data-[state=checked]:border-secondary focus:border-secondary focus:shadow-[0_0_0_3px_rgba(255,121,96,0.1)]',
        error:
          'border-destructive data-[state=checked]:bg-destructive data-[state=checked]:text-destructive-foreground focus:shadow-[0_0_0_3px_rgba(209,113,113,0.1)]',
      },
      size: {
        sm: 'size-4',
        md: 'size-5',
        lg: 'size-6',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
)

interface CheckboxProps
  extends
    React.ComponentProps<typeof CheckboxPrimitive.Root>,
    VariantProps<typeof checkboxVariants> {
  label?: React.ReactNode
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({className, variant, size, label, ...props}, ref) => {
  // Determine label text size based on checkbox size
  let labelClass = 'ml-2 align-middle select-none'
  if (size === 'sm') labelClass += ' text-xs'
  else if (size === 'lg') labelClass += ' text-base'
  else labelClass += ' text-sm'

  return (
    <label className="inline-flex items-center cursor-pointer">
      <CheckboxPrimitive.Root
        ref={ref}
        data-slot="checkbox"
        className={cn(checkboxVariants({variant, size}), className)}
        {...props}
      >
        <CheckboxPrimitive.Indicator
          data-slot="checkbox-indicator"
          className="flex items-center justify-center text-current transition-none"
        >
          <CheckIcon
            className={cn(
              size === 'sm' ? 'size-3' : size === 'lg' ? 'size-4' : 'size-3.5',
            )}
          />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      {label && <span className={labelClass}>{label}</span>}
    </label>
  )
})
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export {Checkbox, checkboxVariants}

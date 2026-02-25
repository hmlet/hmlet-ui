'use client'

import * as React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import {CheckIcon, MinusIcon} from 'lucide-react'
import {cva, type VariantProps} from './cva'

import {cn} from './utils'

const checkboxVariants = cva(
  'peer shrink-0 rounded-[4px] border shadow-sm transition-all duration-200 outline-none disabled:cursor-not-allowed disabled:opacity-50 bg-input-background',
  {
    variants: {
      variant: {
        primary:
          'border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary data-[state=indeterminate]:bg-primary data-[state=indeterminate]:text-primary-foreground data-[state=indeterminate]:border-primary focus:border-primary focus:ring-2 focus:ring-ring/20',
        secondary:
          'border-input data-[state=checked]:bg-secondary data-[state=checked]:text-secondary-foreground data-[state=checked]:border-secondary data-[state=indeterminate]:bg-secondary data-[state=indeterminate]:text-secondary-foreground data-[state=indeterminate]:border-secondary focus:border-secondary focus:ring-2 focus:ring-secondary/20',
        error:
          'border-destructive data-[state=checked]:bg-destructive data-[state=checked]:text-destructive-foreground data-[state=indeterminate]:bg-destructive data-[state=indeterminate]:text-destructive-foreground focus:ring-2 focus:ring-destructive/20',
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
) satisfies ReturnType<typeof cva>

interface CheckboxProps
  extends
    React.ComponentProps<typeof CheckboxPrimitive.Root>,
    VariantProps<typeof checkboxVariants> {
  label?: React.ReactNode
}

const Checkbox = React.forwardRef<
  React.ComponentRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({className, variant, size, label, checked, ...props}, ref) => {
  // Determine label text size based on checkbox size
  let labelClass = 'ml-2 align-middle select-none'
  if (size === 'sm') labelClass += ' text-xs'
  else if (size === 'lg') labelClass += ' text-base'
  else labelClass += ' text-sm'

  const iconSize = cn(
    size === 'sm' ? 'size-3' : size === 'lg' ? 'size-4' : 'size-3.5',
  )

  return (
    <label className="inline-flex items-center cursor-pointer">
      <CheckboxPrimitive.Root
        ref={ref}
        data-slot="checkbox"
        className={cn(checkboxVariants({variant, size}), className)}
        checked={checked}
        {...props}
      >
        <CheckboxPrimitive.Indicator
          data-slot="checkbox-indicator"
          className="flex items-center justify-center text-current transition-none"
        >
          {checked === 'indeterminate' ? (
            <MinusIcon className={iconSize} />
          ) : (
            <CheckIcon className={iconSize} />
          )}
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      {label && <span className={labelClass}>{label}</span>}
    </label>
  )
})
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export type CheckboxVariants = VariantProps<typeof checkboxVariants>

export {Checkbox, checkboxVariants}

import * as React from 'react'
import {cn} from './utils'

interface SelectNativeProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: Array<{value: string; label: string}>
  placeholder?: string
}

const SelectNative = React.forwardRef<HTMLSelectElement, SelectNativeProps>(
  ({className, options, placeholder, ...props}, ref) => {
    return (
      <select
        ref={ref}
        className={cn(
          'flex h-11 w-full rounded-md border border-input bg-input-background px-4 py-2 text-body-base',
          'transition-colors',
          'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-0 focus:border-ring',
          'disabled:cursor-not-allowed disabled:opacity-50',
          'dark:bg-input-background dark:border-input dark:text-foreground',
          '[&>option]:bg-background [&>option]:text-foreground',
          'dark:[&>option]:bg-card dark:[&>option]:text-foreground',
          className,
        )}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    )
  },
)

SelectNative.displayName = 'SelectNative'

export {SelectNative}

import * as React from 'react'
import {cn} from './utils'
import {Spinner} from './spinner'
import {PackageOpen} from 'lucide-react'

type ApiErrorType = {
  error: boolean
  text?: string
  onClick?: () => void
}

interface SelectNativeProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: Array<{value: string; label: string}>
  placeholder?: string
  loading?: boolean
  apiError?: ApiErrorType
  emptyText?: string
}

const SelectNative = React.forwardRef<HTMLSelectElement, SelectNativeProps>(
  (
    {
      className,
      options,
      placeholder,
      loading = false,
      apiError,
      emptyText = 'No Options',
      ...props
    },
    ref,
  ) => {
    const hasOptions = options && options.length > 0

    if (loading) {
      return (
        <div
          className={cn(
            'flex h-11 w-full items-center justify-center rounded-md border border-input bg-input-background',
            className,
          )}
        >
          <Spinner />
        </div>
      )
    }

    if (apiError?.error) {
      return (
        <div
          className={cn(
            'flex h-11 w-full items-center justify-center rounded-md border border-input bg-input-background',
            className,
          )}
        >
          <button
            type="button"
            className="text-destructive underline text-sm px-2 py-1 rounded hover:bg-destructive/10"
            onClick={apiError.onClick}
          >
            {apiError.text || 'Error'}
          </button>
        </div>
      )
    }

    if (!hasOptions) {
      return (
        <div
          className={cn(
            'flex flex-col h-20 w-full items-center justify-center rounded-md border border-input bg-input-background gap-2',
            className,
          )}
        >
          <PackageOpen className="size-8 opacity-60" />
          <span className="text-xs text-muted-foreground">{emptyText}</span>
        </div>
      )
    }

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

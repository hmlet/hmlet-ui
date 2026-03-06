'use client'

import * as React from 'react'
import PhoneInputBase from 'react-phone-number-input'
import type {Country, Value} from 'react-phone-number-input'
import {isValidPhoneNumber} from 'react-phone-number-input'
import {ChevronDown, SearchIcon} from 'lucide-react'
import flags from 'react-phone-number-input/flags'

import {cn} from './utils'
import {cva, type VariantProps} from './cva'
import {Popover, PopoverContent, PopoverTrigger} from './popover'
import {ScrollArea} from './scroll-area'

const phoneInputVariants = cva(
  'flex w-full min-w-0 rounded-md border bg-input-background text-foreground transition-all duration-200 outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'border-input hover:border-muted-foreground dark:hover:border-muted-foreground focus-within:border-primary focus-within:ring-2 focus-within:ring-ring/20',
        error:
          'border-destructive focus-within:border-destructive focus-within:ring-2 focus-within:ring-destructive/20',
        success:
          'border-success focus-within:border-success focus-within:ring-2 focus-within:ring-success/20',
      },
      size: {
        sm: 'h-9 text-sm',
        md: 'h-11 text-base',
        lg: 'h-12 text-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
) satisfies ReturnType<typeof cva>

export interface PhoneInputProps extends Omit<
  VariantProps<typeof phoneInputVariants>,
  'size'
> {
  value?: Value
  onChange?: (value: Value) => void
  defaultCountry?: Country
  placeholder?: string
  disabled?: boolean
  className?: string
  size?: 'sm' | 'md' | 'lg'
  /** Internationalized format (e.g., +1 234 567 8900) */
  international?: boolean
  /** Country code to preselect */
  country?: Country
  /** Callback when country changes */
  onCountryChange?: (country?: Country) => void
  /** Whether to show country select dropdown */
  withCountryCallingCode?: boolean
  /** Additional input props */
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>
  /** Placeholder for country search */
  countrySearchPlaceholder?: string
}

/**
 * Custom country select component for react-phone-number-input
 * Uses Popover with search functionality instead of native select
 */
const CountrySelect = ({
  value,
  onChange,
  options,
  iconComponent: IconComponent,
  disabled,
  className,
  'aria-label': ariaLabel,
}: {
  value?: Country
  onChange: (country?: Country) => void
  options: Array<{value?: Country; label: string}>
  iconComponent: React.ComponentType<{country?: Country}>
  disabled?: boolean
  className?: string
  'aria-label'?: string
}) => {
  const [open, setOpen] = React.useState(false)
  const [search, setSearch] = React.useState('')
  const searchInputRef = React.useRef<HTMLInputElement>(null)

  // Filter options based on search
  const filteredOptions = React.useMemo(() => {
    if (!search) return options
    const lowerSearch = search.toLowerCase()
    return options.filter(option =>
      option.label.toLowerCase().includes(lowerSearch),
    )
  }, [options, search])

  // Focus search input when popover opens
  React.useEffect(() => {
    if (open) {
      // Small delay to ensure the content is rendered
      const timer = setTimeout(() => {
        searchInputRef.current?.focus()
      }, 0)
      return () => clearTimeout(timer)
    } else {
      setSearch('')
    }
  }, [open])

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild disabled={disabled}>
        <button
          type="button"
          className={cn(
            'flex items-center gap-0.5 outline-none focus:ring-2 focus:ring-ring/20 rounded-sm',
            disabled && 'cursor-not-allowed opacity-50',
            className,
          )}
          aria-label={ariaLabel || 'Select country'}
          aria-expanded={open}
        >
          <IconComponent country={value} />
          <ChevronDown className="size-3 opacity-50" />
        </button>
      </PopoverTrigger>
      <PopoverContent
        className="w-64 p-0"
        align="start"
        side="bottom"
        sideOffset={8}
      >
        {/* Search Input */}
        <div className="p-2 border-b sticky top-0 bg-popover z-10">
          <div className="relative">
            <SearchIcon className="absolute left-2 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <input
              ref={searchInputRef}
              type="text"
              className="w-full rounded-md border border-input bg-transparent py-1.5 pl-8 pr-2 text-sm outline-none focus:ring-2 focus:ring-ring/50 placeholder:text-muted-foreground"
              placeholder="Search countries..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              onKeyDown={e => {
                // Prevent closing on Enter when searching
                if (e.key === 'Enter') {
                  e.preventDefault()
                  if (filteredOptions.length === 1) {
                    onChange(filteredOptions[0].value)
                    setOpen(false)
                  }
                }
              }}
            />
          </div>
        </div>

        {/* Country List */}
        <ScrollArea className="h-64">
          <div className="p-1">
            {filteredOptions.length === 0 ? (
              <div className="py-6 text-center text-sm text-muted-foreground">
                No countries found
              </div>
            ) : (
              filteredOptions.map(option => {
                const isSelected = option.value === value
                const FlagIcon = option.value ? flags[option.value] : null
                return (
                  <button
                    key={option.value || 'empty'}
                    type="button"
                    className={cn(
                      'flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none cursor-pointer',
                      'hover:bg-accent hover:text-accent-foreground',
                      'focus:bg-accent focus:text-accent-foreground',
                      isSelected && 'bg-accent/50',
                    )}
                    onClick={() => {
                      onChange(option.value)
                      setOpen(false)
                    }}
                  >
                    <span className="flex items-center justify-center size-5 overflow-hidden rounded-sm bg-muted shrink-0">
                      {FlagIcon ? (
                        <FlagIcon title={option.label} />
                      ) : (
                        <span className="text-xs">🌐</span>
                      )}
                    </span>
                    <span className="truncate">{option.label}</span>
                    {isSelected && (
                      <span className="ml-auto text-primary">✓</span>
                    )}
                  </button>
                )
              })
            )}
          </div>
        </ScrollArea>
      </PopoverContent>
    </Popover>
  )
}

/**
 * Custom input component for react-phone-number-input
 */
const PhoneInputField = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({className, ...props}, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        'flex-1 bg-transparent outline-none placeholder:text-muted-foreground px-2',
        className,
      )}
      {...props}
    />
  )
})
PhoneInputField.displayName = 'PhoneInputField'

/**
 * Custom flag component for react-phone-number-input
 */
const FlagComponent = ({
  country,
  countryName,
}: {
  country?: Country
  countryName?: string
}): React.ReactElement => {
  const FlagIcon = country ? flags[country] : null
  return (
    <span className="flex items-center justify-center size-5 overflow-hidden rounded-sm bg-muted">
      {FlagIcon ? (
        <FlagIcon title={countryName ?? ''} />
      ) : (
        <span className="text-xs text-muted-foreground">🌐</span>
      )}
    </span>
  )
}

/**
 * PhoneInput component with country selection
 *
 * A phone number input with country code selection, validation, and formatting.
 * Supports different sizes (sm, md, lg) and variants (default, error, success).
 *
 * @example
 * ```tsx
 * <PhoneInput
 *   value={phone}
 *   onChange={setPhone}
 *   defaultCountry="US"
 *   placeholder="Enter phone number"
 * />
 * ```
 */
const PhoneInput = React.forwardRef<HTMLDivElement, PhoneInputProps>(
  (
    {
      value,
      onChange,
      defaultCountry = 'US',
      placeholder = 'Enter phone number',
      disabled = false,
      className,
      variant,
      size = 'md',
      international = true,
      country,
      onCountryChange,
      withCountryCallingCode = true,
      inputProps,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          phoneInputVariants({variant, size}),
          'items-center px-3 gap-2',
          disabled && 'opacity-50 cursor-not-allowed',
          className,
        )}
        data-slot="phone-input"
        {...props}
      >
        <PhoneInputBase
          international={international}
          defaultCountry={defaultCountry}
          country={country}
          value={value}
          onChange={newValue => onChange?.(newValue as Value)}
          onCountryChange={onCountryChange}
          withCountryCallingCode={withCountryCallingCode}
          placeholder={placeholder}
          disabled={disabled}
          countrySelectComponent={CountrySelect}
          inputComponent={PhoneInputField}
          flagComponent={FlagComponent}
          className="flex items-center w-full"
          numberInputProps={inputProps}
        />
      </div>
    )
  },
)
PhoneInput.displayName = 'PhoneInput'

export type PhoneInputVariants = VariantProps<typeof phoneInputVariants>

export {PhoneInput, phoneInputVariants, isValidPhoneNumber}
export type {Country as PhoneCountry, Value as PhoneValue}

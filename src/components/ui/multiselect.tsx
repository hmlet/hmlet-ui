import * as React from 'react'
import {CheckIcon, PackageOpen, SearchIcon} from 'lucide-react'
import {Checkbox} from './checkbox'
import {Spinner} from './spinner'
import {cn} from './utils'
import useDebounce from './utils'
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from './tooltip'

export type MultiselectOption = {
  value: string
  label: React.ReactNode
  disabled?: boolean
}
export type MultiselectProps = {
  options: MultiselectOption[]
  value?: string[]
  defaultValue?: string[]
  onChange?: (value: string[]) => void
  placeholder?: string
  disabled?: boolean
  className?: string
  optionVariant?: 'default' | 'checkbox'
  renderOption?: (
    option: MultiselectOption,
    selected: boolean,
  ) => React.ReactNode
  loading?: boolean
  apiError?: {error: boolean; text?: string; onClick?: () => void}
  emptyText?: string
  size?: 'sm' | 'md' | 'lg'
  /** Enable search functionality */
  isSearchable?: boolean
  /** Custom search function - called with 300ms debounce */
  searchFn?: (searchTerm: string) => void
  /** Placeholder for search input */
  searchPlaceholder?: string
}

export function Multiselect({
  options,
  value,
  defaultValue,
  onChange,
  placeholder = 'Select...',
  disabled,
  className,
  optionVariant = 'default',
  renderOption,
  loading = false,
  apiError,
  emptyText = 'No options',
  size = 'md',
  isSearchable = true,
  searchFn,
  searchPlaceholder = 'Search...',
}: MultiselectProps) {
  const isControlled = value !== undefined
  const [internalValue, setInternalValue] = React.useState<string[]>(
    defaultValue || [],
  )
  const selected = isControlled ? value! : internalValue

  const [open, setOpen] = React.useState(false)
  const [searchTerm, setSearchTerm] = React.useState('')
  const debouncedSearchTerm = useDebounce(searchTerm, 300)
  const searchInputRef = React.useRef<HTMLInputElement>(null)
  const wrapperRef = React.useRef<HTMLDivElement>(null)

  // Call searchFn with debounced value when it exists
  React.useEffect(() => {
    if (searchFn && debouncedSearchTerm !== undefined) {
      searchFn(debouncedSearchTerm)
    }
  }, [debouncedSearchTerm, searchFn])

  // Filter options locally if no searchFn is provided
  const filteredOptions = React.useMemo(() => {
    if (!isSearchable || searchFn || !searchTerm) {
      return options
    }
    const lowerSearch = searchTerm.toLowerCase()
    return options.filter(opt => {
      const labelText =
        typeof opt.label === 'string' ? opt.label : String(opt.value)
      return labelText.toLowerCase().includes(lowerSearch)
    })
  }, [options, searchTerm, isSearchable, searchFn])

  // Focus search input when dropdown opens
  React.useEffect(() => {
    if (open && isSearchable && searchInputRef.current) {
      searchInputRef.current.focus()
    }
    if (!open) {
      setSearchTerm('')
    }
  }, [open, isSearchable])

  React.useEffect(() => {
    if (!open) return
    function handleClick(e: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [open])

  function toggleOption(val: string) {
    const exists = selected.includes(val)
    const next = exists ? selected.filter(v => v !== val) : [...selected, val]
    if (!isControlled) setInternalValue(next)
    onChange?.(next)
  }

  function handleButtonClick() {
    if (!disabled) setOpen(o => !o)
  }

  function handleBlur(e: React.FocusEvent<HTMLDivElement>) {
    // If focus moves outside the wrapper, close
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      setOpen(false)
    }
  }

  return (
    <div
      className={cn('relative', className)}
      ref={wrapperRef}
      tabIndex={-1}
      onBlur={handleBlur}
    >
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              type="button"
              className={cn(
                'border-input flex w-full items-center justify-between gap-2 rounded-md border bg-input-background whitespace-nowrap transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50',
                size === 'sm' && 'px-2 py-1.5 text-xs h-9',
                size === 'md' && 'px-3 py-2 text-sm h-11',
                size === 'lg' && 'px-4 py-2.5 text-base h-12',
                disabled && 'opacity-50 pointer-events-none',
              )}
              disabled={disabled}
              aria-haspopup="listbox"
              aria-expanded={open}
              onClick={handleButtonClick}
            >
              <span
                className="truncate block max-w-full"
                style={{textOverflow: 'ellipsis', overflow: 'hidden'}}
              >
                {selected.length === 0 ? (
                  <span className="text-muted-foreground">{placeholder}</span>
                ) : (
                  (() => {
                    const selectedLabels = options
                      .filter(opt => selected.includes(opt.value))
                      .map(opt =>
                        typeof opt.label === 'string'
                          ? opt.label
                          : String(opt.value),
                      )
                    const display = selectedLabels.join(', ')
                    // If too long, show ellipsis
                    // (let CSS handle the truncation, tooltip will show all)
                    return display
                  })()
                )}
              </span>
              <svg
                className="size-4 opacity-50"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M6 8l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </TooltipTrigger>
          {selected.length > 0 && (
            <TooltipContent
              sideOffset={4}
              style={{
                maxWidth: '400px',
                whiteSpace: 'normal',
                wordBreak: 'break-word',
              }}
            >
              {options
                .filter(opt => selected.includes(opt.value))
                .map(opt =>
                  typeof opt.label === 'string' ? opt.label : String(opt.value),
                )
                .join(', ')}
            </TooltipContent>
          )}
        </Tooltip>
      </TooltipProvider>
      {open && (
        <div
          className="absolute left-0 right-0 z-10 mt-1 rounded-md border bg-popover shadow-md max-h-60 overflow-hidden flex flex-col"
          role="listbox"
        >
          {isSearchable && (
            <div className="p-2 border-b sticky top-0 bg-popover">
              <div className="relative">
                <SearchIcon className="absolute left-2 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <input
                  ref={searchInputRef}
                  type="text"
                  className={cn(
                    'w-full rounded-md border border-input bg-transparent pl-8 pr-2 outline-none focus:ring-2 focus:ring-ring/50',
                    size === 'sm' && 'py-1 text-xs',
                    size === 'md' && 'py-1.5 text-sm',
                    size === 'lg' && 'py-2 text-base',
                  )}
                  placeholder={searchPlaceholder}
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  onClick={e => e.stopPropagation()}
                />
              </div>
            </div>
          )}
          <div className="overflow-auto flex-1">
            {loading ? (
              <div className="flex items-center justify-center py-6">
                <Spinner size="md" />
              </div>
            ) : apiError?.error ? (
              <div className="flex flex-col items-center justify-center py-6 px-4 gap-2">
                <button
                  type="button"
                  className="text-destructive underline text-sm px-2 py-1 rounded hover:bg-destructive/10 transition-colors"
                  onClick={apiError.onClick}
                >
                  {apiError.text || 'Error loading options. Click to retry.'}
                </button>
              </div>
            ) : filteredOptions.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-6 px-4 gap-2 text-muted-foreground">
                <PackageOpen className="size-8 mb-2" />
                <span>{searchTerm ? 'No matches found' : emptyText}</span>
              </div>
            ) : (
              filteredOptions.map(opt => {
                const isSelected = selected.includes(opt.value)
                return (
                  <div
                    key={opt.value}
                    className={cn(
                      'flex items-center gap-2 cursor-pointer select-none hover:bg-accent hover:text-accent-foreground',
                      size === 'sm' && 'px-2 py-1.5 text-xs',
                      size === 'md' && 'px-3 py-2 text-sm',
                      size === 'lg' && 'px-4 py-2.5 text-base',
                      isSelected && 'bg-accent text-accent-foreground',
                      opt.disabled && 'opacity-50 pointer-events-none',
                    )}
                    onClick={() => !opt.disabled && toggleOption(opt.value)}
                    aria-selected={isSelected}
                    role="option"
                    tabIndex={-1}
                  >
                    {optionVariant === 'checkbox' ? (
                      <Checkbox
                        checked={isSelected}
                        tabIndex={-1}
                        className="size-4 mr-2 pointer-events-none"
                        aria-hidden
                      />
                    ) : (
                      isSelected && <CheckIcon className="size-4 mr-2" />
                    )}
                    {renderOption ? renderOption(opt, isSelected) : opt.label}
                  </div>
                )
              })
            )}
          </div>
        </div>
      )}
    </div>
  )
}

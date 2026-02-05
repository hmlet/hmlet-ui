import * as React from 'react'
import {CheckIcon, PackageOpen} from 'lucide-react'
import {Checkbox} from './checkbox'
import {Spinner} from './spinner'
import {cn} from './utils'
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
}: MultiselectProps) {
  const isControlled = value !== undefined
  const [internalValue, setInternalValue] = React.useState<string[]>(
    defaultValue || [],
  )
  const selected = isControlled ? value! : internalValue

  const [open, setOpen] = React.useState(false)
  const wrapperRef = React.useRef<HTMLDivElement>(null)

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
          className="absolute left-0 right-0 z-10 mt-1 rounded-md border bg-popover shadow-md max-h-60 overflow-auto"
          role="listbox"
        >
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
          ) : options.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-6 px-4 gap-2 text-muted-foreground">
              <PackageOpen className="size-8 mb-2" />
              <span>{emptyText}</span>
            </div>
          ) : (
            options.map(opt => {
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
      )}
    </div>
  )
}

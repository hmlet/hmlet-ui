'use client'

import * as React from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  PackageOpen,
  SearchIcon,
} from 'lucide-react'

import {cn} from './utils'
import useDebounce from './utils'
import {Spinner} from './spinner'

export type ApiErrorType = {
  error: boolean
  text?: string
  onClick?: () => void
}

export type SelectProps = React.ComponentProps<typeof SelectPrimitive.Root> & {
  loading?: boolean
  apiError?: ApiErrorType
  emptyText?: string
  /** Enable search functionality */
  isSearchable?: boolean
  /** Custom search function - called with 300ms debounce */
  searchFn?: (searchTerm: string) => void
  /** Placeholder for search input */
  searchPlaceholder?: string
  /**
   * Children should be SelectItem or SelectGroup, etc.
   */
  children?: React.ReactNode
}

function Select({
  loading = false,
  apiError,
  emptyText = 'No Options',
  isSearchable = true,
  searchFn,
  searchPlaceholder = 'Search...',
  children,
  ...props
}: SelectProps) {
  return (
    <SelectPrimitive.Root data-slot="select" {...props}>
      {/*
        We inject a custom context to SelectContent to pass loading, apiError, emptyText, hasOptions, children
        But since Radix Select expects children, we wrap SelectContent to handle these states
      */}
      {React.Children.map(children, child => {
        if (React.isValidElement(child) && child.type === SelectContent) {
          // Only pass custom props to SelectContent, not to all elements
          type SelectContentElement = React.ReactElement<
            React.ComponentProps<typeof SelectContent>
          >
          const childElement = child as SelectContentElement
          return React.cloneElement(childElement, {
            loading,
            apiError,
            emptyText,
            isSearchable,
            searchFn,
            searchPlaceholder,
            children: childElement.props.children || children,
          })
        }
        return child
      })}
    </SelectPrimitive.Root>
  )
}

function SelectGroup({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />
}

function SelectValue({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />
}

function SelectTrigger({
  className,
  size = 'md',
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
  size?: 'sm' | 'md' | 'lg'
}) {
  // Match Input heights: sm=h-9, md=h-11, lg=h-12
  const sizeClass =
    size === 'sm'
      ? 'h-9 text-sm'
      : size === 'lg'
        ? 'h-12 text-lg'
        : 'h-11 text-base'
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive flex w-full items-center justify-between gap-2 rounded-md border bg-input-background px-3 py-2 whitespace-nowrap transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        sizeClass,
        className,
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="size-4 opacity-50" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

type SelectContentProps = React.ComponentProps<
  typeof SelectPrimitive.Content
> & {
  loading?: boolean
  apiError?: ApiErrorType
  emptyText?: string
  hasOptions?: boolean
  isSearchable?: boolean
  searchFn?: (searchTerm: string) => void
  searchPlaceholder?: string
}

function SelectContent({
  className,
  children,
  position = 'popper',
  loading = false,
  apiError,
  emptyText = 'No Options',
  isSearchable = true,
  searchFn,
  searchPlaceholder = 'Search...',
  ...props
}: SelectContentProps) {
  const [searchTerm, setSearchTerm] = React.useState('')
  const debouncedSearchTerm = useDebounce(searchTerm, 300)
  const searchInputRef = React.useRef<HTMLInputElement>(null)

  // Call searchFn with debounced value when it exists
  React.useEffect(() => {
    if (searchFn && debouncedSearchTerm !== undefined) {
      searchFn(debouncedSearchTerm)
    }
  }, [debouncedSearchTerm, searchFn])

  // Filter children locally if no searchFn is provided
  const filteredChildren = React.useMemo(() => {
    if (!isSearchable || searchFn || !searchTerm) {
      return children
    }
    const lowerSearch = searchTerm.toLowerCase()
    return React.Children.toArray(children).filter(child => {
      if (React.isValidElement(child) && child.type === SelectItem) {
        // Get the text content from children
        type SelectItemElement = React.ReactElement<
          React.ComponentProps<typeof SelectPrimitive.Item>
        >
        const itemElement = child as SelectItemElement
        const itemChildren = itemElement.props.children
        const textContent =
          typeof itemChildren === 'string'
            ? itemChildren
            : String(itemElement.props.value || '')
        return textContent.toLowerCase().includes(lowerSearch)
      }
      // Keep non-SelectItem elements (like SelectGroup, SelectLabel, etc.)
      return true
    })
  }, [children, searchTerm, isSearchable, searchFn])

  const hasOptions = React.Children.count(filteredChildren) > 0

  // Focus search input when content opens
  React.useEffect(() => {
    if (isSearchable && searchInputRef.current) {
      // Small delay to ensure the content is rendered
      const timer = setTimeout(() => {
        searchInputRef.current?.focus()
      }, 0)
      return () => clearTimeout(timer)
    }
  }, [isSearchable])

  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md',
          position === 'popper' &&
            'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
          className,
        )}
        position={position}
        {...props}
      >
        <SelectScrollUpButton />
        {isSearchable && (
          <div className="p-2 border-b sticky top-0 bg-popover z-10">
            <div className="relative">
              <SearchIcon className="absolute left-2 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <input
                ref={searchInputRef}
                type="text"
                className="w-full rounded-md border border-input bg-transparent py-1.5 pl-8 pr-2 text-sm outline-none focus:ring-2 focus:ring-ring/50"
                placeholder={searchPlaceholder}
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                onClick={e => e.stopPropagation()}
                onKeyDown={e => {
                  // Prevent select from handling these keys when typing
                  if (e.key !== 'Escape' && e.key !== 'Tab') {
                    e.stopPropagation()
                  }
                }}
              />
            </div>
          </div>
        )}
        <SelectPrimitive.Viewport
          className={cn(
            'p-1',
            position === 'popper' &&
              'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1',
          )}
        >
          {/* Loading State */}
          {loading ? (
            <div className="flex flex-col items-center justify-center py-6 text-muted-foreground">
              <Spinner />
            </div>
          ) : apiError?.error ? (
            <div className="flex flex-col items-center justify-center py-6">
              <button
                type="button"
                className="text-destructive underline text-sm px-2 py-1 rounded hover:bg-destructive/10"
                onClick={apiError.onClick}
              >
                {apiError.text || 'Error'}
              </button>
            </div>
          ) : !hasOptions ? (
            <div className="flex flex-col items-center justify-center py-6 text-muted-foreground gap-2">
              <PackageOpen className="size-8 opacity-60" />
              <span className="text-xs">
                {searchTerm ? 'No matches found' : emptyText}
              </span>
            </div>
          ) : (
            filteredChildren
          )}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}

function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn('text-muted-foreground px-2 py-1.5 text-xs', className)}
      {...props}
    />
  )
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-pointer items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className,
      )}
      {...props}
    >
      <span className="absolute right-2 flex size-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn('bg-border pointer-events-none -mx-1 my-1 h-px', className)}
      {...props}
    />
  )
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn(
        'flex cursor-pointer items-center justify-center py-1',
        className,
      )}
      {...props}
    >
      <ChevronUpIcon className="size-4" />
    </SelectPrimitive.ScrollUpButton>
  )
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn(
        'flex cursor-pointer items-center justify-center py-1',
        className,
      )}
      {...props}
    >
      <ChevronDownIcon className="size-4" />
    </SelectPrimitive.ScrollDownButton>
  )
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}

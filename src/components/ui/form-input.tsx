import {Calendar, type CalendarProps} from './calendar'
import * as React from 'react'
import {Input, type InputProps} from './input'
import {Textarea} from './textarea'
import {Typography} from './typography'
import type {LucideIcon} from 'lucide-react'
import {cn} from './utils'
import {VStack, HStack} from '../layout'
import {Label} from './label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  type ApiErrorType,
  type SelectProps,
} from './select'
import {Checkbox} from './checkbox'
import type {DateRange} from 'react-day-picker'
import {RadioGroup, RadioGroupItem} from './radio-group'
import {PhoneInput, type PhoneInputProps} from './phone-input'
import {TimePicker, type TimePickerProps} from './time-picker'
import {DateTimePicker, type DateTimePickerProps} from './date-time-picker'
import {InputOTP} from './input-otp'
import {X, Upload, ImageIcon} from 'lucide-react'
interface FormInputProps extends InputProps {
  label?: string
  error?: string
  helperText?: string
  icon?: LucideIcon
  required?: boolean
}

export const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  (
    {label, error, helperText, icon: Icon, required, className, ...props},
    ref,
  ) => {
    return (
      <VStack gap="2">
        {label && (
          <Label>
            {label}
            {required && <span className="text-destructive">*</span>}
          </Label>
        )}
        {Icon ? (
          <HStack gap="2" className="relative">
            <Icon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
            <Input
              ref={ref}
              className={cn('pl-10', error && 'border-destructive', className)}
              {...props}
            />
          </HStack>
        ) : (
          <Input
            ref={ref}
            className={cn(error && 'border-destructive', className)}
            {...props}
          />
        )}
        {error && (
          <Typography
            variant="body-sm"
            className="text-destructive first-letter:uppercase"
          >
            {error}
          </Typography>
        )}
        {helperText && !error && (
          <Typography
            variant="body-sm"
            className="text-muted-foreground first-letter:uppercase"
          >
            {helperText}
          </Typography>
        )}
      </VStack>
    )
  },
)

FormInput.displayName = 'FormInput'

export interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  helperText?: string
  required?: boolean
}

export const FormTextarea = React.forwardRef<
  HTMLTextAreaElement,
  FormTextareaProps
>(({label, error, helperText, required, className, ...props}, ref) => {
  return (
    <VStack gap="2">
      {label && (
        <Label>
          {label}
          {required && <span className="text-destructive">*</span>}
        </Label>
      )}
      <Textarea
        ref={ref}
        className={cn(error && 'border-destructive', className)}
        {...props}
      />
      {error && (
        <Typography
          variant="body-sm"
          className="text-destructive first-letter:uppercase"
        >
          {error}
        </Typography>
      )}
      {helperText && !error && (
        <Typography
          variant="body-sm"
          className="text-muted-foreground first-letter:uppercase"
        >
          {helperText}
        </Typography>
      )}
    </VStack>
  )
})

FormTextarea.displayName = 'FormTextarea'

export type FormSelectOption = {
  value: string
  label: React.ReactNode
  disabled?: boolean
}

export interface FormSelectProps extends SelectProps {
  label?: string
  error?: string
  helperText?: string
  required?: boolean
  className?: string

  options: FormSelectOption[]
  placeholder?: string

  /** Empty / loading / error states */
  loading?: boolean
  emptyText?: string
  apiError?: ApiErrorType
}

export const FormSelect = React.forwardRef<HTMLButtonElement, FormSelectProps>(
  (props, ref) => {
    const {
      label,
      error,
      helperText,
      required,
      className,
      disabled,

      options,
      placeholder = 'Select...',
      loading = false,
      emptyText = 'No options',
      apiError,

      value,
      onValueChange,

      ...restProps
    } = props

    return (
      <VStack gap="2" className="group" data-disabled={disabled}>
        {label && (
          <Label>
            {label}
            {required && <span className="text-destructive">*</span>}
          </Label>
        )}

        <Select
          value={value}
          onValueChange={onValueChange}
          disabled={disabled}
          loading={loading}
          emptyText={emptyText}
          apiError={apiError}
          {...restProps}
        >
          <SelectTrigger
            ref={ref}
            aria-invalid={!!error}
            className={cn(error && 'border-destructive', className)}
          >
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>

          <SelectContent
            hasOptions={options.length > 0}
            loading={loading}
            apiError={apiError}
            emptyText={emptyText}
          >
            {options.map(opt => (
              <SelectItem
                key={opt.value}
                value={opt.value}
                disabled={opt.disabled}
              >
                {opt.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {error && (
          <Typography
            variant="body-sm"
            className="text-destructive first-letter:uppercase"
          >
            {error}
          </Typography>
        )}

        {helperText && !error && (
          <Typography
            variant="body-sm"
            className="text-muted-foreground first-letter:uppercase"
          >
            {helperText}
          </Typography>
        )}
      </VStack>
    )
  },
)

FormSelect.displayName = 'FormSelect'

export type BaseFormCalendarProps = {
  label?: string
  error?: string
  helperText?: string
  required?: boolean
  className?: string
}

export type FormCalendarProps =
  | (BaseFormCalendarProps &
      Extract<CalendarProps, {mode: 'single'}> & {
        value?: Date
        onChange?: (date?: Date) => void
      })
  | (BaseFormCalendarProps &
      Extract<CalendarProps, {mode: 'multiple'}> & {
        value?: Date[]
        onChange?: (dates?: Date[]) => void
      })
  | (BaseFormCalendarProps &
      Extract<CalendarProps, {mode: 'range'}> & {
        value?: DateRange
        onChange?: (range?: DateRange) => void
      })

export const FormCalendar = React.forwardRef<HTMLDivElement, FormCalendarProps>(
  (props, ref) => {
    const {
      label,
      error,
      helperText,
      required,
      className,
      value,
      onChange,
      ...rest
    } = props

    const renderCalendar = () => {
      switch (props.mode) {
        case 'multiple':
          return (
            <Calendar
              {...rest}
              mode="multiple"
              selected={value as Date[] | undefined}
              onSelect={onChange as (dates?: Date[]) => void}
            />
          )

        case 'range':
          return (
            <Calendar
              {...rest}
              mode="range"
              selected={value as DateRange | undefined}
              onSelect={onChange as (range?: DateRange) => void}
            />
          )

        default:
          return (
            <Calendar
              {...rest}
              mode="single"
              selected={value as Date | undefined}
              onSelect={onChange as (date?: Date) => void}
            />
          )
      }
    }

    return (
      <VStack gap="2">
        {label && (
          <Label>
            {label}
            {required && <span className="text-destructive">*</span>}
          </Label>
        )}

        <div ref={ref} className={className}>
          {renderCalendar()}
        </div>

        {error && (
          <Typography
            variant="body-sm"
            className="text-destructive first-letter:uppercase"
          >
            {error}
          </Typography>
        )}

        {helperText && !error && (
          <Typography
            variant="body-sm"
            className="text-muted-foreground first-letter:uppercase"
          >
            {helperText}
          </Typography>
        )}
      </VStack>
    )
  },
)

FormCalendar.displayName = 'FormCalendar'

export interface FormCheckboxProps extends Omit<
  React.ComponentProps<typeof Checkbox>,
  'label'
> {
  /** Field label displayed above the checkbox */
  label?: string
  /** Checkbox text displayed next to the checkbox */
  checkboxLabel?: React.ReactNode
  error?: string
  helperText?: string
  required?: boolean
  className?: string
}

export const FormCheckbox = React.forwardRef<
  HTMLButtonElement,
  FormCheckboxProps
>((props, ref) => {
  const {
    label,
    checkboxLabel,
    error,
    helperText,
    required,
    className,
    ...rest
  } = props

  return (
    <VStack gap="2">
      {label && (
        <Label>
          {label}
          {required && <span className="text-destructive">*</span>}
        </Label>
      )}

      <Checkbox
        ref={ref}
        label={checkboxLabel}
        variant={error ? 'error' : rest.variant}
        className={cn(className)}
        {...rest}
      />

      {error && (
        <Typography
          variant="body-sm"
          className="text-destructive first-letter:uppercase"
        >
          {error}
        </Typography>
      )}

      {helperText && !error && (
        <Typography
          variant="body-sm"
          className="text-muted-foreground first-letter:uppercase"
        >
          {helperText}
        </Typography>
      )}
    </VStack>
  )
})

FormCheckbox.displayName = 'FormCheckbox'

export interface FormRadioGroupOption {
  value: string
  label: React.ReactNode
  disabled?: boolean
}

export interface FormRadioGroupProps extends Omit<
  React.ComponentProps<typeof RadioGroup>,
  'children'
> {
  label?: string
  error?: string
  helperText?: string
  required?: boolean
  className?: string
  options: FormRadioGroupOption[]
}

export const FormRadioGroup = React.forwardRef<
  HTMLDivElement,
  FormRadioGroupProps
>((props, ref) => {
  const {label, error, helperText, required, className, options, ...rest} =
    props

  return (
    <VStack gap="2">
      {label && (
        <Label>
          {label}
          {required && <span className="text-destructive">*</span>}
        </Label>
      )}

      <RadioGroup
        ref={ref}
        aria-invalid={!!error}
        className={cn(error && 'ring-2 ring-destructive/20', className)}
        {...rest}
      >
        {options.map(opt => (
          <HStack as="label" key={opt.value} gap="2" className="items-center">
            <RadioGroupItem
              value={opt.value}
              disabled={opt.disabled}
              aria-label={typeof opt.label === 'string' ? opt.label : undefined}
            />
            <span>{opt.label}</span>
          </HStack>
        ))}
      </RadioGroup>

      {error && (
        <Typography
          variant="body-sm"
          className="text-destructive first-letter:uppercase"
        >
          {error}
        </Typography>
      )}

      {helperText && !error && (
        <Typography
          variant="body-sm"
          className="text-muted-foreground first-letter:uppercase"
        >
          {helperText}
        </Typography>
      )}
    </VStack>
  )
})

FormRadioGroup.displayName = 'FormRadioGroup'

export interface FormPhoneInputProps extends Omit<PhoneInputProps, 'variant'> {
  label?: string
  error?: string
  helperText?: string
  required?: boolean
}

export const FormPhoneInput = React.forwardRef<
  HTMLDivElement,
  FormPhoneInputProps
>(({label, error, helperText, required, className, ...props}, ref) => {
  return (
    <VStack gap="2">
      {label && (
        <Label>
          {label}
          {required && <span className="text-destructive">*</span>}
        </Label>
      )}
      <PhoneInput
        ref={ref}
        variant={error ? 'error' : 'default'}
        className={cn(className)}
        {...props}
      />
      {error && (
        <Typography
          variant="body-sm"
          className="text-destructive first-letter:uppercase"
        >
          {error}
        </Typography>
      )}
      {helperText && !error && (
        <Typography
          variant="body-sm"
          className="text-muted-foreground first-letter:uppercase"
        >
          {helperText}
        </Typography>
      )}
    </VStack>
  )
})

FormPhoneInput.displayName = 'FormPhoneInput'

export interface FormTimePickerProps extends Omit<TimePickerProps, 'variant'> {
  label?: string
  error?: string
  helperText?: string
  required?: boolean
}

export const FormTimePicker = React.forwardRef<
  HTMLDivElement,
  FormTimePickerProps
>(({label, error, helperText, required, className, ...props}, ref) => {
  return (
    <VStack gap="2">
      {label && (
        <Label>
          {label}
          {required && <span className="text-destructive">*</span>}
        </Label>
      )}
      <TimePicker
        ref={ref}
        variant={error ? 'error' : 'default'}
        className={cn(className)}
        {...props}
      />
      {error && (
        <Typography
          variant="body-sm"
          className="text-destructive first-letter:uppercase"
        >
          {error}
        </Typography>
      )}
      {helperText && !error && (
        <Typography
          variant="body-sm"
          className="text-muted-foreground first-letter:uppercase"
        >
          {helperText}
        </Typography>
      )}
    </VStack>
  )
})

FormTimePicker.displayName = 'FormTimePicker'

export type FormDateTimePickerProps = Omit<DateTimePickerProps, 'variant'> & {
  label?: string
  error?: string
  helperText?: string
  required?: boolean
}

export const FormDateTimePicker = React.forwardRef<
  HTMLButtonElement,
  FormDateTimePickerProps
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
>(({label, error, helperText, required, className, ...props}: any, ref) => {
  return (
    <VStack gap="2">
      {label && (
        <Label>
          {label}
          {required && <span className="text-destructive">*</span>}
        </Label>
      )}
      <DateTimePicker
        ref={ref}
        variant={error ? 'error' : 'default'}
        className={cn(className)}
        {...props}
      />
      {error && (
        <Typography
          variant="body-sm"
          className="text-destructive first-letter:uppercase"
        >
          {error}
        </Typography>
      )}
      {helperText && !error && (
        <Typography
          variant="body-sm"
          className="text-muted-foreground first-letter:uppercase"
        >
          {helperText}
        </Typography>
      )}
    </VStack>
  )
})

FormDateTimePicker.displayName = 'FormDateTimePicker'

export type FormOTPProps = React.ComponentPropsWithoutRef<typeof InputOTP> & {
  label?: string
  error?: string
  helperText?: string
  required?: boolean
}

export function FormOTP({
  label,
  error,
  helperText,
  required,
  className,
  ...props
}: FormOTPProps) {
  return (
    <VStack gap="2">
      {label && (
        <Label>
          {label}
          {required && <span className="text-destructive ml-1">*</span>}
        </Label>
      )}
      <InputOTP
        aria-invalid={!!error}
        className={cn(error && 'border-destructive', className)}
        {...props}
      />
      {error && (
        <Typography
          variant="body-sm"
          className="text-destructive first-letter:uppercase"
        >
          {error}
        </Typography>
      )}
      {helperText && !error && (
        <Typography
          variant="body-sm"
          className="text-muted-foreground first-letter:uppercase"
        >
          {helperText}
        </Typography>
      )}
    </VStack>
  )
}

export interface FormMediaProps extends Omit<
  InputProps,
  'type' | 'value' | 'defaultValue' | 'onChange' | 'accept'
> {
  // ── Standard form-field props (mirrors FormInput) ──
  label?: string
  error?: string
  helperText?: string
  required?: boolean

  // ── Media-specific props ───────────────────────────
  /** Max individual file size in bytes. Default: 5 MB */
  maxFileSize?: number
  /** Allow multiple file selection. Default: false */
  multiple?: boolean
  /** Maximum number of files when multiple=true. Default: unlimited */
  maxFiles?: number
  /** Accepted MIME types / extensions forwarded to the input. Default: 'image/*' */
  accept?: string
  /** Optimise touch targets and layout for mobile screens */
  mobileVariant?: boolean

  // ── RHF-compatible value / change ─────────────────
  /**
   * Controlled value — expects a FileList or File[] (RHF stores FileList from
   * the native input; you can also pass File[] for programmatic control).
   */
  value?: FileList | File[] | null
  onChange?: (files: FileList | null) => void
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function fileListToArray(files: FileList | File[] | null | undefined): File[] {
  if (!files) return []
  if (Array.isArray(files)) return files
  return Array.from(files)
}

function arrayToFileList(files: File[]): FileList {
  const dt = new DataTransfer()
  files.forEach(f => dt.items.add(f))
  return dt.files
}

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

// ─── Component ────────────────────────────────────────────────────────────────

export const FormMedia = React.forwardRef<HTMLInputElement, FormMediaProps>(
  (
    {
      label,
      error: externalError,
      helperText,
      required,
      className,
      maxFileSize = 5 * 1024 * 1024, // 5 MB
      multiple = false,
      maxFiles,
      accept = 'image/*',
      mobileVariant = false,
      value,
      onChange,
      disabled,
      ...rest
    },
    ref,
  ) => {
    // ── Internal state ──────────────────────────────────────────────────────
    const [previews, setPreviews] = React.useState<{file: File; url: string}[]>(
      [],
    )
    const [internalError, setInternalError] = React.useState<string>('')

    // Keep a stable ref to the hidden <input> so we can reset it programmatically
    const inputRef = React.useRef<HTMLInputElement | null>(null)

    // Merge external forwarded ref with our local ref
    const mergedRef = React.useCallback(
      (node: HTMLInputElement | null) => {
        inputRef.current = node
        if (typeof ref === 'function') ref(node)
        else if (ref) ref.current = node
      },
      [ref],
    )

    // ── Sync previews with controlled value ────────────────────────────────
    // When the form is reset, `value` becomes null/undefined/empty — clear previews.
    React.useEffect(() => {
      const incoming = fileListToArray(value)

      if (incoming.length === 0) {
        // Form reset: revoke existing object URLs and clear state
        setPreviews(prev => {
          prev.forEach(p => URL.revokeObjectURL(p.url))
          return []
        })
        setInternalError('')
        // Also reset the native input so the browser clears "X files selected"
        if (inputRef.current) inputRef.current.value = ''
        return
      }

      // If the controlled value already matches our previews, skip re-render
      const currentFiles = previews.map(p => p.file)
      const same =
        incoming.length === currentFiles.length &&
        incoming.every((f, i) => f === currentFiles[i])

      if (!same) {
        previews.forEach(p => URL.revokeObjectURL(p.url))
        setPreviews(incoming.map(f => ({file: f, url: URL.createObjectURL(f)})))
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])

    // Revoke object URLs on unmount
    React.useEffect(() => {
      return () => {
        previews.forEach(p => URL.revokeObjectURL(p.url))
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // ── Validation ─────────────────────────────────────────────────────────
    function validate(files: File[]): string {
      const oversized = files.find(f => f.size > maxFileSize)
      if (oversized) {
        return `"${oversized.name}" exceeds the ${formatBytes(maxFileSize)} size limit.`
      }
      if (multiple && maxFiles !== undefined && files.length > maxFiles) {
        return `You can upload at most ${maxFiles} file${maxFiles === 1 ? '' : 's'}.`
      }
      return ''
    }

    // ── Handlers ───────────────────────────────────────────────────────────
    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
      const raw = e.target.files
      if (!raw || raw.length === 0) return

      const incoming = Array.from(raw)
      const validationError = validate(incoming)
      setInternalError(validationError)

      if (validationError) {
        // Reset the native input so the user can try again
        if (inputRef.current) inputRef.current.value = ''
        return
      }

      // Revoke old preview URLs
      previews.forEach(p => URL.revokeObjectURL(p.url))
      const newPreviews = incoming.map(f => ({
        file: f,
        url: URL.createObjectURL(f),
      }))
      setPreviews(newPreviews)
      onChange?.(arrayToFileList(incoming))
    }

    function handleRemove(index: number) {
      const next = previews.filter((_, i) => i !== index)
      setPreviews(prev => {
        URL.revokeObjectURL(prev[index].url)
        return next
      })

      const nextFileList = arrayToFileList(next.map(p => p.file))
      onChange?.(next.length > 0 ? nextFileList : null)

      // Keep native input in sync
      if (inputRef.current) inputRef.current.value = ''
    }

    // ── Derived ────────────────────────────────────────────────────────────
    const displayError = externalError || internalError
    const isDisabled = disabled

    // ── Render ─────────────────────────────────────────────────────────────
    return (
      <VStack gap="2">
        {/* Label */}
        {label && (
          <Label>
            {label}
            {required && <span className="text-destructive ml-1">*</span>}
          </Label>
        )}

        {/* Drop zone / trigger */}
        <label
          className={cn(
            'flex flex-col items-center justify-center gap-2',
            'rounded-md border-2 border-dashed',
            'transition-colors cursor-pointer select-none',
            mobileVariant ? 'py-6 px-4' : 'py-4 px-3',
            isDisabled
              ? 'cursor-not-allowed opacity-50 border-muted'
              : displayError
                ? 'border-destructive bg-destructive/5 hover:bg-destructive/10'
                : 'border-input bg-muted/30 hover:bg-muted/60',
            className,
          )}
        >
          <Upload
            className={cn(
              'text-muted-foreground',
              mobileVariant ? 'size-6' : 'size-5',
            )}
          />
          <span
            className={cn(
              'text-muted-foreground text-center leading-snug',
              mobileVariant ? 'text-sm' : 'text-xs',
            )}
          >
            {multiple
              ? maxFiles
                ? `Upload up to ${maxFiles} files`
                : 'Upload files'
              : 'Upload a file'}
            <br />
            <span className="text-muted-foreground/70">
              Max {formatBytes(maxFileSize)} per file
            </span>
          </span>

          {/* Hidden native input */}
          <Input
            {...rest}
            ref={mergedRef}
            type="file"
            accept={accept}
            multiple={multiple}
            disabled={isDisabled}
            className="sr-only"
            aria-invalid={!!displayError}
            onChange={handleInputChange}
            // Never forward `value` to a file input — browsers block it
          />
        </label>

        {/* Preview grid */}
        {previews.length > 0 && (
          <div
            className={cn(
              'grid gap-2',
              mobileVariant
                ? 'grid-cols-3'
                : 'grid-cols-4 sm:grid-cols-5 md:grid-cols-6',
            )}
          >
            {previews.map(({file, url}, index) => (
              <PreviewTile
                key={url}
                url={url}
                name={file.name}
                onRemove={() => handleRemove(index)}
                mobile={mobileVariant}
                disabled={isDisabled}
              />
            ))}
          </div>
        )}

        {/* Error */}
        {displayError && (
          <Typography
            variant="body-sm"
            className="text-destructive first-letter:uppercase"
          >
            {displayError}
          </Typography>
        )}

        {/* Helper text */}
        {helperText && !displayError && (
          <Typography
            variant="body-sm"
            className="text-muted-foreground first-letter:uppercase"
          >
            {helperText}
          </Typography>
        )}
      </VStack>
    )
  },
)

FormMedia.displayName = 'FormMedia'

// ─── Preview tile ─────────────────────────────────────────────────────────────

interface PreviewTileProps {
  url: string
  name: string
  onRemove: () => void
  mobile?: boolean
  disabled?: boolean
}

function PreviewTile({
  url,
  name,
  onRemove,
  mobile,
  disabled,
}: PreviewTileProps) {
  const [imgError, setImgError] = React.useState(false)

  return (
    <div
      className={cn(
        'group relative aspect-square rounded-md overflow-hidden',
        'border border-border bg-muted',
        mobile ? 'rounded-lg' : 'rounded-md',
      )}
    >
      {imgError ? (
        /* Fallback for non-image files (PDF, video, etc.) */
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 p-1">
          <ImageIcon className="size-5 text-muted-foreground" />
          <span className="text-[10px] text-muted-foreground text-center line-clamp-2 break-all leading-tight">
            {name}
          </span>
        </div>
      ) : (
        <img
          src={url}
          alt={name}
          onError={() => setImgError(true)}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* Delete button — visible on hover (desktop) or always shown (mobile) */}
      {!disabled && (
        <button
          type="button"
          aria-label={`Remove ${name}`}
          onClick={onRemove}
          className={cn(
            'absolute top-1 right-1 z-10',
            'flex items-center justify-center',
            'rounded-full bg-background/80 backdrop-blur-sm',
            'text-foreground shadow-sm',
            'transition-opacity',
            mobile
              ? 'size-6 opacity-100' // always visible on mobile
              : 'size-5 opacity-0 group-hover:opacity-100', // hover reveal on desktop
            'hover:bg-destructive hover:text-destructive-foreground',
            'focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-ring',
          )}
        >
          <X className={mobile ? 'size-3.5' : 'size-3'} />
        </button>
      )}
    </div>
  )
}

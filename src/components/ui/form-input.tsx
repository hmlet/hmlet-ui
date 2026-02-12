import {Calendar} from './calendar'
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
            {required && <span className="text-destructive ml-1">*</span>}
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
          <Typography variant="body-sm" className="text-destructive">
            {error}
          </Typography>
        )}
        {helperText && !error && (
          <Typography variant="body-sm" className="text-muted-foreground">
            {helperText}
          </Typography>
        )}
      </VStack>
    )
  },
)

FormInput.displayName = 'FormInput'

interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
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
          {required && <span className="text-destructive ml-1">*</span>}
        </Label>
      )}
      <Textarea
        ref={ref}
        className={cn(error && 'border-destructive', className)}
        {...props}
      />
      {error && (
        <Typography variant="body-sm" className="text-destructive">
          {error}
        </Typography>
      )}
      {helperText && !error && (
        <Typography variant="body-sm" className="text-muted-foreground">
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

interface FormSelectProps extends SelectProps {
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
            {required && <span className="text-destructive ml-1">*</span>}
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
          <Typography variant="body-sm" className="text-destructive">
            {error}
          </Typography>
        )}

        {helperText && !error && (
          <Typography variant="body-sm" className="text-muted-foreground">
            {helperText}
          </Typography>
        )}
      </VStack>
    )
  },
)

FormSelect.displayName = 'FormSelect'

type FormCalendarProps = React.ComponentProps<typeof Calendar> & {
  label?: string
  error?: string
  helperText?: string
  required?: boolean
  className?: string
}

export const FormCalendar = React.forwardRef<HTMLDivElement, FormCalendarProps>(
  ({label, error, helperText, required, className, ...props}, ref) => {
    return (
      <VStack gap="2">
        {label && (
          <Label>
            {label}
            {required && <span className="text-destructive ml-1">*</span>}
          </Label>
        )}
        <div ref={ref} className={className}>
          <Calendar {...props} />
        </div>
        {error && (
          <Typography variant="body-sm" className="text-destructive">
            {error}
          </Typography>
        )}
        {helperText && !error && (
          <Typography variant="body-sm" className="text-muted-foreground">
            {helperText}
          </Typography>
        )}
      </VStack>
    )
  },
)
FormCalendar.displayName = 'FormCalendar'

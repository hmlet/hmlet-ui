import { type CalendarProps } from './calendar';
import * as React from 'react';
import { type InputProps } from './input';
import type { LucideIcon } from 'lucide-react';
import { type ApiErrorType, type SelectProps } from './select';
import { Checkbox } from './checkbox';
import type { DateRange } from 'react-day-picker';
import { RadioGroup } from './radio-group';
import { type PhoneInputProps } from './phone-input';
import { type TimePickerProps } from './time-picker';
import { type DateTimePickerProps } from './date-time-picker';
import { InputOTP } from './input-otp';
interface FormInputProps extends InputProps {
    label?: string;
    error?: string;
    helperText?: string;
    icon?: LucideIcon;
    required?: boolean;
}
export declare const FormInput: React.ForwardRefExoticComponent<Omit<FormInputProps, "ref"> & React.RefAttributes<HTMLInputElement>>;
export interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
    helperText?: string;
    required?: boolean;
}
export declare const FormTextarea: React.ForwardRefExoticComponent<FormTextareaProps & React.RefAttributes<HTMLTextAreaElement>>;
export type FormSelectOption = {
    value: string;
    label: React.ReactNode;
    subtext?: React.ReactNode;
    disabled?: boolean;
};
export interface FormSelectProps extends SelectProps {
    label?: string;
    error?: string;
    helperText?: string;
    required?: boolean;
    className?: string;
    options: FormSelectOption[];
    placeholder?: string;
    /** Empty / loading / error states */
    loading?: boolean;
    emptyText?: string;
    apiError?: ApiErrorType;
}
export declare const FormSelect: React.ForwardRefExoticComponent<FormSelectProps & React.RefAttributes<HTMLButtonElement>>;
export type BaseFormCalendarProps = {
    label?: string;
    error?: string;
    helperText?: string;
    required?: boolean;
    className?: string;
};
export type FormCalendarProps = (BaseFormCalendarProps & Extract<CalendarProps, {
    mode: 'single';
}> & {
    value?: Date;
    onChange?: (date?: Date) => void;
}) | (BaseFormCalendarProps & Extract<CalendarProps, {
    mode: 'multiple';
}> & {
    value?: Date[];
    onChange?: (dates?: Date[]) => void;
}) | (BaseFormCalendarProps & Extract<CalendarProps, {
    mode: 'range';
}> & {
    value?: DateRange;
    onChange?: (range?: DateRange) => void;
});
export declare const FormCalendar: React.ForwardRefExoticComponent<FormCalendarProps & React.RefAttributes<HTMLDivElement>>;
export interface FormCheckboxProps extends Omit<React.ComponentProps<typeof Checkbox>, 'label'> {
    /** Field label displayed above the checkbox */
    label?: string;
    /** Checkbox text displayed next to the checkbox */
    checkboxLabel?: React.ReactNode;
    error?: string;
    helperText?: string;
    required?: boolean;
    className?: string;
}
export declare const FormCheckbox: React.ForwardRefExoticComponent<Omit<FormCheckboxProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export interface FormRadioGroupOption {
    value: string;
    label: React.ReactNode;
    disabled?: boolean;
}
export interface FormRadioGroupProps extends Omit<React.ComponentProps<typeof RadioGroup>, 'children'> {
    label?: string;
    error?: string;
    helperText?: string;
    required?: boolean;
    className?: string;
    options: FormRadioGroupOption[];
}
export declare const FormRadioGroup: React.ForwardRefExoticComponent<Omit<FormRadioGroupProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export interface FormPhoneInputProps extends Omit<PhoneInputProps, 'variant'> {
    label?: string;
    error?: string;
    helperText?: string;
    required?: boolean;
}
export declare const FormPhoneInput: React.ForwardRefExoticComponent<FormPhoneInputProps & React.RefAttributes<HTMLDivElement>>;
export interface FormTimePickerProps extends Omit<TimePickerProps, 'variant'> {
    label?: string;
    error?: string;
    helperText?: string;
    required?: boolean;
}
export declare const FormTimePicker: React.ForwardRefExoticComponent<FormTimePickerProps & React.RefAttributes<HTMLDivElement>>;
export type FormDateTimePickerProps = Omit<DateTimePickerProps, 'variant'> & {
    label?: string;
    error?: string;
    helperText?: string;
    required?: boolean;
};
export declare const FormDateTimePicker: React.ForwardRefExoticComponent<Omit<DateTimePickerProps, "variant"> & {
    label?: string;
    error?: string;
    helperText?: string;
    required?: boolean;
} & React.RefAttributes<HTMLButtonElement>>;
export type FormOTPProps = React.ComponentPropsWithoutRef<typeof InputOTP> & {
    label?: string;
    error?: string;
    helperText?: string;
    required?: boolean;
};
export declare function FormOTP({ label, error, helperText, required, className, ...props }: FormOTPProps): import("react/jsx-runtime").JSX.Element;
export interface FormMediaProps extends Omit<InputProps, 'type' | 'value' | 'defaultValue' | 'onChange' | 'accept'> {
    label?: string;
    error?: string;
    helperText?: string;
    required?: boolean;
    /** Max individual file size in bytes. Default: 5 MB */
    maxFileSize?: number;
    /** Allow multiple file selection. Default: false */
    multiple?: boolean;
    /** Maximum number of files when multiple=true. Default: unlimited */
    maxFiles?: number;
    /** Accepted MIME types / extensions forwarded to the input. Default: 'image/*' */
    accept?: string;
    /** Optimise touch targets and layout for mobile screens */
    mobileVariant?: boolean;
    /**
     * Controlled value — expects a FileList or File[] (RHF stores FileList from
     * the native input; you can also pass File[] for programmatic control).
     */
    value?: FileList | File[] | null;
    onChange?: (files: FileList | null) => void;
}
export declare const FormMedia: React.ForwardRefExoticComponent<Omit<FormMediaProps, "ref"> & React.RefAttributes<HTMLInputElement>>;
export {};

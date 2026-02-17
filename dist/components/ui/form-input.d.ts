import { type CalendarProps } from './calendar';
import * as React from 'react';
import { type InputProps } from './input';
import type { LucideIcon } from 'lucide-react';
import { type ApiErrorType, type SelectProps } from './select';
import { Checkbox } from './checkbox';
import type { DateRange } from 'react-day-picker';
interface FormInputProps extends InputProps {
    label?: string;
    error?: string;
    helperText?: string;
    icon?: LucideIcon;
    required?: boolean;
}
export declare const FormInput: React.ForwardRefExoticComponent<Omit<FormInputProps, "ref"> & React.RefAttributes<HTMLInputElement>>;
interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
    helperText?: string;
    required?: boolean;
}
export declare const FormTextarea: React.ForwardRefExoticComponent<FormTextareaProps & React.RefAttributes<HTMLTextAreaElement>>;
export type FormSelectOption = {
    value: string;
    label: React.ReactNode;
    disabled?: boolean;
};
interface FormSelectProps extends SelectProps {
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
type BaseFormCalendarProps = {
    label?: string;
    error?: string;
    helperText?: string;
    required?: boolean;
    className?: string;
};
type FormCalendarProps = (BaseFormCalendarProps & Extract<CalendarProps, {
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
interface FormCheckboxProps extends Omit<React.ComponentProps<typeof Checkbox>, 'label'> {
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
export {};

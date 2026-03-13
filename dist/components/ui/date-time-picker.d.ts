import * as React from 'react';
import { DayPicker } from 'react-day-picker';
import { type VariantProps } from './cva';
declare const dateTimePickerVariants: (props?: {
    variant?: "error" | "default" | "success";
    size?: "sm" | "md" | "lg";
} & import("class-variance-authority/types").ClassProp) => string;
export type DateTimeValue = {
    date: Date;
    hour: number;
    minute: number;
};
export type DateTimeRangeValue = {
    from?: DateTimeValue;
    to?: DateTimeValue;
};
export interface DateTimePickerBaseProps extends Omit<VariantProps<typeof dateTimePickerVariants>, 'inputSize'> {
    /** Size variant matching Input sizes */
    size?: 'sm' | 'md' | 'lg';
    /** Visual variant */
    variant?: 'default' | 'error' | 'success';
    /** Whether the picker is disabled */
    disabled?: boolean;
    /** Additional class names */
    className?: string;
    /** Name attribute */
    name?: string;
    /** Id attribute */
    id?: string;
    /** Whether the field is required */
    required?: boolean;
    /** Placeholder text */
    placeholder?: string;
    /** Whether to use 12-hour format */
    use12Hours?: boolean;
    /** Props passed to DayPicker */
    calendarProps?: Omit<React.ComponentProps<typeof DayPicker>, 'mode' | 'selected' | 'onSelect'>;
}
export interface DateTimePickerSingleProps extends DateTimePickerBaseProps {
    mode?: 'single';
    value?: DateTimeValue | null;
    onChange?: (value: DateTimeValue | null) => void;
}
export interface DateTimePickerRangeProps extends DateTimePickerBaseProps {
    mode: 'range';
    value?: DateTimeRangeValue | null;
    onChange?: (value: DateTimeRangeValue | null) => void;
}
export type DateTimePickerProps = DateTimePickerSingleProps | DateTimePickerRangeProps;
declare const DateTimePicker: React.ForwardRefExoticComponent<DateTimePickerProps & React.RefAttributes<HTMLButtonElement>>;
export type DateTimePickerVariants = VariantProps<typeof dateTimePickerVariants>;
export { DateTimePicker, dateTimePickerVariants };

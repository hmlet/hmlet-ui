import * as React from 'react';
import { type VariantProps } from './cva';
declare const timePickerVariants: (props?: {
    variant?: "error" | "default" | "success";
    size?: "sm" | "md" | "lg";
} & import("class-variance-authority/types").ClassProp) => string;
type TimePickerValue = string | null;
export interface TimePickerProps extends Omit<VariantProps<typeof timePickerVariants>, 'inputSize'> {
    /** The current time value (e.g. "10:00" or "14:30") */
    value?: TimePickerValue;
    /** Callback when the time changes */
    onChange?: (value: TimePickerValue) => void;
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
    /** Minimum time (e.g. "08:00") */
    minTime?: string;
    /** Maximum time (e.g. "18:00") */
    maxTime?: string;
    /** Placeholder text */
    placeholder?: string;
    /** Whether to use 12-hour format */
    use12Hours?: boolean;
}
declare const TimePicker: React.ForwardRefExoticComponent<TimePickerProps & React.RefAttributes<HTMLDivElement>>;
export type TimePickerVariants = VariantProps<typeof timePickerVariants>;
export { TimePicker, timePickerVariants };

import * as React from 'react';
import type { Country, Value } from 'react-phone-number-input';
import { isValidPhoneNumber } from 'react-phone-number-input';
import { type VariantProps } from './cva';
declare const phoneInputVariants: (props?: {
    variant?: "error" | "default" | "success";
    size?: "sm" | "md" | "lg";
} & import("class-variance-authority/types").ClassProp) => string;
export interface PhoneInputProps extends Omit<VariantProps<typeof phoneInputVariants>, 'size'> {
    value?: Value;
    onChange?: (value: Value) => void;
    defaultCountry?: Country;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
    size?: 'sm' | 'md' | 'lg';
    /** Internationalized format (e.g., +1 234 567 8900) */
    international?: boolean;
    /** Country code to preselect */
    country?: Country;
    /** Callback when country changes */
    onCountryChange?: (country?: Country) => void;
    /** Whether to show country select dropdown */
    withCountryCallingCode?: boolean;
    /** Additional input props */
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    /** Placeholder for country search */
    countrySearchPlaceholder?: string;
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
declare const PhoneInput: React.ForwardRefExoticComponent<PhoneInputProps & React.RefAttributes<HTMLDivElement>>;
export type PhoneInputVariants = VariantProps<typeof phoneInputVariants>;
export { PhoneInput, phoneInputVariants, isValidPhoneNumber };
export type { Country as PhoneCountry, Value as PhoneValue };

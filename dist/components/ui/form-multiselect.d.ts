import { type MultiselectProps } from './multiselect';
interface FormMultiselectProps extends Omit<MultiselectProps, 'className'> {
    label?: string;
    error?: string;
    helperText?: string;
    required?: boolean;
    className?: string;
}
export declare function FormMultiselect({ label, error, helperText, required, className, disabled, ...props }: FormMultiselectProps): import("react/jsx-runtime").JSX.Element;
export declare namespace FormMultiselect {
    var displayName: string;
}
export {};

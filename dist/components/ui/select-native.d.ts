import * as React from 'react';
type ApiErrorType = {
    error: boolean;
    text?: string;
    onClick?: () => void;
};
interface SelectNativeProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    options: Array<{
        value: string;
        label: string;
    }>;
    placeholder?: string;
    loading?: boolean;
    apiError?: ApiErrorType;
    emptyText?: string;
}
declare const SelectNative: React.ForwardRefExoticComponent<SelectNativeProps & React.RefAttributes<HTMLSelectElement>>;
export { SelectNative };

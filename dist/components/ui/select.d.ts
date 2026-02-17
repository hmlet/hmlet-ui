import * as React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
export type ApiErrorType = {
    error: boolean;
    text?: string;
    onClick?: () => void;
};
export type SelectProps = React.ComponentProps<typeof SelectPrimitive.Root> & {
    loading?: boolean;
    apiError?: ApiErrorType;
    emptyText?: string;
    /**
     * Children should be SelectItem or SelectGroup, etc.
     */
    children?: React.ReactNode;
};
declare function Select({ loading, apiError, emptyText, children, ...props }: SelectProps): import("react/jsx-runtime").JSX.Element;
declare function SelectGroup({ ...props }: React.ComponentProps<typeof SelectPrimitive.Group>): import("react/jsx-runtime").JSX.Element;
declare function SelectValue({ ...props }: React.ComponentProps<typeof SelectPrimitive.Value>): import("react/jsx-runtime").JSX.Element;
declare function SelectTrigger({ className, size, children, ...props }: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
    size?: 'sm' | 'md' | 'lg';
}): import("react/jsx-runtime").JSX.Element;
type SelectContentProps = React.ComponentProps<typeof SelectPrimitive.Content> & {
    loading?: boolean;
    apiError?: ApiErrorType;
    emptyText?: string;
    hasOptions?: boolean;
};
declare function SelectContent({ className, children, position, loading, apiError, emptyText, ...props }: SelectContentProps): import("react/jsx-runtime").JSX.Element;
declare function SelectLabel({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.Label>): import("react/jsx-runtime").JSX.Element;
declare function SelectItem({ className, children, ...props }: React.ComponentProps<typeof SelectPrimitive.Item>): import("react/jsx-runtime").JSX.Element;
declare function SelectSeparator({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.Separator>): import("react/jsx-runtime").JSX.Element;
declare function SelectScrollUpButton({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>): import("react/jsx-runtime").JSX.Element;
declare function SelectScrollDownButton({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>): import("react/jsx-runtime").JSX.Element;
export { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue, };

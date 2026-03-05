import * as React from 'react';
export type MultiselectOption = {
    value: string;
    label: React.ReactNode;
    disabled?: boolean;
};
export type MultiselectProps = {
    options: MultiselectOption[];
    value?: string[];
    defaultValue?: string[];
    onChange?: (value: string[]) => void;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
    optionVariant?: 'default' | 'checkbox';
    renderOption?: (option: MultiselectOption, selected: boolean) => React.ReactNode;
    loading?: boolean;
    apiError?: {
        error: boolean;
        text?: string;
        onClick?: () => void;
    };
    emptyText?: string;
    size?: 'sm' | 'md' | 'lg';
    /** Enable search functionality */
    isSearchable?: boolean;
    /** Custom search function - called with 300ms debounce */
    searchFn?: (searchTerm: string) => void;
    /** Placeholder for search input */
    searchPlaceholder?: string;
};
export declare function Multiselect({ options, value, defaultValue, onChange, placeholder, disabled, className, optionVariant, renderOption, loading, apiError, emptyText, size, isSearchable, searchFn, searchPlaceholder, }: MultiselectProps): import("react/jsx-runtime").JSX.Element;

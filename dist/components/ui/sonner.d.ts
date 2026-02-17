import { type ToasterProps } from 'sonner';
declare const Toaster: ({ ...props }: ToasterProps) => import("react/jsx-runtime").JSX.Element;
type ShowToastArgs = {
    type?: 'default' | 'success' | 'info' | 'warning' | 'error' | 'loading';
    title: string;
    description?: string;
    duration?: number;
    closeButton?: boolean;
    action?: {
        label: string;
        onClick: () => void;
    };
    cancel?: {
        label: string;
        onClick: () => void;
    };
    onDismiss?: () => void;
};
declare function showToast({ type, title, description, duration, closeButton, action, cancel, onDismiss, }: ShowToastArgs): string | number;
export { Toaster, showToast };

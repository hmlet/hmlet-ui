import * as React from 'react';
declare const InputOTP: React.ForwardRefExoticComponent<(Omit<Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "value" | "maxLength" | "textAlign" | "onComplete" | "pushPasswordManagerStrategy" | "pasteTransformer" | "containerClassName" | "noScriptCSSFallback"> & {
    value?: string;
    onChange?: (newValue: string) => unknown;
    maxLength: number;
    textAlign?: "left" | "center" | "right";
    onComplete?: (...args: any[]) => unknown;
    pushPasswordManagerStrategy?: "increase-width" | "none";
    pasteTransformer?: (pasted: string) => string;
    containerClassName?: string;
    noScriptCSSFallback?: string | null;
} & {
    render: (props: import("input-otp").RenderProps) => React.ReactNode;
    children?: never;
} & React.RefAttributes<HTMLInputElement> & {
    containerClassName?: string;
}, "ref"> | Omit<Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "value" | "maxLength" | "textAlign" | "onComplete" | "pushPasswordManagerStrategy" | "pasteTransformer" | "containerClassName" | "noScriptCSSFallback"> & {
    value?: string;
    onChange?: (newValue: string) => unknown;
    maxLength: number;
    textAlign?: "left" | "center" | "right";
    onComplete?: (...args: any[]) => unknown;
    pushPasswordManagerStrategy?: "increase-width" | "none";
    pasteTransformer?: (pasted: string) => string;
    containerClassName?: string;
    noScriptCSSFallback?: string | null;
} & {
    render?: never;
    children: React.ReactNode;
} & React.RefAttributes<HTMLInputElement> & {
    containerClassName?: string;
}, "ref">) & React.RefAttributes<HTMLInputElement>>;
declare function InputOTPGroup({ className, ...props }: React.ComponentProps<'div'>): import("react/jsx-runtime").JSX.Element;
declare function InputOTPSlot({ index, className, ...props }: React.ComponentProps<'div'> & {
    index: number;
}): import("react/jsx-runtime").JSX.Element;
declare function InputOTPSeparator({ ...props }: React.ComponentProps<'div'>): import("react/jsx-runtime").JSX.Element;
export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };

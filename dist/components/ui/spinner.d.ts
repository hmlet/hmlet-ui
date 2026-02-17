import * as React from 'react';
import { type VariantProps } from './cva';
declare const spinnerVariants: (props?: {
    variant?: "primary" | "secondary" | "current" | "destructive" | "success" | "muted";
    size?: "sm" | "md" | "lg" | "xl";
} & import("class-variance-authority/types").ClassProp) => string;
interface SpinnerProps extends React.ComponentProps<'svg'>, VariantProps<typeof spinnerVariants> {
    label?: string;
}
declare const Spinner: React.ForwardRefExoticComponent<Omit<SpinnerProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export type SpinnerVariants = VariantProps<typeof spinnerVariants>;
interface SpinnerContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    text?: string;
}
declare const SpinnerContainer: React.ForwardRefExoticComponent<SpinnerContainerProps & React.RefAttributes<HTMLDivElement>>;
interface SpinnerOverlayProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    visible?: boolean;
}
declare const SpinnerOverlay: React.ForwardRefExoticComponent<SpinnerOverlayProps & React.RefAttributes<HTMLDivElement>>;
export { Spinner, SpinnerContainer, SpinnerOverlay, spinnerVariants };

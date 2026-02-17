import * as React from 'react';
import { type VariantProps } from './cva';
declare const typographyVariants: (props?: {
    variant?: "h2" | "h3" | "h1" | "h4" | "h5" | "h6" | "display-xl" | "display-lg" | "display-md" | "body-xl" | "body-lg" | "body-md" | "body-base" | "body-sm" | "body-xs";
} & import("class-variance-authority/types").ClassProp) => string;
type TypographyVariant = NonNullable<VariantProps<typeof typographyVariants>['variant']>;
type TypographyOwnProps = VariantProps<typeof typographyVariants> & {
    as?: keyof HTMLElementTagNameMap;
    asChild?: boolean;
};
type TypographyProps = Omit<React.HTMLAttributes<HTMLElement>, 'color'> & TypographyOwnProps;
declare function Typography({ className, variant, as, asChild, ...props }: TypographyProps): import("react/jsx-runtime").JSX.Element;
export type TypographyVariants = VariantProps<typeof typographyVariants>;
export { Typography, typographyVariants };
export type { TypographyProps, TypographyVariant };

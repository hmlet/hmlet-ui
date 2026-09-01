import React from 'react';
import { type VariantProps } from './cva';
/**
 * Container - Content width constrainer
 *
 * Centers content horizontally and constrains maximum width.
 * Essential for readable content and consistent page layouts.
 *
 * @example
 * <Container maxWidth="lg" padding="4">
 *   <p>Centered, constrained content</p>
 * </Container>
 */
declare const containerVariants: (props?: {
    maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
    p?: "none" | 4 | 6 | 8;
    px?: "none" | 4 | 6 | 8;
    py?: "none" | 4 | 6 | 8;
    m?: 2 | 1 | "none" | 3 | 4 | 6 | 8 | 12 | 16 | 20;
    mx?: "none" | 4 | 6 | 8;
    my?: "none" | 4 | 6 | 8;
    width?: "auto" | "full" | "fit" | "screen";
    height?: "auto" | "full" | "fit" | "screen";
    shadow?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "inner" | "outline" | "default";
    display?: "block" | "inline" | "inline-block" | "flex" | "inline-flex" | "grid";
} & import("class-variance-authority/types").ClassProp) => string;
type ContainerVariantProps = VariantProps<typeof containerVariants>;
export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement>, Omit<ContainerVariantProps, 'padding' | 'paddingX' | 'paddingY' | 'margin' | 'marginX' | 'marginY'> {
    as?: React.ElementType;
    children?: React.ReactNode;
    p?: VariantProps<typeof containerVariants>['p'];
    px?: VariantProps<typeof containerVariants>['px'];
    py?: VariantProps<typeof containerVariants>['py'];
    m?: VariantProps<typeof containerVariants>['m'];
    mx?: VariantProps<typeof containerVariants>['mx'];
    my?: VariantProps<typeof containerVariants>['my'];
    /** Alias for `p` */
    padding?: VariantProps<typeof containerVariants>['p'];
    /** Alias for `px` */
    paddingX?: VariantProps<typeof containerVariants>['px'];
    /** Alias for `py` */
    paddingY?: VariantProps<typeof containerVariants>['py'];
    /** Alias for `m` */
    margin?: VariantProps<typeof containerVariants>['m'];
    /** Alias for `mx` */
    marginX?: VariantProps<typeof containerVariants>['mx'];
    /** Alias for `my` */
    marginY?: VariantProps<typeof containerVariants>['my'];
    width?: VariantProps<typeof containerVariants>['width'];
    height?: VariantProps<typeof containerVariants>['height'];
    shadow?: VariantProps<typeof containerVariants>['shadow'];
    display?: VariantProps<typeof containerVariants>['display'];
}
export declare const Container: React.ForwardRefExoticComponent<ContainerProps & React.RefAttributes<HTMLDivElement>>;
export {};

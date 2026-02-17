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
    m?: 1 | 2 | 16 | "none" | 3 | 4 | 6 | 8 | 12 | 20;
    mx?: "none" | 4 | 6 | 8;
    my?: "none" | 4 | 6 | 8;
    width?: "auto" | "full" | "fit" | "screen";
    height?: "auto" | "full" | "fit" | "screen";
    shadow?: "sm" | "md" | "lg" | "none" | "default" | "xl" | "2xl" | "inner" | "outline";
    display?: "grid" | "inline" | "block" | "inline-block" | "flex" | "inline-flex";
} & import("class-variance-authority/types").ClassProp) => string;
type ContainerVariantProps = VariantProps<typeof containerVariants>;
export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement>, Omit<ContainerVariantProps, 'padding' | 'margin'> {
    as?: React.ElementType;
    children?: React.ReactNode;
    p?: VariantProps<typeof containerVariants>['p'];
    px?: VariantProps<typeof containerVariants>['px'];
    py?: VariantProps<typeof containerVariants>['py'];
    m?: VariantProps<typeof containerVariants>['m'];
    mx?: VariantProps<typeof containerVariants>['mx'];
    my?: VariantProps<typeof containerVariants>['my'];
    width?: VariantProps<typeof containerVariants>['width'];
    height?: VariantProps<typeof containerVariants>['height'];
    shadow?: VariantProps<typeof containerVariants>['shadow'];
    display?: VariantProps<typeof containerVariants>['display'];
}
export declare const Container: React.ForwardRefExoticComponent<ContainerProps & React.RefAttributes<HTMLDivElement>>;
export {};

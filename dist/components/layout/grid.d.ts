import React from 'react';
import { type VariantProps } from './cva';
/**
 * Grid - Two-dimensional layout system
 *
 * CSS Grid-based layout for complex layouts like dashboards, card grids,
 * and responsive sections. Use with GridItem for precise control.
 *
 * @example
 * <Grid columns="3" gap="6">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </Grid>
 */
declare const gridVariants: (props?: {
    p?: 1 | 2 | 16 | "none" | 3 | 4 | 6 | 8 | 12 | 20;
    px?: 1 | 2 | 16 | "none" | 3 | 4 | 6 | 8 | 12 | 20;
    py?: 1 | 2 | 16 | "none" | 3 | 4 | 6 | 8 | 12 | 20;
    m?: 1 | 2 | 16 | "none" | 3 | 4 | 6 | 8 | 12 | 20;
    mx?: 1 | 2 | 16 | "none" | 3 | 4 | 6 | 8 | 12 | 20;
    my?: 1 | 2 | 16 | "none" | 3 | 4 | 6 | 8 | 12 | 20;
    columns?: 1 | 2 | 3 | 4 | 5 | 6 | 8 | 12 | "responsive-2" | "responsive-3" | "responsive-4" | "responsive-1-2-3-4" | "responsive-2-3-4-5" | "responsive-auto-fit" | "responsive-auto-fill" | 7 | 9 | 10 | 11;
    gap?: 0 | 1 | 2 | 16 | 3 | 4 | 6 | 8 | 12 | 20;
    autoFlow?: "row" | "column" | "dense";
    alignItems?: "center" | "end" | "start" | "stretch";
    justifyItems?: "center" | "end" | "start" | "stretch";
} & import("class-variance-authority/types").ClassProp) => string;
export interface GridProps extends React.HTMLAttributes<HTMLDivElement>, Omit<VariantProps<typeof gridVariants>, never> {
    as?: React.ElementType;
    children?: React.ReactNode;
    p?: VariantProps<typeof gridVariants>['p'];
    px?: VariantProps<typeof gridVariants>['px'];
    py?: VariantProps<typeof gridVariants>['py'];
    m?: VariantProps<typeof gridVariants>['m'];
    mx?: VariantProps<typeof gridVariants>['mx'];
    my?: VariantProps<typeof gridVariants>['my'];
}
export declare const Grid: React.ForwardRefExoticComponent<GridProps & React.RefAttributes<HTMLDivElement>>;
export {};

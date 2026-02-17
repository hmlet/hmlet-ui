import React from 'react';
import { type VariantProps } from './cva';
import { type WithNumberish } from './types';
/**
 * GridItem - Grid child placement controller
 *
 * Controls how a child element spans and positions within a Grid.
 * Provides column/row spanning and self-alignment.
 *
 * @example
 * <Grid columns="12">
 *   <GridItem colSpan="8">Main content</GridItem>
 *   <GridItem colSpan="4">Sidebar</GridItem>
 * </Grid>
 */
declare const gridItemVariants: (props?: {
    p?: 1 | 2 | 16 | "none" | 3 | 4 | 6 | 8 | 12 | 20;
    px?: 1 | 2 | 16 | "none" | 3 | 4 | 6 | 8 | 12 | 20;
    py?: 1 | 2 | 16 | "none" | 3 | 4 | 6 | 8 | 12 | 20;
    m?: 1 | 2 | 16 | "none" | 3 | 4 | 6 | 8 | 12 | 20;
    mx?: 1 | 2 | 16 | "none" | 3 | 4 | 6 | 8 | 12 | 20;
    my?: 1 | 2 | 16 | "none" | 3 | 4 | 6 | 8 | 12 | 20;
    colSpan?: 1 | 2 | 3 | 4 | 5 | "full" | 6 | 8 | 12 | 7 | 9 | 10 | 11;
    rowSpan?: 1 | 2 | 3 | 4 | 5 | "full" | 6;
    alignSelf?: "center" | "auto" | "end" | "start" | "stretch";
    justifySelf?: "center" | "auto" | "end" | "start" | "stretch";
} & import("class-variance-authority/types").ClassProp) => string;
type GridItemVariantProps = VariantProps<typeof gridItemVariants>;
export interface GridItemProps extends React.HTMLAttributes<HTMLDivElement>, Omit<GridItemVariantProps, 'colSpan' | 'rowSpan'> {
    as?: React.ElementType;
    children?: React.ReactNode;
    colSpan?: WithNumberish<GridItemVariantProps['colSpan']>;
    rowSpan?: WithNumberish<GridItemVariantProps['rowSpan']>;
    p?: VariantProps<typeof gridItemVariants>['p'];
    px?: VariantProps<typeof gridItemVariants>['px'];
    py?: VariantProps<typeof gridItemVariants>['py'];
    m?: VariantProps<typeof gridItemVariants>['m'];
    mx?: VariantProps<typeof gridItemVariants>['mx'];
    my?: VariantProps<typeof gridItemVariants>['my'];
}
export declare const GridItem: React.ForwardRefExoticComponent<GridItemProps & React.RefAttributes<HTMLDivElement>>;
export {};

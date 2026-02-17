import React from 'react';
import { type VariantProps } from './cva';
/**
 * Section - Page-level vertical grouping
 *
 * Provides consistent vertical spacing between major page sections.
 * Optionally includes subtle background for visual separation.
 *
 * @example
 * <Section paddingY="12" background="subtle">
 *   <Container>
 *     <h2>Section Title</h2>
 *     <p>Section content</p>
 *   </Container>
 * </Section>
 */
declare const sectionVariants: (props?: {
    paddingY?: 16 | 6 | 8 | 12 | 20;
    p?: 1 | 2 | 16 | "none" | 3 | 4 | 6 | 8 | 12 | 20;
    px?: 1 | 2 | 16 | "none" | 3 | 4 | 6 | 8 | 12 | 20;
    py?: 1 | 2 | 16 | "none" | 3 | 4 | 6 | 8 | 12 | 20;
    m?: 1 | 2 | 16 | "none" | 3 | 4 | 6 | 8 | 12 | 20;
    mx?: 1 | 2 | 16 | "none" | 3 | 4 | 6 | 8 | 12 | 20;
    my?: 1 | 2 | 16 | "none" | 3 | 4 | 6 | 8 | 12 | 20;
    width?: "auto" | "full" | "fit" | "screen";
    height?: "auto" | "full" | "fit" | "screen";
    shadow?: "sm" | "md" | "lg" | "none" | "default" | "xl" | "2xl" | "inner" | "outline";
    display?: "grid" | "inline" | "block" | "inline-block" | "flex" | "inline-flex";
    background?: "primary" | "secondary" | "none" | "default" | "subtle" | "card";
} & import("class-variance-authority/types").ClassProp) => string;
type SectionVariantProps = VariantProps<typeof sectionVariants>;
export interface SectionProps extends React.HTMLAttributes<HTMLElement>, Omit<SectionVariantProps, 'paddingY' | 'padding' | 'margin'> {
    as?: React.ElementType;
    children?: React.ReactNode;
    paddingY?: 6 | 8 | 12 | 16 | 20;
    p?: VariantProps<typeof sectionVariants>['p'];
    px?: VariantProps<typeof sectionVariants>['px'];
    py?: VariantProps<typeof sectionVariants>['py'];
    m?: VariantProps<typeof sectionVariants>['m'];
    mx?: VariantProps<typeof sectionVariants>['mx'];
    my?: VariantProps<typeof sectionVariants>['my'];
    width?: VariantProps<typeof sectionVariants>['width'];
    height?: VariantProps<typeof sectionVariants>['height'];
    shadow?: VariantProps<typeof sectionVariants>['shadow'];
    display?: VariantProps<typeof sectionVariants>['display'];
}
export declare const Section: React.ForwardRefExoticComponent<SectionProps & React.RefAttributes<HTMLElement>>;
export {};

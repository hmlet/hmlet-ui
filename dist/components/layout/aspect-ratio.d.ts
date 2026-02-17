import React from 'react';
import { type VariantProps } from './cva';
/**
 * AspectRatio - Fixed aspect ratio container
 *
 * Maintains a fixed width-to-height ratio regardless of content.
 * Essential for images, videos, and media content.
 *
 * @example
 * <AspectRatio ratio="16/9">
 *   <img src="..." alt="..." className="object-cover w-full h-full" />
 * </AspectRatio>
 */
declare const aspectRatioVariants: (props?: {
    ratio?: "1/1" | "4/3" | "16/9" | "21/9" | "3/4" | "9/16";
} & import("class-variance-authority/types").ClassProp) => string;
export interface LayoutAspectRatioProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof aspectRatioVariants> {
    as?: React.ElementType;
    children?: React.ReactNode;
}
export declare const LayoutAspectRatio: React.ForwardRefExoticComponent<LayoutAspectRatioProps & React.RefAttributes<HTMLDivElement>>;
export type LayoutAspectRatioVariants = VariantProps<typeof aspectRatioVariants>;
export { aspectRatioVariants };

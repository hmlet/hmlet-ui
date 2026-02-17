import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { type VariantProps } from './cva';
declare const segmentControlVariants: (props?: {
    variant?: "primary" | "secondary" | "neutral";
} & import("class-variance-authority/types").ClassProp) => string;
declare const segmentItemVariants: (props?: {
    variant?: "primary" | "secondary" | "neutral";
} & import("class-variance-authority/types").ClassProp) => string;
interface SegmentControlProps extends React.ComponentProps<typeof TabsPrimitive.Root>, VariantProps<typeof segmentControlVariants> {
    children: React.ReactNode;
}
interface SegmentControlListProps extends React.ComponentProps<typeof TabsPrimitive.List>, VariantProps<typeof segmentControlVariants> {
}
interface SegmentControlItemProps extends React.ComponentProps<typeof TabsPrimitive.Trigger>, VariantProps<typeof segmentItemVariants> {
}
declare const SegmentControl: React.ForwardRefExoticComponent<Omit<SegmentControlProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const SegmentControlList: React.ForwardRefExoticComponent<Omit<SegmentControlListProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const SegmentControlItem: React.ForwardRefExoticComponent<Omit<SegmentControlItemProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const SegmentControlContent: React.ForwardRefExoticComponent<TabsPrimitive.TabsContentProps & React.RefAttributes<HTMLDivElement>>;
export type SegmentControlVariants = VariantProps<typeof segmentControlVariants>;
export type SegmentItemVariants = VariantProps<typeof segmentItemVariants>;
export { SegmentControl, SegmentControlList, SegmentControlItem, SegmentControlContent, segmentControlVariants, segmentItemVariants, };

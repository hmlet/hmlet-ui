import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { type VariantProps } from './cva';
declare function Tabs({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Root>): import("react/jsx-runtime").JSX.Element;
declare const tabsListVariants: (props?: {
    variant?: "primary" | "secondary" | "default" | "outline";
} & import("class-variance-authority/types").ClassProp) => string;
interface TabsListProps extends React.ComponentProps<typeof TabsPrimitive.List>, VariantProps<typeof tabsListVariants> {
}
declare const TabsList: React.ForwardRefExoticComponent<Omit<TabsListProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const tabsTriggerVariants: (props?: {
    variant?: "primary" | "secondary" | "default";
} & import("class-variance-authority/types").ClassProp) => string;
interface TabsTriggerProps extends React.ComponentProps<typeof TabsPrimitive.Trigger>, VariantProps<typeof tabsTriggerVariants> {
}
declare const TabsTrigger: React.ForwardRefExoticComponent<Omit<TabsTriggerProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare function TabsContent({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Content>): import("react/jsx-runtime").JSX.Element;
export type TabsListVariants = VariantProps<typeof tabsListVariants>;
export type TabsTriggerVariants = VariantProps<typeof tabsTriggerVariants>;
export { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants, tabsTriggerVariants, };

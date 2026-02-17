import * as React from 'react';
import { type VariantProps } from './cva';
import { Separator } from './separator';
declare const itemVariants: (props?: {
    variant?: "default" | "muted" | "outline";
    size?: "sm" | "default";
} & import("class-variance-authority/types").ClassProp) => string;
type ItemVariantProps = VariantProps<typeof itemVariants>;
interface ItemProps extends React.ComponentProps<'div'>, ItemVariantProps {
    asChild?: boolean;
}
declare const Item: React.ForwardRefExoticComponent<Omit<ItemProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare function ItemGroup({ className, ...props }: React.ComponentProps<'div'>): import("react/jsx-runtime").JSX.Element;
declare function ItemSeparator({ className, ...props }: React.ComponentProps<typeof Separator>): import("react/jsx-runtime").JSX.Element;
declare const itemMediaVariants: (props?: {
    variant?: "image" | "default" | "icon";
} & import("class-variance-authority/types").ClassProp) => string;
interface ItemMediaProps extends React.ComponentProps<'div'>, VariantProps<typeof itemMediaVariants> {
}
declare const ItemMedia: React.ForwardRefExoticComponent<Omit<ItemMediaProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const ItemContent: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const ItemTitle: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const ItemDescription: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, "ref"> & React.RefAttributes<HTMLParagraphElement>>;
declare const ItemActions: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const ItemHeader: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const ItemFooter: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export type ItemVariants = VariantProps<typeof itemVariants>;
export type ItemMediaVariants = VariantProps<typeof itemMediaVariants>;
export { Item, ItemGroup, ItemSeparator, ItemMedia, ItemContent, ItemTitle, ItemDescription, ItemActions, ItemHeader, ItemFooter, itemVariants, itemMediaVariants, };

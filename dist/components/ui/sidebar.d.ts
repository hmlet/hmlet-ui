import * as React from 'react';
import { type VariantProps } from './cva';
import { Button } from './button';
import { Input } from './input';
import { Separator } from './separator';
import { TooltipContent } from './tooltip';
type SidebarContextProps = {
    state: 'expanded' | 'collapsed';
    open: boolean;
    setOpen: (open: boolean) => void;
    openMobile: boolean;
    setOpenMobile: (open: boolean) => void;
    isMobile: boolean;
    toggleSidebar: () => void;
};
declare function useSidebar(): SidebarContextProps;
declare function SidebarProvider({ defaultOpen, open: openProp, onOpenChange: setOpenProp, className, style, children, ...props }: React.ComponentProps<'div'> & {
    defaultOpen?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}): import("react/jsx-runtime").JSX.Element;
import type { WithNumberish } from '../layout/types';
export interface SidebarBoxProps {
    p?: WithNumberish<1 | 2 | 3 | 4 | 6 | 8 | 12 | 16 | 20 | 'none'>;
    px?: WithNumberish<1 | 2 | 3 | 4 | 6 | 8 | 12 | 16 | 20 | 'none'>;
    py?: WithNumberish<1 | 2 | 3 | 4 | 6 | 8 | 12 | 16 | 20 | 'none'>;
    m?: WithNumberish<1 | 2 | 3 | 4 | 6 | 8 | 12 | 16 | 20 | 'none'>;
    mx?: WithNumberish<1 | 2 | 3 | 4 | 6 | 8 | 12 | 16 | 20 | 'none'>;
    my?: WithNumberish<1 | 2 | 3 | 4 | 6 | 8 | 12 | 16 | 20 | 'none'>;
    shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'inner' | 'outline' | 'default';
    w?: 'auto' | 'full' | 'fit' | 'screen';
    h?: 'auto' | 'full' | 'fit' | 'screen';
    display?: 'block' | 'inline' | 'inline-block' | 'flex' | 'inline-flex' | 'grid';
}
declare function Sidebar({ side, variant, collapsible, className, children, p, px, py, m, mx, my, shadow, w, h, display, ...props }: React.ComponentProps<'div'> & {
    side?: 'left' | 'right';
    variant?: 'sidebar' | 'floating' | 'inset';
    collapsible?: 'offcanvas' | 'icon' | 'none';
} & SidebarBoxProps): import("react/jsx-runtime").JSX.Element;
declare function SidebarTrigger({ className, p, px, py, m, mx, my, shadow, w, h, display, onClick, ...props }: React.ComponentProps<typeof Button> & SidebarBoxProps): import("react/jsx-runtime").JSX.Element;
declare function SidebarRail({ className, p, px, py, m, mx, my, shadow, w, h, display, ...props }: React.ComponentProps<'button'> & SidebarBoxProps): import("react/jsx-runtime").JSX.Element;
declare function SidebarInset({ className, p, px, py, m, mx, my, shadow, w, h, display, ...props }: React.ComponentProps<'main'> & SidebarBoxProps): import("react/jsx-runtime").JSX.Element;
declare function SidebarInput({ className, p, px, py, m, mx, my, shadow, w, h, display, ...props }: React.ComponentProps<typeof Input> & SidebarBoxProps): import("react/jsx-runtime").JSX.Element;
declare function SidebarHeader({ className, p, px, py, m, mx, my, shadow, w, h, display, ...props }: React.ComponentProps<'div'> & SidebarBoxProps): import("react/jsx-runtime").JSX.Element;
declare function SidebarFooter({ className, p, px, py, m, mx, my, shadow, w, h, display, ...props }: React.ComponentProps<'div'> & SidebarBoxProps): import("react/jsx-runtime").JSX.Element;
declare function SidebarSeparator({ className, ...props }: React.ComponentProps<typeof Separator>): import("react/jsx-runtime").JSX.Element;
declare function SidebarContent({ className, ...props }: React.ComponentProps<'div'>): import("react/jsx-runtime").JSX.Element;
declare function SidebarGroup({ className, ...props }: React.ComponentProps<'div'>): import("react/jsx-runtime").JSX.Element;
declare function SidebarGroupLabel({ className, asChild, ...props }: React.ComponentProps<'div'> & {
    asChild?: boolean;
}): import("react/jsx-runtime").JSX.Element;
declare function SidebarGroupAction({ className, asChild, ...props }: React.ComponentProps<'button'> & {
    asChild?: boolean;
}): import("react/jsx-runtime").JSX.Element;
declare function SidebarGroupContent({ className, ...props }: React.ComponentProps<'div'>): import("react/jsx-runtime").JSX.Element;
declare function SidebarMenu({ className, ...props }: React.ComponentProps<'ul'>): import("react/jsx-runtime").JSX.Element;
declare function SidebarMenuItem({ className, ...props }: React.ComponentProps<'li'>): import("react/jsx-runtime").JSX.Element;
declare const sidebarMenuButtonVariants: (props?: {
    variant?: "default" | "outline";
    size?: "sm" | "lg" | "default";
} & import("class-variance-authority/types").ClassProp) => string;
declare function SidebarMenuButton({ asChild, isActive, variant, size, tooltip, className, ...props }: React.ComponentProps<'button'> & {
    asChild?: boolean;
    isActive?: boolean;
    tooltip?: string | React.ComponentProps<typeof TooltipContent>;
} & VariantProps<typeof sidebarMenuButtonVariants>): import("react/jsx-runtime").JSX.Element;
declare function SidebarMenuAction({ className, asChild, showOnHover, ...props }: React.ComponentProps<'button'> & {
    asChild?: boolean;
    showOnHover?: boolean;
}): import("react/jsx-runtime").JSX.Element;
declare function SidebarMenuBadge({ className, ...props }: React.ComponentProps<'div'>): import("react/jsx-runtime").JSX.Element;
declare function SidebarMenuSkeleton({ className, showIcon, ...props }: React.ComponentProps<'div'> & {
    showIcon?: boolean;
}): import("react/jsx-runtime").JSX.Element;
declare function SidebarMenuSub({ className, ...props }: React.ComponentProps<'ul'>): import("react/jsx-runtime").JSX.Element;
declare function SidebarMenuSubItem({ className, ...props }: React.ComponentProps<'li'>): import("react/jsx-runtime").JSX.Element;
declare function SidebarMenuSubButton({ asChild, size, isActive, className, ...props }: React.ComponentProps<'a'> & {
    asChild?: boolean;
    size?: 'sm' | 'md';
    isActive?: boolean;
}): import("react/jsx-runtime").JSX.Element;
export type SidebarMenuButtonVariants = VariantProps<typeof sidebarMenuButtonVariants>;
export { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarInput, SidebarInset, SidebarMenu, SidebarMenuAction, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarMenuSkeleton, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarProvider, SidebarRail, SidebarSeparator, SidebarTrigger, useSidebar, sidebarMenuButtonVariants, };

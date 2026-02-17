import * as React from 'react';
type EmptyProps = React.HTMLAttributes<HTMLDivElement>;
declare const Empty: React.ForwardRefExoticComponent<EmptyProps & React.RefAttributes<HTMLDivElement>>;
type EmptyHeaderProps = React.HTMLAttributes<HTMLDivElement>;
declare const EmptyHeader: React.ForwardRefExoticComponent<EmptyHeaderProps & React.RefAttributes<HTMLDivElement>>;
type EmptyMediaVariant = 'default' | 'icon';
interface EmptyMediaProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: EmptyMediaVariant;
}
declare const EmptyMedia: React.ForwardRefExoticComponent<EmptyMediaProps & React.RefAttributes<HTMLDivElement>>;
interface EmptyTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode;
}
declare const EmptyTitle: React.ForwardRefExoticComponent<EmptyTitleProps & React.RefAttributes<HTMLHeadingElement>>;
interface EmptyDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
    children: React.ReactNode;
}
declare const EmptyDescription: React.ForwardRefExoticComponent<EmptyDescriptionProps & React.RefAttributes<HTMLParagraphElement>>;
type EmptyContentProps = React.HTMLAttributes<HTMLDivElement>;
declare const EmptyContent: React.ForwardRefExoticComponent<EmptyContentProps & React.RefAttributes<HTMLDivElement>>;
declare const EmptyIcon: React.ForwardRefExoticComponent<EmptyMediaProps & React.RefAttributes<HTMLDivElement>>;
declare const EmptyActions: React.ForwardRefExoticComponent<EmptyContentProps & React.RefAttributes<HTMLDivElement>>;
export { Empty, EmptyHeader, EmptyMedia, EmptyTitle, EmptyDescription, EmptyContent, EmptyIcon, EmptyActions, };

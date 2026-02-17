export type LucideIcon = React.ComponentType<{
    className?: string;
    size?: number;
    color?: string;
}>;
export type IconProps = {
    icon: LucideIcon;
    size?: number;
    className?: string;
    color?: string;
    onClick?: () => void;
};
export declare function Icon({ icon: IconComp, size, className, color, onClick, }: IconProps): import("react/jsx-runtime").JSX.Element;

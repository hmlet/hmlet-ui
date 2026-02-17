/**
 * Hook to apply theme from localStorage on initial load, before ThemeToggle is mounted.
 * Call this in your app root or layout to ensure theme is set early.
 */
export declare function useApplyTheme(): void;
type IconComponent = React.ComponentType<{
    className?: string;
    size?: number;
}>;
export type ThemeToggleProps = {
    LightIcon?: IconComponent;
    DarkIcon?: IconComponent;
    srText?: string;
    iconSize?: number;
    className?: string;
    iconClassName?: string;
};
export declare function ThemeToggle({ LightIcon, DarkIcon, srText, iconSize, className, iconClassName, }: ThemeToggleProps): import("react/jsx-runtime").JSX.Element;
export {};

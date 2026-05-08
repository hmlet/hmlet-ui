import { type ReactNode } from 'react';
export declare const themeColorTokens: readonly ["background", "foreground", "card", "card-foreground", "popover", "popover-foreground", "primary", "primary-foreground", "primary-dark", "primary-light", "primary-lighter", "primary-lightest", "secondary", "secondary-foreground", "secondary-dark", "secondary-light", "secondary-lighter", "secondary-lightest", "neutral-100", "neutral-200", "neutral-300", "neutral-400", "neutral-500", "neutral-600", "neutral-700", "neutral-800", "neutral-900", "neutral-1000", "muted", "muted-foreground", "accent", "accent-foreground", "accent-hover", "destructive", "destructive-foreground", "destructive-light", "destructive-lighter", "destructive-lightest", "destructive-dark", "success", "success-foreground", "success-light", "success-lighter", "success-lightest", "success-dark", "error", "error-foreground", "warning", "warning-foreground", "info", "info-foreground", "info-light", "info-dark", "red", "red-dark", "ivory", "ivory-dark", "border", "input", "input-background", "switch-background", "ring", "chart-1", "chart-2", "chart-3", "chart-4", "chart-5", "sidebar", "sidebar-foreground", "sidebar-primary", "sidebar-primary-foreground", "sidebar-accent", "sidebar-accent-foreground", "sidebar-border", "sidebar-ring"];
export type ThemeColorToken = (typeof themeColorTokens)[number];
export type ThemeColors = Record<ThemeColorToken, string>;
export type ThemeMode = 'light' | 'dark' | 'system';
export type ResolvedThemeMode = Exclude<ThemeMode, 'system'>;
export declare function defineThemeColors(colors: ThemeColors): ThemeColors;
export declare const defaultLightThemeColors: ThemeColors;
export declare const defaultDarkThemeColors: ThemeColors;
export type ThemeProviderProps = {
    children: ReactNode;
    lightColors: ThemeColors;
    darkColors: ThemeColors;
    mode?: ThemeMode;
    defaultMode?: ThemeMode;
    storageKey?: string;
    onModeChange?: (mode: ThemeMode) => void;
};
type ThemeContextValue = {
    mode: ThemeMode;
    resolvedMode: ResolvedThemeMode;
    setMode: (mode: ThemeMode) => void;
};
export declare const DEFAULT_THEME_STORAGE_KEY = "theme";
export declare function ThemeProvider({ children, lightColors, darkColors, mode, defaultMode, storageKey, onModeChange, }: ThemeProviderProps): import("react/jsx-runtime").JSX.Element;
export declare function useTheme(): ThemeContextValue;
export {};

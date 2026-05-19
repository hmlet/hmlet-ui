import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

export const themeColorTokens = [
  'background',
  'foreground',
  'card',
  'card-foreground',
  'popover',
  'popover-foreground',
  'primary',
  'primary-foreground',
  'primary-dark',
  'primary-light',
  'primary-lighter',
  'primary-lightest',
  'secondary',
  'secondary-foreground',
  'secondary-dark',
  'secondary-light',
  'secondary-lighter',
  'secondary-lightest',
  'neutral-100',
  'neutral-200',
  'neutral-300',
  'neutral-400',
  'neutral-500',
  'neutral-600',
  'neutral-700',
  'neutral-800',
  'neutral-900',
  'neutral-1000',
  'muted',
  'muted-foreground',
  'accent',
  'accent-foreground',
  'accent-hover',
  'destructive',
  'destructive-foreground',
  'destructive-light',
  'destructive-lighter',
  'destructive-lightest',
  'destructive-dark',
  'success',
  'success-foreground',
  'success-light',
  'success-lighter',
  'success-lightest',
  'success-dark',
  'error',
  'error-foreground',
  'warning',
  'warning-foreground',
  'info',
  'info-foreground',
  'info-light',
  'info-dark',
  'red',
  'red-dark',
  'ivory',
  'ivory-dark',
  'border',
  'input',
  'input-background',
  'switch-background',
  'ring',
  'chart-1',
  'chart-2',
  'chart-3',
  'chart-4',
  'chart-5',
  'sidebar',
  'sidebar-foreground',
  'sidebar-primary',
  'sidebar-primary-foreground',
  'sidebar-accent',
  'sidebar-accent-foreground',
  'sidebar-border',
  'sidebar-ring',
] as const

export type ThemeColorToken = (typeof themeColorTokens)[number]
export type ThemeColors = Record<ThemeColorToken, string>
export type ThemeMode = 'light' | 'dark' | 'system'
export type ResolvedThemeMode = Exclude<ThemeMode, 'system'>

export function defineThemeColors(colors: ThemeColors): ThemeColors {
  return colors
}

export const defaultLightThemeColors = defineThemeColors({
  background: '#fcfbf9',
  foreground: '#000000',
  card: '#ffffff',
  'card-foreground': '#000000',
  popover: '#ffffff',
  'popover-foreground': '#000000',
  primary: '#251f42',
  'primary-foreground': '#ffffff',
  'primary-dark': '#1f1c32',
  'primary-light': '#767091',
  'primary-lighter': '#cecae0',
  'primary-lightest': '#f1f0f5',
  secondary: '#ff7960',
  'secondary-foreground': '#ffffff',
  'secondary-dark': '#8a4d58',
  'secondary-light': '#ffb2a3',
  'secondary-lighter': '#ffe1db',
  'secondary-lightest': '#fff0ed',
  'neutral-100': '#ffffff',
  'neutral-200': '#f2f2f2',
  'neutral-300': '#cccccc',
  'neutral-400': '#b3b3b3',
  'neutral-500': '#999999',
  'neutral-600': '#7f7f7f',
  'neutral-700': '#505050',
  'neutral-800': '#262626',
  'neutral-900': '#1a1a1a',
  'neutral-1000': '#000000',
  muted: '#f2f2f2',
  'muted-foreground': '#505050',
  accent: '#ff7960',
  'accent-foreground': '#ffffff',
  'accent-hover': '#8a4d58',
  destructive: '#d17171',
  'destructive-foreground': '#ffffff',
  'destructive-light': '#d99898',
  'destructive-lighter': '#e3cccc',
  'destructive-lightest': '#f7f0f0',
  'destructive-dark': '#c24f4f',
  success: '#02b16b',
  'success-foreground': '#ffffff',
  'success-light': '#70d4ac',
  'success-lighter': '#bee8d7',
  'success-lightest': '#e6f7f0',
  'success-dark': '#1e6942',
  error: '#d17171',
  'error-foreground': '#ffffff',
  warning: '#ffb2a3',
  'warning-foreground': '#1a1a1a',
  info: '#cecae0',
  'info-foreground': '#1f1c32',
  'info-light': '#f1f0f5',
  'info-dark': '#251f42',
  red: '#f0d8cc',
  'red-dark': '#8a4d58',
  ivory: '#fcfbf9',
  'ivory-dark': '#faf5f0',
  border: '#cccccc',
  input: '#cccccc',
  'input-background': '#ffffff',
  'switch-background': '#b3b3b3',
  ring: '#251f42',
  'chart-1': '#251f42',
  'chart-2': '#ff7960',
  'chart-3': '#02b16b',
  'chart-4': '#d17171',
  'chart-5': '#767091',
  sidebar: '#ffffff',
  'sidebar-foreground': '#000000',
  'sidebar-primary': '#251f42',
  'sidebar-primary-foreground': '#ffffff',
  'sidebar-accent': '#f1f0f5',
  'sidebar-accent-foreground': '#000000',
  'sidebar-border': '#cccccc',
  'sidebar-ring': '#251f42',
})

export const defaultDarkThemeColors = defineThemeColors({
  ...defaultLightThemeColors,
  background: '#111111',
  foreground: '#eaeaea',
  card: '#1a1a1a',
  'card-foreground': '#eaeaea',
  popover: '#222222',
  'popover-foreground': '#eaeaea',
  primary: '#eaeaea',
  'primary-foreground': '#111111',
  'primary-dark': '#d4d4d4',
  'primary-light': '#ffffff',
  'primary-lighter': '#3a3a3a',
  'primary-lightest': '#1a1a1a',
  'secondary-dark': '#e5614a',
  'secondary-lighter': '#3d1f1a',
  'secondary-lightest': '#1f1210',
  muted: '#1a1a1a',
  'muted-foreground': '#a0a0a0',
  'accent-hover': '#ffb2a3',
  destructive: '#ef4444',
  'destructive-light': '#f87171',
  'destructive-lighter': '#3d1717',
  'destructive-lightest': '#1f0f0f',
  'destructive-dark': '#dc2626',
  success: '#22c55e',
  'success-foreground': '#111111',
  'success-light': '#4ade80',
  'success-lighter': '#14301f',
  'success-lightest': '#0f1f14',
  'success-dark': '#16a34a',
  error: '#ef4444',
  warning: '#fbbf24',
  'warning-foreground': '#111111',
  info: '#60a5fa',
  'info-foreground': '#111111',
  'info-light': '#93c5fd',
  'info-dark': '#3b82f6',
  border: '#2a2a2a',
  input: '#2a2a2a',
  'input-background': '#1a1a1a',
  'switch-background': '#3a3a3a',
  ring: '#ff7960',
  'chart-1': '#eaeaea',
  'chart-3': '#22c55e',
  'chart-4': '#ef4444',
  'chart-5': '#a0a0a0',
  sidebar: '#111111',
  'sidebar-foreground': '#eaeaea',
  'sidebar-primary': '#ff7960',
  'sidebar-accent': '#1a1a1a',
  'sidebar-accent-foreground': '#eaeaea',
  'sidebar-border': '#2a2a2a',
  'sidebar-ring': '#ff7960',
})

export type ThemeProviderProps = {
  children: ReactNode
  lightColors?: ThemeColors
  darkColors?: ThemeColors
  mode?: ThemeMode
  defaultMode?: ThemeMode
  storageKey?: string
  onModeChange?: (mode: ThemeMode) => void
}

type ThemeContextValue = {
  mode: ThemeMode
  resolvedMode: ResolvedThemeMode
  setMode: (mode: ThemeMode) => void
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

export const DEFAULT_THEME_STORAGE_KEY = 'theme'

function getStoredMode(storageKey: string): ThemeMode | null {
  if (typeof window === 'undefined') {
    return null
  }

  const value = localStorage.getItem(storageKey)
  if (value === 'light' || value === 'dark' || value === 'system') {
    return value
  }

  return null
}

export function ThemeProvider({
  children,
  lightColors,
  darkColors,
  mode,
  defaultMode = 'system',
  storageKey = DEFAULT_THEME_STORAGE_KEY,
  onModeChange,
}: ThemeProviderProps) {
  const safeLightColors = lightColors ?? defaultLightThemeColors
  const safeDarkColors = darkColors ?? defaultDarkThemeColors

  const [internalMode, setInternalMode] = useState<ThemeMode>(() => {
    return getStoredMode(storageKey) ?? defaultMode
  })
  const [systemPrefersDark, setSystemPrefersDark] = useState(false)

  const isControlled = mode !== undefined
  const selectedMode = isControlled ? mode : internalMode

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const updateFromMedia = () => setSystemPrefersDark(mediaQuery.matches)

    updateFromMedia()
    mediaQuery.addEventListener('change', updateFromMedia)

    return () => {
      mediaQuery.removeEventListener('change', updateFromMedia)
    }
  }, [])

  const resolvedMode: ResolvedThemeMode =
    selectedMode === 'system'
      ? systemPrefersDark
        ? 'dark'
        : 'light'
      : selectedMode

  useEffect(() => {
    if (typeof document === 'undefined') {
      return
    }

    const root = document.documentElement
    const activeColors =
      resolvedMode === 'dark' ? safeDarkColors : safeLightColors

    for (const token of themeColorTokens) {
      root.style.setProperty(`--${token}`, activeColors[token])
    }

    root.classList.toggle('dark', resolvedMode === 'dark')
  }, [resolvedMode, safeDarkColors, safeLightColors])

  useEffect(() => {
    if (isControlled || typeof window === 'undefined') {
      return
    }

    localStorage.setItem(storageKey, internalMode)
  }, [internalMode, isControlled, storageKey])

  const setMode = useCallback(
    (nextMode: ThemeMode) => {
      if (!isControlled) {
        setInternalMode(nextMode)
      }

      onModeChange?.(nextMode)
    },
    [isControlled, onModeChange],
  )

  const contextValue = useMemo<ThemeContextValue>(() => {
    return {
      mode: selectedMode,
      resolvedMode,
      setMode,
    }
  }, [resolvedMode, selectedMode, setMode])

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  return context
}

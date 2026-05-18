import {Moon, Sun} from 'lucide-react'
import {useEffect} from 'react'

import {DEFAULT_THEME_STORAGE_KEY, useTheme} from '../theme/ThemeProvider'
import {Button} from './ui/button'

type IconComponent = React.ComponentType<{className?: string; size?: number}>

export type ThemeToggleProps = {
  LightIcon?: IconComponent
  DarkIcon?: IconComponent
  srText?: string
  iconSize?: number
  className?: string
  iconClassName?: string
}

/**
 * Hook to apply theme from localStorage on initial load, before ThemeProvider mounts.
 * Call this in your app root or layout to ensure theme is set early.
 */
export function useApplyTheme() {
  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const stored = localStorage.getItem(DEFAULT_THEME_STORAGE_KEY)
    const root = document.documentElement

    if (stored === 'dark') {
      root.classList.add('dark')
      return
    }

    if (stored === 'light') {
      root.classList.remove('dark')
      return
    }

    root.classList.toggle(
      'dark',
      window.matchMedia('(prefers-color-scheme: dark)').matches,
    )
  }, [])
}

export function ThemeToggle({
  LightIcon = Moon,
  DarkIcon = Sun,
  srText,
  iconSize = 20,
  className = '',
  iconClassName = '',
}: ThemeToggleProps) {
  const {resolvedMode, setMode} = useTheme()
  const isDark = resolvedMode === 'dark'

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setMode(isDark ? 'light' : 'dark')}
      className={`rounded-full ${className}`}
    >
      {isDark ? (
        <DarkIcon size={iconSize} className={iconClassName} />
      ) : (
        <LightIcon size={iconSize} className={iconClassName} />
      )}
      {srText ? <span className="sr-only">{srText}</span> : null}
    </Button>
  )
}

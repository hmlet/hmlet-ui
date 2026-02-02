/**
 * Hook to apply theme from localStorage on initial load, before ThemeToggle is mounted.
 * Call this in your app root or layout to ensure theme is set early.
 */
export function useApplyTheme() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme')
      const root = document.documentElement
      if (stored === 'dark') {
        root.classList.add('dark')
      } else {
        root.classList.remove('dark')
      }
    }
  }, [])
}
import {Moon, Sun} from 'lucide-react'
import {Button} from './ui/button'
import {useEffect, useState} from 'react'

type IconComponent = React.ComponentType<{className?: string; size?: number}>

export type ThemeToggleProps = {
  LightIcon?: IconComponent
  DarkIcon?: IconComponent
  srText?: string
  iconSize?: number
  className?: string
  iconClassName?: string
}

export function ThemeToggle({
  LightIcon = Moon,
  DarkIcon = Sun,
  srText,
  iconSize = 20,
  className = '',
  iconClassName = '',
}: ThemeToggleProps) {
  // Initialize theme from localStorage, default to light (isDark = false)
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme')
      if (stored === 'dark') return true
      if (stored === 'light') return false
    }
    return false
  })

  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setIsDark(!isDark)}
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

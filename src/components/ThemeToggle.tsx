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
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
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

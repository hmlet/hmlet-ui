import {Moon, Sun} from 'lucide-react'
import {Button} from './ui/button'
import {useEffect, useState} from 'react'

type IconComponent = React.ComponentType<{className?: string}>

export type ThemeToggleProps = {
  LightIcon?: IconComponent
  DarkIcon?: IconComponent
  srText?: string
  iconSize?: number | string
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
  // Generate Tailwind class for icon size
  const iconSizeClass =
    typeof iconSize === 'number'
      ? `h-[${iconSize}px] w-[${iconSize}px]`
      : `h-[${iconSize}] w-[${iconSize}]`
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
        <DarkIcon className={`${iconSizeClass} ${iconClassName}`} />
      ) : (
        <LightIcon className={`${iconSizeClass} ${iconClassName}`} />
      )}
      {srText ? <span className="sr-only">{srText}</span> : null}
    </Button>
  )
}

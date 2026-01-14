import {Moon, Sun} from 'lucide-react'
import {Button} from './ui/button'
import {useEffect, useState} from 'react'

type IconComponent = React.ComponentType<{className?: string}>

export type ThemeToggleProps = {
  LightIcon?: IconComponent
  DarkIcon?: IconComponent
  srText?: string
}

export function ThemeToggle({
  LightIcon = Moon,
  DarkIcon = Sun,
  srText,
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
      className="rounded-full"
    >
      {isDark ? (
        <DarkIcon className="h-5 w-5" />
      ) : (
        <LightIcon className="h-5 w-5" />
      )}
      {srText ? <span className="sr-only">{srText}</span> : null}
    </Button>
  )
}

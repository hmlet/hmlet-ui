export type LucideIcon = React.ComponentType<{
  className?: string
  size?: number
  color?: string
}>

export type IconProps = {
  icon: LucideIcon
  size?: number
  className?: string
  color?: string
  onClick?: () => void
}

// Uses theme foreground color if no color is provided
export function Icon({
  icon: IconComp,
  size = 20,
  className = '',
  color,
  onClick,
}: IconProps) {
  // Use CSS variable for theme foreground
  const iconColor = color || 'var(--foreground)'
  // If onClick is provided, make icon focusable and clickable
  if (onClick) {
    return (
      <span
        role="button"
        tabIndex={0}
        style={{display: 'inline-flex'}}
        className={className}
        onClick={onClick}
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') {
            onClick()
          }
        }}
      >
        <IconComp size={size} color={iconColor} />
      </span>
    )
  }
  return <IconComp size={size} className={className} color={iconColor} />
}

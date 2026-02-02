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
}

// Uses theme foreground color if no color is provided
export function Icon({
  icon: IconComp,
  size = 20,
  className = '',
  color,
}: IconProps) {
  // Use CSS variable for theme foreground
  const iconColor = color || 'var(--foreground)'
  return <IconComp size={size} className={className} color={iconColor} />
}

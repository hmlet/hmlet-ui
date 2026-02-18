import React from 'react'
import {Box} from '../layout'

/**
 * Chip Component
 *
 * A versatile chip/tag component with multiple variants, sizes, and states.
 * Designed for status indicators, labels, categories, and interactive tags.
 *
 * Features:
 * - 18 pre-built variants (semantic, theme, and status-based)
 * - 4 sizes (xs, sm, md, lg)
 * - Clickable and deletable variants
 * - Full dark/light mode support with proper contrast
 * - Uppercase text with letter spacing for better readability
 * - Smooth hover transitions
 *
 * @example
 * ```tsx
 * // Basic usage
 * <Chip label="Success" variant="success" />
 *
 * // With size
 * <Chip label="Active" variant="active" size="sm" />
 *
 * // Clickable
 * <Chip label="Click me" variant="primary" onClick={() => alert('Clicked!')} />
 *
 * // Deletable
 * <Chip label="Remove me" variant="warning" onDelete={() => handleDelete()} />
 * ```
 */

export interface ChipProps {
  label: string
  variant?:
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'default'
    | 'primary'
    | 'secondary'
    | 'neutral'
    | 'active'
    | 'inactive'
    | 'pending'
    | 'approved'
    | 'rejected'
    | 'cancelled'
    | 'completed'
    | 'processing'
    | 'draft'
    | 'urgent'
  size?: 'xs' | 'sm' | 'md' | 'lg'
  className?: string
  onDelete?: () => void
  onClick?: () => void
}

export function Chip({
  label,
  variant = 'default',
  size = 'md',
  className = '',
  onDelete,
  onClick,
}: ChipProps) {
  // Size styles
  const sizeStyles = {
    xs: 'px-2 py-0.5 h-4 min-w-[2rem]',
    sm: 'px-2.5 py-1 h-5 min-w-[3rem]',
    md: 'px-3 py-1.5 h-6 min-w-[4rem]',
    lg: 'px-4 py-2 h-8 min-w-[5rem]',
  }

  // Text size styles
  const textSizeStyles = {
    xs: 'text-[10px]',
    sm: 'text-[11px]',
    md: 'text-body-xs',
    lg: 'text-body-sm',
  }

  // Variant styles with proper contrast for light and dark modes
  const variantStyles = {
    // Semantic variants
    success:
      'bg-success-lightest text-success-dark dark:bg-success-dark dark:text-success-lightest border border-success-lighter dark:border-success',
    danger:
      'bg-destructive-lightest text-destructive-dark dark:bg-destructive-dark dark:text-destructive-lightest border border-destructive-lighter dark:border-destructive',
    warning:
      'bg-secondary-lightest text-secondary-dark dark:bg-secondary-dark/80 dark:text-secondary-lightest border border-secondary-lighter dark:border-secondary-light',
    info: 'bg-primary-lightest text-primary-dark dark:bg-primary-dark dark:text-primary-lightest border border-primary-lighter dark:border-primary-light',

    // Theme variants
    primary:
      'bg-primary text-primary-foreground dark:bg-primary dark:text-primary-foreground border border-primary-dark',
    secondary:
      'bg-secondary-lighter text-secondary-dark dark:bg-secondary-dark dark:text-secondary-lighter border border-secondary-light dark:border-secondary',
    default:
      'bg-muted text-muted-foreground dark:bg-muted dark:text-muted-foreground border border-border',
    neutral:
      'bg-muted text-muted-foreground dark:bg-muted dark:text-foreground/80 border border-border',

    // Status variants
    active:
      'bg-success-lightest text-success-dark dark:bg-success-dark dark:text-success-lightest border border-success-lighter dark:border-success',
    inactive:
      'bg-muted text-muted-foreground dark:bg-muted dark:text-muted-foreground border border-border',
    pending:
      'bg-secondary-lightest text-secondary-dark dark:bg-secondary-dark/80 dark:text-secondary-lightest border border-secondary-lighter dark:border-secondary-light',
    approved:
      'bg-success-lightest text-success-dark dark:bg-success-dark dark:text-success-lightest border border-success-lighter dark:border-success',
    rejected:
      'bg-destructive-lightest text-destructive-dark dark:bg-destructive-dark dark:text-destructive-lightest border border-destructive-lighter dark:border-destructive',
    cancelled:
      'bg-destructive-lightest text-destructive-dark dark:bg-destructive-dark dark:text-destructive-lightest border border-destructive-lighter dark:border-destructive',
    completed:
      'bg-success-lightest text-success-dark dark:bg-success-dark dark:text-success-lightest border border-success-lighter dark:border-success',
    processing:
      'bg-primary-lightest text-primary-dark dark:bg-primary-dark dark:text-primary-lightest border border-primary-lighter dark:border-primary-light',
    draft:
      'bg-muted text-muted-foreground dark:bg-muted dark:text-foreground/80 border border-border',
    urgent:
      'bg-destructive-lightest text-destructive-dark dark:bg-destructive-dark dark:text-destructive-lightest border border-destructive dark:border-destructive font-semibold',
  }

  const baseStyles =
    'inline-flex items-center justify-center rounded-md font-medium uppercase tracking-wider transition-colors whitespace-nowrap'
  const interactiveStyles =
    onClick || onDelete ? 'cursor-pointer hover:opacity-80' : ''

  const chipStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${interactiveStyles} ${className}`

  return (
    <Box className={chipStyles} onClick={onClick}>
      <span className={textSizeStyles[size]}>{label}</span>
      {onDelete && (
        <button
          type="button"
          onClick={e => {
            e.stopPropagation()
            onDelete()
          }}
          className="ml-1.5 -mr-1 hover:opacity-70 transition-opacity"
          aria-label="Remove"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      )}
    </Box>
  )
}

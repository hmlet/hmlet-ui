'use client'

import {useTheme} from 'next-themes'
import {toast, Toaster as Sonner, type ToasterProps} from 'sonner'

const Toaster = ({...props}: ToasterProps) => {
  const {theme = 'system'} = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className="toaster group"
      style={
        {
          '--normal-bg': 'var(--popover)',
          '--normal-text': 'var(--popover-foreground)',
          '--normal-border': 'var(--border)',
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

type ShowToastArgs = {
  type?: 'default' | 'success' | 'info' | 'warning' | 'error' | 'loading'
  title: string
  description?: string
  duration?: number
  closeButton?: boolean
  action?: {label: string; onClick: () => void}
  cancel?: {label: string; onClick: () => void}
  onDismiss?: () => void
}

function showToast({
  type = 'default',
  title,
  description,
  duration,
  closeButton,
  action,
  cancel,
  onDismiss,
}: ShowToastArgs) {
  const options = {
    description,
    duration,
    closeButton,
    action,
    cancel,
    onDismiss,
  }

  switch (type) {
    case 'success':
      return toast.success(title, options)
    case 'info':
      return toast.info(title, options)
    case 'warning':
      return toast.warning(title, options)
    case 'error':
      return toast.error(title, options)
    case 'loading':
      return toast.loading(title, options)
    default:
      return toast(title, options)
  }
}

export {Toaster, showToast}

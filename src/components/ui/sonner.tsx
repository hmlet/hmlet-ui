'use client'

import {useTheme} from 'next-themes'
import {toast, Toaster as Sonner, type ToasterProps} from 'sonner'
import type React from 'react'

type ToastType =
  | 'default'
  | 'success'
  | 'error'
  | 'warning'
  | 'info'
  | 'loading'
type ToastPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right'

interface ToastOptions {
  title: string
  description?: string
  type?: ToastType
  duration?: number
  icon?: React.ReactNode
  action?: {
    label: string
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  }
  cancel?: {
    label: string
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  }
  dismissible?: boolean
  closeButton?: boolean
  invert?: boolean
  onDismiss?: (toast: {id: string | number}) => void
  onAutoClose?: (toast: {id: string | number}) => void
}

const showToast = ({
  title,
  description,
  type = 'default',
  duration,
  icon,
  action,
  cancel,
  dismissible,
  closeButton,
  invert,
  onDismiss,
  onAutoClose,
}: ToastOptions) => {
  const options = {
    description,
    duration,
    icon,
    action,
    cancel,
    dismissible,
    closeButton,
    invert,
    onDismiss,
    onAutoClose,
  }

  switch (type) {
    case 'success':
      return toast.success(title, options)
    case 'error':
      return toast.error(title, options)
    case 'warning':
      return toast.warning(title, options)
    case 'info':
      return toast.info(title, options)
    case 'loading':
      return toast.loading(title, options)
    default:
      return toast(title, options)
  }
}

const Toaster = ({...props}: ToasterProps) => {
  const {theme = 'system'} = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg',
          description: 'group-[.toast]:text-muted-foreground',
          actionButton:
            'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
          cancelButton:
            'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
          success:
            'group-[.toast]:bg-success group-[.toast]:text-success-foreground group-[.toast]:border-success',
          error:
            'group-[.toast]:bg-destructive group-[.toast]:text-destructive-foreground group-[.toast]:border-destructive',
          warning:
            'group-[.toast]:bg-warning group-[.toast]:text-warning-foreground group-[.toast]:border-warning',
          info: 'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground group-[.toast]:border-primary',
        },
      }}
      {...props}
    />
  )
}

export {
  Toaster,
  showToast,
  type ToastOptions,
  type ToastType,
  type ToastPosition,
}

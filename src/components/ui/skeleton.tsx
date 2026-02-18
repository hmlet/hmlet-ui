import {cn} from './utils'

function Skeleton({className, ...props}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        'bg-foreground/15 dark:bg-foreground/20 animate-pulse rounded-md',
        className,
      )}
      {...props}
    />
  )
}

export {Skeleton}

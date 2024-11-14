import { cn } from '../../lib/utils'

interface H2Props extends React.ComponentPropsWithoutRef<'h2'> { }

export function H2({ className, ...props }: H2Props) {
  return (
    <h2
      className={cn('scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0', className)}
      {...props}
    />
  )
}

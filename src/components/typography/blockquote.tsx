import { cn } from '../../lib/utils'

interface BlockquoteProps extends React.ComponentPropsWithoutRef<'blockquote'> { }

export const Blockquote = ({ className, ...props }: BlockquoteProps) => {
  return (
    <blockquote
      className={cn('mt-6 border-l-2 pl-6 italic', className)}
      {...props}
    />
  )
}

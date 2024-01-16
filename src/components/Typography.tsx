import { cn } from '@/lib/utils';

type Props = {
  /** @see -- https://ui.shadcn.com/docs/components/typography */
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'Lead' | 'Large' | 'Small' | 'Muted';
  children: React.ReactNode;
  className?: string;
};

export const Typography = ({ variant, children, className }: Props) => {
  if (variant === 'h1') {
    return (
      <h1
        className={cn('scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl', className)}
      >
        {children}
      </h1>
    );
  }
  if (variant === 'h2') {
    return (
      <h2
        className={cn(
          'scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0',
          className
        )}
      >
        {children}
      </h2>
    );
  }
  if (variant === 'h3') {
    return (
      <h3 className={cn('scroll-m-20 text-2xl font-semibold tracking-tight', className)}>
        {children}
      </h3>
    );
  }
  if (variant === 'h4') {
    return (
      <h4 className={cn('scroll-m-20 text-xl font-semibold tracking-tight', className)}>
        {children}
      </h4>
    );
  }
  if (variant === 'p') {
    return <p className={cn('leading-7 [&:not(:first-child)]:mt-6', className)}>{children}</p>;
  }
  if (variant === 'Lead') {
    return <p className={cn('text-xl text-muted-foreground', className)}>{children}</p>;
  }
  if (variant === 'Large') {
    return <p className={cn('text-lg font-semibold', className)}>{children}</p>;
  }
  if (variant === 'Small') {
    return <p className={cn('text-sm font-medium leading-none', className)}>{children}</p>;
  }
  return <span className={className}>{children}</span>;
};

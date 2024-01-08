import { cn } from '@/lib/utils';
import { createElement } from 'react';

type Props = {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
};

export const Textviewer = ({ as = 'div', children, className }: Props) => {
  return createElement(
    as,
    {
      className: cn('whitespace-pre-wrap break-words hyphens-auto', className),
    },
    children
  );
};

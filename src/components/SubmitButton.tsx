import { CircleNotch } from '@/icons';
import React from 'react';
import { Button } from '@/components/ui/button';

type Props = {
  children: React.ReactNode;
  isSubmitting: boolean;
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const SubmitButton = ({ children, isSubmitting, ...props }: Props) => {
  return React.createElement(
    Button,
    Object.assign({ disabled: isSubmitting, ...props }),
    isSubmitting && React.createElement(CircleNotch, { className: 'mr-2 h-4 w-4 animate-spin' }),
    children
  );
};

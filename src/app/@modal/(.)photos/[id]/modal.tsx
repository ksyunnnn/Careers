'use client';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

type Props = {
  children: React.ReactNode;
};

export const Modal = ({ children }: Props) => {
  const router = useRouter();
  const routerBack = useCallback(
    (e: MouseEvent | Event) => {
      e.preventDefault();
      router.back();
    },
    [router]
  );
  return (
    <Dialog defaultOpen onOpenChange={(open) => open === false && router.back()}>
      <DialogContent
        onEscapeKeyDown={(e) => routerBack(e)}
        onPointerDownOutside={(e) => routerBack(e)}
        className="max-w-[80vw]"
      >
        {children}
      </DialogContent>
    </Dialog>
  );
};

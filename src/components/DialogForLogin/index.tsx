'use client';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Form, FormControl, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useDialogForLogin } from './hooks';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import * as Icons from '@/iconsUp';

type Props =
  | {
      children: React.ReactNode;
      trigger?: never;
    }
  | {
      trigger: React.ReactNode;
      children?: never;
    };

export const DialogForLogin = (props: Props) => {
  const { onSubmit, formId, ...form } = useDialogForLogin();
  return (
    <Dialog>
      <DialogTrigger asChild>{props.children || props.trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Join today 🙌</DialogTitle>
          <DialogDescription>Blah blah</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={onSubmit} className="space-y-8">
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="email" {...form.register('email')} />
              </FormControl>
              <FormMessage>{form.formState.errors.email?.message}</FormMessage>
            </FormItem>
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="password" type="password" {...form.register('password')} />
              </FormControl>
              <FormMessage>{form.formState.errors.password?.message}</FormMessage>
            </FormItem>
            <Button type="submit">
              <Icons.SignIn className="mr-2 h-4 w-4" />
              Login
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

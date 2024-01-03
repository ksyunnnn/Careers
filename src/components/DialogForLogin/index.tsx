'use client';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useDialogForLogin } from './hooks';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

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
          <DialogTitle>Are you sure absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your account and remove your
            data from our servers.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={onSubmit} className="space-y-8">
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="email" {...form.register('email')} />
              </FormControl>
              <FormDescription>This is your public display name.</FormDescription>
              <FormMessage>{form.formState.errors.email?.message}</FormMessage>
            </FormItem>
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="password" {...form.register('password')} />
              </FormControl>
              <FormDescription>This is your public display name.</FormDescription>
              <FormMessage>{form.formState.errors.password?.message}</FormMessage>
            </FormItem>
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

'use client';

import { Form, FormControl, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useLoginForm } from './hooks';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import * as Icons from '@/icons';

export const LoginForm = () => {
  const { onSubmit, formId, disabled, ...form } = useLoginForm();
  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="space-y-4">
        <FormItem>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Input placeholder="email" autoComplete="email" {...form.register('email')} />
          </FormControl>
          <FormMessage>{form.formState.errors.email?.message}</FormMessage>
        </FormItem>
        <FormItem>
          <FormLabel>Password</FormLabel>
          <FormControl>
            <Input
              placeholder="password"
              type="password"
              autoComplete="current-password"
              {...form.register('password')}
            />
          </FormControl>
          <FormMessage>{form.formState.errors.password?.message}</FormMessage>
        </FormItem>
        <Button type="submit" disabled={disabled}>
          <Icons.SignIn className="mr-2 h-4 w-4" />
          Login
        </Button>
      </form>
    </Form>
  );
};

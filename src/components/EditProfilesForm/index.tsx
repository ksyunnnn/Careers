'use client';
import { Form, FormControl, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useEditProfilesForm } from './hooks';

export const EditProfilesForm = () => {
  const { onSubmit, ...form } = useEditProfilesForm();
  return (
    <div className="h-96">
      <Form {...form}>
        <form onSubmit={onSubmit} className="space-y-4">
          <FormItem>
            <FormLabel>User Name</FormLabel>
            <FormControl>
              <Input placeholder="type your favorite name" {...form.register('user_name')} />
            </FormControl>
            <FormMessage>{form.formState.errors.user_name?.message}</FormMessage>
          </FormItem>

          <Button type="submit">Save</Button>
        </form>
      </Form>
    </div>
  );
};

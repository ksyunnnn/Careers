'use client';
import { Form, FormControl, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useEditProfilesForm } from './hooks';

export const EditProfilesForm = () => {
  const { onSubmit, ...form } = useEditProfilesForm();
  return (
    <div className="grid place-content-center h-96">
      <div className="w-80">
        <Form {...form}>
          <form onSubmit={onSubmit} className="space-y-8">
            <FormItem>
              <FormLabel>User Name</FormLabel>
              <FormControl>
                <Input placeholder="synske" {...form.register('user_name')} />
              </FormControl>
              <FormMessage>{form.formState.errors.user_name?.message}</FormMessage>
            </FormItem>

            <Button type="submit">Save</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

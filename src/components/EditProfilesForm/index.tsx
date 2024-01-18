'use client';
import { Form, FormControl, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useEditProfilesForm } from './hooks';
import { Button } from '@/components/ui/button';

export const EditProfilesForm = () => {
  const { onSubmit, disabled, ...form } = useEditProfilesForm();
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

          <Button type="submit" disabled={disabled}>
            Save
          </Button>
        </form>
      </Form>
    </div>
  );
};

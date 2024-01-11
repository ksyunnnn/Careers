import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { LoginForm } from './LoginForm';

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
  return (
    <Dialog>
      <DialogTrigger asChild>{props.children || props.trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Join today 🙌</DialogTitle>
          <DialogDescription>Blah blah</DialogDescription>
        </DialogHeader>
        <LoginForm />
      </DialogContent>
    </Dialog>
  );
};

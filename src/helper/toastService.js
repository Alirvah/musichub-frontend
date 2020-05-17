import { toast } from 'bulma-toast';

// to rename your import
export function errorToast(message) {
  toast({
    message,
    type: 'is-danger',
    dismissible: true,
    position: 'bottom-right',
    duration: 4000,
  });
}

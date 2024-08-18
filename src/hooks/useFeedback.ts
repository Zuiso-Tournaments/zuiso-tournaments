import {useToast} from '@/components/ui/use-toast';

export const useFeedback = () => {
  const {toast} = useToast();

  const successFeedback = (message: string) => {
    toast({
      title: 'Success',
      description: message,
      className:
        'bg-green-600 text-white p-4 rounded-lg shadow-lg flex space-x-4 !z-50',
      style: {backgroundColor: 'rgba(16, 185, 129, 1)'},
    });
  };

  const errorFeedback = (message: string) => {
    toast({
      title: 'Error',
      description: message,
      className:
        'bg-red-600 text-white p-4 rounded-lg shadow-lg flex space-x-4 !z-50',
      style: {backgroundColor: 'rgba(220, 38, 38, 1)'},
    });
  };

  return {successFeedback, errorFeedback};
};

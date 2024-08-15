import {useMutation, useQueryClient} from '@tanstack/react-query';
import {  deleteCoffe } from '@/features/coffe/lib/data';
import type { CoffeInsert } from '@/db/schemas/coffe';
import { COFFE_TAG } from '@/features/coffe/lib/constants';
import { useFeedback } from '@/hooks/useFeedback';

function useCoffeDeleteMutation() {

  const queryClient = useQueryClient()

  const {
    successFeedback,
    errorFeedback
  } = useFeedback()

  return useMutation({
    mutationFn: (values: CoffeInsert) => deleteCoffe(values),
    onSuccess: (data) => {
      console.log('Example created:', data);
      queryClient.invalidateQueries({ queryKey: [COFFE_TAG] })
      successFeedback('Todo ha salido bien')
    },
    onError: (error) => {
      console.error('Error creating example:', error);
      errorFeedback('Algo ha salido mal')
    },
  });
}

export default useCoffeDeleteMutation;

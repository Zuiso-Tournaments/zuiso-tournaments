import type {MovilInsert} from '@/db/schemas/movil';
import {useMutation, useQueryClient} from '@tanstack/react-query';

import {useFeedback} from '@/hooks/useFeedback';

import {MOVIL_TAG} from '@/features/movil/lib/constants';
import {deleteMovil} from '@/features/movil/lib/data';

function useMovilDeleteMutation() {
  const queryClient = useQueryClient();

  const {successFeedback, errorFeedback} = useFeedback();

  return useMutation({
    mutationFn: (values: MovilInsert) => deleteMovil(values),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: [MOVIL_TAG]});
      successFeedback('POLLA MENOS');
    },
    onError: (error) => {
      console.error('Error creating example:', error);
      errorFeedback('Algo ha salido mal');
    },
  });
}

export default useMovilDeleteMutation;

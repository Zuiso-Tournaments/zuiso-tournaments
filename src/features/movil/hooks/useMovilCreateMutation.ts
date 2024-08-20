import type {MovilInsert} from '@/db/schemas/movil';
import {useMutation, useQueryClient} from '@tanstack/react-query';

import {useFeedback} from '@/hooks/useFeedback';

import {MOVIL_TAG} from '@/features/movil/lib/constants';
import {postMovil} from '@/features/movil/lib/data';

function useMovilCreateMutation() {
  const queryClient = useQueryClient();

  const {successFeedback, errorFeedback} = useFeedback();

  return useMutation({
    mutationFn: (values: MovilInsert) => postMovil(values),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: [MOVIL_TAG]});
      successFeedback('POLLA');
    },
    onError: (error) => {
      console.error('Error creating example:', error);
      errorFeedback('Algo ha salido mal');
    },
  });
}

export default useMovilCreateMutation;

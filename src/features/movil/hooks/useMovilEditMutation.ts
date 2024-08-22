import type {MovilInsert} from '@/db/schemas/movil';
import {useMutation, useQueryClient} from '@tanstack/react-query';

import {useFeedback} from '@/hooks/useFeedback';

import {MOVIL_TAG} from '@/features/movil/lib/constants';
import {updateMovil} from '@/features/movil/lib/data';

function useMovilEditMutation() {
  const queryClient = useQueryClient();

  const {successFeedback, errorFeedback} = useFeedback();

  return useMutation({
    mutationFn: (values: MovilInsert) => updateMovil(values),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: [MOVIL_TAG]});
      successFeedback('POLLA ACTUALIZADA');
    },
    onError: (error) => {
      console.error('Error updating example:', error);
      errorFeedback('Algo salió mal');
    },
  });
}

export default useMovilEditMutation;

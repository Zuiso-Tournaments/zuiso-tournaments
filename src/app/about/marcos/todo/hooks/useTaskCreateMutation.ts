import type {TareaInsert} from '@/db/schemas/tabla_marcos';
import {useMutation, useQueryClient} from '@tanstack/react-query';

import {TASK_TAG} from '@/app/about/marcos/todo/lib/constant';
import {postTask} from '@/app/about/marcos/todo/lib/data';

import {useFeedback} from '@/hooks/useFeedback';

function useTaskCreateMutation() {
  const queryClient = useQueryClient();

  const {successFeedback, errorFeedback} = useFeedback();

  return useMutation({
    mutationFn: (values: TareaInsert) => postTask(values),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: [TASK_TAG]});
      successFeedback('Tarea añadida correctamente');
    },
    onError: (error) => {
      console.error('Error creating task:', error);
      errorFeedback('Error al añadir tarea');
    },
  });
}

export default useTaskCreateMutation;

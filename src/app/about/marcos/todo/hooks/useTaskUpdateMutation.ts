import type {TareaInsert} from '@/db/schemas/tabla_marcos';
import {useMutation, useQueryClient} from '@tanstack/react-query';

import {TASK_TAG} from '@/app/about/marcos/todo/lib/constant';
import {updateTask} from '@/app/about/marcos/todo/lib/data';

import {useFeedback} from '@/hooks/useFeedback';

function useTaskUpdateMutation() {
  const queryClient = useQueryClient();

  const {successFeedback, errorFeedback} = useFeedback();

  return useMutation({
    mutationFn: (values: TareaInsert) => updateTask(values),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: [TASK_TAG]});
      successFeedback('Tarea actualizada correctamente');
    },
    onError: (error) => {
      console.error('Error updating task:', error);
      errorFeedback('Error al actualizar la tarea');
    },
  });
}

export default useTaskUpdateMutation;

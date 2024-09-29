import type {TareaInsert} from '@/db/schemas/tabla_marcos';
import {useMutation, useQueryClient} from '@tanstack/react-query';

import {TASK_TAG} from '@/app/about/marcos/todo/lib/constant';
import {deleteTask} from '@/app/about/marcos/todo/lib/data';

import {useFeedback} from '@/hooks/useFeedback';

function useTaskDeleteMutation() {
  const queryClient = useQueryClient();

  const {successFeedback, errorFeedback} = useFeedback();

  return useMutation({
    mutationFn: (values: TareaInsert) => deleteTask(values),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: [TASK_TAG]});
      successFeedback('Tarea eliminada correctamente');
    },
    onError: (error) => {
      console.error('Error deleting task:', error);
      errorFeedback('Error al eliminar la tarea');
    },
  });
}

export default useTaskDeleteMutation;

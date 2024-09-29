import type {Tarea, TareaInsert} from '@/db/schemas/tabla_marcos';

import {fetchClient} from '@/lib/api';

export const getTasks = async (): Promise<Tarea[]> => {
  const res = await fetchClient<{data: Tarea[]}>('/task');
  return res.data;
};

export const postTask = async (values: TareaInsert): Promise<Tarea> => {
  console.log('values', values);
  const res = await fetchClient<{data: Tarea}>('/task', {
    method: 'POST',
    body: values,
  });
  console.log('res', res);
  return res.data;
};

export const deleteTask = async (values: TareaInsert): Promise<Tarea> => {
  const res = await fetchClient<{data: Tarea}>('/task', {
    method: 'DELETE',
    body: values,
  });
  return res.data;
};

export const updateTask = async (values: TareaInsert): Promise<Tarea> => {
  const res = await fetchClient<{data: Tarea}>('/task', {
    method: 'PATCH',
    body: values,
  });
  return res.data;
};

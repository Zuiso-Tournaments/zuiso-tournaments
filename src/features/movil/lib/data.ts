import type {Movil, MovilInsert} from '@/db/schemas/movil';

import {fetchClient} from '@/lib/api';

export const getMoviles = async (): Promise<Movil[]> => {
  const res = await fetchClient<{data: Movil[]}>('/movil');
  return res.data;
};

export const postMovil = async (values: MovilInsert): Promise<Movil> => {
  const res = await fetchClient<{data: Movil}>('/movil', {
    method: 'POST',
    body: values,
  });
  return res.data;
};

export const deleteMovil = async (values: MovilInsert): Promise<Movil> => {
  const res = await fetchClient<{data: Movil}>('/movil', {
    method: 'DELETE',
    body: values,
  });
  return res.data;
};

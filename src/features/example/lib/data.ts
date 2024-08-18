'use server';

import {fetchClient} from '@/lib/api';

import type {Example} from '@/features/example/lib/models';

export const getExamples = async (): Promise<Example[]> => {
  const res = await fetchClient<{data: Example[]}>('/examples', {
    tags: ['example'],
  });
  return res.data;
};

export const postExample = async (values: {
  title: string;
  description?: string;
}): Promise<Example> => {
  const res = await fetchClient<{data: Example}>('/examples', {
    method: 'POST',
    body: values,
  });
  return res.data;
};

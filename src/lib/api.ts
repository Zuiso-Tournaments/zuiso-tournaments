'use server';

import {getURL} from '@/lib/helpers';

const API_BASE_URL = getURL(`api`);

type FetchOptions = {
  method?: 'GET' | 'POST' | 'PATCH' | 'DELETE';
  headers?: Record<string, string>;
  body?: any;
  tags?: string[];
};

export async function fetchClient<T>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T> {
  const {method = 'GET', headers = {}, body, tags} = options;

  const url = `${API_BASE_URL}${endpoint}`;

  const fetchOptions: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  };

  if (tags) {
    fetchOptions.next = {tags};
  }

  const response = await fetch(url, fetchOptions);

  if (!response.ok) {
    throw new Error(`API request failed: ${response.statusText}`);
  }

  return response.json();
}

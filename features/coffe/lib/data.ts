import type { Coffe, CoffeInsert } from "@/db/schemas/coffe";
import { fetchClient } from "@/lib/api";

export const getCoffes = async (): Promise<Coffe[]> => {
  const res = await fetchClient<{ data: Coffe[] }>('/coffe');
  return res.data;
};

export const postCoffe = async (values: CoffeInsert): Promise<any> => {
  const res = await fetchClient<any>('/coffe', {
    method: 'POST',
    body: values,
  });
  return res.data;
};


export const deleteCoffe = async (values: CoffeInsert): Promise<any> => {
  const res = await fetchClient<any>('/coffe', {
    method: 'DELETE',
    body: values,
  });
  return res.data;
};

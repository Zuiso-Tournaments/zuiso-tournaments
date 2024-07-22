import type {Note} from '@/db/schemas/notes';
import {useQuery} from '@tanstack/react-query';

function useNotesQuery() {
  const queryKey = ['notes'];

  const queryFn = async () => {
    const res = await fetch('/api/drizzle').then((res) => res.json());
    return res.data as Note[];
  };

  return useQuery({queryKey, queryFn});
}

export default useNotesQuery;

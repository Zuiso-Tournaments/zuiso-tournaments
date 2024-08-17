import {useQuery} from '@tanstack/react-query';

import {getExamples} from '@/features/example/lib/data';

function useExampleQuery() {
  const queryKey = ['examples'];

  return useQuery({queryKey, queryFn: () => getExamples()});
}

export default useExampleQuery;

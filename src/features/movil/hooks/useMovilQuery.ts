import {useQuery} from '@tanstack/react-query';

import {MOVIL_TAG} from '@/features/movil/lib/constants';
import {getMoviles} from '@/features/movil/lib/data';

function useMovilQuery() {
  const queryKey = [MOVIL_TAG];
  return useQuery({queryKey, queryFn: () => getMoviles()});
}

export default useMovilQuery;

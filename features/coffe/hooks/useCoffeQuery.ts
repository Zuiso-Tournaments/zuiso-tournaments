import {useQuery} from '@tanstack/react-query';
import { COFFE_TAG } from '@/features/coffe/lib/constants';
import { getCoffes } from '@/features/coffe/lib/data';

function useCoffeQuery() {
  const queryKey = [COFFE_TAG];
  return useQuery({queryKey, queryFn: ()=> getCoffes()});
}

export default useCoffeQuery;

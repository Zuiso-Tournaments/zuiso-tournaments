import {useQuery} from '@tanstack/react-query';

import {TASK_TAG} from '@/app/about/marcos/todo/lib/constant';
import {getTasks} from '@/app/about/marcos/todo/lib/data';

function useTaskQuery() {
  const queryKey = [TASK_TAG];
  return useQuery({queryKey, queryFn: () => getTasks()});
}

export default useTaskQuery;

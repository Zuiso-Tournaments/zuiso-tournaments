import {useMemo} from 'react';

import {getSupabaseBrowserClient} from '@/lib/supabase/client';

function useSupabase() {
  return useMemo(getSupabaseBrowserClient, []);
}

export default useSupabase;

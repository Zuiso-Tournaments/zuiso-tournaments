import {createClient} from '@/lib/supabase/server';

import Navlinks from '@/components/ui/navlinks';

export default async function Navbar() {
  const supabase = createClient();

  const {
    data: {user},
  } = await supabase.auth.getUser();

  return (
    <nav>
      <div className="mx-auto max-w-6xl px-6">
        <Navlinks user={user} />
      </div>
    </nav>
  );
}

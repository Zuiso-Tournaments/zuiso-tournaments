import {getProducts, getSubscription, getUser} from '@/lib/supabase/queries';
import {createClient} from '@/lib/supabase/server';

import Pricing from '@/features/pricing/pages/Pricing/Pricing';

export default async function PricingPage() {
  const supabase = createClient();
  const [user, products, subscription] = await Promise.all([
    getUser(supabase),
    getProducts(supabase),
    getSubscription(supabase),
  ]);

  return (
    <Pricing
      user={user}
      products={products ?? []}
      subscription={subscription}
    />
  );
}

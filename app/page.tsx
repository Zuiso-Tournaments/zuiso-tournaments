import Pricing from '@/components/ui/Pricing/Pricing';
import {getProducts, getSubscription, getUser} from '@/lib/supabase/queries';
import {createClient} from '@/lib/supabase/server';

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

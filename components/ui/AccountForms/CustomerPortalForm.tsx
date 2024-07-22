'use client';

import Card from '@/components/ui/Card';
import {Button} from '@/components/ui/button';
import {createStripePortal} from '@/lib/stripe/server';
import type {Tables} from '@/types_db';
import Link from 'next/link';
import {usePathname, useRouter} from 'next/navigation';

type Subscription = Tables<'subscriptions'>;
type Price = Tables<'prices'>;
type Product = Tables<'products'>;

type SubscriptionWithPriceAndProduct = Subscription & {
  prices:
    | (Price & {
        products: Product | null;
      })
    | null;
};

interface Props {
  subscription: SubscriptionWithPriceAndProduct | null;
}

export default function CustomerPortalForm({subscription}: Props) {
  const router = useRouter();
  const currentPath = usePathname();

  const subscriptionPrice =
    subscription &&
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: subscription?.prices?.currency ?? '',
      minimumFractionDigits: 0,
    }).format((subscription?.prices?.unit_amount || 0) / 100);

  const handleStripePortalRequest = async () => {
    const redirectUrl = await createStripePortal(currentPath);
    return router.push(redirectUrl);
  };

  return (
    <Card
      title="Your Plan"
      description={
        subscription
          ? `You are currently on the ${subscription?.prices?.products?.name} plan.`
          : 'You are not currently subscribed to any plan.'
      }
      footer={
        <div className="flex flex-col items-start justify-between sm:flex-row sm:items-center">
          <p className="pb-4 sm:pb-0">Manage your subscription on Stripe.</p>
          <Button onClick={handleStripePortalRequest}>
            Open customer portal
          </Button>
        </div>
      }>
      <div className="mb-4 mt-8 text-xl font-semibold">
        {subscription ? (
          `${subscriptionPrice}/${subscription?.prices?.interval}`
        ) : (
          <Link href="/">Choose your plan</Link>
        )}
      </div>
    </Card>
  );
}

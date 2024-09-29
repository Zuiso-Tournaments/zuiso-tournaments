import {redirect} from 'next/navigation';

import {getSubscription, getUser, getUserDetails} from '@/lib/supabase/queries';
import {createClient} from '@/lib/supabase/server';

import CustomerPortalForm from '@/components/AccountForms/CustomerPortalForm';
import EmailForm from '@/components/AccountForms/EmailForm';
import NameForm from '@/components/AccountForms/NameForm';

export default async function accountPage() {
  const supabase = createClient();
  const [user, userDetails, subscription] = await Promise.all([
    getUser(supabase),
    getUserDetails(supabase),
    getSubscription(supabase),
  ]);

  if (!user) {
    return redirect('/signin');
  }

  return (
    <div className="mb-32">
      <div className="container mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-24 lg:px-8">
        <div className="mb-16 flex flex-col items-center text-center">
          <h1 className="mb-8 text-5xl font-extrabold tracking-tight sm:text-6xl">
            Your Account
          </h1>
          <p className="mb-6 max-w-2xl text-xl sm:text-2xl">
            Manage your account settings.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-12 lg:grid-cols-2">
          <h2 className="mb-6 ml-4 mt-6 flex items-center text-3xl font-semibold text-white dark:text-white">
            Subscription Details
          </h2>
          <CustomerPortalForm subscription={subscription} />

          <h2 className="mb-6 ml-4 mt-6 flex items-center text-3xl font-semibold text-white dark:text-white">
            Personal Information
          </h2>
          <div className="space-y-8">
            <NameForm userName={userDetails?.full_name ?? ''} />
            <EmailForm userEmail={user.email} />
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-4xl text-center">
          <p className="mb-4 text-lg text-gray-400">
            Need help? Contact our{' '}
            <a href="/support" className="text-blue-400 hover:underline">
              Support Team
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

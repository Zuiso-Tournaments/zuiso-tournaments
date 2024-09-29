'use client';

import {type Provider} from '@supabase/supabase-js';
import {Github} from 'lucide-react';

import {signInWithOAuth} from '@/lib/auth-helpers/client';

import {Button} from '@/components/ui/button';

type OAuthProviders = {
  name: Provider;
  displayName: string;
  icon: JSX.Element;
};

export default function OauthSignIn() {
  const oAuthProviders: OAuthProviders[] = [
    {
      name: 'github',
      displayName: 'GitHub',
      icon: <Github className="h-5 w-5" />,
    },
    {
      name: 'google',
      displayName: 'Google',
      icon: <Github className="h-5 w-5" />,
    },
    /* Add desired OAuth providers here */
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    await signInWithOAuth(e);
  };

  return (
    <div className="mt-4">
      {oAuthProviders.map((provider) => (
        <form
          key={provider.name}
          className="mx-8 mb-3 pb-3"
          onSubmit={(e) => handleSubmit(e)}>
          <input type="hidden" name="provider" value={provider.name} />
          <Button type="submit" className="w-full">
            <span className="mr-2">{provider.icon}</span>
            <span>{provider.displayName}</span>
          </Button>
        </form>
      ))}
    </div>
  );
}

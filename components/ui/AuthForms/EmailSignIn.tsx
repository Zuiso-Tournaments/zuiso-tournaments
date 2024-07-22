/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import {Button} from '@/components/ui/button';
import {handleRequest} from '@/lib/auth-helpers/client';
import {signInWithEmail} from '@/lib/auth-helpers/server';
import Link from 'next/link';
import {useRouter} from 'next/navigation';

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable react-hooks/rules-of-hooks */

// Define prop type with allowPassword boolean
interface EmailSignInProps {
  allowPassword: boolean;
  redirectMethod: string;
  disableButton?: boolean;
}

export default function EmailSignIn({
  allowPassword,
  redirectMethod,
  disableButton,
}: EmailSignInProps) {
  const router = redirectMethod === 'client' ? useRouter() : null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    await handleRequest(e, signInWithEmail, router);
  };

  return (
    <div className="my-8">
      <form
        noValidate={true}
        className="mb-4"
        onSubmit={(e) => handleSubmit(e)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              placeholder="name@example.com"
              type="email"
              name="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              className="w-full rounded-md bg-zinc-800 p-3"
            />
          </div>
          <Button type="submit" className="mt-1" disabled={disableButton}>
            Sign in
          </Button>
        </div>
      </form>
      {allowPassword && (
        <>
          <p>
            <Link href="/signin/password_signin" className="text-sm font-light">
              Sign in with email and password
            </Link>
          </p>
          <p>
            <Link href="/signin/signup" className="text-sm font-light">
              Don&apos;t have an account? Sign up
            </Link>
          </p>
        </>
      )}
    </div>
  );
}

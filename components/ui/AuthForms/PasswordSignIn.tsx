'use client';

import {Button} from '@/components/ui/button';
import {handleRequest} from '@/lib/auth-helpers/client';
import {signInWithPassword} from '@/lib/auth-helpers/server';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import React from 'react';

/* eslint-disable react-hooks/rules-of-hooks */

// Define prop type with allowEmail boolean
interface PasswordSignInProps {
  allowEmail: boolean;
  redirectMethod: string;
}

export default function PasswordSignIn({
  allowEmail,
  redirectMethod,
}: PasswordSignInProps) {
  const router = redirectMethod === 'client' ? useRouter() : null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    await handleRequest(e, signInWithPassword, router);
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
            <label htmlFor="password">Password</label>
            <input
              id="password"
              placeholder="Password"
              type="password"
              name="password"
              autoComplete="current-password"
              className="w-full rounded-md bg-zinc-800 p-3"
            />
          </div>
          <Button type="submit" className="mt-1">
            Sign in
          </Button>
        </div>
      </form>
      <p>
        <Link href="/signin/forgot_password" className="text-sm font-light">
          Forgot your password?
        </Link>
      </p>
      {allowEmail && (
        <p>
          <Link href="/signin/email_signin" className="text-sm font-light">
            Sign in via magic link
          </Link>
        </p>
      )}
      <p>
        <Link href="/signin/signup" className="text-sm font-light">
          Don&apos;t have an account? Sign up
        </Link>
      </p>
    </div>
  );
}

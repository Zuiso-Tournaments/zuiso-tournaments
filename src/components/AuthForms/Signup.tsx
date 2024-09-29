'use client';

import React from 'react';

import Link from 'next/link';
import {useRouter} from 'next/navigation';

import {handleRequest} from '@/lib/auth-helpers/client';
import {signUp} from '@/lib/auth-helpers/server';

import {Button} from '@/components/ui/button';

/* eslint-disable react-hooks/rules-of-hooks */

// Define prop type with allowEmail boolean
interface SignUpProps {
  allowEmail: boolean;
  redirectMethod: string;
}

export default function SignUp({allowEmail, redirectMethod}: SignUpProps) {
  const router = redirectMethod === 'client' ? useRouter() : null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    await handleRequest(e, signUp, router);
  };

  return (
    <div className="m-8">
      <form
        noValidate={true}
        className="mb-6"
        onSubmit={(e) => handleSubmit(e)}>
        <div className="grid gap-3">
          <div className="grid gap-2">
            <label className="font-bold" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              placeholder="name@example.com"
              type="email"
              name="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              className="w-full rounded-md bg-zuiso-800 p-3"
            />
            <label className="font-bold" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              placeholder="Password"
              type="password"
              name="password"
              autoComplete="current-password"
              className="w-full rounded-md bg-zuiso-800 p-3"
            />
          </div>
          <Button type="submit" className="mt-1">
            Sign up
          </Button>
        </div>
      </form>
      <p className="font-bold">Already have an account?</p>
      <p>
        <Link href="/signin/password_signin" className="text-m font-light">
          Sign in with email and password
        </Link>
      </p>
      {allowEmail && (
        <p>
          <Link href="/signin/email_signin" className="text-m font-light">
            Sign in via magic link
          </Link>
        </p>
      )}
    </div>
  );
}

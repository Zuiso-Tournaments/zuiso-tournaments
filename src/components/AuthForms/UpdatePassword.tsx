'use client';

import React from 'react';

import {useRouter} from 'next/navigation';

import {handleRequest} from '@/lib/auth-helpers/client';
import {updatePassword} from '@/lib/auth-helpers/server';

import {Button} from '@/components/ui/button';

/* eslint-disable react-hooks/rules-of-hooks */
interface UpdatePasswordProps {
  redirectMethod: string;
}

export default function UpdatePassword({redirectMethod}: UpdatePasswordProps) {
  const router = redirectMethod === 'client' ? useRouter() : null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    await handleRequest(e, updatePassword, router);
  };

  return (
    <div className="m-8">
      <form
        noValidate={true}
        className="mb-6"
        onSubmit={(e) => handleSubmit(e)}>
        <div className="grid gap-3">
          <div className="grid gap-2">
            <label className="font-bold" htmlFor="password">
              New Password
            </label>
            <input
              id="password"
              placeholder="Password"
              type="password"
              name="password"
              autoComplete="current-password"
              className="w-full rounded-md bg-zuiso-800 p-3"
            />
            <label className="font-bold" htmlFor="passwordConfirm">
              Confirm New Password
            </label>
            <input
              id="passwordConfirm"
              placeholder="Password"
              type="password"
              name="passwordConfirm"
              autoComplete="current-password"
              className="w-full rounded-md bg-zuiso-800 p-3"
            />
          </div>
          <Button type="submit" className="mt-1">
            Update Password
          </Button>
        </div>
      </form>
    </div>
  );
}

'use client';

import Logo from '@/components/icons/Logo';
import {handleRequest} from '@/lib/auth-helpers/client';
import {SignOut} from '@/lib/auth-helpers/server';
import {getRedirectMethod} from '@/lib/auth-helpers/settings';
import Link from 'next/link';
import {usePathname, useRouter} from 'next/navigation';

import s from './Navbar.module.css';

/* eslint-disable react-hooks/rules-of-hooks */
// TODO: Fix the issue with the eslint-disable comment

interface NavlinksProps {
  user?: any;
}

export default function Navlinks({user}: NavlinksProps) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = getRedirectMethod() === 'client' ? useRouter() : null;

  return (
    <div className="align-center relative flex flex-row justify-between py-4 md:py-6">
      <div className="flex flex-1 items-center">
        <Link href="/" className={s.logo} aria-label="Logo">
          <Logo />
        </Link>
        <nav className="ml-6 space-x-2 lg:block">
          <Link href="/" className={s.link}>
            Pricing
          </Link>
          {user && (
            <Link href="/account" className={s.link}>
              Account
            </Link>
          )}
        </nav>
      </div>
      <div className="flex justify-end space-x-8">
        {user ? (
          <form onSubmit={(e) => handleRequest(e, SignOut, router)}>
            <input type="hidden" name="pathName" value={usePathname()} />
            <button type="submit" className={s.link}>
              Sign out
            </button>
          </form>
        ) : (
          <Link href="/signin" className={s.link}>
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
}

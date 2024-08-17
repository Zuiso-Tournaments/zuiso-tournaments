'use client';

import {setCookie} from 'cookies-next';
import {useSetAtom} from 'jotai';
import {useTranslations} from 'next-intl';

import Link from 'next/link';
import {usePathname, useRouter} from 'next/navigation';

import {languageAtom} from '@/lib/atoms';
import {handleRequest} from '@/lib/auth-helpers/client';
import {SignOut} from '@/lib/auth-helpers/server';
import {getRedirectMethod} from '@/lib/auth-helpers/settings';

import Logo from '@/components/icons/Logo';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import s from './Navbar.module.css';

/* eslint-disable react-hooks/rules-of-hooks */
// TODO: Fix the issue with the eslint-disable comment

interface NavlinksProps {
  user?: any;
}

export default function Navlinks({user}: NavlinksProps) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = getRedirectMethod() === 'client' ? useRouter() : null;

  const t = useTranslations('Navbar');

  const setLanguage = useSetAtom(languageAtom);

  const handleLanguageChange = (value: string) => {
    setCookie('language', value, {maxAge: 31536000, path: '/'});
    setLanguage(value);
  };

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
        <Select onValueChange={handleLanguageChange}>
          <SelectTrigger className="w-16">
            <SelectValue placeholder={t('lang')} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en">EN</SelectItem>
            <SelectItem value="es">ES</SelectItem>
            <SelectItem value="it">IT</SelectItem>
          </SelectContent>
        </Select>

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

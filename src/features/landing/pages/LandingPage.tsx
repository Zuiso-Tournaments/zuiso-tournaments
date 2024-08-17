'use client';

import GitHub from '@/icons/GitHub';
import Logo from '@/icons/Logo';
import {useTranslations} from 'next-intl';

import React from 'react';

import Link from 'next/link';

const LandingPage: React.FC = () => {
  const t = useTranslations('LandingPage');
  return (
    <div className="justify-centerpx-4 flex min-h-screen flex-col items-center">
      <header className="mb-12">
        <Logo className="h-16 w-16" />
      </header>

      <main className="text-center">
        <h1 className="mb-4 text-4xl font-bold">Zuiso Tournaments</h1>
        <p className="mb-8 text-xl text-gray-600">{t('subtitle')}</p>
        <p>{t('title')}</p>

        <div className="space-y-4">
          <Link
            href="/signup"
            className="inline-block rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-blue-600">
            Start Organizing
          </Link>
          <Link
            href="/features"
            className="block text-blue-500 hover:underline">
            Explore Features
          </Link>
        </div>
      </main>

      <footer className="mt-16 text-sm text-gray-500">
        <div className="flex items-center justify-center space-x-4">
          <a
            href="https://github.com/zuiso-tournaments"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700">
            <GitHub className="h-6 w-6" />
          </a>
          <span>|</span>
          <Link href="/privacy" className="hover:text-gray-700">
            Privacy Policy
          </Link>
          <span>|</span>
          <Link href="/terms" className="hover:text-gray-700">
            Terms of Service
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

'use client';

import Logo from '@/icons/Logo';
import {useTranslations} from 'next-intl';

import React from 'react';

import Link from 'next/link';

import {Button} from '@/components/ui/button';

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

        <div className="space-y-4">
          <Link href="/signup">
            <Button>Start Organizing</Button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;

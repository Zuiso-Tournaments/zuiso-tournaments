'use client';

import {setCookie} from 'cookies-next';
import {useSetAtom} from 'jotai';
import {useTranslations} from 'next-intl';

import * as React from 'react';

import {languageAtom} from '@/lib/atoms';

import {Button} from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function LanguageModeToggle() {
  const t = useTranslations('Navbar');

  const setLanguage = useSetAtom(languageAtom);

  const handleLanguageChange = (value: string) => {
    setCookie('language', value, {maxAge: 31536000, path: '/'});
    setLanguage(value);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          {t('lang')}
          <span className="sr-only">Toggle lang</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleLanguageChange('en')}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLanguageChange('es')}>
          Español
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLanguageChange('it')}>
          Italiano
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLanguageChange('fr')}>
          Francais
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLanguageChange('de')}>
          Deutsch
        </DropdownMenuItem>{' '}
        <DropdownMenuItem onClick={() => handleLanguageChange('pt')}>
          Português
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

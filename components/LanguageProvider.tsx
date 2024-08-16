'use client';

import {languageAtom} from '@/lib/atoms';
import {getIntlMessages} from '@/lib/intl';
import {useAtomValue, useSetAtom} from 'jotai';
import {type AbstractIntlMessages, NextIntlClientProvider} from 'next-intl';
import type {PropsWithChildren} from 'react';
import {useEffect, useState} from 'react';

const LanguageProvider = ({
  children,
  messages,
  cookieLocale,
}: PropsWithChildren & {
  messages: AbstractIntlMessages;
  cookieLocale: string | null;
}) => {
  const value = useAtomValue(languageAtom);
  const setValue = useSetAtom(languageAtom);

  const [localMessages, setLocalMessages] = useState(messages);

  useEffect(() => {
    if (cookieLocale) setValue(cookieLocale);
  }, []);

  const test2 = async () => {
    const messages = await getIntlMessages(value || cookieLocale || 'en');
    setLocalMessages(messages);
  };

  useEffect(() => {
    test2();
  }, [value]);

  return (
    <NextIntlClientProvider
      messages={localMessages}
      locale={value || cookieLocale || 'en'}>
      {children}
    </NextIntlClientProvider>
  );
};

export default LanguageProvider;

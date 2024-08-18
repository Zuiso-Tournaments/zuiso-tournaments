import {getRequestConfig} from 'next-intl/server';

import {headers} from 'next/headers';

export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.

  const acceptLanguage = headers().get('accept-language');

  const cookieStore = headers().get('cookie');
  const languageCookie = cookieStore
    ?.split('; ')
    .find((row) => row.startsWith('language='));
  const cookieLocale = languageCookie ? languageCookie.split('=')[1] : null;

  // Use the cookie value if present, otherwise fallback to the accept-language header
  const locale =
    cookieLocale || acceptLanguage?.split(',')[0].split('-')[0] || 'en';

  return {
    locale,
    messages: (
      await (locale === 'en'
        ? // When using Turbopack, this will enable HMR for `en`
          import('./src/messages/en.json')
        : import(`./src/messages/${locale}.json`))
    ).default,
  };
});

import '@/styles/main.css';
import {Provider as JotaiProvider} from 'jotai';
import {getLocale, getMessages} from 'next-intl/server';

import type {PropsWithChildren} from 'react';
import {Suspense} from 'react';

import type {Metadata} from 'next';

import {headers} from 'next/headers';

import {Analytics} from '@vercel/analytics/react';
import {SpeedInsights} from '@vercel/speed-insights/next';

import {getURL} from '@/lib/helpers';

import LanguageProvider from '@/components/LanguageProvider';
import RQProvider from '@/components/ReactQueryClientProvider';
import {ThemeProvider} from '@/components/ThemeProvider';
import Footer from '@/components/ui/footer';
import Navbar from '@/components/ui/navbar';
import {Toaster} from '@/components/ui/toaster';

const title = 'Zuiso Tournaments';
const description =
  'Streamline your tournament management with Zuiso Tournaments - the ultimate platform for organizing, tracking, and hosting competitive events with ease.';

export const metadata: Metadata = {
  metadataBase: new URL(getURL()),
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
  },
};

export default async function RootLayout({children}: PropsWithChildren) {
  const locale = await getLocale();

  const cookieStore = headers().get('cookie');
  const languageCookie = cookieStore
    ?.split('; ')
    .find((row) => row.startsWith('language='));
  const cookieLocale = languageCookie ? languageCookie.split('=')[1] : null;

  const messages = await getMessages({locale: cookieLocale ?? 'en'});

  return (
    <html lang={locale ?? 'en'}>
      <body className="bg-zuiso-50 text-zuiso-950 antialiased transition-colors duration-200 dark:bg-zuiso-950 dark:text-zuiso-50">
        <RQProvider>
          <JotaiProvider>
            <LanguageProvider messages={messages} cookieLocale={cookieLocale}>
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange>
                <Navbar />
                <main
                  id="skip"
                  className="md:min-h[calc(100dvh-5rem)] min-h-[calc(100dvh-4rem)]">
                  {children}
                </main>
                <Footer />
                <Suspense>
                  <Toaster />
                </Suspense>
              </ThemeProvider>
            </LanguageProvider>
          </JotaiProvider>
        </RQProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}

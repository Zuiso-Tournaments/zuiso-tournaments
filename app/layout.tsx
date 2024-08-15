import RQProvider from '@/components/ReactQueryClientProvider';
import Footer from '@/components/ui/Footer';
import Navbar from '@/components/ui/Navbar';
import {Toaster} from '@/components/ui/toaster';
import {getURL} from '@/lib/helpers';
import {Analytics} from '@vercel/analytics/react';
import {SpeedInsights} from '@vercel/speed-insights/next';
import {Provider as JotaiProvider} from 'jotai';
import type {Metadata} from 'next';
import type {PropsWithChildren} from 'react';
import {Suspense} from 'react';
import 'styles/main.css';

const title = 'Next.js Subscription Starter';
const description = 'Brought to you by Vercel, Stripe, and Supabase.';

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
  return (
    <html lang="en">
      <body className="bg-black">
        <Navbar />
        <main
          id="skip"
          className="md:min-h[calc(100dvh-5rem)] min-h-[calc(100dvh-4rem)]">
          <RQProvider>
            <JotaiProvider>{children}</JotaiProvider>
          </RQProvider>
        </main>
        <Footer />
        <Suspense>
          <Toaster />
        </Suspense>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}

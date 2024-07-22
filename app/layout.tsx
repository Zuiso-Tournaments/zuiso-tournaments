import {ReactQueryClientProvider} from '@/components/ReactQueryClientProvider';
import Footer from '@/components/ui/Footer';
import Navbar from '@/components/ui/Navbar';
import {Toaster} from '@/components/ui/Toasts/toaster';
import {getURL} from '@/lib/helpers';
import {Provider} from 'jotai';
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
          <ReactQueryClientProvider>
            <Provider>{children}</Provider>
          </ReactQueryClientProvider>
        </main>
        <Footer />
        <Suspense>
          <Toaster />
        </Suspense>
      </body>
    </html>
  );
}

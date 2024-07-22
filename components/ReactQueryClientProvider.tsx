'use client';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

interface PropsWithChildren {
  children: React.ReactNode;
}

export function ReactQueryClientProvider({children}: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

import {getExamples} from '@/features/example/lib/data';
import ExamplePage from '@/features/example/pages/ExamplePage';
import {HydrationBoundary, QueryClient, dehydrate} from '@tanstack/react-query';

export default async function Page() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['examples'],
    queryFn: getExamples,
  });

  return (
    // Neat! Serialization is now as easy as passing props.
    // HydrationBoundary is a Client Component, so hydration will happen there.
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ExamplePage />
    </HydrationBoundary>
  );
}

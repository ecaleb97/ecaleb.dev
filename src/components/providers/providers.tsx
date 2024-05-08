'use client';

import { ChildrenProps } from '@/types/types';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';

export function Providers({ children }: ChildrenProps) {
  const [queryClient] = useState(
    () => new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 6 * 1000,
        }
      }
    })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {/* <ReactQueryDevtools /> */}
      {children}
    </QueryClientProvider>
  );
}


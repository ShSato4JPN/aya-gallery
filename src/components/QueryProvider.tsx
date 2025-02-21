"use client";
import { getQueryClient } from "@/lib/get-query-client";

import { QueryClientProvider } from "@tanstack/react-query";

export function QueryProvider(props: { children: React.ReactNode }) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {props.children}
    </QueryClientProvider>
  );
}

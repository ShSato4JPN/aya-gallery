import TagList from "@/components/TagList";
import { fetchTagsList } from "@/lib/fetcher";
import { getQueryClient } from "@/lib/get-query-client";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";

export default async function Page() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["tags"],
    queryFn: () => fetchTagsList(),
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <TagList />
    </HydrationBoundary>
  );
}

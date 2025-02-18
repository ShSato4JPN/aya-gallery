import Gallery from "@/components/top/Gallery";
import { fetchAssetsData } from "@/lib/fetcher";
import { getQueryClient } from "@/lib/get-query-client";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";

export default async function Page({
  params,
}: { params: Promise<{ name: string }> }) {
  const queryClient = getQueryClient();
  const name = (await params).name;

  await queryClient.prefetchQuery({
    queryKey: ["assets"],
    queryFn: () => fetchAssetsData(name),
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <Gallery name={name} />
    </HydrationBoundary>
  );
}

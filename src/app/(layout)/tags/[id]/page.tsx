import TagWidthId from "@/components/top/TagsId";
import { fetchAssetsData, fetchTagData } from "@/lib/fetcher";
import { getQueryClient } from "@/lib/get-query-client";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const queryClient = getQueryClient();
  const id = (await params).id;
  const tagName = (await fetchTagData(id)).items.at(0)?.name || "";

  console.log(tagName);

  await queryClient.prefetchQuery({
    queryKey: [`tag-${id}`],
    queryFn: () => {
      fetchAssetsData(id);
    },
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <TagWidthId id={id} name={tagName} />
    </HydrationBoundary>
  );
}

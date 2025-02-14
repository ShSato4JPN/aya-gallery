import type { BlogPostsData } from "@/app/api/posts/route";
import HomeTop from "@/components/HomeTop";
import { fetchBlogPostData } from "@/lib/fetcher";
import { getQueryClient } from "@/lib/get-query-client";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";

export default async function Page() {
  const entryId = process.env.NEXT_PUBLIC_ENTRY_ID_TOP as string;
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["post"],
    queryFn: () => fetchBlogPostData(entryId),
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <HomeTop />
    </HydrationBoundary>
  );
}

import type { BlogPostData } from "@/app/api/posts/[id]/route";
import type { BlogPostsData } from "@/app/api/posts/route";
import queryString from "query-string";

export const fetchBlogPostData = async (
  entryId: string,
): Promise<BlogPostData> => {
  const res = await fetch(
    queryString.stringifyUrl({
      url: `${process.env.NEXT_PUBLIC_URL}/api/posts/${entryId}`,
    }),
  );

  return res.json();
};

export const fetchBlogPostsData = async ({
  limit,
  skip,
}: { limit?: number; skip?: number }): Promise<BlogPostsData> => {
  const res = await fetch(
    queryString.stringifyUrl({
      url: `${process.env.NEXT_PUBLIC_URL}/api/posts`,
      query: {
        limit: limit || 100,
        skip: skip || 0,
      },
    }),
  );

  return res.json();
};

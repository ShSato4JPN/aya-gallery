import type { AssetsData } from "@/app/api/assets/[tag]/route";
import type { BlogPostData } from "@/app/api/posts/[id]/route";
import type { BlogPostsData } from "@/app/api/posts/route";
import type { TagsData } from "@/app/api/tags/route";
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

export const fetchTagsList = async (): Promise<TagsData> => {
  const res = await fetch(
    queryString.stringifyUrl({
      url: `${process.env.NEXT_PUBLIC_URL}/api/tags`,
    }),
  );

  return res.json();
};

export const fetchAssetsData = async (tag: string): Promise<AssetsData> => {
  const res = await fetch(
    queryString.stringifyUrl({
      url: `${process.env.NEXT_PUBLIC_URL}/api/assets/${tag}`,
    }),
  );

  return res.json();
};

import type { AssetsData } from "@/app/api/assets/[tag]/route";
import type { PostEmailBody } from "@/app/api/email/route";
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
}: {
  limit?: number;
  skip?: number;
}): Promise<BlogPostsData> => {
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

export const fetchTagData = async (tag: string): Promise<TagsData> => {
  const res = await fetch(
    queryString.stringifyUrl({
      url: `${process.env.NEXT_PUBLIC_URL}/api/tags/${tag}`,
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

export const fetchAssetsData = async ({
  id,
  limit,
  skip,
}: {
  id: string;
  limit?: number;
  skip?: number;
}): Promise<AssetsData> => {
  const res = await fetch(
    queryString.stringifyUrl({
      url: `${process.env.NEXT_PUBLIC_URL}/api/assets/${id}`,
      query: {
        limit: limit || 100,
        skip: skip || 0,
      },
    }),
  );

  return res.json();
};

export const sendMail = async (data: PostEmailBody): Promise<void> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/email`, {
    method: "POST",
    body: JSON.stringify(data),
  });

  if (res.ok) {
    return Promise.resolve();
  }

  return Promise.reject();
};

"use client";

import type { TagsData } from "@/app/api/tags/route";
import { fetchTagsList } from "@/lib/fetcher";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { type JSX, useMemo } from "react";

type TagData = string;

export default function TagList(): JSX.Element {
  const { data, isFetching } = useQuery<TagsData>({
    queryKey: ["tags"],
    queryFn: () => fetchTagsList(),
  });

  const tags: TagData[] = useMemo(() => {
    return data?.items.map((v) => v.name) || [];
  }, [data]);

  const Loading = (): JSX.Element => {
    return <p>loading</p>;
  };

  return (
    <>
      {isFetching ? (
        <Loading />
      ) : (
        <div className="w-full h-full grid place-items-center">
          <div className="flex justify-center flex-wrap gap-3">
            {tags.map((tag) => (
              <div
                key={tag}
                className="p-3 bg-white rounded-lg shadow-md text-center"
              >
                <Link href={`/gallery/${tag}`}>{tag}</Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

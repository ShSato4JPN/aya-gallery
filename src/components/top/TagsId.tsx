"use client";

import type { AssetsData } from "@/app/api/assets/[tag]/route";
import Loading from "@/components/Loading";
import PhotoList from "@/components/PhotoList";
import { fetchAssetsData } from "@/lib/fetcher";
import type { PhotoData } from "@/types";
import type { AssetEntry } from "@/types/contentful";
import { useQuery } from "@tanstack/react-query";
import { type JSX, useMemo } from "react";
import { LuTag } from "react-icons/lu";

type TagsIdProps = {
  id: string;
  name: string;
};

export default function TagsId({ id, name }: TagsIdProps): JSX.Element {
  const { data, isFetching } = useQuery<AssetsData>({
    queryKey: ["tag-id"],
    queryFn: () => fetchAssetsData(id),
  });

  const assets: PhotoData[] = useMemo(() => {
    const assets = (data?.items as AssetEntry[]) || [];

    return assets.map((v) => ({
      title: v.fields.title,
      url: `https:${v.fields.file.url}`,
      size: {
        width: v.fields.file.details.image?.width || 0,
        height: v.fields.file.details.image?.height || 0,
      },
    }));
  }, [data]);

  return (
    <main className="w-full min-h-full flex flex-col items-center justify-center">
      {isFetching ? (
        <Loading />
      ) : (
        <>
          <div className="flex items-center justify-center gap-2 mt-7 mr-3 mb-7 text-2xl">
            <LuTag />
            <h1>{name}</h1>
          </div>
          <PhotoList photos={assets} />
        </>
      )}
    </main>
  );
}

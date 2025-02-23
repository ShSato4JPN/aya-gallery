"use client";

import { motion } from "framer-motion";
import type { AssetsData } from "@/app/api/assets/[tag]/route";
import Loading from "@/components/Loading";
import PhotoList from "@/components/PhotoList";
import { fetchAssetsData } from "@/lib/fetcher";
import type { PhotoData } from "@/types";
import type { AssetEntry } from "@/types/contentful";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { type JSX, useMemo } from "react";
import { LuTag } from "react-icons/lu";

type TagsIdProps = {
  id: string;
  name: string;
};

export default function TagsId({ id, name }: TagsIdProps): JSX.Element {
  const { data, isFetching } = useQuery<AssetsData>({
    queryKey: [`tag-${id}`],
    queryFn: () => fetchAssetsData({ id }),
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
    <main className="w-full h-full flex flex-col items-center">
      {isFetching ? (
        <div className="h-full flex justify-center items-center">
          <Loading />
        </div>
      ) : (
        <>
          <div className="flex items-center justify-center gap-2 mt-7 mr-3 mb-7 text-2xl">
            <motion.div
              animate={{
                x: [-5, 0, -5, 0, -5, 0],
              }}
              transition={{
                duration: 0.5,
                times: [0, 0.33, 0.66, 1],
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: 4,
                ease: "linear",
              }}
            >
              <Link href="/tags">
                <LuTag />
              </Link>
            </motion.div>
            <h1>{name}</h1>
          </div>
          <PhotoList photos={assets} />
        </>
      )}
    </main>
  );
}

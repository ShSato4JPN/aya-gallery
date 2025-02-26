"use client";

import ClipLoader from "react-spinners/ClipLoader";
import { motion } from "framer-motion";
import type { AssetsData } from "@/app/api/assets/[tag]/route";
import Loading from "@/components/Loading";
import PhotoList from "@/components/PhotoList";
import { fetchAssetsData } from "@/lib/fetcher";
import type { PhotoData } from "@/types";
import type { AssetEntry } from "@/types/contentful";
import { useInfiniteQuery } from "@tanstack/react-query";
import Link from "next/link";
import { type JSX, useEffect, useMemo, useState } from "react";
import { LuTag } from "react-icons/lu";
import { useInView } from "react-intersection-observer";

type TagsIdProps = {
  id: string;
  name: string;
};

const dataCount = 10;

export default function TagsId({ id, name }: TagsIdProps): JSX.Element {
  const [isFirstFetching, setIsFirstFetching] = useState<boolean>(true);
  const { ref, inView } = useInView();

  const { status, data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: [`infinite-tag-${id}`],
    queryFn: async ({
      pageParam,
    }): Promise<{
      data: AssetsData;
      previousPageNo: number;
      nextPageNo: number | null;
    }> => {
      const data = await fetchAssetsData({
        id,
        limit: dataCount,
        skip: pageParam * dataCount,
      });

      const total = data.total;
      const nextPageNo =
        (pageParam + 1) * dataCount < total ? pageParam + 1 : null;
      const previousPageNo = 0 < pageParam ? pageParam : pageParam - 1;

      return { data, previousPageNo, nextPageNo };
    },
    initialPageParam: 0,
    getPreviousPageParam: (firstPage) => firstPage.previousPageNo,
    getNextPageParam: (lastPage) => lastPage.nextPageNo,
  });

  const assets: PhotoData[] = useMemo(() => {
    const assets =
      (data?.pages.flatMap((v) => v.data.items) as AssetEntry[]) || [];

    return assets.map((v) => ({
      title: v.fields.title,
      url: `https:${v.fields.file.url}`,
      size: {
        width: v.fields.file.details.image?.width || 0,
        height: v.fields.file.details.image?.height || 0,
      },
    }));
  }, [data]);

  useEffect(() => {
    if (status === "success") {
      setIsFirstFetching(false);
    }
  }, [status]);

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView, hasNextPage]);

  return (
    <main className="w-full h-full flex flex-col items-center">
      {/* {JSON.stringify(data)} */}
      {isFirstFetching ? (
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
          {hasNextPage && (
            <div className="flex justify-center items-center m-5">
              <ClipLoader ref={ref} color="#858585" />
            </div>
          )}
        </>
      )}
    </main>
  );
}

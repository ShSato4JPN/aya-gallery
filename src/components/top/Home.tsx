"use client";

import type { BlogPostData } from "@/app/api/posts/[id]/route";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Opening from "@/components/Opening";
import { fetchBlogPostData } from "@/lib/fetcher";
import type { PhotoData } from "@/types";
import type { AssetEntry } from "@/types/contentful";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import Link from "next/link";
import { type JSX, useMemo, useState } from "react";
import Loading from "../Loading";
import PhotoList from "../PhotoList";

export default function Home(): JSX.Element {
  const entryId = process.env.NEXT_PUBLIC_ENTRY_ID_TOP as string;

  const [isOpeningEnd, setIsOpeningEnd] = useState<boolean>(false);

  const { data, isFetching } = useQuery<BlogPostData>({
    queryKey: ["post"],
    queryFn: () => fetchBlogPostData(entryId),
  });

  const photos: PhotoData[] = useMemo(() => {
    const photos = (data?.fields.photo as AssetEntry[]) || [];

    return photos.map((v) => ({
      title: v.fields.title,
      url: `https:${v.fields.file.url}`,
      size: {
        width: v.fields.file.details.image?.width || 0,
        height: v.fields.file.details.image?.height || 0,
      },
    }));
  }, [data]);

  const SeeMore = () => (
    <motion.div
      className="w-full flex justify-center items-center p-2 text-gray-500 mt-10 mb-2"
      animate={{ y: [-5, 5, -5] }}
      transition={{
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      }}
    >
      <Link
        href="/tags"
        className="cursor-pointer hover:scale-125 transition duration-300"
      >
        <span className="text-lg">see more {">>"}</span>
      </Link>
    </motion.div>
  );

  return (
    <div className="grid place-items-center w-dvw h-dvh">
      <Opening onOpeningEnd={() => setIsOpeningEnd(true)} />
      {isOpeningEnd && (
        <motion.div
          className="grid grid-rows-[auto,1fr,auto] h-full w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
        >
          <Header />
          {isFetching ? (
            <div className="flex justify-center items-center h-full">
              <Loading />
            </div>
          ) : (
            <main className="flex flex-col items-center justify-center">
              <div className="w-full max-w-[1600px]">
                <PhotoList photos={photos} />
                <SeeMore />
              </div>
            </main>
          )}
          <Footer />
        </motion.div>
      )}
    </div>
  );
}

"use client";

import type { BlogPostData } from "@/app/api/posts/[id]/route";
import Opening from "@/components/Opening";
import PhotoDialog from "@/components/PhotoDialog";
import { fetchBlogPostData } from "@/lib/fetcher";
import type { AssetEntry } from "@/types/contentful";
import { useQuery } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { type JSX, useMemo, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

export type PhotoData = {
  title: string;
  url: string;
  size: {
    width: number;
    height: number;
  };
};

export default function Home(): JSX.Element {
  const entryId = process.env.NEXT_PUBLIC_ENTRY_ID_TOP as string;
  const [selectedImage, setSelectedImage] = useState<PhotoData>();
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

  return (
    <>
      <Opening onOpeningEnd={() => setIsOpeningEnd(true)} />

      <div className="min-h-screen">
        {isOpeningEnd && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
          >
            <Header />
            <div className="grid grid-cols-2 gap-3 p-1 md:grid-cols-3 md:gap-10">
              {selectedImage && (
                <PhotoDialog
                  img={selectedImage}
                  onClose={() => setSelectedImage(undefined)}
                />
              )}
              <AnimatePresence>
                {photos.map((img, index) => (
                  <motion.div
                    key={img.url}
                    onClick={() => setSelectedImage(img)}
                    className="relative w-full max-w-md h-52 md:h-64 shadow-md overflow-hidden cursor-pointer"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      delay: index * 0.3,
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                  >
                    <Image
                      className="object-cover"
                      src={img.url}
                      alt={img.title}
                      fill={true}
                      quality={100}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            <motion.div
              className="w-full flex justify-center items-center p-2 text-gray-500 mt-10 mb-2"
              animate={{ y: [-5, 5, -5] }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              <Link href="/gallery" className="cursor-pointer">
                <span className="text-lg">see more {">>"}</span>
              </Link>
            </motion.div>
            <Footer />
          </motion.div>
        )}
      </div>
    </>
  );
}

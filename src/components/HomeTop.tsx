"use client";

import type { BlogPostData } from "@/app/api/posts/[id]/route";
import PhotoDialog from "@/components/PhotoDialog";
import { fetchBlogPostData } from "@/lib/fetcher";
import type { AssetEntry } from "@/types/contentful";
import { useQuery } from "@tanstack/react-query";
import { backOut, motion } from "framer-motion";
import Image from "next/image";
import { type JSX, useMemo, useState } from "react";

type PhotoData = {
  title: string;
  url: string;
  size: {
    width: number;
    height: number;
  };
};

export default function HomeTop(): JSX.Element {
  const entryId = process.env.NEXT_PUBLIC_ENTRY_ID_TOP as string;
  const [selectedImage, setSelectedImage] = useState<string>();

  const { data, isFetching } = useQuery<BlogPostData>({
    queryKey: ["post"],
    queryFn: () => fetchBlogPostData(entryId),
  });

  const photos: PhotoData[] = useMemo(() => {
    const photos = (data?.fields.photo as AssetEntry[]) || [];

    return photos.map((v) => ({
      title: v.fields.title,
      url: `https://${v.fields.file.url}`,
      size: {
        width: v.fields.file.details.image?.width || 0,
        height: v.fields.file.details.image?.height || 0,
      },
    }));
  }, [data]);

  console.log(photos);

  return (
    <div className="grid grid-cols-3 gap-10">
      {
        // 画像専用のダイアログを表示
        selectedImage && (
          <PhotoDialog
            source={selectedImage}
            onClose={() => setSelectedImage(undefined)}
          />
        )
      }
      {photos.map(({ url, title }, index) => (
        <motion.div
          key={url}
          onClick={() => setSelectedImage(url)}
          className="relative w-full max-w-md h-20 md:h-64 shadow-md overflow-hidden cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: index * 0.3,
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          <Image
            src={url}
            alt={title}
            className="object-cover"
            fill
            quality={100}
          />
        </motion.div>
      ))}
    </div>
  );
}

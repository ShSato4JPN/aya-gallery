"use client";

import type { AssetsData } from "@/app/api/assets/[tag]/route";
import { fetchAssetsData } from "@/lib/fetcher";
import type { AssetEntry } from "@/types/contentful";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import Image from "next/image";
import { type JSX, useMemo, useState } from "react";
import PhotoDialog from "../PhotoDialog";

type GalleryProps = {
  name: string;
};

type PhotoData = {
  title: string;
  url: string;
  size: {
    width: number;
    height: number;
  };
};

export default function Tag({ name }: GalleryProps): JSX.Element {
  const [selectedImage, setSelectedImage] = useState<PhotoData>();

  const { data, isFetching } = useQuery<AssetsData>({
    queryKey: ["assets"],
    queryFn: () => fetchAssetsData(name),
  });

  const photos: PhotoData[] = useMemo(() => {
    const photos = (data?.items as AssetEntry[]) || [];

    return photos.map((v) => ({
      title: v.fields.title,
      url: `https:${v.fields.file.url}`,
      size: {
        width: v.fields.file.details.image?.width || 0,
        height: v.fields.file.details.image?.height || 0,
      },
    }));
  }, [data]);

  const Loading = () => {
    return <p>loading...</p>;
  };

  console.table(photos);

  return (
    <>
      {isFetching ? (
        <Loading />
      ) : (
        <div className="w-full h-full grid place-items-center">
          <div className="grid grid-cols-2 gap-3 p-3 md:grid-cols-3 md:gap-7">
            {selectedImage && (
              <PhotoDialog
                img={selectedImage}
                onClose={() => setSelectedImage(undefined)}
              />
            )}
            {photos.map((img, index) => (
              <motion.div
                key={img.url}
                onClick={() => setSelectedImage(img)}
                className="relative w-full max-w-md h-52 md:h-64 overflow-hidden cursor-pointer rounded-sm"
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
          </div>
        </div>
      )}
    </>
  );
}

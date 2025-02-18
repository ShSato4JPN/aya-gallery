"use client";

import type { PhotoData } from "@/types";
import { motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";
import PhotoDialog from "./PhotoDialog";

type PhotoListProps = {
  photos: PhotoData[];
};

type PhotosLayoutProps = {
  group: PhotoData[];
  countStart: number;
  type: "left" | "right";
};

export default function PhotoList({ photos }: PhotoListProps) {
  const [selectedImage, setSelectedImage] = useState<PhotoData>();

  const groups = useMemo(() => {
    const g: PhotoData[][] = [];
    for (let i = 0; i < photos.length; i += 4) {
      g.push(photos.slice(i, i + 4));
    }

    return g;
  }, [photos]);

  const rendering = ({ group, countStart, type }: PhotosLayoutProps) => {
    const styles = {
      left: [
        "relative w-full h-52 col-start-1 col-end-3 md:h-full md:row-start-1 md:row-end-3 md:col-start-1 md:col-end-3",
        "relative w-full h-52 md:h-64 md:col-start-3 md:col-end-5",
        "relative w-full h-52 md:h-64",
        "relative w-full h-52 col-start-1 col-end-3 md:h-64 md:col-start-4 md:col-end-5",
      ],
      right: [
        "relative w-full h-52 md:h-64 md:col-start-1 md:col-end-3",
        "relative w-full h-53 md:h-full md:row-start-1 md:row-end-3 md:col-start-3 md:col-end-5",
        "relative w-full h-52 md:h-64",
        "relative w-full h-52 md:h-64",
      ],
    }[type];

    return (
      <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3">
        {group.map((photo, index) => (
          <motion.div
            key={`${photo.url}`}
            onClick={() => setSelectedImage(photo)}
            className={`${styles.at(index % 4)} overflow-hidden cursor-pointer rounded-md`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: (countStart + index) * 0.3,
              duration: 0.5,
              ease: "easeOut",
            }}
          >
            <Image
              className="object-cover hover:scale-110 transition duration-700"
              src={photo.url}
              alt={photo.title}
              fill={true}
              quality={100}
            />
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <ul className="flex flex-col p-2 gap-2 md:gap-3 md:p-3">
      {selectedImage && (
        <PhotoDialog
          img={selectedImage}
          onClose={() => setSelectedImage(undefined)}
        />
      )}
      {groups.map((photosData, index) => (
        <li key={photosData[0].url}>
          {rendering({
            group: photosData,
            countStart: index,
            type: index % 2 === 0 ? "left" : "right",
          })}
        </li>
      ))}
    </ul>
  );
}

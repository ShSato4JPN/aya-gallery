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
};

const itemCount = 5;

export default function PhotoList({ photos }: PhotoListProps) {
  const [selectedImage, setSelectedImage] = useState<PhotoData>();

  const groups = useMemo(() => {
    const group: PhotoData[][] = [];
    for (let i = 0; i < photos.length; i += itemCount) {
      group.push(photos.slice(i, i + itemCount));
    }

    return group;
  }, [photos]);

  const rendering = ({ group, countStart }: PhotosLayoutProps) => {
    const styles = [
      [
        "relative w-full h-80 col-start-1 col-end-3 md:h-full md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-3",
        "relative w-full h-52 col-start-1 col-end-3 md:h-64 md:col-start-3 md:col-end-5",
        "relative w-full h-52 col-start-1 col-end-2 md:h-64 md:col-start-5 md:col-end-6",
        "relative w-full h-52 col-start-2 col-end-3 md:h-64 md:col-start-3 md:col-end-4",
        "relative w-full h-52 col-start-1 col-end-3 md:h-64 md:col-start-4 md:col-end-6",
      ],
      [
        "relative w-full h-52 col-start-1 col-end-2 md:h-64 md:col-start-1 md:col-end-3 md:row-start-2 md:row-end-3",
        "relative w-full h-52 col-start-2 col-end-3 md:h-64 md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2",
        "relative w-full h-52 col-start-1 col-end-3 row-start-2 row-end-3 md:h-64 md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2",
        "relative w-full h-80 col-start-1 col-end-3 md:h-full md:col-start-3 md:col-end-5 md:row-start-1 md:row-end-3",
        "relative w-full h-52 col-start-1 col-end-3 md:h-full md:col-start-5 md:col-end-6 md:row-start-1 md:row-end-3",
      ],
      [
        "relative w-full h-80 col-start-1 col-end-3 md:h-full md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-3",
        "relative w-full h-52 h-52 col-start-1 col-end-2 md:h-64 md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-2",
        "relative w-full h-52 h-52 col-start-2 col-end-3 col-start-1 col-end-3 md:h-64 md:col-start-4 md:col-end-6 md:row-start-1 md:row-end-2",
        "relative w-full h-52 col-start-1 col-end-2 md:h-64 md:col-start-3 md:col-end-5 md:row-start-2 md:row-end-3",
        "relative w-full h-52 md:h-64 md:col-start-5 md:col-end-6 md:row-start-2 md:row-end-3",
      ],
      [
        "relative w-full h-52 col-start-1 col-end-3 md:h-full md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-3",
        "relative w-full h-52 col-start-1 col-end-2 md:h-64 md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2",
        "relative w-full h-52 col-start-2 col-end-3 md:h-64 md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-2",
        "relative w-full h-52 col-start-1 col-end-3 md:h-64 md:col-start-2 md:col-end-4 md:row-start-2 md:row-end-3",
        "relative w-full h-80 col-start-1 col-end-3 md:h-full md:col-start-4 md:col-end-6 md:row-start-1 md:row-end-3",
      ],
    ][countStart % 4];

    // 急遽レイアウト崩れ対応策に用意したスタイル
    const subStyles = [
      [
        "relative w-full h-80 col-start-1 col-end-3 md:h-[500px] md:col-start-2 md:col-end-5",
      ],
      [
        "relative w-full h-80 col-start-1 col-end-3 md:h-[400px] md:col-start-1 md:col-end-3",
        "relative w-full h-80 col-start-1 col-end-3 md:h-[400px] md:col-start-3 md:col-end-5",
      ],
      [
        "relative w-full h-80 col-start-1 col-end-3 md:h-full md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-3",
        "relative w-full h-80 col-start-1 col-end-2 md:h-64 md:col-start-3 md:col-end-5",
        "relative w-full h-80 col-start-2 col-end-3 md:h-64 md:col-start-3 md:col-end-4",
      ],
      [
        "relative w-full h-80 col-start-1 col-end-3 md:h-64 md:col-start-1 md:col-end-2",
        "relative w-full h-52 col-start-1 col-end-3 md:h-64 md:col-start-2 md:col-end-4",
        "relative w-full h-52 col-start-1 col-end-2 md:h-64 md:col-start-4 md:col-end-5",
        "relative w-full h-52 col-start-2 col-end-3 md:h-64 md:col-start-5 md:col-end-6",
      ],
    ][group.length - 1];

    if (group.length < 5) {
      return (
        <div className="grid grid-cols-2 gap-2 md:grid-cols-5 md:gap-3">
          {group.map((photo, index) => (
            <motion.div
              key={`${photo.url}`}
              onClick={() => setSelectedImage(photo)}
              className={`${subStyles.at(
                index % itemCount,
              )} overflow-hidden cursor-pointer rounded-md`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: (countStart + index) * 0.2,
                duration: 0.5,
                ease: "easeOut",
              }}
            >
              <Image
                className="object-cover hover:scale-110 hover:brightness-125 transition duration-700"
                src={photo.url}
                alt={photo.title}
                fill={true}
                quality={100}
              />
            </motion.div>
          ))}
        </div>
      );
    }

    return (
      <div className="grid grid-cols-2 gap-2 md:grid-cols-5 md:gap-3">
        {group.map((photo, index) => (
          <motion.div
            key={`${photo.url}`}
            onClick={() => setSelectedImage(photo)}
            className={`${styles.at(
              index % itemCount,
            )} overflow-hidden cursor-pointer rounded-md`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: (countStart + index) * 0.2,
              duration: 0.5,
              ease: "easeOut",
            }}
          >
            <Image
              className="object-cover hover:scale-110 hover:brightness-125 transition duration-700"
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
    <section className="w-full">
      <PhotoDialog
        img={selectedImage}
        onClose={() => setSelectedImage(undefined)}
      />
      <ul className="flex flex-col p-2 gap-2 md:p-3 md:gap-3">
        {groups.map((photosData, index) => (
          <li key={photosData[0].url}>
            {rendering({
              group: photosData,
              countStart: index,
            })}
          </li>
        ))}
      </ul>
    </section>
  );
}

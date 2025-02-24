"use client";

import type { PhotoData } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { type JSX, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { TbArrowBackUp } from "react-icons/tb";
import { Button } from "./ui/button";
import Link from "next/link";

type PhotoDialogProps = {
  img: PhotoData | undefined;
  onClose: () => void;
};

export default function PhotoDialog({
  img,
  onClose,
}: PhotoDialogProps): JSX.Element {
  useEffect(() => {
    if (img === undefined) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [img]);

  return (
    <AnimatePresence>
      {img && (
        <motion.div
          className="fixed top-0 left-0 w-dvw h-dvh flex justify-center items-center py-4 px-2 bg-slate-800/70 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="relative w-full h-full">
            <Image
              src={img.url}
              className="object-contain rounded-md"
              fill={true}
              quality={100}
              alt={img.title}
            />
            <div className="absolute inset-0 flex justify-between w-full h-full">
              <Button
                variant={"outline"}
                onClick={onClose}
                className="bg-gray-800 rounded-full"
              >
                <TbArrowBackUp className="text-white" />
              </Button>
              <Button variant={"outline"} className="bg-gray-800 rounded-full">
                <Link href={img.url} target="_blank" rel="noopener noreferrer">
                  <FiExternalLink className="text-white" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

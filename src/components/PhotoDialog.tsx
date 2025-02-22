"use client";

import type { PhotoData } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { type JSX, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Button } from "./ui/button";

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
          className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center p-5 bg-slate-900/70 z-50"
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
            <Button
              variant={"outline"}
              onClick={onClose}
              className="absolute top-3 right-3 rounded-full p-2 bg-white"
            >
              <AiOutlineClose />
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

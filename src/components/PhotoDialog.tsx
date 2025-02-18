"use client";

import type { PhotoData } from "@/types";
import { motion } from "framer-motion";
import Image from "next/image";
import { type JSX, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Button } from "./ui/button";

type PhotoDialogProps = {
  img: PhotoData;
  onClose: () => void;
};

export default function PhotoDialog({
  img,
  onClose,
}: PhotoDialogProps): JSX.Element {
  useEffect(() => {
    // スクロールを無効化
    document.body.style.overflow = "hidden";
    // クリーンアップ関数でスクロールを再度有効化
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-screen h-screen z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="w-full h-full p-2 bg-slate-900/50">
        <motion.div
          className="fixed top-3 right-3 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.4, delay: 0.4, ease: "easeIn" }}
        >
          <Button variant={"outline"} onClick={onClose}>
            <AiOutlineClose />
          </Button>
        </motion.div>
        <motion.div
          className="relative flex justify-center items-center w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.4, delay: 0.4, ease: "easeIn" }}
        >
          <Image
            src={img.url}
            className="object-contain"
            fill={true}
            quality={100}
            alt={img.title}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

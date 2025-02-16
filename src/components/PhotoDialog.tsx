"use client";

import type { PhotoData } from "@/types";
import { motion } from "framer-motion";
import Image from "next/image";
import type { JSX } from "react";
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
  return (
    <motion.div
      className="fixed top-0 left-0 w-screen h-screen z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
    >
      <div className="w-full h-full p-6 bg-gray-100/70">
        <div className="fixed top-5 right-5">
          <Button variant={"outline"} onClick={onClose}>
            <AiOutlineClose />
          </Button>
        </div>
        <div className="relative flex justify-center items-center w-full h-full">
          <Image
            src={img.url}
            className="object-contain"
            fill={true}
            quality={100}
            alt={img.title}
          />
        </div>
      </div>
    </motion.div>
  );
}

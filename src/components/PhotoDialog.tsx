"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { JSX } from "react";
import { Button } from "./ui/button";

import { AiOutlineClose } from "react-icons/ai";

type PhotoDialogProps = {
  source: string;
  onClose: () => void;
};

export default function PhotoDialog({
  source,
  onClose,
}: PhotoDialogProps): JSX.Element {
  return (
    <motion.div
      className="fixed top-0 left-0 w-screen h-screen z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
    >
      <div className="w-full h-full p-8 bg-black bg-opacity-75">
        <div className="flex flex-col w-full h-full">
          <div className="flex justify-end">
            <Button variant={"outline"} onClick={onClose}>
              <AiOutlineClose />
            </Button>
          </div>
          <div className="relative flex justify-center items-center w-full h-full">
            <Image
              src={source}
              className="object-contain"
              fill={true}
              quality={100}
              alt="A photo"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

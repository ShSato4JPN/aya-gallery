"use client";

import "pattern.css";
import { siteName } from "@/lib/utils";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import DotLayout from "./DotLayout";

type OpeningProps = {
  onOpeningEnd: () => void;
};

const parentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 1 },
  },
  exit: { opacity: 0, transition: { duration: 1.5, ease: "easeOut" } },
};

const childVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Opening({ onOpeningEnd }: OpeningProps) {
  const [isClose, setIsClose] = useState<boolean>(false);

  return (
    <AnimatePresence>
      {!isClose && (
        <motion.div
          className="fixed top-0 left-0 w-dvw h-dvh"
          variants={parentVariants}
          initial="hidden"
          animate="visible"
          onAnimationComplete={() => {
            onOpeningEnd();
            setIsClose(true);
          }}
          exit="exit"
        >
          <DotLayout>
            <div className="w-full h-dvh flex flex-col justify-center items-center space-y-3">
              <motion.p
                variants={childVariants}
                className="text-2xl md:text-3xl"
              >
                Welcome to
              </motion.p>
              <motion.p
                variants={childVariants}
                className="text-3xl md:text-4xl"
              >
                {siteName}
              </motion.p>
            </div>
          </DotLayout>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

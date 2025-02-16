"use client";
import { siteName } from "@/lib/utils";
import { delay, motion } from "framer-motion";
import { useEffect, useState } from "react";

type MobileOpeningProps = {
  onAnimEnd: () => void;
};

const parentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 1 },
  },
};

const childVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function MobileOpening({ onAnimEnd }: MobileOpeningProps) {
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);

  useEffect(() => {
    if (0 < window.scrollY) {
      setHasScrolled(true);
    }
  }, []);

  const handleAnimationComplete = () => {
    if (!hasScrolled) {
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
      onAnimEnd();
      setHasScrolled(true);
    }
  };

  return (
    <motion.div
      variants={parentVariants}
      initial="hidden"
      animate="visible"
      onAnimationComplete={handleAnimationComplete}
    >
      <div className="w-full h-dvh flex flex-col justify-center items-center space-y-3">
        <motion.p variants={childVariants} className="text-2xl">
          Welcome to
        </motion.p>
        <motion.p variants={childVariants} className="text-3xl">
          {siteName}
        </motion.p>
      </div>
    </motion.div>
  );
}

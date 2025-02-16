"use client";

import DefaultOpening from "@/components/DefaultOpening";
import MobileOpening from "@/components/MobileOpening";
import { Desktop, Mobile, Tablet } from "@/components/Responsive";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

type OpeningProps = {
  onOpeningEnd: () => void;
};

export default function Opening({ onOpeningEnd }: OpeningProps) {
  const [isClose, setIsClose] = useState<boolean>(false);

  return (
    <>
      <Mobile>
        {/* スマホ用オープニング */}
        <MobileOpening onAnimEnd={onOpeningEnd} />
      </Mobile>
      <Tablet>
        {/* スマホ用オープニング */}
        <MobileOpening onAnimEnd={onOpeningEnd} />
      </Tablet>
      {/* デフォルトオープニング */}
      <Desktop>
        <AnimatePresence>
          {!isClose && (
            <DefaultOpening
              onAnimEnd={onOpeningEnd}
              onClose={() => setIsClose(true)}
            />
          )}
        </AnimatePresence>
      </Desktop>
    </>
  );
}

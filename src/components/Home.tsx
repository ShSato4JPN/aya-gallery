"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { backOut, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import type { JSX } from "react";

export default function Home(): JSX.Element {
  const [selectedImage, setSelectedImage] = useState<string>();

  const photoUrls = [
    "https://images.ctfassets.net/t8pgof6z62g7/1IRb3FjZp40gL9uFA2LRqA/7b6c33970f6268987aa0c645686425c8/ai-generated-8073639_640.png",
    "https://images.ctfassets.net/t8pgof6z62g7/1Pggl2zuuhxfdbwtcOKWQ0/e99d3cca8db09377ac05a1cd4685300f/PXL_20240420_104459657.jpg",
    "https://images.ctfassets.net/t8pgof6z62g7/2Tz5tRqp70IAyPn3n2JvDu/7d745a05bafbee1835e01aec99d9d843/My-Balaguer-Custom-Guitar.jpg",
    "https://images.ctfassets.net/t8pgof6z62g7/3UjbXHXNyqgEvVV0kJCcUx/a7e36431a5ea1b9bbbe440791a8335eb/tanka-stadium.webp",
    "https://images.ctfassets.net/t8pgof6z62g7/4CarfDr2EmxHzgzzzO5D7o/7b1bd12b79b87a0387b5d0e8afad60f4/Hydration_failed_.png",
    "https://images.ctfassets.net/t8pgof6z62g7/4ryRr5Wv8LKZh3irb3Iui3/7ef54654a93e53a1ae825f602dcf2382/sakura.jpg",
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {photoUrls.map((url, index) => (
        <motion.div
          key={url}
          className="relative w-full max-w-md h-20 md:h-64 shadow-md overflow-hidden"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.5, duration: 0.5, ease: backOut }}
        >
          <Dialog>
            <DialogTrigger onClick={() => setSelectedImage(url)}>
              <Image
                src={url}
                alt="A photo"
                className="object-cover scale-95"
                fill
                quality={100}
              />
            </DialogTrigger>
            <DialogContent>
              <VisuallyHidden>
                <DialogHeader>
                  <DialogTitle />
                  <DialogDescription />
                </DialogHeader>
              </VisuallyHidden>
              {selectedImage && (
                <div className="position-relative w-full h-96">
                  <Image
                    src={selectedImage}
                    alt="Selected photo"
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    fill
                    quality={100}
                  />
                </div>
              )}
            </DialogContent>
          </Dialog>
        </motion.div>
      ))}
    </div>
  );
}

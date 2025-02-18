"use client";

import { menuLinks, siteName } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Hamburger from "hamburger-react";
import Link from "next/link";
import { type JSX, useState } from "react";

export default function HamburgerNav(): JSX.Element {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <>
      <div className="fixed top-1 right-1 z-50">
        <div className="bg-slate-100/50 rounded-xl">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            rounded
            direction="right"
          />
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 left-0 w-screen h-screen z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, backdropFilter: "blur(10px)" }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
            }}
          >
            <div className="flex flex-col justify-center items-center h-full bg-white/70">
              <div className="flex flex-col space-y-8">
                {menuLinks.map(({ href, label }) => (
                  <Link key={href} href={href}>
                    <p className="text-lg text-gray-800 text-center">{label}</p>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

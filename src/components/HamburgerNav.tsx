"use client";

import { menuLinks, siteName } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Hamburger from "hamburger-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type JSX, useEffect, useState } from "react";

export default function HamburgerNav(): JSX.Element {
  const pathname = usePathname();
  const [isOpen, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // biome-ignore lint: コードとしては問題がないため
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

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
              duration: 0.3,
              ease: "easeIn",
            }}
          >
            <div className="flex flex-col justify-center items-center h-full bg-white/70">
              <div className="flex flex-col space-y-8">
                {menuLinks.map(({ href, label }) => {
                  const isActive = pathname === href;

                  return (
                    <Link key={href} href={href}>
                      <p
                        className={`text-lg text-gray-800 text-center ${isActive && "border-b-2 border-gray-800"}`}
                      >
                        {label}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

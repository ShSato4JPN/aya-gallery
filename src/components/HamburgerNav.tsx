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
        <div className="bg-slate-100/60 rounded-3xl">
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
          <motion.nav
            className="fixed top-0 left-0 w-screen h-screen z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, backdropFilter: "blur(10px)" }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeIn",
            }}
          >
            <div className="h-full grid place-items-center bg-white/70">
              <div className="flex flex-col items-center space-y-8">
                {menuLinks.map(({ href, label }) => {
                  const isActive = `/${pathname.split("/").at(1)}` === href;

                  return (
                    <Link key={href} href={href}>
                      <p
                        className={`text-lg ext-center ${
                          isActive && "text-brand text-xl"
                        }`}
                      >
                        {label}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";

import { useEffect, useMemo, useState } from "react";

import Hamburger from "hamburger-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header(): JSX.Element {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isOpen]);

  const menuItems = useMemo(
    () => [
      { key: "gallery", label: "GALLERY", path: "/gallery" },
      {
        key: "about",
        label: "ABOUT",
        path: "/about",
      },
      {
        key: "sns",
        label: "SNS",
        path: "/sns",
      },
      { key: "contact", label: "CONTACT", path: "/contact" },
    ],
    [],
  );

  // 通常メニュー
  const normalItems = useMemo<JSX.Element[]>(
    () =>
      menuItems.map((item) => (
        <div
          className="px-6 py-1 md:text-base lg:text-xl grid place-items-end relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-black hover:after:w-full after:transition-all after:duration-300"
          key={item.key}
        >
          <Link href={item.path}>{item.label}</Link>
        </div>
      )),
    [menuItems],
  );

  //　ハンバーガーメニュー
  const hamburgerItems = useMemo<JSX.Element[]>(
    () =>
      menuItems.map((item) => (
        <div
          className="py-3 text-xl grid place-items-center w-full h-full"
          key={item.key}
        >
          <Link href={item.path}>
            {pathname === item.path ? (
              <span className="underline underline-offset-4">{item.label}</span>
            ) : (
              <div>{item.label}</div>
            )}
          </Link>
        </div>
      )),
    [menuItems, pathname],
  );

  return (
    <header className="p-3 w-full h-full flex flex-row items-center justify-between">
      <Link href="/">
        <div className="text-3xl md:text-4xl lg:text-5xl font-bold cursor-pointer">
          Aya-Gallery
        </div>
      </Link>
      <nav className="hidden md:flex h-full gap-2">{normalItems}</nav>
      <div className="md:hidden relative z-50">
        <Hamburger toggled={isOpen} toggle={setIsOpen} />
      </div>
      {isOpen && (
        <div className="fixed w-screen h-screen top-0 left-0 flex items-center justify-center z-40 bg-background">
          <nav className="flex flex-col gap-5">{hamburgerItems}</nav>
        </div>
      )}
    </header>
  );
}

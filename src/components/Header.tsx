"use client";
import type { JSX } from "react";

import Link from "next/link";

import HamburgerMenu from "@/components/HamburgerMenu";

export const menuList = [
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
];

export default function Header(): JSX.Element {
  // 通常メニュー
  const NormalMenu = (
    <ol className="flex flex-row gap-2">
      {menuList.map((item) => (
        <li
          className="px-6 py-1 md:text-xs lg:text-sm grid place-items-end relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-black hover:after:w-full after:transition-all after:duration-300"
          key={item.key}
        >
          <Link href={item.path}>{item.label}</Link>
        </li>
      ))}
    </ol>
  );

  return (
    <header className="w-full py-3 md:py-5 px-4 flex items-center justify-between">
      <Link href="/">
        <div className="text-3xl md:text-4xl lg:text-5xl cursor-pointer">
          Aya-Gallery
        </div>
      </Link>
      <nav className="md:flexf">{NormalMenu}</nav>
      <nav className="md:hidden">
        <HamburgerMenu />
      </nav>
    </header>
  );
}

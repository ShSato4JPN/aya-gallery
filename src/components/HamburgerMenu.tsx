import { useEffect, useState } from "react";

import Hamburger from "hamburger-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { menuList } from "@/components/Header";

export default function HamburgerMenu(): JSX.Element {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname, setIsOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isOpen]);

  const menuItems = (
    <ol className="flex flex-col gap-4">
      {menuList.map((item) => (
        <li className="text-center text-base" key={item.key}>
          <Link href={item.path}>{item.label}</Link>
        </li>
      ))}
    </ol>
  );

  return (
    <>
      <div className="relative z-50">
        <Hamburger toggled={isOpen} toggle={setIsOpen} />
      </div>
      {isOpen && (
        <div className="fixed top-0 left-0 h-screen w-screen flex flex-col bg-[background] align-center justify-center gap-3">
          <div className="text-center text-2xl mb-4">Aya-Gallery</div>
          {menuItems}
        </div>
      )}
    </>
  );
}

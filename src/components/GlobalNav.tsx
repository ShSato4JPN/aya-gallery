"use client";

import SnsIcons from "@/components/SnsIcons";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { menuLinks, siteName } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { JSX } from "react";

export default function GlobalNav(): JSX.Element {
  const pathname = usePathname();

  return (
    <nav className="w-full py-5">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold mr-12 hover:animate-bounce transition duration-300">
            <Link href="/">{siteName}</Link>
          </h1>
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-10">
              {menuLinks.map(({ href, label }) => {
                const isActive = pathname === href;

                return (
                  <NavigationMenuItem key={href}>
                    <NavigationMenuLink href={href}>
                      <p
                        className={`relative pt-2 after:block after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full ${isActive && "border-b-2 border-gray-800 after:bg-transparent"}`}
                      >
                        {label}
                      </p>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <SnsIcons />
      </div>
    </nav>
  );
}

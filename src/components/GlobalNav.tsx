import SnsIcons from "@/components/SnsIcons";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { menuLinks, siteName } from "@/lib/utils";
import Link from "next/link";
import type { JSX } from "react";

export default function GlobalNav(): JSX.Element {
  return (
    <nav className="w-full py-5">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold mr-12">
            <Link href="/">{siteName}</Link>
          </h1>
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-10">
              {menuLinks.map(({ href, label }) => (
                <NavigationMenuItem key={href}>
                  <NavigationMenuLink href={href}>{label}</NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <SnsIcons />
      </div>
    </nav>
  );
}

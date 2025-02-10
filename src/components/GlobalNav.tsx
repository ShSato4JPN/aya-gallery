import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import type { JSX } from "react";

const GlobalNav = (): JSX.Element => {
  const siteName = "Aya-Gallery";

  return (
    <nav className="w-full bg-white py-5">
      <div className="container mx-auto px-4 flex items-center">
        <h1 className="text-3xl font-bold mr-12">
          <Link href="/">{siteName}</Link>
        </h1>
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-10">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/"
                  className="relative after:block after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
                >
                  Gallery
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/about"
                  className="relative after:block after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
                >
                  About
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/contact"
                  className="relative after:block after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
                >
                  Contact
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
};

export default GlobalNav;

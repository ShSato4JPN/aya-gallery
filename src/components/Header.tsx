import GlobalNav from "@/components/GlobalNav";
import HamburgerNav from "@/components/HamburgerNav";
import type { JSX } from "react";

export default function Header(): JSX.Element {
  return (
    <header className="md:border-b border-gray-300">
      <div className="md:hidden">
        <HamburgerNav />
      </div>
      <div className="hidden md:block">
        <GlobalNav />
      </div>
    </header>
  );
}

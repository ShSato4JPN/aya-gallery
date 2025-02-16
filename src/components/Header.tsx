"use client";

import GlobalNav from "@/components/GlobalNav";
import HamburgerNav from "@/components/HamburgerNav";
import { Desktop, Mobile, Tablet } from "@/components/Responsive";
import type { JSX } from "react";

export default function Header(): JSX.Element {
  return (
    <header className="md:border-b border-gray-300">
      <Mobile>
        <HamburgerNav />
      </Mobile>
      <Tablet>
        <HamburgerNav />
      </Tablet>
      <Desktop>
        <GlobalNav />
      </Desktop>
    </header>
  );
}

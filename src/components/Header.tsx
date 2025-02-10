import GlobalNav from "@/components/GlobalNav";
import type { JSX } from "react";

export default function Header(): JSX.Element {
  return (
    <header className="border-b border-gray-300">
      <GlobalNav />
    </header>
  );
}

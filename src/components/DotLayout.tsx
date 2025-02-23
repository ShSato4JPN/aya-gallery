import "pattern.css";
import type { ReactNode } from "react";

type DotLayoutProps = {
  children: ReactNode;
};

export default function DotLayout({ children }: DotLayoutProps) {
  return (
    <div className="pattern-dots-md ">
      <div className="bg-background">{children}</div>
    </div>
  );
}

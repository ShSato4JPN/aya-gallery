"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="grid place-items-center w-screen h-screen">
      <div className="grid grid-rows-[auto,1fr,auto] w-full max-w-[1300px] h-full">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
}

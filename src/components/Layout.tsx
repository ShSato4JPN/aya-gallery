import Footer from "@/components/Footer";
import Header from "@/components/Header";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="grid place-items-center w-dvw h-dvh">
      <div className="grid grid-rows-[auto,1fr,auto] w-full max-w-[1980px] h-full">
        <Header />
        <main className="w-full">{children}</main>
        <Footer />
      </div>
    </div>
  );
}

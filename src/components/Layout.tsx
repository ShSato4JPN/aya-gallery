import Footer from "@/components/Footer";
import Header from "@/components/Header";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="grid place-items-center min-h-dvh">
      <div className="grid grid-rows-[auto,1fr,auto] h-full w-full">
        <Header />
        <main className="flex flex-col items-center justify-center">
          <div className="w-full max-w-[1600]">{children}</div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

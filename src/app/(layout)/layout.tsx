import Layout from "@/components/Layout";
import "../globals.css";

export default function SubLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Layout>{children}</Layout>;
}

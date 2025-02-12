import Layout from "@/components/Layout";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { QueryProvider } from "@/components/QueryProvider";

const kiwiMaruLight = localFont({
  src: "./KiwiMaru-Light.ttf",
  variable: "--font-kiwimaru-Light",
  weight: "300",
});

const kiwiMaruMedium = localFont({
  src: "./KiwiMaru-Medium.ttf",
  variable: "--font-kiwimaru-medium",
  weight: "400",
});

const kiwiMaruRegular = localFont({
  src: "./KiwiMaru-Regular.ttf",
  variable: "--font-kiwimaru-regular",
  weight: "500",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${kiwiMaruRegular.className} ${kiwiMaruLight.variable} ${kiwiMaruMedium.variable} ${kiwiMaruRegular.variable}`}
      >
        <QueryProvider>
          <Layout>{children}</Layout>
        </QueryProvider>
      </body>
    </html>
  );
}

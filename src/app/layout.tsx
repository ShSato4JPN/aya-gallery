import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { QueryProvider } from "@/components/QueryProvider";
import DotLayout from "@/components/DotLayout";
import "./globals.css";
import "pattern.css";
import dayjs from "dayjs";

dayjs.locale("ja");

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
  applicationName: "Aya-Gallery",
  description: "Photo Posting Blog by AYA",
  title: {
    default: "Aya-Gallery",
    template: "%s - Aya-Gallery",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`text-thinBlack ${kiwiMaruRegular.className} ${kiwiMaruLight.variable} ${kiwiMaruMedium.variable} ${kiwiMaruRegular.variable}`}
      >
        <QueryProvider>
          <DotLayout>{children}</DotLayout>
        </QueryProvider>
      </body>
    </html>
  );
}

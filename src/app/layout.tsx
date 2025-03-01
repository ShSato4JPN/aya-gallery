import DotLayout from "@/components/DotLayout";
import { QueryProvider } from "@/components/QueryProvider";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "pattern.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import "dayjs/locale/ja";

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
  openGraph: {
    title: "Aya-Gallery",
    description: "Photo Posting Blog by AYA",
    siteName: "Aya-Gallery",
    images: {
      url: `${process.env.NEXT_PUBLIC_URL}/og-image.webp`,
      alt: "Aya-Gallery thumbnail",
      width: "1280",
      height: "864",
    },
  },
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
      <GoogleAnalytics gaId="G-C32DDB4QRD" />
    </html>
  );
}

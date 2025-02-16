"use client";

import type { JSX } from "react";

import dayjs from "dayjs";

export default function Footer(): JSX.Element {
  const now = dayjs();
  const copyright = `© ${now.year()} - Copyright Aya-Gallery, All Rights Reserved.`;

  return (
    <footer className="py-4 text-center">
      <span className="text-xs md:text-md text-gray-500">{copyright}</span>
    </footer>
  );
}

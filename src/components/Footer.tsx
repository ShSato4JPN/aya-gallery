"use client";
import dayjs from "dayjs";

export default function Footer(): JSX.Element {
  const now = dayjs();
  const copyright = `© ${now.year()} - Copyright Aya-Gallery, All Rights Reserved.`;

  return (
    <div className="py-4 text-center">
      <footer>
        <span className="text-base">{copyright}</span>
      </footer>
    </div>
  );
}

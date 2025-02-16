import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const siteName = "Aya-Gallery";

export const menuLinks = [
  { href: "/gallery", label: "Gallery" },
  { href: "/tag", label: "Tag" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

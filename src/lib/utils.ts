import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const siteName = "Aya-Gallery";

export const menuLinks = [
  { href: "/", label: "Home" },
  { href: "/tags", label: "Tags" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

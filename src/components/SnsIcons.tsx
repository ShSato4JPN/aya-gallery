import Link from "next/link";
import { FaThreads, FaInstagram } from "react-icons/fa6";
import { RiBlueskyLine } from "react-icons/ri";

export default function SnsIcons() {
  const snsList = [
    {
      url: "https://world-of-zono.com/about",
      icon: <FaThreads className="text-3xl" />,
    },
    {
      url: "https://world-of-zono.com/contact",
      icon: <FaInstagram className="text-3xl" />,
    },
    {
      url: "https://world-of-zono.com",
      icon: <RiBlueskyLine className="text-3xl" />,
    },
  ];

  return (
    <div className="flex justify-center md:justify-start space-x-5 pt-1">
      {snsList.map(({ url, icon }) => (
        <Link
          key={url}
          href={url}
          className="hover:animate-bounce hover:text-brand transition duration-300"
        >
          {icon}
        </Link>
      ))}
    </div>
  );
}

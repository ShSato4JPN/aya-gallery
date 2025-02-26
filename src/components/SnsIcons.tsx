import Link from "next/link";
import { FaThreads, FaInstagram } from "react-icons/fa6";
import { RiBlueskyLine } from "react-icons/ri";

export default function SnsIcons() {
  const snsList = [
    {
      url: "https://www.threads.net/@abcde___8___",
      icon: <FaThreads className="text-3xl" />,
    },
    {
      url: "https://www.instagram.com/abcde___8___/",
      icon: <FaInstagram className="text-3xl" />,
    },
    {
      url: "https://bsky.app/profile/ayaaaaa-25.bsky.social",
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

import Link from "next/link";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function SnsIcons() {
  const snsList = [
    {
      url: "1",
      icon: <FaXTwitter className="text-3xl" />,
    },
    {
      url: "2",
      icon: <FaInstagram className="text-3xl" />,
    },
    {
      url: "3",
      icon: <FaFacebook className="text-3xl" />,
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

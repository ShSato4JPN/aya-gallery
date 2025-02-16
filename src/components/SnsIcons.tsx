import Link from "next/link";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function SnsIcons() {
  const snsList = [
    {
      url: "",
      icon: <FaXTwitter className="text-3xl" />,
    },
    {
      url: "",
      icon: <FaInstagram className="text-3xl" />,
    },
    {
      url: "",
      icon: <FaFacebook className="text-3xl" />,
    },
  ];

  return (
    <div className="flex justify-center md:justify-start space-x-5 pt-1">
      {snsList.map(({ url, icon }) => (
        <Link key={url} href={url}>
          {icon}
        </Link>
      ))}
    </div>
  );
}

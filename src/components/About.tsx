import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

import type { JSX } from "react";
import SnsIcons from "./SnsIcons";

export default function About(): JSX.Element {
  return (
    <div className="w-full h-full grid place-items-center p-5">
      <div className="w-full md:w-3/4 flex flex-col md:flex-row justify-center items-center">
        <Avatar className="w-32 h-32 mb-6 md:w-40 md:h-40 md:mb-0 md:mr-6 rounded-full shadow-md">
          <AvatarImage
            src="https://images.ctfassets.net/t8pgof6z62g7/7fjsWYILCzV8pAQ2MTdIQY/c93dfc8b37347951d8b16c3f4eaa63cc/S__69869591_0.jpg"
            alt="Photographer Avatar"
          />
          <AvatarFallback>Aya</AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-center space-y-5">
          <div className="w-full text-center md:text-left">
            <span className="text-3xl font-bold">Aya</span>
          </div>
          <div>
            <p className="text-gray-700 leading-relaxed">
              福岡県在住のフォトグラファーです。主に風景写真を撮影しています。撮影地は主に福岡県内ですが、九州各地にも足を運んでいます。
            </p>
          </div>
          <div className="w-full flex justify-center md:justify-start">
            <SnsIcons />
          </div>
        </div>
      </div>
    </div>
  );
}

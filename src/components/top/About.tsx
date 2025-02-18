import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import SnsIcons from "@/components/SnsIcons";
import type { JSX } from "react";

export default function About(): JSX.Element {
  return (
    <div className="w-full h-full grid place-items-center p-4">
      <div className="md:w-2/5 flex flex-col justify-center items-center">
        <Avatar className="w-32 h-32 mb-6 md:w-44 md:h-44 rounded-full shadow-md">
          <AvatarImage
            src="https://images.ctfassets.net/t8pgof6z62g7/7fjsWYILCzV8pAQ2MTdIQY/c93dfc8b37347951d8b16c3f4eaa63cc/S__69869591_0.jpg"
            alt="Photographer Avatar"
          />
          <AvatarFallback>Aya</AvatarFallback>
        </Avatar>
        <div className="mb-5">
          <p className="text-3xl font-bold">Aya</p>
        </div>
        <div className="mb-3">
          <p className="text-gray-700 leading-relaxed">
            福岡県在住のフォトグラファーです。主に風景写真を撮影しています。撮影地は主に福岡県内ですが、九州各地にも足を運んでいます。
          </p>
        </div>
        <div className="mt-3">
          <SnsIcons />
        </div>
      </div>
    </div>
  );
}

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

import type { JSX } from "react";

export default function About(): JSX.Element {
  return (
    <div className="flex flex-col justify-center items-center  space-y-6">
      <Card className="max-w-4xl w-full p-6 border-none shadow-none">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="flex justify-center">
            <Avatar className="w-32 h-32 md:w-40 md:h-40 rounded-full shadow-md">
              <AvatarImage
                src="https://images.ctfassets.net/t8pgof6z62g7/7fjsWYILCzV8pAQ2MTdIQY/c93dfc8b37347951d8b16c3f4eaa63cc/S__69869591_0.jpg"
                alt="Photographer Avatar"
              />
              <AvatarFallback>PH</AvatarFallback>
            </Avatar>
          </div>
          <div className="col-span-2 text-center md:text-left">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">Aya</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                福岡県在住のフォトグラファーです。主に風景写真を撮影しています。撮影地は主に福岡県内ですが、九州各地にも足を運んでいます。
              </p>
              <div className="mt-5 flex justify-center md:justify-start space-x-5">
                <FaXTwitter className="text-3xl" />
                <FaInstagram className="text-3xl" />
                <FaFacebook className="text-3xl" />
              </div>
            </CardContent>
          </div>
        </div>
      </Card>
    </div>
  );
}

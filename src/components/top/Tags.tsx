"use client";

import type { TagsData } from "@/app/api/tags/route";
import { fetchTagsList } from "@/lib/fetcher";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import Link from "next/link";
import { type JSX, useMemo } from "react";
import Loading from "@/components/Loading";
import { LuTag } from "react-icons/lu";

type Tag = {
  id: string;
  name: string;
};

export default function Tags(): JSX.Element {
  const { data, isFetching } = useQuery<TagsData>({
    queryKey: ["tags"],
    queryFn: () => fetchTagsList(),
  });

  const tags: Tag[] = useMemo(() => {
    return data?.items.map((v) => ({ id: v.sys.id, name: v.name })) || [];
  }, [data]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      {isFetching ? (
        <Loading />
      ) : (
        <motion.div
          className="flex flex-col items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeIn",
          }}
        >
          <div className="flex items-center justify-center gap-2 text-3xl">
            <h1 className="font-bold mb-1">Tags</h1>
          </div>
          <div className="w-full max-w-[900px] flex justify-center flex-wrap gap-3 bg-slate-300/50 rounded-lg shadow-lg mt-4 p-5">
            {tags.map((tag) => (
              <motion.div
                key={tag.id}
                className="text-sm p-3 bg-white rounded-lg shadow-lg text-center cursor-pointer"
                whileHover={{ scale: 1.2 }}
              >
                <Link href={`/tags/${tag.id}`}>{tag.name}</Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}

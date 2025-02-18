"use client";

import type { TagsData } from "@/app/api/tags/route";
import { fetchTagsList } from "@/lib/fetcher";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import Link from "next/link";
import { type JSX, useMemo } from "react";
import Loading from "./Loading";

type Tag = {
  id: string;
  name: string;
};

export default function TagList(): JSX.Element {
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
          className="w-full h-full flex flex-col items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeIn",
          }}
        >
          <h1 className="text-3xl font-bold mb-5">Tags</h1>
          <div className="flex justify-center flex-wrap gap-3 w-4/5 bg-slate-200 p-5 rounded-lg shadow-lg">
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

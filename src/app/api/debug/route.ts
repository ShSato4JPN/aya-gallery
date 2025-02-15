import client from "@/lib/client";
import type { GalleryPostSkeleton } from "@/types/contentful";
import type * as contentful from "contentful";
import { NextResponse } from "next/server";

export type BlogPostsData = contentful.EntryCollection<GalleryPostSkeleton>;

export async function GET(req: Request): Promise<NextResponse<BlogPostsData>> {
  const entries = await client.getEntries<GalleryPostSkeleton>({
    content_type: "ayaGallery",
    order: ["-fields.uploadAt"],
    limit: 0,
    skip: 0,
  });

  return NextResponse.json(entries);
}

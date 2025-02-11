import client from "@/lib/client";
import type { GalleryPostSkeleton } from "@/types/contentful";
import type * as contentful from "contentful";
import { NextResponse } from "next/server";

export type BlogPostsData = contentful.EntryCollection<GalleryPostSkeleton>;

export async function GET(req: Request): Promise<NextResponse<BlogPostsData>> {
  const { searchParams } = await new URL(req.url);
  const limit = Number(searchParams.get("limit") || 15);
  const skip = Number(searchParams.get("skip") || 0);

  const entries = await client.getEntries<GalleryPostSkeleton>({
    content_type: "ayaGallery",
    order: ["-fields.uploadAt"],
    limit,
    skip,
  });

  return NextResponse.json(entries);
}

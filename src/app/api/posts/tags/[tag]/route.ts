import client from "@/lib/client";
import type { GalleryPostSkeleton } from "@/types/contentful";
import type * as contentful from "contentful";
import { NextResponse } from "next/server";

export type PostsDataContainTag =
  contentful.EntryCollection<GalleryPostSkeleton>;

export async function GET(
  req: Request,
  props: { params: Promise<{ tag: string }> },
) {
  const { searchParams } = await new URL(req.url);
  const tag = (await props.params).tag;

  const limit = Number(searchParams.get("limit") || 15);
  const skip = Number(searchParams.get("skip") || 0);

  const entries = await client.getEntries({
    content_type: "ayaGallery",
    "metadata.tags.sys.id[in]": [tag],
    limit,
    skip,
  });

  return NextResponse.json(entries);
}

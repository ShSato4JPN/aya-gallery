import client from "@/lib/client";
import type { GalleryPostSkeleton } from "@/types/contentful";
import type * as contentful from "contentful";
import { type NextRequest, NextResponse } from "next/server";

export type PostsDataContainTag =
  contentful.EntryCollection<GalleryPostSkeleton>;

export async function GET(
  _: NextRequest,
  { params }: { params: Promise<{ tag: string }> },
) {
  const tag = (await params).tag;

  const entries = await client.getTags({
    "sys.id": tag,
  });

  return NextResponse.json(entries);
}

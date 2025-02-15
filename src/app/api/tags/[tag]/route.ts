import client from "@/lib/client";
import type { GalleryPostSkeleton } from "@/types/contentful";
import type * as contentful from "contentful";
import { type NextRequest, NextResponse } from "next/server";

export type PostsDataContainTag =
  contentful.EntryCollection<GalleryPostSkeleton>;

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ tag: string }> },
) {
  const searchParams = req.nextUrl.searchParams;
  const tag = (await params).tag;
  const limit = Number(searchParams.get("limit") || 0);

  const entries = await client.getTags({
    "name[match]": tag,
    limit,
  });

  return NextResponse.json(entries);
}

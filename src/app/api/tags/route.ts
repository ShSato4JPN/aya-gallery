import client from "@/lib/client";
import type { GalleryPostSkeleton } from "@/types/contentful";
import type * as contentful from "contentful";
import { NextResponse } from "next/server";

export type PostsDataContainTag =
  contentful.EntryCollection<GalleryPostSkeleton>;

export async function GET(_: Request) {
  const entries = await client.getTags();

  return NextResponse.json(entries);
}

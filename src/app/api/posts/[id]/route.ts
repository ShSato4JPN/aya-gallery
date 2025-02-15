import client from "@/lib/client";
import type { GalleryPostSkeleton } from "@/types/contentful";
import type * as contentful from "contentful";
import { type NextRequest, NextResponse } from "next/server";

export type BlogPostData = contentful.Entry<GalleryPostSkeleton>;

export async function GET(
  _: NextRequest,
  { params }: { params: Promise<{ id: string }> },
): Promise<NextResponse<BlogPostData>> {
  const id = (await params).id;

  const entry = await client.getEntry<GalleryPostSkeleton>(id);

  return NextResponse.json(entry);
}

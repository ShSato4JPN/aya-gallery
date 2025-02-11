import client from "@/lib/client";
import type { GalleryPostSkeleton } from "@/types/contentful";
import type * as contentful from "contentful";
import { NextResponse } from "next/server";

export type BlogPostData = contentful.Entry<GalleryPostSkeleton>;

export async function GET(
  _: Request,
  props: { params: Promise<{ id: string }> },
): Promise<NextResponse<BlogPostData>> {
  const params = await props.params;

  const { id } = params;

  const entry = await client.getEntry<GalleryPostSkeleton>(id);

  return NextResponse.json(entry);
}

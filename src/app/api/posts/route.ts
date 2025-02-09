import type * as contentful from "contentful";
import { NextResponse } from "next/server";

import client from "@/lib/client";

export type GalleryPostSkeleton = {
  contentTypeId: "ayaGallery";
  fields: {
    photo: contentful.EntryFieldTypes.AssetLink;
    tags: contentful.EntryFieldTypes.Array<contentful.EntryFieldTypes.Symbol>;
    category: contentful.EntryFieldTypes.Array<contentful.EntryFieldTypes.Symbol>;
    uploadAt: contentful.EntryFieldTypes.Date;
  };
};

export type BlogPostsData = contentful.EntryCollection<GalleryPostSkeleton>;

export async function GET(req: Request): Promise<NextResponse<BlogPostsData>> {
  const { searchParams } = await new URL(req.url);
  const limit = Number(searchParams.get("limit") || 0);
  const skip = Number(searchParams.get("skip") || 0);

  const entries = await client.getEntries<GalleryPostSkeleton>({
    content_type: "ayaGallery",
    order: ["-fields.uploadAt"],
    limit,
    skip,
  });

  return NextResponse.json(entries);
}

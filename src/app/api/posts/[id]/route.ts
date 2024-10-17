import * as contentful from "contentful";
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

//export type BlogPostData = contentful.Entry<GalleryPostSkeleton>;
export type BlogPostsData = contentful.EntryCollection<GalleryPostSkeleton>;

export async function GET(
  _: Request,
  { params: { id } }: { params: { id: string } },
): Promise<NextResponse<BlogPostsData>> {
  const entry = await client.getEntries<GalleryPostSkeleton>({
    "sys.id[in]": id.split(","),
  });

  return NextResponse.json(entry);
}

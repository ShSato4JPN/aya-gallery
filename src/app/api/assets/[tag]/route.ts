import client from "@/lib/client";
import type * as contentful from "contentful";
import { type NextRequest, NextResponse } from "next/server";

export type AssetsData = contentful.AssetCollection;

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ tag: string }> },
): Promise<NextResponse<AssetsData>> {
  const searchParams = req.nextUrl.searchParams;
  const tag = (await params).tag;

  const limit = Number(searchParams.get("limit") || 15);
  const skip = Number(searchParams.get("skip") || 0);

  const entries = await client.getAssets({
    "metadata.tags.sys.id[in]": [tag],
    limit,
    skip,
  });

  return NextResponse.json(entries);
}

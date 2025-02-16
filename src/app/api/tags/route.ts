import client from "@/lib/client";
import type { TagCollection } from "contentful";
import { type NextRequest, NextResponse } from "next/server";

export type TagsData = TagCollection;

export async function GET(_: NextRequest): Promise<NextResponse<TagsData>> {
  const tags = await client.getTags();

  return NextResponse.json(tags);
}

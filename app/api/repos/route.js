import { NextResponse } from "next/server";
import { getRepos } from "@/lib/github";

export const revalidate = 3600;

// GET /api/repos -> { ok, repos }. The token stays on the server.
export async function GET() {
  const data = await getRepos();
  return NextResponse.json(data, { status: data.ok ? 200 : 502 });
}

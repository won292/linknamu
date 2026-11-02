import { NextResponse } from "next/server";
import { profile } from "@/data/profile";
import { getClicksCollection } from "@/lib/mongodb";

const validIds = new Set(profile.links.map((link) => link.id));

/** 링크 클릭 1회 기록: POST /api/clicks  body: { "id": "github" } */
export async function POST(request: Request) {
  let id: unknown;
  try {
    ({ id } = await request.json());
  } catch {
    return NextResponse.json({ error: "잘못된 요청입니다." }, { status: 400 });
  }

  if (typeof id !== "string" || !validIds.has(id)) {
    return NextResponse.json({ error: "알 수 없는 링크입니다." }, { status: 400 });
  }

  const clicks = await getClicksCollection();
  if (!clicks) {
    return NextResponse.json({ error: "MONGODB_URI가 설정되지 않았습니다." }, { status: 503 });
  }

  await clicks.updateOne({ _id: id }, { $inc: { count: 1 } }, { upsert: true });
  return NextResponse.json({ ok: true });
}

/** 링크별 클릭 수 조회: GET /api/clicks → { "github": 3, ... } */
export async function GET() {
  const clicks = await getClicksCollection();
  if (!clicks) {
    return NextResponse.json({ error: "MONGODB_URI가 설정되지 않았습니다." }, { status: 503 });
  }

  const docs = await clicks.find().toArray();
  const counts = Object.fromEntries(docs.map((doc) => [doc._id, doc.count]));
  return NextResponse.json(counts);
}

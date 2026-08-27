import { NextRequest, NextResponse } from "next/server";
import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";

export async function POST(req: NextRequest) {
  try {
    const { name, data } = await req.json();
    if (!name || !data) return NextResponse.json({ error: "missing name or data" }, { status: 400 });

    const base64 = data.replace(/^data:image\/\w+;base64,/, "");
    const dir = join(process.cwd(), "public", "screenshots");
    mkdirSync(dir, { recursive: true });
    const filePath = join(dir, `${name}.jpg`);
    writeFileSync(filePath, Buffer.from(base64, "base64"));

    return NextResponse.json({ ok: true, path: `/screenshots/${name}.jpg`, size: Buffer.from(base64, "base64").length });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}

import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const configPath = path.join(process.cwd(), "lib", "config.json");

export async function GET() {
  try {
    const data = fs.readFileSync(configPath, "utf8");
    return NextResponse.json(JSON.parse(data));
  } catch (error) {
    return NextResponse.json({ error: "Failed to read config" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    fs.writeFileSync(configPath, JSON.stringify(body, null, 2), "utf8");
    return NextResponse.json({ success: true, message: "Configuration saved successfully" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to save config" }, { status: 500 });
  }
}

import { NextResponse } from "next/server";
import MUSIC from "./music.json";

export async function GET(request: Request) {
    return NextResponse.json({ music: MUSIC });
}

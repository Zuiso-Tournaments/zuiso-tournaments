import { NextResponse } from "next/server";
import MUSIC from "../music.json";

export async function GET(request: Request, { params }: any) {
  const id = params.id;

  const song = MUSIC.find((song) => song.id === id);

  if (!song) {
    return NextResponse.json(
      {
        error: "Song not found",
      },
      { status: 404 }
    );
  }

  return NextResponse.json({ ...song });
}
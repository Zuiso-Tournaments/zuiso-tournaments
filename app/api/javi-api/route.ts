import { NextResponse } from 'next/server';

import MUSIC from './music.json';

export async function GET(request: Request) {
  return NextResponse.json({ music: MUSIC });
}

export async function POST(request: Request) {
  setTimeout(() => {
    return NextResponse.json({ hello: 'world2' });
  }, 3000);
}

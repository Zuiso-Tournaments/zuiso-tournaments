import {NextResponse} from 'next/server';

import MUSIC from './music.json';

export async function GET() {
  return NextResponse.json({music: MUSIC});
}

export async function POST() {
  setTimeout(() => {
    return NextResponse.json({hello: 'world2'});
  }, 3000);
}

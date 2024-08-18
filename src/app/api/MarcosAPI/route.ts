import {NextResponse} from 'next/server';

import MUSIC from './music.json';

export async function GET() {
  return NextResponse.json({music: MUSIC});
}

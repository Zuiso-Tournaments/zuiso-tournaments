import { NextResponse } from 'next/server';

import PEOPLE from './about.json';

export async function GET(request: Request) {
  return NextResponse.json({ people: PEOPLE });
}

export async function POST(request: Request) {
  setTimeout(() => {
    return NextResponse.json({ hello: 'world2' });
  }, 3000);
}

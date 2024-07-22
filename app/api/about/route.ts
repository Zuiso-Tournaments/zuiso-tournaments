import {NextResponse} from 'next/server';

import PEOPLE from './about.json';

export async function GET() {
  return NextResponse.json({people: PEOPLE});
}

export async function POST() {
  setTimeout(() => {
    return NextResponse.json({hello: 'world2'});
  }, 3000);
}

import {getNotes} from '@/actions/notes';

import {NextResponse} from 'next/server';

export async function GET() {
  const data = await getNotes();

  return NextResponse.json({data});
}

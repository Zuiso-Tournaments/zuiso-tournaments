import { NextResponse } from 'next/server';
import { getNotes } from '@/actions/notes';






export async function GET(request: Request) {

  const data = await getNotes();

console.log(data)

  return NextResponse.json({ data });
}


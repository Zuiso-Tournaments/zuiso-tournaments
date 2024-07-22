import {getNotes} from '@/actions/notes';
import {NextResponse} from 'next/server';

export async function GET() {
  const data = await getNotes();

  console.log(data);

  return NextResponse.json({data});
}

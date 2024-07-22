import {getPollas} from '@/actions/pollas';
import {NextResponse} from 'next/server';

export async function GET() {
  const data = await getPollas();

  return NextResponse.json({data});
}

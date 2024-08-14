import {getBocadillo} from '@/actions/bocadillo';
import {NextResponse} from 'next/server';

export async function GET() {
  const data = await getBocadillo();

  return NextResponse.json({data});
}

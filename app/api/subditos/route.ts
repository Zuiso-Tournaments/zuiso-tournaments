import {getSubditos} from '@/actions/subditos';
import {NextResponse} from 'next/server';

export async function GET() {
  const data = await getSubditos();

  return NextResponse.json({data});
}

import { NextResponse } from 'next/server';


import { eq } from 'drizzle-orm';

export async function getUserById(id: SelectUser['id']): Promise<
  Array<{
    id: number;
    name: string;
    age: number;
    email: string;
  }>
> {
  return db.select().from(usersTable).where(eq(usersTable.id, { id }));
}


export async function GET(request: Request, { params }: any) {
  const id = params.id;

  const user = getUserById(id);

  if (!user) {
    return NextResponse.json(
      {
        error: 'user not found'
      },
      { status: 404 }
    );
  }

  return NextResponse.json({ ...user });
}

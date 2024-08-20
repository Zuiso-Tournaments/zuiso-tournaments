import db from '@/db';
import type {MovilInsert} from '@/db/schemas/movil';
import {movilSchema} from '@/db/schemas/movil';
import {eq} from 'drizzle-orm';

import {NextResponse} from 'next/server';

// GET all examples
export async function GET() {
  try {
    const data = await db.select().from(movilSchema);
    return NextResponse.json({data});
  } catch (error) {
    return NextResponse.json({error: 'Failed to fetch movil'}, {status: 500});
  }
}

// POST a new movil
export async function POST(request: Request) {
  try {
    const body: MovilInsert = await request.json();
    const newMovil = await db.insert(movilSchema).values(body).returning();
    return NextResponse.json({data: newMovil[0]}, {status: 201});
  } catch (error) {
    return NextResponse.json({error: 'Failed to create movil'}, {status: 500});
  }
}

// PATCH (update) a movil
export async function PATCH(request: Request) {
  try {
    const {id, ...updateData}: MovilInsert = await request.json();
    const updatedExample = await db
      .update(movilSchema)
      .set(updateData)
      .where(eq(movilSchema.id, Number(id)))
      .returning();

    if (updatedExample.length === 0) {
      return NextResponse.json({error: 'Movil not found'}, {status: 404});
    }

    return NextResponse.json({data: updatedExample[0]});
  } catch (error) {
    return NextResponse.json({error: 'Failed to update movil'}, {status: 500});
  }
}

// DELETE a movil
export async function DELETE(request: Request) {
  try {
    const {id} = await request.json();
    const deletedExample = await db
      .delete(movilSchema)
      .where(eq(movilSchema.id, parseInt(id, 10)))
      .returning();

    if (deletedExample.length === 0) {
      return NextResponse.json({error: 'Movil not found'}, {status: 404});
    }

    return NextResponse.json({data: deletedExample[0]});
  } catch (error) {
    return NextResponse.json({error: 'Failed to delete movil'}, {status: 500});
  }
}

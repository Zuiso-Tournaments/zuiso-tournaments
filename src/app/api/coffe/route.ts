import db from '@/db';
import type {CoffeInsert} from '@/db/schemas/coffe';
import {coffeSchema} from '@/db/schemas/coffe';
import {eq} from 'drizzle-orm';

import {NextResponse} from 'next/server';

// GET all examples
export async function GET() {
  try {
    const data = await db.select().from(coffeSchema);
    return NextResponse.json({data});
  } catch (error) {
    return NextResponse.json({error: 'Failed to fetch coffe'}, {status: 500});
  }
}

// POST a new coffe
export async function POST(request: Request) {
  try {
    const body: CoffeInsert = await request.json();
    const newCoffe = await db.insert(coffeSchema).values(body).returning();
    return NextResponse.json({data: newCoffe[0]}, {status: 201});
  } catch (error) {
    return NextResponse.json({error: 'Failed to create coffe'}, {status: 500});
  }
}

// PATCH (update) an coffe
export async function PATCH(request: Request) {
  try {
    const {id, ...updateData}: CoffeInsert = await request.json();
    const updatedExample = await db
      .update(coffeSchema)
      .set(updateData)
      .where(eq(coffeSchema.id, Number(id)))
      .returning();

    if (updatedExample.length === 0) {
      return NextResponse.json({error: 'Coffe not found'}, {status: 404});
    }

    return NextResponse.json({data: updatedExample[0]});
  } catch (error) {
    return NextResponse.json({error: 'Failed to update coffe'}, {status: 500});
  }
}

// DELETE an coffe
export async function DELETE(request: Request) {
  try {
    const {id} = await request.json();
    const deletedExample = await db
      .delete(coffeSchema)
      .where(eq(coffeSchema.id, parseInt(id, 10)))
      .returning();

    if (deletedExample.length === 0) {
      return NextResponse.json({error: 'Coffe not found'}, {status: 404});
    }

    return NextResponse.json({data: deletedExample[0]});
  } catch (error) {
    return NextResponse.json({error: 'Failed to delete coffe'}, {status: 500});
  }
}

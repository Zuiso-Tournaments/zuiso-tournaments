import db from '@/db';
import {examples} from '@/db/schemas/examples';
import {eq} from 'drizzle-orm';

import {NextResponse} from 'next/server';

import type {Example} from '@/features/example/lib/models';

// GET all examples
export async function GET() {
  try {
    // Simulate a slow response
    await new Promise((resolve) => setTimeout(resolve, 1000)); // 2 seconds delay

    const data = await db.select().from(examples);
    return NextResponse.json({data});
  } catch (error) {
    return NextResponse.json(
      {error: 'Failed to fetch examples'},
      {status: 500}
    );
  }
}

// POST a new example
export async function POST(request: Request) {
  try {
    const body: Omit<Example, 'id' | 'createdAt' | 'updatedAt'> =
      await request.json();
    const newExample = await db.insert(examples).values(body).returning();
    return NextResponse.json({data: newExample[0]}, {status: 201});
  } catch (error) {
    return NextResponse.json(
      {error: 'Failed to create example'},
      {status: 500}
    );
  }
}

// PATCH (update) an example
export async function PATCH(request: Request) {
  try {
    const {id, ...updateData}: Partial<Example> & {id: string} =
      await request.json();
    const updatedExample = await db
      .update(examples)
      .set(updateData)
      .where(eq(examples.id, parseInt(id, 10)))
      .returning();

    if (updatedExample.length === 0) {
      return NextResponse.json({error: 'Example not found'}, {status: 404});
    }

    return NextResponse.json({data: updatedExample[0]});
  } catch (error) {
    return NextResponse.json(
      {error: 'Failed to update example'},
      {status: 500}
    );
  }
}

// DELETE an example
export async function DELETE(request: Request) {
  try {
    const {id} = await request.json();
    const deletedExample = await db
      .delete(examples)
      .where(eq(examples.id, parseInt(id, 10)))
      .returning();

    if (deletedExample.length === 0) {
      return NextResponse.json({error: 'Example not found'}, {status: 404});
    }

    return NextResponse.json({data: deletedExample[0]});
  } catch (error) {
    return NextResponse.json(
      {error: 'Failed to delete example'},
      {status: 500}
    );
  }
}

import { NextResponse } from 'next/server';
import db from '@/db';
import { examples } from '@/db/schemas/examples'; 
import { eq } from 'drizzle-orm';
import type { MotorBikeInsert} from '@/db/schemas/motorbikes';
import { motorbikesSchema } from '@/db/schemas/motorbikes';

// GET all examples
export async function GET() {
  try {
    // Simulate a slow response
    await new Promise(resolve => setTimeout(resolve, 1000)); // 2 seconds delay

    const data = await db.select().from(motorbikesSchema);
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch examples' }, { status: 500 });
  }
}

// POST a new example
export async function POST(request: Request) {
  try {
    const body: MotorBikeInsert = await request.json();
    const newExample = await db.insert(motorbikesSchema).values(body).returning();
    return NextResponse.json({ data: newExample[0] }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create example' }, { status: 500 });
  }
}

// PATCH (update) an example
export async function PATCH(request: Request) {
  try {
    const { id, ...updateData }: MotorBikeInsert = await request.json();
    const updatedExample = await db
      .update(motorbikesSchema)
      .set(updateData)
      .where(eq(motorbikesSchema.id, id as number))
      .returning();
    
    if (updatedExample.length === 0) {
      return NextResponse.json({ error: 'Motorbike not found' }, { status: 404 });
    }
    
    return NextResponse.json({ data: updatedExample[0] });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update example' }, { status: 500 });
  }
}

// DELETE an example
export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    const deletedExample = await db
      .delete(examples)
      .where(eq(examples.id, parseInt(id, 10)))
      .returning();
    
    if (deletedExample.length === 0) {
      return NextResponse.json({ error: 'Example not found' }, { status: 404 });
    }
    
    return NextResponse.json({ data: deletedExample[0] });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete example' }, { status: 500 });
  }
}
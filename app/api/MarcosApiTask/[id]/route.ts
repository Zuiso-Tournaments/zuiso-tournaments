import { deleteTask, getTask, updateTask } from 'actions/MarcosTasks';
import { NextResponse } from 'next/server';

export async function GET(request: Request, {params}: any) {
    const id = params.id;
  
    const task = await getTask(id);
  
    if (!task) {
      return NextResponse.json(
        {
          error: 'Task not found',
        },
        {status: 404}
      );
    }
  
    return NextResponse.json({...task}, {status: 200});
}

export async function PUT(request: Request, {params}: any) {
    const id = params.id;
  
    const body = await request.json();

    const task = await updateTask(id, body);
  
    if (!task) {
      return NextResponse.json(
        {
          error: 'Task not found',
        },
        {status: 404}
      );
    }

    return NextResponse.json({...task}, {status: 200});
}

export async function DELETE(request: Request, { params }: any) {
  const id = parseInt(params.id, 10);
  try {
      await deleteTask(id);
      return NextResponse.json({ message: 'Task deleted successfully' }, { status: 200 });
  } catch (error) {
      return NextResponse.json(
          {
              error: 'Task not found',
          },
          { status: 404 }
      );
  }
}
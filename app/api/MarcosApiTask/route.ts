import { addTask, getTasks } from "@/actions/MarcosTasks";
import { NextResponse } from "next/server";
import type { TareaInsert } from "@/db/schemas/tabla_marcos";

export async function GET() {
    try {
        const tasks = await getTasks();
        return NextResponse.json(tasks);
    } catch (error) {
        return NextResponse.json({ error: 'Error al obtener tareas' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const task: TareaInsert = body;
        await addTask(task);
        return NextResponse.json(task);
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 400 });
        } else {
            return NextResponse.json({ error: 'Error desconocido' }, { status: 500 });
        }
    }
}

'use server'
import db from '@/db'
import { tareas } from '@/db/schemas/tabla_marcos'
import type { Tarea, TareaInsert } from '@/db/schemas/tabla_marcos'
import { eq } from 'drizzle-orm';



export async function getTasks() {
    try {
        const tasks = await db.select().from(tareas);
        return tasks;
    } catch (error) {
        console.error('Error al obtener las tareas:', error);
        throw new Error('Error al obtener las tareas');
    }
}

export async function getTask(n: number) {
    try {
        const tasks: Tarea[] = await db.select().from(tareas).where(eq(tareas.id, n));
        const task = tasks.length > 0 ? tasks[0] : null;
        return task;
    } catch (error) {
        console.error('Error al obtener las tareas:', error);
        throw new Error('Error al obtener las tareas');
    }
}

export async function addTask(task: TareaInsert) {
    try {
        if (!task.tarea) {
            throw new Error('El campo "tarea" es obligatorio');
        }
        await db.insert(tareas).values(task);
        return task;
    } catch (error) {
        console.error('Error al añadir la tarea:', error);
        throw new Error('Error al añadir la tarea');
    }
}

export async function updateTask(n: number, task: Partial<TareaInsert>) {
    try {
        if (Object.keys(task).length === 0) {
            throw new Error('Debe proporcionar al menos un campo para actualizar');
        }
        await db.update(tareas).set(task).where(eq(tareas.id, n));
        return task;
    } catch (error) {
        console.error('Error al actualizar la tarea:', error);
        throw new Error('Error al actualizar la tarea');
    }
}

export async function deleteTask(n: number) {
    try {
        if (isNaN(n) || n <= 0) {
            throw new Error('ID de tarea inválido. Debe ser un número positivo.');
        }
        const deletedTask = await db.delete(tareas)
            .where(eq(tareas.id, n))
            .returning();

        if (deletedTask.length === 0) {
            throw new Error('Tarea no encontrada');
        }

        return { success: true };
    } catch (error) {
        if (error instanceof Error) {
            console.error('Error al eliminar la tarea con ID', n, ':', error.message);
            throw new Error('Error al eliminar la tarea: ' + error.message);
        } else {
            console.error('Error desconocido al eliminar la tarea con ID', n);
            throw new Error('Error desconocido al eliminar la tarea');
        }
    }
}

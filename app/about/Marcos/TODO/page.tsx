'use client';

import {TodoCard} from '@/app/about/marcos/TODO/TodoCard';
import {Button} from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import {Input} from '@/components/ui/input';
import type {Tarea, TareaInsert} from '@/db/schemas/tabla_marcos';
import {zodResolver} from '@hookform/resolvers/zod';
import {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {z} from 'zod';

const formSchema = z.object({
  task: z.string().nonempty(),
});

export default function TODO() {
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');
  const [tasks, setTasks] = useState<Tarea[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      task: '',
    },
  });

  async function fetchTasks() {
    try {
      const response = await fetch('/api/MarcosApiTask');
      if (!response.ok) {
        console.error('Error al obtener tareas:', response.statusText);
        throw new Error('Error al obtener tareas');
      }
      const tasksData = await response.json();
      setTasks(tasksData);
    } catch (error) {
      console.error('Error de red o del servidor:', error);
    }
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const task: TareaInsert = {tarea: values.task};
    try {
      const response = await fetch('/api/MarcosApiTask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error al enviar datos:', errorData);
        setSubmitStatus('error');
        return;
      }

      setSubmitStatus('success');
      fetchTasks();
    } catch (error) {
      console.error('Error de red o del servidor:', error);
      setSubmitStatus('error');
    }
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  async function handleCheckboxChange(taskId: number) {
    console.log(`Cambiando estado de la tarea con ID: ${taskId}`);
    try {
      const task = tasks.find((t) => t.id === taskId);
      if (!task) {
        console.error(`Tarea con ID ${taskId} no encontrada.`);
        return;
      }

      const taskToSend = {
        done: !task.done,
      };

      const response = await fetch(`/api/MarcosApiTask/${taskId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(taskToSend),
      });

      if (response.ok) {
        fetchTasks();
      } else {
        console.error(
          `Error al actualizar la tarea ${taskId}:`,
          response.statusText
        );
      }
    } catch (error) {
      console.error(
        `Error en la solicitud para actualizar la tarea ${taskId}:`,
        error
      );
    }
  }

  async function handleDelete(taskId: number) {
    if (window.confirm('¿Estás seguro de que deseas eliminar esta tarea?')) {
      try {
        const response = await fetch(`/api/MarcosApiTask/${taskId}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          fetchTasks();
        } else {
          console.error(
            `Error al eliminar la tarea ${taskId}:`,
            response.statusText
          );
        }
      } catch (error) {
        console.error(
          `Error en la solicitud para eliminar la tarea ${taskId}:`,
          error
        );
      }
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <header className="w-full bg-blue-600 py-4 shadow-md">
        <h1 className="text-center text-3xl text-white">Mi Aplicación TODO</h1>
      </header>

      <main className="container mx-auto flex-grow p-4">
        <div className="mb-4 rounded-lg bg-white p-6 shadow-lg">
          <h2 className="mb-4 text-2xl font-bold text-black">Nueva Tarea</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="task"
                render={({field}) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Tarea a añadir" {...field} />
                    </FormControl>
                    <FormDescription>
                      {submitStatus === 'idle' && (
                        <div className="mt-4 rounded-lg bg-yellow-200 p-4 shadow-lg">
                          <p className="text-yellow-800">Añada su tarea.</p>
                        </div>
                      )}
                      {submitStatus === 'success' && (
                        <div className="mt-4 rounded-lg bg-green-200 p-4 shadow-lg">
                          <p className="text-green-800">
                            La tarea se ha añadido correctamente.
                          </p>
                        </div>
                      )}
                      {submitStatus === 'error' && (
                        <div className="mt-4 rounded-lg bg-red-200 p-4 shadow-lg">
                          <p className="text-red-800">
                            Error al añadir la tarea.
                          </p>
                        </div>
                      )}
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-lg">
          <h2 className="mb-4 text-2xl font-bold text-black">
            Lista de Tareas
          </h2>
          <ul className="space-y-4">
            {tasks.map((task) => (
              <TodoCard
                key={task.id}
                task={task}
                onComplete={handleCheckboxChange}
                onDelete={handleDelete}
              />
            ))}
          </ul>
        </div>
      </main>

      <footer className="mt-4 w-full bg-blue-600 py-4">
        <p className="text-center text-white">© 2023 Mi Aplicación TODO</p>
      </footer>
    </div>
  );
}

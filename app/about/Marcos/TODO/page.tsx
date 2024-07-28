'use client';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormDescription,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useState, useEffect } from 'react'; 
import type { Tarea, TareaInsert } from '@/db/schemas/TablaMarcos';
import { Checkbox } from "@/components/ui/checkbox"

const formSchema = z.object({
  task: z.string().nonempty(),
});

export default function TODO() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
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
    const task: TareaInsert = { tarea: values.task };
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
      const task = tasks.find(t => t.id === taskId);
      if (!task) {
        console.error(`Tarea con ID ${taskId} no encontrada.`);
        return;
      }
  
      const taskToSend: TareaInsert = {
        tarea: task.tarea,
        done: !task.done,
      };
  
      const response = await fetch(`/api/MarcosApiTask/${taskId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(taskToSend),
      });
  
      if (response.ok) {
        fetchTasks();
      } else {
        console.error(`Error al actualizar la tarea ${taskId}:`, response.statusText);
      }
    } catch (error) {
      console.error(`Error en la solicitud para actualizar la tarea ${taskId}:`, error);
    }
  }

  async function handleDelete(taskId: number) {
    if (window.confirm("¿Estás seguro de que deseas eliminar esta tarea?")) {
      try {
        const response = await fetch(`/api/MarcosApiTask/${taskId}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          fetchTasks();
        } else {
          console.error(`Error al eliminar la tarea ${taskId}:`, response.statusText);
        }
      } catch (error) {
        console.error(`Error en la solicitud para eliminar la tarea ${taskId}:`, error);
      }
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <header className="bg-blue-600 w-full py-4 shadow-md">
        <h1 className="text-white text-3xl text-center">Mi Aplicación TODO</h1>
      </header>

      <main className="flex-grow container mx-auto p-4">
        <div className="bg-white p-6 rounded-lg shadow-lg mb-4">
          <h2 className="text-2xl font-bold mb-4 text-black">Nueva Tarea</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="task"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Tarea a añadir" {...field} />
                    </FormControl>
                    <FormDescription>
                      {submitStatus === 'idle' && (
                        <div className="bg-yellow-200 p-4 rounded-lg shadow-lg mt-4">
                          <p className="text-yellow-800">Añada su tarea.</p>
                        </div>
                      )}
                      {submitStatus === 'success' && (
                        <div className="bg-green-200 p-4 rounded-lg shadow-lg mt-4">
                          <p className="text-green-800">La tarea se ha añadido correctamente.</p>
                        </div>
                      )}
                      {submitStatus === 'error' && (
                        <div className="bg-red-200 p-4 rounded-lg shadow-lg mt-4">
                          <p className="text-red-800">Error al añadir la tarea.</p>
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

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-black">Lista de Tareas</h2>
          <ul className="space-y-4">
          {tasks.map((task) => (
            <li key={task.id} className="flex items-center justify-between text-black">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id={`checkbox-${task.id}`}
                  className="w-6 h-6"
                  checked={task.done ?? false}
                  onCheckedChange= {() => handleCheckboxChange(task.id)}
                />
                <div className="leading-none">
                  <label
                    htmlFor={`checkbox-${task.id}`}
                    className="text-lg font-medium"
                  >
                    {task.tarea}
                  </label>
                </div>
              </div>
              <Button variant="ghost" onClick={() => handleDelete(task.id)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6 text-red-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </Button>
            </li>
          ))}
          </ul>
        </div>
      </main>

      <footer className="bg-blue-600 w-full py-4 mt-4">
        <p className="text-white text-center">© 2023 Mi Aplicación TODO</p>
      </footer>
    </div>
  );
}

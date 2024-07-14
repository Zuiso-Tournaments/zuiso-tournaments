'use client';
import React, { useState } from 'react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { useToast } from '@/components/ui/Toasts/use-toast';
import { cn } from '@/utils/cn';

const formSchema = z.object({
  topic: z.string().nonempty('Selecciona un asunto'),
  name: z
    .string()
    .min(3, { message: 'Nombre entre 3-50 caracteres' })
    .max(50, { message: 'Nombre entre 3-50 caracteres' }),
  email: z.string().email('Email no válido'),
  message: z
    .string()
    .min(10, { message: 'Mensaje entre 10-500 caracteres' })
    .max(500, { message: 'Mensaje entre 10-500 caracteres' })
});

/**
 * ContactForm component.
 * Renders a form for users to submit their contact information.
 * @returns {React.ReactElement} The ContactForm component.
 */
const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      topic: '',
      message: ''
    }
  });

  function onReset() {
    form.reset();
  }

  const { toast } = useToast();

  function onSubmit() {
    console.log(form.getValues());
    form.reset();
    toast({
      title: 'Mensaje enviado',
      description: 'Gracias por tu mensaje'
    });
  }

  return (
    <div className="mt-10 text-black ">
      <Form {...form}>
        <form
          className="flex flex-col gap-4"
          onSubmit={(event) => {
            event.preventDefault(); // Prevent the default form submission
            form.handleSubmit(() => onSubmit())();
          }}
          onReset={onReset}
        >
          <FormField
            control={form.control}
            name="topic"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Asunto</FormLabel>
                <FormControl>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Selecciona un asunto"></SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Asunto</SelectLabel>
                        <SelectItem value="general">General</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                        <SelectItem value="support">Soporte</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <Input placeholder="Nombre" {...field} />
                </FormControl>
                <FormMessage {...field} />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage {...field} />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mensaje</FormLabel>
                <FormControl>
                  <Input placeholder="Mensaje" {...field} />
                </FormControl>
                <FormMessage {...field} />
              </FormItem>
            )}
          />
          <div className="flex flex-row justify-between">
            <button
              type="reset"
              className={cn(
                'bg-red-500 text-white rounded-md py-2 px-4 mt-8 w-[180px]',
                'hover:bg-red-600'
              )}
            >
              Limpiar
            </button>

            <button
              type="submit"
              className={cn(
                'bg-blue-500 text-white rounded-md py-2 px-4 mt-8 w-[180px]',
                'hover:bg-blue-600'
              )}
            >
              Enviar
            </button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;

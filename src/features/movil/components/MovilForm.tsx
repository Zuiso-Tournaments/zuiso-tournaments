import type {Movil, MovilInsert} from '@/db/schemas/movil';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {z} from 'zod';

import React, {useEffect} from 'react';

import {Button} from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {Input} from '@/components/ui/input';

import useMovilCreateMutation from '@/features/movil/hooks/useMovilCreateMutation';
import useMovilEditMutation from '@/features/movil/hooks/useMovilEditMutation';

const formSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  marca: z.string().optional(),
  modelo: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface MovilFormProps {
  onSubmit: () => void;
  initialData?: Partial<MovilInsert>;
  movil?: Movil;
}

const MovilForm: React.FC<MovilFormProps> = ({
  onSubmit,
  initialData,
  movil,
}) => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: initialData?.name || '',
      marca: initialData?.marca || '',
      modelo: initialData?.modelo || '',
    },
  });

  useEffect(() => {
    if (movil) {
      form.reset(movil);
    }
  }, [movil]);

  const createMutation = useMovilCreateMutation();
  const updateMutation = useMovilEditMutation();

  const handleSubmit = (data: FormData) => {
    try {
      if (movil) {
        updateMutation.mutate({
          ...data,
          id: movil.id,
          marca: data.marca ?? '',
          modelo: data.modelo ?? '',
        });
      } else {
        createMutation.mutate({
          ...data,
          marca: data.marca ?? '',
          modelo: data.modelo ?? '',
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      onSubmit();
    }
  };

  return (
    <Form {...form}>
      <p className="text-2xl font-bold">
        {movil ? 'Edita Tu movil' : 'Crear movil'}
      </p>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({field}) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="marca"
          render={({field}) => (
            <FormItem>
              <FormLabel>Marca</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="modelo"
          render={({field}) => (
            <FormItem>
              <FormLabel>Modelo</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">{movil ? 'Editar' : 'Crear'}</Button>
      </form>
    </Form>
  );
};

export default MovilForm;

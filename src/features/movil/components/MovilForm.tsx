import type {MovilInsert} from '@/db/schemas/movil';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {z} from 'zod';

import React from 'react';

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

const formSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  marca: z.string().optional(),
  modelo: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface MovilFormProps {
  onSubmit: (data: MovilInsert) => void;
  initialData?: Partial<MovilInsert>;
}

const MovilForm: React.FC<MovilFormProps> = ({onSubmit, initialData}) => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: initialData?.name || '',
      marca: initialData?.marca || '',
      modelo: initialData?.modelo || '',
    },
  });

  const mutation = useMovilCreateMutation();

  const handleSubmit = (data: FormData) => {
    mutation.mutate(data);
    onSubmit(data);
  };

  return (
    <Form {...form}>
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
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default MovilForm;

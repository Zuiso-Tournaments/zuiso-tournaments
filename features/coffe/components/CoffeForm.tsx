import type {CoffeInsert} from '@/db/schemas/coffe';
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

import useCoffeCreateMutation from '@/features/coffe/hooks/useCoffeCreateMutation';

const formSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  variety: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface CoffeFormProps {
  onSubmit: (data: CoffeInsert) => void;
  initialData?: Partial<CoffeInsert>;
}

const CoffeForm: React.FC<CoffeFormProps> = ({onSubmit, initialData}) => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: initialData?.name || '',
      variety: initialData?.variety || '',
    },
  });

  const mutation = useCoffeCreateMutation();

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
          name="variety"
          render={({field}) => (
            <FormItem>
              <FormLabel>Variety</FormLabel>
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

export default CoffeForm;

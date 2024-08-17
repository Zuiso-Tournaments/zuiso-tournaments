import {zodResolver} from '@hookform/resolvers/zod';
import {useMutation} from '@tanstack/react-query';
import {useForm} from 'react-hook-form';
import {z} from 'zod';

import React from 'react';

import revalidate from '@/lib/revalidate';

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

import {postExample} from '@/features/example/lib/data';

const formSchema = z.object({
  title: z
    .string()
    .min(1, {message: 'Title is required'})
    .max(255, {message: 'Title is too long'}),
  description: z
    .string()
    .max(1000, {message: 'Description is too long'})
    .optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface ExampleFormProps {
  onSubmit: () => void;
}

const ExampleForm: React.FC<ExampleFormProps> = ({onSubmit}) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
    },
  });

  const mutation = useMutation({
    mutationFn: (values: FormValues) => postExample(values),
    onSuccess: (data) => {
      console.log('Example created:', data);
      form.reset();
      onSubmit();
      revalidate('example');
    },
    onError: (error) => {
      console.error('Error creating example:', error);
    },
  });

  const handleSubmit = (values: FormValues) => {
    mutation.mutate(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="title"
          render={({field}) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({field}) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="Enter description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Create Example</Button>
      </form>
    </Form>
  );
};

export default ExampleForm;

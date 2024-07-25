import {addNewSubditoAction} from '@/actions/subditos';
import {Button} from '@/components/ui/button';
import type {Subditos} from '@/db/schemas/subditos';
import {useEffect, useState} from 'react';

import {z} from 'zod';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';

import db from '@/db';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  nombre: z.string().min(3, {
    message: 'Username must be at least 2 characters.',
  }),
});

const MisSubditos = ({subditos: defaultSubditos}: {subditos: Subditos[]}) => {
  const [subditos, setSubditos] = useState<Subditos[]>(defaultSubditos);

  const fetchData = async () => {
    const {data} = await fetch('/api/subditos').then((res) => res.json());
    setSubditos(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setSubditos(defaultSubditos);
  }, [defaultSubditos]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: '',
    },
  });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
      const res = await addNewSubditoAction({
        nombre: values.nombre,
      });
      console.log(res);
    };
  
  const handleClick = async () => {
    const res = await db.delete(subditos)
    console.log(res);
  }
  return (
    <div>
    <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-8 space-y-8">
            <FormField
              control={form.control}
              name="nombre"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Dinos cual es tu súbdito favorito</FormLabel>
                  <FormControl>
                    <Input placeholder="Nombre del súbdito" {...field} />
                  </FormControl>
                  <FormDescription>
                    Ponle un nombre a tu súbdito
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type = "submit">Submit</Button>
          </form>
        </Form>
      


<div className="flex gap-4">
  {subditos?.map((subdito) => (
    <div key={subdito.id} className="border border-red-500 p-4">
      <p>Subdito creado: {subdito.nombre}</p>
    </div>
  ))}
</div>
<Button onClick = {handleClick}>Submit</Button>
</div>
  );
};

export default MisSubditos;
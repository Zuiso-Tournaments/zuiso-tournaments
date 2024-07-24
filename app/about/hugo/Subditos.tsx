'use client';

import {addNewSubditoAction} from '@/actions/subditos';
import {Button} from '@/components/ui/button';
import type {Subditos} from '@/db/schemas/subditos';
import {useEffect, useState} from 'react';

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from '@/components/ui/form';

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

  const [nombre, setNombre] = useState('');
  
  const handleClick = async () => {
    const res = await addNewSubditoAction({nombre});
    console.log(res);
  };
  
  return (
    <div>
      <h1>Crear Subdito personalizado</h1>
  
      <Form onSubmit={handleClick}>
        <FormField render={({ field, fieldState, formState }) => (
          <FormItem>
            <FormLabel>Nombre del Subdito</FormLabel>
            <FormControl>
              <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )} />
        <Button type="submit">Crear Subdito</Button>
      </Form>
  
      <div className="flex gap-4">
        {subditos.map((subditos) => (
          <div key={subditos.id} className="border border-red-500 p-4">
            <p>Subdito creado: {subditos.nombre}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MisSubditos;
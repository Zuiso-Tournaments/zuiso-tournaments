'use client';

import {Button} from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import {Input} from '@/components/ui/input';
import {zodResolver} from '@hookform/resolvers/zod';
import classNames from 'classnames';
import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {z} from 'zod';

import MusicList from './MusicList';
import MisSubditos from './MisSubditos';

interface Subditos {
  nombre: string;
  img: string;
  index: number;
}

const subditos: Subditos[] = [
  {
    nombre: 'Armando Jaleo',
    img: 'https://picsum.photos/200',
    index: 1,
  },
  {
    nombre: 'Armando Andamios',
    img: 'https://picsum.photos/300',
    index: 2,
  },
  {
    nombre: 'Armando Paredes',
    img: 'https://picsum.photos/400',
    index: 3,
  },
  {
    nombre: 'Armando Hormigón',
    img: 'https://picsum.photos/200',
    index: 4,
  },
  {
    nombre: 'Armando Escándalo',
    img: 'https://picsum.photos/300',
    index: 5,
  },
  {
    nombre: 'Armando Cemento',
    img: 'https://picsum.photos/400',
    index: 6,
  },
];

const formSchema = z.object({
  subdito: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Tiene que ser un email valido.',
  }),
});

export default function HugoAbout() {
  const [selectedSubdito, setSelectedSubdito] = useState<Subditos | null>(null);

  const getRandomSubdito = () => {
    const randomIndex = Math.floor(Math.random() * subditos.length);
    return subditos[randomIndex];
  };

  const handleButtonClick = () => {
    const newSubdito = getRandomSubdito();
    setSelectedSubdito(newSubdito);
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subdito: '',
      email: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Falta manejar los datos
    console.log(values);
  }
  return (
    <section className="mb-32 bg-black">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:pt-24 lg:px-8">
        <h1 className="text-center text-4xl font-bold"> About Yarir </h1>
      </div>
      <div className="mt-12 flex justify-evenly gap-4">
        <div className="">
          <p className="text-white"> amai</p>
        </div>
        <img
          src="https://media1.tenor.com/m/QWZf33fGZAQAAAAC/patrick-star-patrick.gif"
          className="size-96 rounded-full"
          alt="Yarir"
        />
      </div>
      <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-8 sm:px-6 sm:pt-24 lg:px-8">
        <h1 className="mt-20 text-center text-2xl font-bold">
          {' '}
          Súbditos de Yarir{' '}
        </h1>
        <button
          onClick={handleButtonClick}
          className="mt-10 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700 ">
          Mostrar un Súbdito
        </button>
        {selectedSubdito && (
          <div className="mt-10 flex justify-evenly gap-4">
            <p
              className={classNames(
                'mt-10 text-xl font-bold',
                selectedSubdito.index > 3 ? 'text-blue-500' : 'text-white'
              )}>
              {selectedSubdito.nombre}
            </p>
            <img
              src={selectedSubdito.img}
              alt={selectedSubdito.nombre}
              className="h-32 w-32 rounded-full"
            />
          </div>
        )}

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-8 space-y-8">
            <FormField
              control={form.control}
              name="subdito"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Dinos cual es tu súbdito favorito</FormLabel>
                  <FormControl>
                    <Input placeholder="Nombre del súbdito" {...field} />
                  </FormControl>
                  <FormDescription>
                    Esta información será usada completamente con fines
                    comerciales, gracias por tus datos
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({field}) => (
                <FormItem>
                  <FormLabel>
                    Dejanos tu correo para mandarte los últimos súbditos de
                    Yarir
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Dirección de correo electrónico"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Tu correo será compartido con todos los servidores chinos de
                    robo de datos :)))
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
        <MusicList />
      </div>
      <MisSubditos />
    </section>
  );
}

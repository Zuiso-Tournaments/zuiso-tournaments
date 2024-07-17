'use client';

/*importar estados y vaina de react*/

import { useEffect, useState } from 'react';

/*importar sonido*/

import useSound from 'use-sound';

/*importar comparaciones*/

import { cn } from '@/utils/cn';

/*importar todo lo del formulario*/

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
import { Button } from '@/components/ui/Button';

/*Importar lo de la musica de API*/

import { Skeleton } from '@/components/ui/skeleton';
import Link from 'next/link';

/*Aqui empieza el de hacer sonar el himno*/

const HimnoButton = () => {
  const [play] = useSound('/himno.mp3');

  const handleSoundClick = () => {
    console.log('Playing sound');
    play();
  };

  return (
    <button
      onClick={handleSoundClick}
      className="mt-8 px-4 py-2 rounded-2xl size-20"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/2468/2468825.png"
        alt="Button Icon"
        className="size-10"
      />
    </button>
  );
};

/*Aqui empieza el de el dado*/

const DiceButton = () => {
  const [randomNumbers, setRandomNumbers] = useState<number[]>([]);

  const play = () => {
    const random = Math.floor(Math.random() * 6) + 1;
    setRandomNumbers(prevNumbers => [...prevNumbers, random]);
  };

  const handleDiceClick = () => {
    play();
  };

  return (
    <div className="flex mt-8">
      <button onClick={handleDiceClick} className="px-4 py-2 rounded-2xl size-20">
        <img
          src="https://img.freepik.com/fotos-premium/ilustracion-3d-cerca-par-dados-blancos-sobre-fondo-negro-dados-blancos-vuelo-juegos-azar-casinos_116124-5781.jpg?w=360"
          alt="Button Icon"
          className="size-10"
        />
      </button>
      <div className="ml-4 flex">
        {randomNumbers.map((number, index) => (
          <p
            key={index}
            className={cn("size-10 rounded-2xl flex-row ml-4 sm:text-center" ,number > 3 ? "bg-red-500 text-yellow-300" : "bg-emerald-300 text-black")}
          >
            {number}
          </p>
        ))}
      </div>
    </div>
  );
};

/*Aqui empiezan lo de los formularios*/

const formSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'Tan pequeño como la colita de marcos' })
    .max(50, { message: 'Ni hace falta que mencione como quien es de grande' }),
  email: z
    .string()
    .email('Eso no es un email fiera'),
  message: z
    .string()
    .min(10, { message: 'Tan pequeño como la colita de marcos' })
    .max(500, { message: 'Ni hace falta que mencione como quien es de grande' }),
  fruits: z
    .string()
});

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
      fruits: ''
    }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    /*Creo que aqui seria donde se haria algo con las vainas del formulario*/
    console.log(values);
  }
  return (
    <div className="mt-10">
      <Form {...form}>
        <form
          className="flex flex-col gap-4"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex justify-end">Username</FormLabel>
                <FormControl className="bg-red-600 text-yellow-300">
                  <Input placeholder="POLLA" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex justify-end">Correo Electronico</FormLabel>
                <FormControl className="bg-red-600 text-yellow-300">
                  <Input placeholder="Email" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex justify-end">Mensaje</FormLabel>
                <FormControl className="bg-red-600 text-yellow-300">
                  <Input placeholder="Esribe tu mensaje" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="fruits"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select</FormLabel>
                <FormControl>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select a fruit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Fruits</SelectLabel>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="blueberry">Blueberry</SelectItem>
                        <SelectItem value="grapes">Grapes</SelectItem>
                        <SelectItem value="pineapple">Pineapple</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="bg-red-600 text-yellow-300" type="submit">Enviar</Button>
        </form>
      </Form>
    </div>
  );
};

/*Aqui empieza lo de las APIs*/

interface Music {
  id: string;
  title: string;
  artista: string;
  idioma: string;
  estilo: string;
}

const MusicCard = ({ song }:{song:Music}) => {
  return (
    <Link
      href={`/about/cesar/music/${song.id}`}
      className="p-4 bg-red-600 rounded"
    >
      <div>
        <h2 className="text-yellow-300">{song.title}</h2>
        <p className="text-yellow-300">{song.artista}</p>
        <p className="text-yellow-300">{song.idioma}</p>
        <p className="text-yellow-300">{song.estilo}</p>
      </div>
    </Link>
  );
};

const MusicList = () => {
  const [music, setMusic] = useState<Music[]>([]);
  const [loading, setloading] = useState(true);

  const fetchData = async () => {
    setTimeout(async () => {
      const data = await fetch('http://localhost:3000/api/cesarApi').then((res) =>
        res.json()
      );
      setMusic(data.music);
      setloading(false);
    }, 500);
  };

  /*Para que se cargue primero la pagina y despues esto por si da fallo*/
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="my-4">
      {loading && <Skeleton className="size-96" />}
      <div className="flex gap-4 w-full flex-wrap mt-4">
        {music.map((song) => (
          <MusicCard key={song.id} song={song} /> 
        ))}
      </div>
    </div>
  );
};

export default function cesarAbout() {
  return (
    <section className="mb-32 bg-black">
      <div className="max-w-6xl px-4 py-8 mx-auto sm:px-6 sm:pt-24 lg:px-8">
        <div className="sm:align-center flex-col sm:flex-col">
          <h1 className="text-4xl mb-11 font-extrabold text-white sm:text-center sm:text-6xl">
            César, the pride of spain
          </h1>
          <div
            className="flex gap-4 rounded-2xl bg-contain"
            style={{
              backgroundImage:
                'url(https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Bandera_de_España_%28sin_escudo%29.svg/2560px-Bandera_de_España_%28sin_escudo%29.svg.png)'
            }}
          >
            <div className="mt-6 mb-6 text-lg flex flex-col gap-16 px-8">
              <p className="text-black">
                Soy una persona de mente muy abierta, siempre dispuesta a
                considerar nuevas ideas y perspectivas, evitando la terquedad en
                favor de la flexibilidad y el entendimiento. La generosidad es
                una característica que me define profundamente; no soy nada
                tacaño con el dinero y considero que lo mío es de todos, siempre
                dispuesto a compartir y ayudar. Destaco por mi amabilidad, una
                cualidad que me permite conectar genuinamente con los demás,
                creando vínculos sinceros y duraderos. Mi amplio léxico y vasta
                cultura general son otros de mis puntos fuertes, facilitándome
                la comunicación efectiva y enriquecedora en diversas
                situaciones. Además, no puedo dejar de mencionar mis
                características apolíneas. Mi atractivo físico es notable,
                reflejando una combinación armoniosa de belleza y proporción que
                no pasa desapercibida.
              </p>
              <p className="text-black">
                Nuestra selección española está realizando un trabajo
                excepcional, demostrando talento, dedicación y un espíritu de
                equipo admirable. Nos han unido como nación, llenándonos de
                sentimiento e ilusión en cada partido. Su esfuerzo y pasión en
                el campo nos inspiran y nos hacen soñar con la victoria.
                Queremos transmitirles todo nuestro apoyo y energía para que
                triunfen frente a Inglaterra. ¡Estamos con vosotros, vamos a por
                la victoria!
              </p>
              <div className="flex-1" />
              <p className="text-right text-black">
                Para apoyarnos siguenos en nuestas redes sociales{' '}
                <a
                  href="https://twitter.com/ElPatica"
                  className="text-blue-400 hover:underline"
                >
                  @ElPatica
                </a>
                .
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <HimnoButton/>
          </div>
          <div>
            <h1 className="text-4xl mt-11 mb-8 font-extrabold text-white sm:text-center sm:text-6xl">
              Extra work del todopoderoso miguel
            </h1>
            <hr className="my-16 border-gray-300 ml-32 mr-32" />
          </div>
          <div>
            <h1 className="text-4xl mt-11 mb-11 font-extrabold text-white sm:text-center sm:text-4xl">
              Dado bomba
            </h1>
            <DiceButton/>
          </div>
          <div>
            <h1 className="text-4xl mt-11 mb-11 font-extrabold text-white sm:text-center sm:text-4xl">
              Formularios
            </h1>
            <ContactForm/>
          </div>
          <div>
            <h1 className="text-4xl mt-11 mb-11 font-extrabold text-white sm:text-center sm:text-4xl">
              API
            </h1>
            <MusicList/>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import { useState } from 'react';

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import {Button} from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {Input} from "@/components/ui/input";

interface Subditos {
    nombre: string;
    img: string;
  }

const subditos: Subditos[] = [
  {
    nombre: "Armando Jaleo",
    img: "https://picsum.photos/200"
    },
  {
    nombre: "Armando Andamios",
    img: "https://picsum.photos/300"
    },
  {
    nombre: "Armando Paredes",
    img: "https://picsum.photos/400"
    },
  {
    nombre: "Armando Hormigón",
    img: "https://picsum.photos/200"
    },
  {
    nombre: "Armando Escándalo",
    img: "https://picsum.photos/300"
    },
  {
    nombre: "Armando Cemento",
    img: "https://picsum.photos/400"
    }
];

const formSchema = z.object({
  subdito: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Tiene que ser un email valido.",
  }),
})


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
      subdito: "",
      email: "",
    },
  })
 
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Falta manejar los datos
    console.log(values)
  }
return(
<section className= "mb-32 bg-black">
    <div className= "max-w-6xl px-4 py-8 mx-auto sm:px-6 sm:pt-24 lg:px-8">
        <h1 className="text-4xl font-bold text-center">    About Yarir     </h1>
    </div>
    <div className= "mt-12 flex gap-4 justify-evenly">
        <div className= "">
            <p className= "text-white"> amai</p>
        </div>
        <img
            src="https://media1.tenor.com/m/QWZf33fGZAQAAAAC/patrick-star-patrick.gif"
            className="size-96 rounded-full"
        />
    </div>
    <div className= "max-w-6xl px-4 py-8 mx-auto sm:px-6 sm:pt-24 lg:px-8 flex flex-col items-center">
        <h1 className="text-2xl font-bold text-center mt-20">   Súbditos de Yarir   </h1>
        <button onClick={handleButtonClick} className="mt-10 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 ">
        Mostrar un Súbdito
        </button>
        {selectedSubdito && (
          <div className="flex gap-4 justify-evenly mt-10">
            <p className="mt-10 text-white text-xl font-bold">{selectedSubdito.nombre}</p>
            <img src={selectedSubdito.img} alt={selectedSubdito.nombre} className="h-32 w-32 rounded-full" />
          </div>
        )}
        
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-8">
        <FormField
          control={form.control}
          name="subdito"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Dinos cual es tu súbdito favorito</FormLabel>
              <FormControl>
                <Input placeholder="Nombre del súbdito" {...field} />
              </FormControl>
              <FormDescription>
                Esta información será usada completamente con fines comerciales, gracias por tus datos
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Dejanos tu correo para mandarte los últimos súbditos de Yarir</FormLabel>
              <FormControl>
                <Input placeholder="Dirección de correo electrónico" {...field} />
              </FormControl>
              <FormDescription>
                Tu correo será compartido con todos los servidores chinos de robo de datos :)))
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
    </div>
</section>
);
}
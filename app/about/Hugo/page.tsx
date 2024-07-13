"use client";
import { useState } from 'react';

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
    </div>
</section>
);
}
'use client';

import { useState } from "react";

import useSound from 'use-sound';

import { cn } from '@/utils/cn';

/*Aqui empieza el de hacer soonar el himno*/

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

export default function cesarAbout() {
  return (
    <section className="mb-32 bg-black">
      <div className="max-w-6xl px-4 py-8 mx-auto sm:px-6 sm:pt-24 lg:px-8">
        <div className="sm:align-center flex-col sm:flex-col">
          <h1 className="text-4xl mb-8 font-extrabold text-white sm:text-center sm:text-6xl">
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
          </div>
          <div>
            <DiceButton/>
          </div>
        </div>
      </div>
    </section>
  );
}

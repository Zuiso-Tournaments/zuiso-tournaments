import useSound from 'use-sound';

import boopSfx from '/Users/cesarmurodezarojacoste/Documents/work/zuiso-tournaments/himno.mp3';

const BoopButton = () => {
    const [play] = useSound(boopSfx);

    return <button onClick={play} className="mt-8 px-4 py-2 bg-emerald-400 rounded-2xl size-20">
                <img src="https://cdn-icons-png.flaticon.com/512/2468/2468825.png" alt="Button Icon" className="size-10" />
            </button>;
    };

export default async function cesarAbout() {
    return (
      <section className="mb-32 bg-black">
        <div className="max-w-6xl px-4 py-8 mx-auto sm:px-6 sm:pt-24 lg:px-8">
          <div className="sm:align-center flex-col sm:flex-col">
            <h1 className="text-4xl mb-8 font-extrabold text-white sm:text-center sm:text-6xl">
              César, the pride of spain
            </h1>
            <div className="flex gap-4 rounded-2xl bg-contain" style={{ backgroundImage: "url(https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Bandera_de_España_%28sin_escudo%29.svg/2560px-Bandera_de_España_%28sin_escudo%29.svg.png)"}}>
              <div className="mt-6 mb-6 text-lg flex flex-col gap-16 px-8" >
                <p className="text-black">
                  Soy una persona de mente muy abierta, siempre dispuesta a 
                  considerar nuevas ideas y perspectivas, evitando la terquedad 
                  en favor de la flexibilidad y el entendimiento. La generosidad 
                  es una característica que me define profundamente; no soy nada 
                  tacaño con el dinero y considero que lo mío es de todos, siempre 
                  dispuesto a compartir y ayudar. Destaco por mi amabilidad, una 
                  cualidad que me permite conectar genuinamente con los demás, creando
                  vínculos sinceros y duraderos. Mi amplio léxico y vasta cultura 
                  general son otros de mis puntos fuertes, facilitándome la comunicación 
                  efectiva y enriquecedora en diversas situaciones. Además, no puedo dejar 
                  de mencionar mis características apolíneas. Mi atractivo físico es notable, 
                  reflejando una combinación armoniosa de belleza y proporción que no pasa desapercibida.
                </p>
                <p className="text-black">
                  Nuestra selección española está realizando un trabajo excepcional, 
                  demostrando talento, dedicación y un espíritu de equipo admirable. 
                  Nos han unido como nación, llenándonos de sentimiento e ilusión en 
                  cada partido. Su esfuerzo y pasión en el campo nos inspiran y nos hacen 
                  soñar con la victoria. Queremos transmitirles todo nuestro apoyo y energía 
                  para que triunfen frente a Inglaterra. ¡Estamos con vosotros, vamos a por la victoria!
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
                <BoopButton />
            </div>
          </div>
        </div>
      </section>
    );
  }
  
interface Passion {
  url: string;
  title: string;
  imgSrc: string;
}

const passions: Passion[] = [
  {
    url: "https://github.com/bale2manos",
    title: "Proyectos",
    imgSrc: "https://picsum.photos/seed/2/700/700"
  },
  {
    url: "https://basketaranjuez.com/",
    title: "Baloncesto",
    imgSrc: "https://i.pinimg.com/originals/fa/c6/3c/fac63c62d77afcc8f1b0cfe3ce001753.jpg"
  },
  {
    url: "https://www.magicworldresort.com/es",
    title: "Viajes",
    imgSrc: "https://picsum.photos/seed/3/700/700"
  }
];

interface PassionCardProps {
  url: string;
  title: string;
  imgSrc: string;
}

const PassionCard: React.FC<PassionCardProps> = ({ url, title, imgSrc }) => (
  <a href={url} className="block" target="_blank" rel="noopener noreferrer">
    <div className="relative bg-white rounded-2xl hover:scale-105 duration-300 flex flex-col">
      <img src={imgSrc} alt={title} className="rounded-2xl w-full hover:opacity-20" />
      <div className="absolute inset-0 flex items-center justify-center hover:bg-white/20 rounded-2xl">
        <p className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-4xl text-gray-100 font-bold text-stroke-black">
          {title}
        </p>
      </div>
    </div>
  </a>
);


export default async function JaviPage() {
    return (
    <section className="mb-32 bg-black">
      <div className="max-w-6xl px-4 py-8 mx-auto sm:px-6 sm:pt-24 lg:px-8">
        <div className="sm:align-center flex flex-col sm:flex-col">
          <h1 className="text-4xl mb-8 font-extrabold text-white sm:text-center sm:text-6xl">
            Javier Pallarés
          </h1>
          <div className="flex gap-5">
            <div className="flex flex-col w-svw gap-3">
            <img
              src="https://picsum.photos/seed/javi/700/600"
              className="w-96 h-80 rounded-2xl"
            />
            <img
              src="https://picsum.photos/seed/pallarés/700/600"
              className="w-96 h-80 rounded-2xl"
            />
            </div>
            <div className="mt-4 text-lg flex flex-col gap-8 align-middle">
              <p className="text-white">
              Javier Pallarés es un programador exitoso y un destacado entrenador de baloncesto reconocido a nivel mundial. 
              Con una pasión innata por la tecnología, Javier ha desarrollado habilidades excepcionales en la programación, trabajando en proyectos innovadores que han dejado huella en la industria tecnológica. 
              Su capacidad para resolver problemas complejos y su creatividad en el desarrollo de software lo han posicionado como un referente en su campo. 
              Además, ha colaborado con empresas de renombre, aportando soluciones que han optimizado procesos y mejorado la experiencia de los usuarios.
              </p>
              <p>
              Paralelamente, Javier ha cultivado una carrera impresionante como entrenador de baloncesto. 
              Su amor por el deporte lo llevó a dedicar tiempo y esfuerzo para convertirse en uno de los entrenadores más respetados a nivel internacional. 
              Bajo su liderazgo, numerosos equipos han alcanzado victorias significativas en torneos de alto nivel. 
              Su enfoque en el desarrollo integral de los jugadores, combinando estrategias tácticas innovadoras con una motivación constante, ha sido clave para su éxito. 
              Javier no solo forma atletas de alto rendimiento, sino también personas con valores sólidos y espíritu deportivo.
              </p>
              <p>
              La dualidad en la carrera de Javier Pallarés, combinando la programación y el baloncesto, es un testimonio de su versatilidad y dedicación. 
              Su habilidad para equilibrar dos campos tan distintos y sobresalir en ambos es inspiradora. 
              Javier no solo ha dejado una marca indeleble en el mundo de la tecnología y el deporte, 
              sino que también ha demostrado que la pasión y el esfuerzo pueden llevar a alcanzar logros extraordinarios en múltiples disciplinas. 
              Su legado perdurará, motivando a otros a perseguir sus sueños con la misma tenacidad y compromiso.
              </p>
              <div className="flex-1" />
              <p className="text-right">
                Puedes seguir el trabajo de Javi en {' '}
                <a
                  href="https://github.com/bale2manos/"
                  className="text-blue-400 hover:underline"
                >
                  @bale2manos
                </a>
                .
              </p>
            </div>
          </div>
          <h1 className="text-4xl my-8 font-extrabold text-white sm:text-center sm:text-6xl">
            Pasiones
          </h1>
          
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-3">
            {passions.map((passion, index) => (
              <PassionCard
                key={index}
                url={passion.url}
                title={passion.title}
                imgSrc={passion.imgSrc}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
    );
    }
import AboutForm from '@/app/about/javi/ContactForm';
import MusicList from '@/app/about/javi/MusicList';
import RandomDice from '@/app/about/javi/RandomDice';

interface Passion {
  url: string;
  title: string;
  imgSrc: string;
}

const passions: Passion[] = [
  {
    url: 'https://github.com/bale2manos',
    title: 'Proyectos',
    imgSrc: 'https://picsum.photos/seed/2/700/700',
  },
  {
    url: 'https://basketaranjuez.com/',
    title: 'Baloncesto',
    imgSrc:
      'https://i.pinimg.com/originals/fa/c6/3c/fac63c62d77afcc8f1b0cfe3ce001753.jpg',
  },
  {
    url: 'https://www.magicworldresort.com/es',
    title: 'Viajes',
    imgSrc: 'https://picsum.photos/seed/3/700/700',
  },
];

interface PassionCardProps {
  url: string;
  title: string;
  imgSrc: string;
}

/**
 * Renders a passion card component.
 *
 * @param {string} url - The URL to navigate to when the card is clicked.
 * @param {string} title - The title of the card.
 * @param {string} imgSrc - The source URL of the image to display on the card.
 * @returns {React.ReactElement} The rendered passion card component.
 */
const PassionCard: React.FC<PassionCardProps> = ({url, title, imgSrc}) => (
  <a href={url} className="block" target="_blank" rel="noopener noreferrer">
    <div className="relative flex flex-col rounded-2xl bg-white duration-300 hover:scale-105">
      <img
        src={imgSrc}
        alt={title}
        className="w-full rounded-2xl hover:opacity-20"
      />
      <div className="absolute inset-0 flex items-center justify-center rounded-2xl hover:bg-white/20">
        <p className="text-stroke-black absolute inset-0 z-10 flex items-center justify-center text-4xl font-bold text-gray-100 opacity-0 duration-300 hover:opacity-100">
          {title}
        </p>
      </div>
    </div>
  </a>
);

/**
 * Renders the JaviPage component.
 *
 * @returns JSX element representing the JaviPage component.
 */
export default async function JaviPage() {
  return (
    <section className="mb-32 bg-black">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:pt-24 lg:px-8">
        <div className="sm:align-center flex flex-col sm:flex-col">
          <h1 className="mb-8 text-4xl font-extrabold text-white sm:text-center sm:text-6xl">
            Javier Pallarés
          </h1>
          <div className="flex gap-5">
            <div className="flex w-svw flex-col gap-3">
              <img
                src="https://picsum.photos/seed/javi/700/600"
                className="h-80 w-96 rounded-2xl"
                alt="Javier Pallarés"
              />
              <img
                src="https://picsum.photos/seed/pallarés/700/600"
                className="h-80 w-96 rounded-2xl"
                alt="Javier Pallarés"
              />
            </div>
            <div className="mt-4 flex flex-col gap-8 align-middle text-lg">
              <p className="text-white">
                Javier Pallarés es un programador exitoso y un destacado
                entrenador de baloncesto reconocido a nivel mundial. Con una
                pasión innata por la tecnología, Javier ha desarrollado
                habilidades excepcionales en la programación, trabajando en
                proyectos innovadores que han dejado huella en la industria
                tecnológica. Su capacidad para resolver problemas complejos y su
                creatividad en el desarrollo de software lo han posicionado como
                un referente en su campo. Además, ha colaborado con empresas de
                renombre, aportando soluciones que han optimizado procesos y
                mejorado la experiencia de los usuarios.
              </p>
              <p>
                Paralelamente, Javier ha cultivado una carrera impresionante
                como entrenador de baloncesto. Su amor por el deporte lo llevó a
                dedicar tiempo y esfuerzo para convertirse en uno de los
                entrenadores más respetados a nivel internacional. Bajo su
                liderazgo, numerosos equipos han alcanzado victorias
                significativas en torneos de alto nivel. Su enfoque en el
                desarrollo integral de los jugadores, combinando estrategias
                tácticas innovadoras con una motivación constante, ha sido clave
                para su éxito. Javier no solo forma atletas de alto rendimiento,
                sino también personas con valores sólidos y espíritu deportivo.
              </p>
              <p>
                La dualidad en la carrera de Javier Pallarés, combinando la
                programación y el baloncesto, es un testimonio de su
                versatilidad y dedicación. Su habilidad para equilibrar dos
                campos tan distintos y sobresalir en ambos es inspiradora.
                Javier no solo ha dejado una marca indeleble en el mundo de la
                tecnología y el deporte, sino que también ha demostrado que la
                pasión y el esfuerzo pueden llevar a alcanzar logros
                extraordinarios en múltiples disciplinas. Su legado perdurará,
                motivando a otros a perseguir sus sueños con la misma tenacidad
                y compromiso.
              </p>
              <div className="flex-1" />
              <p className="text-right">
                Puedes seguir el trabajo de Javi en{' '}
                <a
                  href="https://github.com/bale2manos/"
                  className="text-blue-400 hover:underline">
                  @bale2manos
                </a>
                .
              </p>
            </div>
          </div>
          <h1 className="my-8 text-4xl font-extrabold text-white sm:text-center sm:text-6xl">
            Pasiones
          </h1>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {passions.map((passion, index) => (
              <PassionCard
                key={index}
                url={passion.url}
                title={passion.title}
                imgSrc={passion.imgSrc}
              />
            ))}
          </div>

          <h1 className="my-8  mt-16 text-4xl font-extrabold text-white sm:text-center sm:text-6xl">
            Dado aleatorio
          </h1>

          <RandomDice />

          <h1 className="mt-16 text-4xl font-extrabold text-white sm:text-center sm:text-6xl">
            Formulario de contacto
          </h1>
          <AboutForm />

          <h1 className="my-8  mt-16 text-4xl font-extrabold text-white sm:text-center sm:text-6xl">
            Mi música
          </h1>
          <MusicList />
        </div>
      </div>
    </section>
  );
}

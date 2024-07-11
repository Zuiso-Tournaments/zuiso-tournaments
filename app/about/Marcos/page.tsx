import DiceApp from "./dice";
export default async function MarcosPage() {
    const artists = [
        {
            name: "Yung Beef",
            img: "https://cdn.themedizine.com/2019/05/Yung-Beef-1000x562.jpg",
            spotify: "https://open.spotify.com/intl-es/artist/1rTUwYS38LkQTlT2fhikch?si=u4KlE5oCRhiYEYZzmv5zUQ"
        },
        {
            name: "Cecilio G",
            img: "https://www.mondosonoro.com/wp-content/uploads/2016/06/jarfaiter-ceciclio-g-y-el-coleta-concierto-558-body-image-1450090889-size_1000.jpg",
            spotify: "https://open.spotify.com/intl-es/artist/2Q2fYVYxFSmodq53BFyD6p?si=7TVgwoBwQsqx6F4Kc33tlA"
        },
        {
            name: "Midas Alonso",
            img: "https://images.ecestaticos.com/aTiyI4cAaxiI2UXhsY1xl5Q1KLU=/31x0:930x674/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F149%2Fa1e%2F0b0%2F149a1e0b001bdf34effb653c66b954f1.jpg",
            spotify: "https://open.spotify.com/intl-es/artist/4YbohdhSehUUc7RT3STcKW?si=Y0eY-kmGS4SHGUUMQR9cHg"
        }
    ];

    return (
        <section className="mb-32 bg-black">
            <div className="max-w-6xl px-4 py-8 mx-auto sm:px-6 sm:pt-24 lg:px-8 sm:align-center flex flex-col sm:flex-col">
                <h1 className="text-4xl mb-8 font-extrabold text-white sm:text-center sm:text-6xl">
                    Marcos García
                </h1>
                <div className="flex gap-4">
                    <img
                        src="https://picsum.photos/seed/marcos/300/300"
                        className="size-96 rounded-2xl"
                    />
                    <div className="mt-4 text-lg flex flex-col gap-8">
                        <p className="text-white">
                            Marcos García es un estudiante dedicado de ingeniería informática y un aprendiz entusiasta.
                            Le apasiona el desarrollo de software y disfruta afrontar nuevos desafíos a través de proyectos innovadores.
                            Marcos también es el creador del blog informativo "Tech Insights with Marcos".
                        </p>
                        <p>
                            Marcos tiene un fuerte compromiso con la expansión de sus conocimientos y habilidades,
                            buscando continuamente nuevas oportunidades de aprendizaje. Cree en el poder de la colaboración y la comunidad
                            para impulsar el avance tecnológico. En su tiempo libre, a Marcos le gusta leer sobre las últimas tendencias tecnológicas,
                            trabajar en proyectos personales y pasar tiempo con su familia.
                        </p>
                        <div className="flex-1" />
                        <p className="text-right">
                            Puedes seguir a Marcos en Twitter en{' '}
                            <a
                                href="https://twitter.com/marcos"
                                className="text-blue-400 hover:underline"
                            >
                                @marcos
                            </a>.
                        </p>
                    </div>
                </div>  
                <div className="mt-12">
                    <h2 className="text-3xl font-bold text-white mb-4 sm:text-center">Marcos is a music lover and these are his favorite artists:</h2>
                    <ul className="flex flex-wrap gap-4 justify-center">
                        {artists.map((artist, index) => (
                            <li key={index} className="flex flex-col items-center bg-white rounded-xl p-4">
                                <a href={artist.spotify} target="_blank" rel="noopener noreferrer">
                                    <img src={artist.img} alt={artist.name} className="w-32 h-32 rounded-full mb-2" />
                                    <p className="text-black text-lg font-semibold">{artist.name}</p>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div> 
                <div className="mt-12">
                    <h1 className="text-3xl font-bold text-white mb-4 sm:text-center">Marcos also enjoys playing with a dice and seeing which result comes up the most times.</h1>
                    <DiceApp />
                </div>   
            </div>
        </section>
    );
}


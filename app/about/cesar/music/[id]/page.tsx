'use client';

import {Button} from '@/components/ui/button';
import Link from 'next/link';
import {useParams} from 'next/navigation';
import {useEffect, useState} from 'react';

export default function MusicAboutId() {
  interface Music {
    title: string;
    artista: string;
    idioma: string;
    estilo: string;
    url: string;
  }
  const [data, setdata] = useState<Music>();

  const params = useParams();

  const fetchData = async () => {
    const song = await fetch(
      `http://localhost:3000/api/cesarApi/${params.id}`
    ).then((res) => res.json());
    setdata(song);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!data)
    return (
      <div>
        <h1 className="mb-11 text-4xl font-extrabold text-white sm:text-center sm:text-6xl">
          {' '}
          Loading...
        </h1>
      </div>
    );

  return (
    <section className="mb-32 bg-black">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:pt-24 lg:px-8">
        <div className="sm:align-center sm:flex sm:flex-col">
          <div>
            <h1 className="mb-8 text-4xl font-extrabold text-white sm:text-center sm:text-6xl">
              {data?.title}
            </h1>
            <p className="flex justify-center">{data?.artista}</p>
            <p className="flex justify-center">{data?.idioma}</p>
            <p className="mb-8 flex justify-center">{data?.estilo}</p>
          </div>
        </div>
        <iframe
          className="h-96 w-full"
          width="560"
          height="315"
          src={data?.url}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />

        <Link href="/about/cesar">
          <Button className="bg-red-600 text-yellow-300">Atras</Button>
        </Link>
      </div>
    </section>
  );
}

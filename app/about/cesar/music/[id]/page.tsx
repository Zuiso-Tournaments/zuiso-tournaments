'use client';

import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function MusicAboutId() {

  interface Music{
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

  if (!data) return <div><h1 className="text-4xl mb-11 font-extrabold text-white sm:text-center sm:text-6xl"> Loading...</h1></div>;

  return (
    <section className="mb-32 bg-black">
      <div className="max-w-6xl px-4 py-8 mx-auto sm:px-6 sm:pt-24 lg:px-8">
        <div className="sm:align-center sm:flex sm:flex-col">
          <div>
            <h1 className="text-4xl mb-8 font-extrabold text-white sm:text-center sm:text-6xl">
              {data?.title}
            </h1>
            <p className="flex justify-center">{data?.artista}</p>
            <p className="flex justify-center">{data?.idioma}</p>
            <p className="flex justify-center mb-8">{data?.estilo}</p>
          </div>
        </div>
        <iframe
          className="w-full h-96"
          width="560"
          height="315"
          src={data?.url}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

        <Link href="/about/cesar">
          <Button className="text-yellow-300 bg-red-600">Atras</Button>
        </Link>
      </div>
    </section>
  );
}

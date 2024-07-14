'use client';

import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function MusicAboutId() {
  const [data, setdata] = useState();

  const params = useParams();

  const fetchData = async () => {
    const song = await fetch(
      `http://localhost:3000/api/hello/${params.id}`
    ).then((res) => res.json());
    setdata(song);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <section className="mb-32 bg-black">
      <div className="max-w-6xl px-4 py-8 mx-auto sm:px-6 sm:pt-24 lg:px-8">
        <div className="sm:align-center sm:flex sm:flex-col">
          <div>
            <h1 className="text-4xl mb-8 font-extrabold text-white sm:text-center sm:text-6xl">
              {data?.title}
            </h1>
            <p>{data?.artista}</p>
            <p>{data?.idioma}</p>
            <p>{data?.estilo}</p>
          </div>
        </div>
        <iframe
          width="560"
          height="315"
          src={data?.url}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>

        <Link href="/about/mdemora">
          <Button>Atras</Button>
        </Link>
      </div>
    </section>
  );
}

'use client';

import type {Song} from '@/app/about/hugo2/MusicCard';
import {Button} from '@/components/ui/button';
import Link from 'next/link';
import {useParams} from 'next/navigation';
import {useEffect, useState} from 'react';

export default function MusicAboutId() {
  const [data, setdata] = useState<Song>();

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

  return (
    <section className="mb-32 bg-black">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:pt-24 lg:px-8">
        <div className="sm:align-center sm:flex sm:flex-col">
          <div>
            <h1 className="mb-8 text-4xl font-extrabold text-white sm:text-center sm:text-6xl">
              {data?.title}
            </h1>
            <p>{data?.artista}</p>
            <p>{data?.idioma}</p>
            <p>{data?.estilo}</p>
          </div>
        </div>

        <Link href="/about/hugo">
          <Button>Atras</Button>
        </Link>
      </div>
    </section>
  );
}

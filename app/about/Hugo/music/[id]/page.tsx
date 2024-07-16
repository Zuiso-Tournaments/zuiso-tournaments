'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Song } from '@/app/about/Hugo/MusicCard';

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

        <Link href="/about/Hugo">
          <Button>Atras</Button>
        </Link>
      </div>
    </section>
  );
}
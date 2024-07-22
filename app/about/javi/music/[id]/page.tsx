'use client';

import type {MusicCardProps} from '@/app/about/javi/MusicCard';
import {MusicCardLoading} from '@/app/about/javi/loading/MusicCardLoading';
import {Button} from '@/components/ui/button';
import Link from 'next/link';
import {useParams} from 'next/navigation';
import {useEffect, useState} from 'react';

const languageToFlag: {[key: string]: string} = {
  es: '🇪🇸',
  en: '🇬🇧',
  fr: '🇫🇷',
  de: '🇩🇪',
  it: '🇮🇹',
  pt: '🇵🇹',
  ja: '🇯🇵',
  zh: '🇨🇳',
};

export default function SongFromId() {
  const [data, setData] = useState<MusicCardProps>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();

  const params = useParams();

  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/javi-api/${params.id}`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const song = await response.json();
      setData(song);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (params.id) {
      fetchData();
    }
  }, [params.id]);

  if (loading) return <MusicCardLoading />;
  if (error) return <div>Error: {error}</div>;

  return (
    <section className="mb-32 bg-black">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-4xl font-extrabold text-white sm:text-center sm:text-6xl">
          {data?.title}
        </h1>
        <div className="flex flex-row">
          <div className="sm:align-center mt-4 w-1/2 gap-2 text-xl sm:flex sm:flex-col">
            <div className="flex flex-row whitespace-pre-wrap">
              <p className="font-bold text-white">Artista: </p>
              <p className="text-white">{data?.artista}</p>
            </div>
            <div className="flex flex-row whitespace-pre-wrap">
              <p className="font-bold text-white">Idioma: </p>
              <p className="text-white">
                {data?.idioma && languageToFlag[data.idioma]
                  ? languageToFlag[data.idioma]
                  : data?.idioma}
              </p>
            </div>

            <div className="flex flex-row whitespace-pre-wrap">
              <p className="font-bold text-white">Estilo: </p>
              <p className="text-white">{data?.estilo}</p>
            </div>

            <div className="mt-2 flex flex-row gap-4">
              <div className="my-auto">
                {data?.spotify && (
                  <Link
                    href={data?.spotify}
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/768px-Spotify_logo_without_text.svg.png"
                      alt="spotify"
                      className="h-12 w-12 rounded-full bg-white"
                    />
                  </Link>
                )}
              </div>

              <div className="my-auto align-middle">
                {data?.youtube && (
                  <Link
                    href={data.youtube}
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png"
                      alt="youtube"
                      className="h-10"
                    />
                  </Link>
                )}
              </div>

              <div className="my-auto">
                {data?.soundcloud && (
                  <Link
                    href={data.soundcloud}
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      src="https://cdn.icon-icons.com/icons2/2972/PNG/512/soundcloud_logo_icon_186893.png"
                      alt="soundcloud"
                      className="h-12 rounded-full bg-white"
                    />
                  </Link>
                )}
              </div>
            </div>

            <div className="mt-4 flex flex-row gap-4">
              {data?.genius && (
                <Link
                  href={data.genius}
                  target="_blank"
                  rel="noopener noreferrer">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/51/Genius-logo.png"
                    alt="genius"
                    className="h-12 rounded-md"
                  />
                </Link>
              )}
            </div>

            <div className="mt-auto">
              <Link href="/about/javi">
                <Button className="bg-blue-500 text-xl hover:bg-blue-400">
                  Atrás
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex w-1/2">
            <div className="w-full">
              {data?.url && (
                <iframe
                  className="h-96 w-full rounded-xl"
                  src={data.url}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

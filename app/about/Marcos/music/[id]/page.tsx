'use client';

import {useParams} from 'next/navigation';
import {useEffect, useState} from 'react';

import type {Song} from '../../SongList';

export default function SongId() {
  const [song, setSong] = useState<Song | null>(null);
  const {id} = useParams();

  const fetchData = async () => {
    const data = await fetch(`http://localhost:3000/api/MarcosAPI/${id}`).then(
      (res) => res.json()
    );
    setSong(data);
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  if (!song) return <div>Loading...</div>;

  return (
    <div className="mx-auto max-w-3xl p-4">
      <div className="overflow-hidden rounded-lg bg-white shadow-md">
        <div
          className="relative"
          style={{paddingBottom: '56.25%', height: 0, overflow: 'hidden'}}>
          <iframe
            className="absolute left-0 top-0 h-full w-full"
            src={song.url.toString()}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <div className="p-6">
          <h1 className="mb-2 text-3xl font-bold">{song.title}</h1>
          <p className="mb-4 text-sm text-gray-700">{song.artista}</p>
          <div className="mb-4 flex items-center">
            <span className="mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800">
              {song.idioma}
            </span>
            <span className="mr-2 rounded bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-800">
              {song.estilo}
            </span>
          </div>
          <a
            href={song.url.toString()}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline hover:text-blue-700">
            Listen to the song
          </a>
        </div>
      </div>
    </div>
  );
}

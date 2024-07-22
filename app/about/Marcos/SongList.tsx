'use client';

import Link from 'next/link';
import {useEffect, useState} from 'react';

export interface Song {
  id: string;
  title: string;
  artista: string;
  idioma: string;
  estilo: string;
  url: URL;
}

const SongList = () => {
  const [songs, setSongs] = useState<Song[]>([]);

  const fetchData = async () => {
    const data = await fetch('http://localhost:3000/api/MarcosAPI').then(
      (res) => res.json()
    );
    setSongs(data.music);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!songs.length) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl font-bold">Song List</h1>
      <ul className="list-none">
        {songs.map((song) => (
          <li
            key={song.id}
            className="mb-2 rounded border border-gray-300 p-4 shadow hover:border-4 hover:border-gray-700">
            <h2 className="text-xl font-semibold">{song.title}</h2>
            <p className="text-gray-600">{song.artista}</p>
            <Link
              href={`/about/marcos/music/${song.id}`}
              className="text-blue-500 underline hover:text-blue-700">
              View song
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SongList;

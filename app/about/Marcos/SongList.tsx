'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

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
        const data = await fetch('http://localhost:3000/api/MarcosAPI').then((res) =>
            res.json()
        );
        setSongs(data.music)
    }

    useEffect(() => {
        fetchData();
    }, []);

    if (!songs.length) return <div>Loading...</div>;

    return (
      <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">Song List</h1>
          <ul className="list-none">
              {songs.map(song => (
                  <li key={song.id} className="mb-2 p-4 border border-gray-300 rounded shadow hover:border-4 hover:border-gray-700">
                      <h2 className="text-xl font-semibold">{song.title}</h2>
                      <p className="text-gray-600">{song.artista}</p>
                      <Link href={`/about/Marcos/music/${song.id}`} className="text-blue-500 hover:text-blue-700 underline">View song</Link>
                  </li>
              ))}
          </ul>
      </div>
  );
}
export default SongList;
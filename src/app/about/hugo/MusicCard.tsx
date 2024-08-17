'use client';

import Link from 'next/link';

interface Song {
  id: number;
  title: string;
  artista: string;
  idioma: string;
  estilo: string;
  url: string;
}

export type {Song};

const MusicCard = ({song}: {song: Song}) => {
  return (
    <Link
      href={`/about/hugo/music/${song.id}`}
      className="rounded bg-orange-400 p-4">
      <div>
        <h2>{song.title}</h2>
        <p>{song.artista}</p>
        <p>{song.idioma}</p>
        <p>{song.estilo}</p>
      </div>
    </Link>
  );
};

export default MusicCard;

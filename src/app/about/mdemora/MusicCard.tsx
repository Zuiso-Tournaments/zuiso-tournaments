'use client';

import Link from 'next/link';

import type {Song} from '@/app/about/mdemora/types';

const MusicCard = ({song}: {song: Song}) => {
  return (
    <Link
      href={`/about/mdemora/music/${song.id}`}
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

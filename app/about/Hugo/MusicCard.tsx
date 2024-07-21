'use client';

import { ShoppingBag } from 'lucide-react';
import Link from 'next/link';

interface Song {
    id: number;
    title: string;
    artista: string;
    idioma: string;
    estilo: string;
};

export type { Song };

const MusicCard = ({ song }: { song: Song }) => {
  return (
    <Link
      href={`/about/Hugo/music/${song.id}`}
      className="p-4 bg-orange-400 rounded"
    >
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

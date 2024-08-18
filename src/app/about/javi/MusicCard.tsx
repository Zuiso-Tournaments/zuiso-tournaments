'use client';

import Link from 'next/link';

interface MusicCardProps {
  id: string;
  title: string;
  artista: string;
  idioma: string;
  estilo: string;
  imgSrc: string;
  url: string;
  spotify: string;
  youtube: string;
  soundcloud: string;
  genius: string;
}

const MusicCard = ({song, index}: {song: MusicCardProps; index: number}) => {
  const hoverColor =
    index % 2 === 0 ? 'hover:bg-red-500/10' : 'hover:bg-yellow-500/10';

  return (
    <Link href={`/about/javi/music/${song.id}`}>
      <div className="relative flex flex-col rounded-2xl duration-300 hover:scale-105">
        <img
          src={song.imgSrc}
          alt={song.title}
          className="h-48 w-48 rounded-2xl"
        />
        <div
          className={`absolute inset-0 flex items-center justify-center rounded-2xl ${hoverColor}`}>
          <p className="text-stroke-black absolute inset-0 z-10 flex items-center justify-center text-xl font-bold text-gray-100 opacity-0 duration-300 hover:opacity-100">
            {song.title}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default MusicCard;
export type {MusicCardProps};

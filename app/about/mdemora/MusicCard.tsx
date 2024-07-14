'use client';

import Link from 'next/link';

const MusicCard = ({ song }) => {
  return (
    <Link
      href={`/about/mdemora/music/${song.id}`}
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

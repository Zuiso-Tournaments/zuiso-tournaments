'use client';

import MusicCard from '@/app/about/mdemora/MusicCard';
import type {Song} from '@/app/about/mdemora/types';
import {Skeleton} from '@/components/ui/skeleton';
import {useEffect, useState} from 'react';

const MusicList = () => {
  const [music, setMusic] = useState<Song[]>([]);
  const [loading, setloading] = useState(true);

  const fetchData = async () => {
    setTimeout(async () => {
      const data = await fetch('http://localhost:3000/api/hello').then((res) =>
        res.json()
      );
      setMusic(data.music);
      setloading(false);
    }, 3000);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="my-4">
      <h1>Music List</h1>
      {loading && <Skeleton className="size-96" />}
      <div className="mt-4 flex w-full flex-wrap gap-4">
        {music.map((song) => (
          <MusicCard key={song.id} song={song} />
        ))}
      </div>
    </div>
  );
};

export default MusicList;

'use client';

import MusicCard from '@/app/about/mdemora/MusicCard';
import { Skeleton } from '@/components/ui/skeleton';
import { useEffect, useState } from 'react';

const MusicList = () => {
  const [music, setMusic] = useState([]);
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
      <div className="flex gap-4 w-full flex-wrap mt-4">
        {music.map((song) => (
          <MusicCard key={song.id} song={song} />
        ))}
      </div>
    </div>
  );
};

export default MusicList;

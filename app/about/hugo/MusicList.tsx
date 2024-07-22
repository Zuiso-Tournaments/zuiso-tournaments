'use client';

import MusicCard from '@/app/about/hugo2/MusicCard';
import {useEffect, useState} from 'react';

const MusicList = () => {
  const [music, setMusic] = useState<any[]>([]);

  const fetchData = async () => {
    const data = await fetch('http://localhost:3000/api/hello').then((rest) =>
      rest.json()
    );
    setMusic(data.music);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Music List</h1>
      <div className="flex">
        {music.map((song) => (
          <MusicCard key={song.id} song={song} />
        ))}
      </div>
    </div>
  );
};
export default MusicList;

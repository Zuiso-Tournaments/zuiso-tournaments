'use client';

import MusicCard from '@/app/about/javi/MusicCard';
import { MusicCardProps } from '@/app/about/javi/MusicCard';
import { useEffect, useState } from 'react';
import { Loading } from '@/components/ui/javi-loading/music-list';

const MusicList = () => {
  const [music, setMusic] = useState<MusicCardProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMusicData = async () => {
    try {
      const response = await fetch('/api/javi-api'); // Use relative path for the API endpoint
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setMusic(data.music || []);
    } catch (error) {
      console.error('Failed to fetch music data:', error);
      setError('Failed to fetch music data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMusicData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flex gap-4 w-full flex-wrap mt-4 justify-center">
      {music.map((song, index) => (
        <MusicCard key={song.id} song={song} index={index} />
      ))}
    </div>
  );
};

export default MusicList;

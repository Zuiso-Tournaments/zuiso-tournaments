'use client';

import type {MusicCardProps} from '@/app/about/javi/MusicCard';
import MusicCard from '@/app/about/javi/MusicCard';
import {MusicListLoading} from '@/app/about/javi/loading/MusicListLoading';
import {useEffect, useState} from 'react';

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
    return <MusicListLoading />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="mt-4 flex w-full flex-wrap justify-center gap-4">
      {music.map((song, index) => (
        <MusicCard key={song.id} song={song} index={index} />
      ))}
    </div>
  );
};

export default MusicList;

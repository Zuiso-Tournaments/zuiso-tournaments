'use client';

import ProgressTracker from '@/app/about/mdemora/jotai/ProgressTracker';
import {animeAtom} from '@/app/about/mdemora/jotai/atoms';
import {Button} from '@/components/ui/button';
import {useAtomValue, useSetAtom} from 'jotai';

const AnimeList = () => {
  const anime = useAtomValue(animeAtom);

  return (
    <ul>
      {anime.map((item) => (
        <li key={item.title}>{item.title}</li>
      ))}
    </ul>
  );
};

const AddAnime = () => {
  const setAnime = useSetAtom(animeAtom);

  return (
    <Button
      onClick={() => {
        setAnime((animes) => [
          ...animes,
          {
            title: `Cowboy Bebop ${Math.random()}`,
            year: 1998,
            watched: false,
          },
        ]);
      }}>
      Add Cowboy Bebop random
    </Button>
  );
};

const AnimeApp = () => {
  return (
    <div className="container flex flex-col gap-4">
      <AnimeList />
      <AddAnime />
      <ProgressTracker />
    </div>
  );
};

export default AnimeApp;

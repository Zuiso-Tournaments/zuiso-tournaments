'use client';

import {animeAtom} from '@/app/about/mdemora/jotai/atoms';
import {progressAtom} from '@/app/about/mdemora/jotai/derivedAtoms';
import {Button} from '@/components/ui/button';
import {Progress} from '@/components/ui/progress';
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
        setAnime((anime) => [
          ...anime,
          {
            title: 'Cowboy Bebop',
            year: 1998,
            watched: false,
          },
        ]);
      }}>
      Add Cowboy Bebop
    </Button>
  );
};

const ProgressTracker = () => {
  const progress = useAtomValue(progressAtom);

  return (
    <div className="flex max-w-96 items-center gap-2 bg-slate-500 ">
      <Progress value={progress * 100} className="w-full " />
      {Math.trunc(progress * 100)}%
    </div>
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

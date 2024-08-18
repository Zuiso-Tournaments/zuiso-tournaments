'use client';

// Adjust the import according to your file structure
import {toggleWatched} from '@/actions/javiTODO';
import type {Film} from '@/db/schemas/tablaJaviTODO';

import {useEffect, useState} from 'react';

import {Checkbox} from '@/components/ui/checkbox';

// Adjust the import according to your file structure

const FilmCard = ({film}: {film: Film}) => {
  const [isWatched, setIsWatched] = useState(film.watched);
  // Sync the local state with the prop if it changes
  useEffect(() => {
    setIsWatched(film.watched);
  }, [film.watched]);

  const handleCheckboxChange = async () => {
    console.log('Checkbox clicked for film:', film.filmId);
    try {
      // Toggle the watched status
      setIsWatched((prev) => !prev);
      await toggleWatched(film.filmId);
    } catch (error) {
      console.error('Failed to toggle watched status:', error);
    }
  };

  return (
    <div
      key={film.filmId}
      className={`w-10/12  rounded-xl border-4 bg-gray-100/30 px-6 py-4 ${getBorderColor(film.priority)} flex flex-row items-center justify-between `}>
      <p className="w-full text-xl font-bold ">{film.title}</p>
      <div className="flex w-full flex-row items-center justify-end gap-2">
        <p>Vista:</p>
        <Checkbox
          checked={isWatched}
          onClick={handleCheckboxChange}
          className="size-6 rounded-xl border-2 font-bold"
        />
      </div>
    </div>
  );
};

const getBorderColor = (priority: number) => {
  switch (priority) {
    case 1:
      return 'border-green-500';
    case 2:
      return 'border-yellow-400';
    case 3:
      return 'border-orange-400';
    case 4:
      return 'border-orange-600';
    case 5:
      return 'border-red-500';
    default:
      return 'border-gray-500';
  }
};

export default FilmCard;

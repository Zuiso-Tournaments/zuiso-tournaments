'use client';

import { useState, useEffect } from 'react';
import type { Film } from '@/db/schemas/tablaJaviTODO';
import { Checkbox } from '@/components/ui/checkbox'; // Adjust the import according to your file structure
import { toggleWatched } from '@/actions/javiTODO'; // Adjust the import according to your file structure

const FilmCard = ({ film }: { film: Film }) => {
  const [isWatched, setIsWatched] = useState(film.watched);
  // Sync the local state with the prop if it changes
  useEffect(() => {
    setIsWatched(film.watched);
  }, [film.watched]);

  const handleCheckboxChange = async () => {
    console.log('Checkbox clicked for film:', film.filmId);
    try {
      // Toggle the watched status
      setIsWatched(prev => !prev);
      await toggleWatched(film.filmId);
      
    } catch (error) {
      console.error('Failed to toggle watched status:', error);
    }
  };

  return (
    <div
      key={film.filmId}
      className={`bg-gray-100/30  w-10/12 border-4 py-4 px-6 rounded-xl ${getBorderColor(film.priority)} flex flex-row justify-between items-center `}
    >
      <p className='font-bold text-xl w-full '>{film.title}</p>
      <div className='flex flex-row justify-end items-center w-full gap-2'>
        <p>Vista:</p>
        <Checkbox checked={isWatched} onClick={handleCheckboxChange} 
        className='rounded-xl border-2 font-bold size-6'/>
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

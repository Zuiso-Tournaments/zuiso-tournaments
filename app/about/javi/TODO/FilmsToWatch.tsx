'use client';

import {addNewFilmAction} from '@/actions/javiTODO';
import Modal from '@/components/ui/Modal/Modal';
import ModalHeader from '@/components/ui/Modal/ModalHeader';
import ModalBody from '@/components/ui/Modal/ModalBody';
import ModalFooter from '@/components/ui/Modal/ModalFooter';
import { Input } from '@/components/ui/input';
import {
   Select, 
   SelectItem, 
   SelectContent, 
   SelectGroup, 
   SelectTrigger,
   SelectValue
  } 
from '@/components/ui/select'; 
import {Button} from '@/components/ui/button';
import type {Film} from '@/db/schemas/tablaJaviTODO';
import FilmCard from '@/app/about/javi/TODO/FilmCard';
import {useEffect, useState, useRef} from 'react';
import {Checkbox} from '@/components/ui/checkbox';

const FilmsToWatch = ({films: defaultFilms}: {films: Film[]}) => {
  const [films, setFilms] = useState<Film[]>(defaultFilms);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newFilm, setNewFilm] = useState({ title: '', watched: false, priority: 1 });
  const [isWatched, setIsWatched] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    setIsWatched(newFilm.watched);
  }, [newFilm.watched]);

  function sortFilmsData(data: Film[]): Film[] {
    return data.sort((a, b) => {
      // First, sort by watched status (false first, true last)
      if (a.watched !== b.watched) {
        return a.watched ? 1 : -1;
      }

      // Then, sort by priority (descending)
      if (a.priority !== b.priority) {
        return b.priority - a.priority;
      }

      // Finally, sort by createdAt (ascending)
      return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    });
  }

  const fetchData = async () => {
    try {
      const response = await fetch('/api/javiTODOApi');
      if (!response.ok) {
        throw new Error('Failed to fetch films');
      }
      
      const { data } = await response.json();
      
      // Sort the films
      const sortedFilms = sortFilmsData(data);

      setFilms(sortedFilms);
    } catch (error) {
      console.error('Error fetching and sorting films:', error);
    }

  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (defaultFilms) {
      const sortedFilms = sortFilmsData(defaultFilms);
      setFilms(sortedFilms);
    }
  }, [defaultFilms]);
  

  const handleClickNewFilm = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setNewFilm({ title: '', watched: false, priority: 1 });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('Input changed');
    const { name, type, value, checked } = e.target;
    
    setNewFilm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('Checkbox clicked');
    const { name, checked } = e.target;
    setIsWatched(prev => !prev);
    console.log('isWatched:', isWatched);
    setNewFilm(prev => ({
      ...prev,
      [name]: checked
    }));
  };


  const handlePriorityChange = (value: string) => {
    setNewFilm(prev => ({
      ...prev,
      priority: Number(value), 
    }));
  };
  
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await addNewFilmAction(newFilm);
      console.log(res);
      // Refresh the film list or handle the response as needed      
      setIsModalOpen(false); // Close modal after submission
      setNewFilm({ title: '', watched: false, priority: 1 });
    } catch (error) {
      console.error('Failed to add new film:', error);
      setNewFilm({ title: '', watched: false, priority: 1 });
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      console.log('Click outside');
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        event.stopPropagation();
      }
    };

    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalOpen]);



  

  return (
    <div className="flex flex-col gap-4 items-center  ">
    <Button
      onClick={handleClickNewFilm}
      className="bg-green-500 text-white w-32 h-32 rounded-full flex items-center justify-center text-3xl font-bold shadow-lg hover:bg-green-600 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 transition-transform transform hover:scale-105 active:scale-95"
    >
      Añade
    </Button>

        {films.map((film) => (
          <FilmCard key={film.filmId} film = {film} />
        ))}
      <Modal open={isModalOpen} onClose={handleCloseModal} >
        <ModalHeader>Añade una película o serie a tu lista</ModalHeader>
        <ModalBody >
          <form onSubmit={handleSubmit} className="space-y-4  ">
            <div className='w-full justify-center'>
              <label htmlFor="title" className="text-xl pb-1 block font-medium text-gray-700">Título</label>
              <Input
                id="title"
                name="title"
                type="text"
                value={newFilm.title}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full border-2"
              />
            </div>

            <div className='flex flex-row justify-around'>
              <div>
                <label htmlFor="priority" className="text-base pb-1 block  font-medium text-gray-700">Priority</label>
                <Select
                  name="priority"
                  value={newFilm.priority.toString()}
                  onValueChange={handlePriorityChange}
                >
                  
                  <SelectTrigger className="w-[90px]   border-2">
                    <SelectValue placeholder="Selecciona un asunto" />
                  </SelectTrigger>
                  <SelectContent className=" ">
                    <SelectGroup>
                      <SelectItem value="1" className=' '>1</SelectItem>
                      <SelectItem value="2" className=' '>2</SelectItem>
                      <SelectItem value="3" className=' '>3</SelectItem>
                      <SelectItem value="4" className=' '>4</SelectItem>
                      <SelectItem value="5" className=' '>5</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                  
                </Select>
              </div>

              <div className="flex flex-col items-center w-[180px]">
              <label htmlFor="watched" className="text-base font-medium text-gray-700 pb-1">Watched</label>
                <Checkbox
                  id="watched"
                  name="watched"
                  checked={isWatched}
                  onClick={() => handleCheckboxChange({ target: { name: 'watched', checked: !newFilm.watched } } as React.ChangeEvent<HTMLInputElement>)}
                  className="mr-2 size-8 rounded-l border-2 text-black font-black"
                />
              </div>

            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleCloseModal} variant="secondary">Cancel</Button>
          <Button onClick={handleSubmit}>Add Film</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default FilmsToWatch;

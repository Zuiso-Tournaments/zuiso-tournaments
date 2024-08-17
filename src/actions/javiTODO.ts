'use server';

import db from '@/db';
import type {Film, FilmInsert} from '@/db/schemas/tablaJaviTODO';
import {films} from '@/db/schemas/tablaJaviTODO';
import {eq} from 'drizzle-orm';

import {revalidatePath} from 'next/cache';

// Ensure this import is correct

export const deleteAllFilms = async () => {
  try {
    await db.delete(films); // Clear all rows from the films table
  } catch (error) {
    console.error('Error in deleteAllFilms:', error);
    throw error;
  }
};

export const getFilms = async () => {
  return await db.select().from(films);
};

export const addNewFilmAction = async (film: FilmInsert) => {
  console.log({film});

  try {
    const res = await db.insert(films).values(film);
    revalidatePath('/about/javi');
    console.log('res:', res);
    return res;
  } catch (error) {
    console.log(error);
    revalidatePath('/about/javi');
    return {
      error: 'Ha ocurrido un error',
    };
  }
};

export const toggleWatched = async (id: number) => {
  console.log('Checkbox clicked');
  try {
    // Fetch the film
    const film: Film[] = await db
      .select()
      .from(films)
      .where(eq(films.filmId, id));

    console.log('film:', film);

    if (film.length === 0) {
      throw new Error(`Film with id ${id} not found`);
    }

    // Assuming `film[0]` contains the film data
    const currentFilm = film[0];

    // Update the watched status
    const updatedFilm = await db
      .update(films)
      .set({watched: !currentFilm.watched})
      .where(eq(films.filmId, id));

    return updatedFilm[0];
  } catch (error) {
    console.error(
      `Error toggling watched status for film with id ${id}:`,
      error
    );
    throw error;
  }
};

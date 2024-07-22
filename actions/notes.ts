'use server';

import db from '@/db';
import {notes} from '@/db/schemas/notes';
import {revalidatePath} from 'next/cache';

export const addNewNoteAction = async (text: string) => {
  await db.insert(notes).values({
    text: text,
    userId: '1',
  });

  revalidatePath('/about/mdemora');

  return text;
};

export const getNotes = async () => {
  const data = await db.select().from(notes);
  return data;
};

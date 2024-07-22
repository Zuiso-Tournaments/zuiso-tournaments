'use server';

import db from '@/db';
import {PollaInsert, pollas} from '@/db/schemas/pollas';
import {revalidatePath} from 'next/cache';

export const getPollas = async () => {
  return await db.select().from(pollas);
};

export const addNewPollaAction = async (polla: PollaInsert) => {
  console.log({polla});

  try {
    const res = await db.insert(pollas).values(polla);
    revalidatePath('/about/mdemora');
    return res;
  } catch (error) {
    console.log(error);
    revalidatePath('/about/mdemora');
    return {
      error: 'Ha ocurrido un error',
    };
  }
};

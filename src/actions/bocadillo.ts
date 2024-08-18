'use server';

import db from '@/db';
import type {BocadilloInsert} from '@/db/schemas/bocadillo';
import {bocadillos} from '@/db/schemas/bocadillo';

import {revalidatePath} from 'next/cache';

export const getBocadillo = async () => {
  return await db.select().from(bocadillos);
};

export const addNewBocadilloAction = async (bocadillo: BocadilloInsert) => {
  console.log({bocadillo});

  try {
    const res = await db.insert(bocadillos).values(bocadillo);
    revalidatePath('/about/cesar');
    return res;
  } catch (error) {
    console.log(error);
    revalidatePath('/about/cesar');
    return {
      error: 'Ha ocurrido un error',
    };
  }
};

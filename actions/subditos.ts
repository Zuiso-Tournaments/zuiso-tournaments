'use server';

import db from '@/db';
import {SubditosInsert, subditos} from '@/db/schemas/subditos';
import {revalidatePath} from 'next/cache';

export const getSubditos = async () => {
  return await db.select().from(subditos);
};

export const addNewSubditoAction = async (subditos: SubditosInsert) => {
  console.log({subditos});

  try {
    const res = await db.insert(subditos).values(subditos);
    revalidatePath('/about/hugo');
    return res;
  } catch (error) {
    console.log(error);
    revalidatePath('/about/hugo');
    return {
      error: 'Ha ocurrido un error',
    };
  }
};

import {animeAtom} from '@/app/about/mdemora/jotai/atoms';
import {atom} from 'jotai';

export const progressAtom = atom((get) => {
  const animes = get(animeAtom);
  return animes.filter((item) => item.watched).length / animes.length;
});

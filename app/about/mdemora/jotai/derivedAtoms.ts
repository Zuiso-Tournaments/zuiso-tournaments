import {animeAtom} from '@/app/about/mdemora/jotai/atoms';
import {atom} from 'jotai';

export const progressAtom = atom((get) => {
  const anime = get(animeAtom);
  return anime.filter((item) => item.watched).length / anime.length;
});

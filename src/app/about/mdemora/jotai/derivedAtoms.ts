import {atom} from 'jotai';

import {animeAtom} from '@/app/about/mdemora/jotai/atoms';

export const progressAtom = atom((get) => {
  const animes = get(animeAtom);
  return animes.filter((item) => item.watched).length / animes.length;
});

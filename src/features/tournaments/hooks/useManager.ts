import {nanoid} from 'nanoid';
import Manager from 'tournament-organizer';
import type {Tournament} from 'tournament-organizer/dist/components/Tournament';

import {useCallback, useMemo, useRef, useState} from 'react';

const useManager = () => {
  const [manager] = useState(() => new Manager());
  const [, forceUpdate] = useState({});
  const tournamentRef = useRef<Tournament | null>(null);

  const createTournament = useCallback(
    (name: string, options = {}) => {
      const newTournament = manager.createTournament(name, options, nanoid());
      tournamentRef.current = newTournament;
      forceUpdate({});
      return newTournament;
    },
    [manager]
  );

  const addPlayer = useCallback((name: string) => {
    if (tournamentRef.current) {
      const newPlayer = tournamentRef.current.createPlayer(name, nanoid());
      forceUpdate({});
      return newPlayer;
    }
  }, []);

  const startTournament = useCallback(() => {
    if (tournamentRef.current) {
      tournamentRef.current.start();
      forceUpdate({});
    }
  }, []);

  const memo = useMemo(
    () => ({
      manager,
      tournament: tournamentRef.current,
      createTournament,
      addPlayer,
      startTournament,
    }),
    [
      manager,
      createTournament,
      addPlayer,
      startTournament,
      tournamentRef.current,
    ]
  );

  return memo;
};

export default useManager;

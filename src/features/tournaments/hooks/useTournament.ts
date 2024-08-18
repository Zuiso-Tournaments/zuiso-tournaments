import type {Tournament} from 'tournament-organizer/dist/components/Tournament';

const useTournament = (tournament: Tournament) => {
  const getPlayer = (id: string | null) => {
    if (!id) return undefined;
    if (!tournament.players) return undefined;
    return tournament.players.find((player) => player.id === id) || undefined;
  };

  return {
    getPlayer,
  };
};

export default useTournament;

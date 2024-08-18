import type {Tournament} from 'tournament-organizer/dist/components/Tournament';

import React from 'react';

import {Button} from '@/components/ui/button';
import {Card, CardContent, CardFooter, CardTitle} from '@/components/ui/card';

import useTournament from '@/features/tournaments/hooks/useTournament';

interface TournamentCardProps {
  tournament: Tournament;
  startTournament: () => void;
}

const TournamentCard: React.FC<TournamentCardProps> = ({
  tournament,
  startTournament,
}) => {
  const {getPlayer} = useTournament(tournament);

  const handleStart = () => {
    startTournament();
  };

  console.log('what', tournament);

  if (!tournament) {
    return;
  }

  return (
    <Card>
      <CardContent>
        <CardTitle>
          <p>{tournament.name}</p>
        </CardTitle>
        <p>ID: {tournament.id}</p>
        <p>Status: {tournament.status}</p>

        <p>Rounds: {tournament.round}</p>
        <p>Type: {tournament.stageOne.format}</p>
        <p>Players: {tournament.players.length}</p>
        <div className="grid grid-cols-4 gap-4">
          {tournament.players.map((player) => (
            <div key={player.id}>{player.name}</div>
          ))}
        </div>

        <div>
          {tournament.matches.map((match) => (
            <div key={match.id}>
              <p>Round: {match.round}</p>
              <p>{`${getPlayer(match.player1.id)?.name} vs ${getPlayer(match.player2.id)?.name}`}</p>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="justify-end">
        <Button variant="secondary" onClick={handleStart}>
          Start
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TournamentCard;

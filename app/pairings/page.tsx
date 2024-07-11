'use client';

import Button from '@/components/ui/Button';
import { useState } from 'react';
import { SingleElimination } from 'tournament-pairings';
import { Match } from 'tournament-pairings/dist/Match';

const Players = [
  'Miguel',
  'Marcos',
  'Hugo',
  'Javier',
  'Jaime',
  'Cesar',
  'Mario',
  'Rodrigo'
];

export default async function AboutPage() {
  const [elimBracket, setState] = useState<Match[]>(
    SingleElimination(Players, 1, false)
  );

  console.log({ elimBracket });

  const groupedByRound = elimBracket.reduce(
    (acc, match) => {
      if (!acc[match.round]) {
        acc[match.round] = [];
      }

      acc[match.round].push(match);

      return acc;
    },
    [] as { [key: number]: Match[] }
  );

  console.log({ groupedByRound });

  const handleClick = (round: Match) => {
    console.log('click');
    // get a winner
    // update the bracket
    const random = Math.floor(Math.random() * 2);
    const test = elimBracket.map((match) => {
      if (match.win?.round === round.round && match.win.match === round.match) {
        return {
          ...match,
          player1:
            match.player1 === null
              ? random > 1
                ? round.player1
                : round.player2
              : match.player1,
          player2:
            match.player2 === null
              ? random > 1
                ? round.player1
                : round.player2
              : match.player2
        };
      }
    });

    setState(test);
  };

  return (
    <section className="mb-32 bg-black">
      <div className="max-w-6xl px-4 py-8 mx-auto sm:px-6 sm:pt-24 lg:px-8">
        <div className="sm:align-center sm:flex sm:flex-col">
          <h1 className="text-4xl font-extrabold text-white sm:text-center sm:text-6xl">
            Pairings Single Elimination
          </h1>
        </div>
        <div>
          <p>Round 1</p>
          {groupedByRound[1].map((round, index) => (
            <div key={index}>
              <p>
                {round.player1} vs {round.player2}
              </p>
              <Button onClick={() => handleClick(round)}>get winner</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

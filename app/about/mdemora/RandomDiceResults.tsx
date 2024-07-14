'use client';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const RandomDiceResults = () => {
  const [results, setResults] = useState<number[]>([]);

  const handleClick = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    //  esto tambien se puede, en un principio es más correcto y seguro,
    //∫ en prev tenemos el valor justo antes de mutar el estado
    // setResults((prev) => [...prev, randomNumber]);
    setResults([...results, randomNumber]);
  };

  return (
    <div>
      <p className="text-lg">Random Dice Results</p>

      <Button onClick={handleClick}>Roll the dice</Button>
      <div className="flex gap-4 flex-wrap mt-2">
        {results.map((result, index) => (
          <div
            className="size-10 flex items-center justify-center bg-red-500 border-2 border-white"
            key={index}
          >
            {result}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RandomDiceResults;

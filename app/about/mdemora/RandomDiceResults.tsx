'use client';

import {Button} from '@/components/ui/button';
import {useState} from 'react';

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
      <div className="mt-2 flex flex-wrap gap-4">
        {results.map((result, index) => (
          <div
            className="flex size-10 items-center justify-center border-2 border-white bg-red-500"
            key={index}>
            {result}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RandomDiceResults;

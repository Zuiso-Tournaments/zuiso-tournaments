'use client';

import {cn} from '@/lib/cn';
import React, {useState} from 'react';

const predictDice = () => {
  return Math.floor(Math.random() * 6) + 1;
};

/**
 * Component for a random dice generator.
 * @returns {React.ReactElement} The RandomDice component.
 */
const RandomDice = () => {
  const [results, setResults] = useState<number[]>([]);
  const [isRotating, setIsRotating] = useState(false);
  const [prediction_number, setPredictionNumber] = useState<string>('???');
  const [isLastResult, setIsLastResult] = useState(false);

  /**
   * Handles the click event when the dice is clicked.
   * Generates random numbers sequentially and updates the prediction number and results.
   */
  const handleClick = () => {
    if (isRotating) return;

    setIsRotating(true);

    // Sequentially show 5 new numbers in prediction_number with a delay of 200ms between each
    const showNumbersSequentially = async () => {
      for (let i = 0; i < 3; i++) {
        const randomNumber = predictDice();
        await new Promise((resolve) => setTimeout(resolve, 200)); // Delay 200ms
        setPredictionNumber(randomNumber.toString());
      }

      // After showing 5 numbers, predict a new number and update results
      setIsLastResult(true);
      const newNumber = predictDice();
      setResults([...results, newNumber]);
      const textNumber = '¡' + newNumber.toString() + '!';
      setPredictionNumber(textNumber);

      // Reset after a short delay
      setTimeout(() => {
        setIsRotating(false);
        setPredictionNumber('???'); // Reset prediction_number
        setIsLastResult(false);
      }, 800);
    };

    showNumbersSequentially();
  };

  return (
    <div className="flex flex-row items-start gap-8">
      <div className="flex flex-col items-center gap-4">
        <img
          src="https://cdn.pixabay.com/photo/2012/04/24/13/17/dice-40019_960_720.png"
          alt="dice"
          className={`h-20 w-20 transform cursor-pointer transition-transform duration-1000 hover:scale-125 ${isRotating ? 'rotate-360 scale-125' : ''}`}
          onClick={handleClick}
        />
        <p
          className={`text-center text-2xl font-bold ${isLastResult ? 'text-3xl text-yellow-400' : 'text-white'} ${isRotating && !isLastResult ? 'animate-bounce' : ''}`}>
          {prediction_number}
        </p>
      </div>
      <div className="mt-2 flex w-full flex-wrap gap-4">
        {results.map((result, index) => (
          <div
            className={cn(
              'flex h-16 w-16 items-center justify-center rounded-xl border-2 text-2xl font-bold',
              {
                'scale-animation animate-pulse border-yellow-500 bg-yellow-500 text-black':
                  result > 3,
                'odd:border-black odd:bg-white odd:text-black even:border-white even:bg-black even:text-white':
                  result <= 3,
              }
            )}
            key={index}>
            {result}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RandomDice;

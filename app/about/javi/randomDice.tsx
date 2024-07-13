'use client';
import React, { useState } from "react";
import cn from 'classnames';

const predictDice = () => {
    return Math.floor(Math.random() * 6) + 1;
};

const RandomDice = () => {
    const [results, setResults] = useState<number[]>([]);
    const [isRotating, setIsRotating] = useState(false);
    const [prediction_number, setPredictionNumber] = useState<string>('???');
    const [isLastResult, setIsLastResult] = useState(false);

    const handleClick = () => {
        if (isRotating) return;

        setIsRotating(true);
        
        // Sequentially show 5 new numbers in prediction_number with a delay of 200ms between each
        const showNumbersSequentially = async () => {
            for (let i = 0; i < 3; i++) {
                const randomNumber = predictDice();
                await new Promise(resolve => setTimeout(resolve, 200)); // Delay 200ms
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
        <div className='flex flex-row items-start gap-8'>
            <div className='flex flex-col items-center gap-4'>
                <img 
                    src='https://cdn.pixabay.com/photo/2012/04/24/13/17/dice-40019_960_720.png' 
                    alt='dice' 
                    className={`cursor-pointer w-20 h-20 transform duration-1000 hover:scale-125 transition-transform ${isRotating ? 'rotate-360 scale-125' : ''}`}
                    onClick={handleClick}
                />
                <p className={`text-2xl font-bold text-center ${isLastResult ? 'text-yellow-400 text-3xl'  : 'text-white'} ${isRotating && !isLastResult ? 'animate-bounce' : ''}`}>
                    {prediction_number}
                </p>
            </div>
            <div className="flex gap-4 flex-wrap mt-2 w-full">
                {results.map((result, index) => (
                    <div
                    className={cn(
                      'w-16 h-16 flex items-center justify-center border-2 rounded-xl font-bold text-2xl',
                      {
                        'animate-pulse scale-animation bg-golden': result > 3,
                        'odd:bg-white odd:text-black odd:border-black even:bg-black even:text-white even:border-white': result <= 3,
                      }
                    )}
                    key={index}
                  >
                    {result}
                  </div>
                    
                ))}
            </div>
        </div>
    );
};

export default RandomDice;

'use client';

import {cn} from '@/lib/cn';
import React, {useState} from 'react';

const DiceApp = () => {
  // Especifica el tipo de estado como array de números
  const [results, setResults] = useState<number[]>([]);
  const [arrayResults, setArrayResults] = useState<number[]>(Array(6).fill(0));

  const rollDice = () => {
    return Math.floor(Math.random() * 6) + 1;
  };

  const addResult = () => {
    const newResult = rollDice();
    const updatedArrayResults = [...arrayResults];
    updatedArrayResults[newResult - 1] =
      (updatedArrayResults[newResult - 1] || 0) + 1;
    setArrayResults(updatedArrayResults);
    setResults([...results, newResult]);
  };

  return (
    <div className="mt-10 flex flex-col items-center">
      <button
        className="mb-4 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        onClick={addResult}>
        Lanzar dado
      </button>
      <h1 className="mb-4 text-3xl font-bold text-white">Results</h1>
      <table className="mb-4 mt-4">
        <thead>
          <tr>
            <th className="bg-blue-500 px-4 py-2 text-center text-white">
              Number
            </th>
            <th className="bg-blue-500 px-4 py-2 text-center text-white">
              Times
            </th>
          </tr>
        </thead>
        <tbody>
          {arrayResults.map((times, index) => (
            <tr key={index}>
              <td className="border px-4 py-2 text-center">{index + 1}</td>
              <td className="border px-4 py-2 text-center">{times}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex flex-wrap justify-center">
        {results.map((result, index) => (
          <div
            key={index}
            className={cn(
              'm-2 flex h-16 w-16 items-center justify-center',
              result > 3 ? 'rounded bg-blue-500' : 'rounded-full bg-red-500'
            )}>
            <span className="text-lg text-white">{result}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiceApp;

'use client';
import React, { useState } from 'react';

const DiceApp = () => {
  // Especifica el tipo de estado como array de números
  const [results, setResults] = useState<number[]>([]);
  const [arrayResults, setArrayResults] = useState<number[]>(Array(6).fill(0));

  const rollDice = () => {
    return Math.floor(Math.random() * 6) + 1;
  };

  const cn = (n: number) => {
    return `w-16 h-16 flex items-center justify-center m-2 ${n > 3 ? 'bg-blue-500 rounded' : 'bg-red-500 rounded-full'}`;
  }
  const addResult = () => {
    const newResult = rollDice();
    const updatedArrayResults = [...arrayResults];
    updatedArrayResults[newResult - 1] = (updatedArrayResults[newResult - 1] || 0) + 1;
    setArrayResults(updatedArrayResults);
    setResults([...results, newResult]);
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
        onClick={addResult}
      >
        Lanzar dado
      </button>
      <h1 className="text-3xl font-bold mb-4 text-white">Results</h1>
      <table className="mt-4 mb-4">
        <thead>
          <tr>
            <th className="px-4 py-2 bg-blue-500 text-white text-center">Number</th>
            <th className="px-4 py-2 bg-blue-500 text-white text-center">Times</th>
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
          <div key={index} className={cn(result)}>
            <span className="text-white text-lg">{result}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiceApp;

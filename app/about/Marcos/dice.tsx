'use client';
import React, { useState } from 'react';

const DiceApp = () => {
  // Especifica el tipo de estado como array de números
  const [results, setResults] = useState<number[]>([]);

  const rollDice = () => {
    return Math.floor(Math.random() * 6) + 1;
  };

  const addResult = () => {
    const newResult = rollDice();
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
                {Object.entries(
                    results.reduce((acc: { [key: number]: number }, curr) => {
                        acc[curr] = (acc[curr] || 0) + 1;
                        return acc;
                    }, {})
                ).map(([number, count]) => (
                    <tr key={number}>
                        <td className="px-4 py-2 text-center">{number}</td>
                        <td className="px-4 py-2 text-center">{count}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <div className="flex flex-wrap justify-center">
            {results.map((result, index) => (
                <div key={index} className="w-16 h-16 flex items-center justify-center m-2 bg-blue-500 rounded">
                    <span className="text-white text-lg">{result}</span>
                </div>
            ))}
        </div>
    </div>
);
};
export default DiceApp;
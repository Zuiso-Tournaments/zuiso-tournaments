import React from 'react';

export const AboutLoading = () => {
  return (
    <div className="load-pulse mt-4 flex w-full flex-wrap justify-center gap-4">
      {Array.from({length: 5}).map((_, index) => (
        <div key={index} className="relative flex flex-col rounded-2xl">
          <div className="h-48 w-48 rounded-2xl bg-gray-700" />
        </div>
      ))}
    </div>
  );
};

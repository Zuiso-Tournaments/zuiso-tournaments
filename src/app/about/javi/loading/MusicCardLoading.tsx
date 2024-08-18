import React from 'react';

export const MusicCardLoading = () => {
  return (
    <div className="load-pulse mx-auto flex max-w-6xl flex-col px-4 sm:px-6 lg:px-8">
      {/* Title section */}
      <div className="mb-8 h-16 w-full rounded-xl bg-gray-800" />

      {/* Content section */}
      <div className="flex gap-4">
        {/* Left column */}
        <div className="flex-1">
          <div className="mb-8 h-64 w-full rounded-xl bg-gray-700" />
          <div className="mt-auto h-16 w-40 rounded-xl bg-gray-700" />
        </div>

        {/* Right column */}
        <div className="flex-1">
          <div className="mb-8 h-96 w-full rounded-xl bg-gray-700" />
          <div className="h-48 w-full rounded-xl bg-gray-700 " />
        </div>
      </div>
    </div>
  );
};

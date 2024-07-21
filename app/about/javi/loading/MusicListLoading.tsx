import React from 'react';

export const MusicListLoading = () => {
    return (
        <div className="flex gap-4 w-full flex-wrap mt-4 justify-center load-pulse">
            {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="relative rounded-2xl flex flex-col">
                    <div className="bg-gray-700 rounded-2xl w-48 h-48"></div>
                </div>
            ))}
        </div>
    );
};

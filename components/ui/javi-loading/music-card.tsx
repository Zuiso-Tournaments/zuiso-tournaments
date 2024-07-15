import React from 'react';

export const Loading = () => {
    return (
        <div className="flex flex-col max-w-6xl px-4 mx-auto sm:px-6 lg:px-8 load-pulse">
            {/* Title section */}
            <div className="w-full bg-gray-800 h-16 mb-8 rounded-xl"></div>

            {/* Content section */}
            <div className="flex gap-4">
                {/* Left column */}
                <div className="flex-1">
                    <div className="w-full bg-gray-700 h-64 mb-8 rounded-xl"></div>
                    <div className="mt-auto bg-gray-700 h-16 w-40 rounded-xl"></div>
                </div>

                {/* Right column */}
                <div className="flex-1">
                    <div className="w-full bg-gray-700 h-96 mb-8 rounded-xl"></div>
                    <div className="w-full bg-gray-700 h-48 rounded-xl "></div>
                </div>
            </div>
        </div>
    );
};

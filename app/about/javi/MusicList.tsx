'use client';

import MusicCard from '@/app/about/javi/MusicCard';
import { MusicCardProps } from '@/app/about/javi/MusicCard';
import { useEffect, useState } from 'react';

const MusicList = () => {   
    const [music, setMusic] = useState<MusicCardProps[]>([]);

    const fetchData = async () => {
        try {
            const response = await fetch('/api/javi-api');  // Use relative path for the API endpoint
            const data = await response.json();
            setMusic(data.music);
        } catch (error) {
            console.error("Failed to fetch music data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="flex gap-4 w-full flex-wrap mt-4">
            {music.map((song, index) => (
                <MusicCard key={song.id} song={song} index={index} />
            ))}
        </div>
    );
};

export default MusicList;

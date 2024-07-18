'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Song } from '../../SongList';

export default function SongId() {
    const [song, setSong] = useState<Song | null>(null);
    const { id } = useParams();

    const fetchData = async () => {
        const data = await fetch(`http://localhost:3000/api/MarcosAPI/${id}`).then((res) => res.json());
        setSong(data);
    };

    useEffect(() => {
        fetchData();
    }, [id]);

    if (!song) return <div>Loading...</div>;

    return (
        <div className="max-w-3xl mx-auto p-4">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="relative" style={{ paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
                    <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src={song.url.toString()}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="p-6">
                    <h1 className="text-3xl font-bold mb-2">{song.title}</h1>
                    <p className="text-gray-700 text-sm mb-4">{song.artista}</p>
                    <div className="flex items-center mb-4">
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                            {song.idioma}
                        </span>
                        <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                            {song.estilo}
                        </span>
                    </div>
                    <a href={song.url.toString()} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 underline">
                        Listen to the song
                    </a>
                </div>
            </div>
        </div>
    );
}


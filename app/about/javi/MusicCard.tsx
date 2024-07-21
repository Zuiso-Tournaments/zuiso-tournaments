'use client';

import Link from 'next/link';

interface MusicCardProps {
    id: string;
    title: string;
    artista: string;
    idioma: string;
    estilo: string;
    imgSrc: string;
    url: string;
    spotify: string;
    youtube: string;
    soundcloud: string;
    genius: string;
}

const MusicCard = ({ song, index }: { song: MusicCardProps, index: number }) => {
    const hoverColor = index % 2 === 0 ? 'hover:bg-red-500/10' : 'hover:bg-yellow-500/10';

    return (
        <Link href={`/about/javi/music/${song.id}`}>
            <div className="relative rounded-2xl hover:scale-105 duration-300 flex flex-col">
                <img
                    src={song.imgSrc}
                    alt={song.title}
                    className="rounded-2xl w-48 h-48"
                />
                <div className={`absolute inset-0 flex items-center justify-center rounded-2xl ${hoverColor}`}>
                    <p className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-xl text-gray-100 font-bold text-stroke-black">
                        {song.title}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default MusicCard;
export type { MusicCardProps };

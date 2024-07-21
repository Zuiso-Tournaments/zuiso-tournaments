'use client'

import Link from 'next/link';

interface PersonProps {
    title: string;
    slug: string;
    image: string;
    nickname: string;
}

const AboutCard = ({ person, index }: {person: PersonProps, index: number}) => {

    return (
        <Link href={`/about/${person.slug}`}>
            <div className="relative rounded-2xl hover:scale-105 duration-300 flex flex-col">
                <div className="w-48 h-48 overflow-hidden rounded-2xl">
                    <img
                        src={person.image}
                        alt={person.title}
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className={`absolute inset-0 flex items-center justify-center rounded-2xl hover:bg-gray-500/40`}>
                    <p className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-xl text-gray-100 font-bold text-stroke-black">
                        {person.nickname}
                    </p>
                </div>
            </div>
            <p className='flex w-full justify-center font-bold text-2xl pt-2'>
                {person.title}
            </p>
        </Link>

    );
};

export default AboutCard;
export type { PersonProps };
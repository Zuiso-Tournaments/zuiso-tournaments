'use client';

import Link from 'next/link';

interface PersonProps {
  title: string;
  slug: string;
  image: string;
  nickname: string;
}

const AboutCard = ({person}: {person: PersonProps}) => {
  return (
    <Link href={`${person.slug}`}>
      <div className="relative flex flex-col rounded-2xl duration-300 hover:scale-105">
        <div className="h-48 w-48 overflow-hidden rounded-2xl">
          <img
            src={person.image}
            alt={person.title}
            className="h-full w-full object-cover"
          />
        </div>
        <div
          className={`absolute inset-0 flex items-center justify-center rounded-2xl hover:bg-gray-500/40`}>
          <p className="text-stroke-black absolute inset-0 z-10 flex items-center justify-center text-xl font-bold text-gray-100 opacity-0 duration-300 hover:opacity-100">
            {person.nickname}
          </p>
        </div>
      </div>
      <p className="flex w-full justify-center pt-2 text-2xl font-bold">
        {person.title}
      </p>
    </Link>
  );
};

export default AboutCard;
export type {PersonProps};

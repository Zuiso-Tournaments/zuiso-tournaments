'use client';

import type {PersonProps} from '@/app/about/AboutCard';
import AboutCard from '@/app/about/AboutCard';
import {AboutLoading} from '@/app/about/AboutLoading';
import {useEffect, useState} from 'react';

const AboutList = () => {
  const [people, setPeople] = useState<PersonProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAboutData = async () => {
    try {
      const response = await fetch('/api/about');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setPeople(data.people || []);
    } catch (error) {
      console.error('Failed to fetch about data:', error);
      setError('Failed to fetch about data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAboutData();
  }, []);

  if (loading) {
    return <AboutLoading />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="mt-4 flex w-full flex-wrap justify-center gap-4">
      {people.map((person) => (
        <AboutCard key={person.title} person={person} />
      ))}
    </div>
  );
};

export default AboutList;

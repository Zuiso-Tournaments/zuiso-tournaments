'use client'

import AboutCard from '@/app/about/AboutCard';
import { PersonProps } from '@/app/about/AboutCard';
import { useEffect, useState } from 'react';
import { AboutLoading  } from '@/app/about/AboutLoading';

const AboutList
 = () => {
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
    <div className="flex gap-4 w-full flex-wrap mt-4 justify-center">
      {people.map((person, index) => (
        <AboutCard key={person.title} person={person} index={index} />
      ))}
    </div>
  );
};

export default AboutList;

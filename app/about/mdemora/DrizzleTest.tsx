'use client';

import {addNewNoteAction} from '@/actions/notes';
import {Button} from '@/components/ui/button';
import {Note} from '@/db/schemas/notes';
import {useEffect, useState} from 'react';

const DrizzleTest = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  const fetchData = async () => {
    const {data} = await fetch('/api/drizzle').then((res) => res.json());
    setNotes(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = async () => {
    const res = await addNewNoteAction('Hello, world!');
  };

  return (
    <div>
      <h1>Drizzle Test</h1>
      <p>
        This is a simple test of the Drizzle library. If you see the Drizzle
        object below, then the test has passed.
      </p>

      <Button onClick={handleClick}>Click me</Button>

      {notes.map((note) => (
        <div key={note.id}>
          <p>{note.text}</p>
        </div>
      ))}
    </div>
  );
};

export default DrizzleTest;

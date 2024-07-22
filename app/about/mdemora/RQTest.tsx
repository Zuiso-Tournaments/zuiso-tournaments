'use client';

import {addNewNoteAction} from '@/actions/notes';
import {Button} from '@/components/ui/button';
import useNotesQuery from '@/hooks/useNotesQuery';

const RQTest = () => {
  const {data} = useNotesQuery();

  const handleClick = async () => {
    const res = await addNewNoteAction('Hello, world!');
    return res;
  };

  return (
    <div>
      <h1>Drizzle Test</h1>
      <p>
        This is a simple test of the Drizzle library. If you see the Drizzle
        object below, then the test has passed.
      </p>

      <Button onClick={handleClick}>Click me</Button>

      {data?.map((note) => (
        <div key={note.id}>
          <p>{note.text}</p>
        </div>
      ))}
    </div>
  );
};

export default RQTest;

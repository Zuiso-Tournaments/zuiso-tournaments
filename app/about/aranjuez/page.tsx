'use client';

import {useState} from 'react';

export default function AranjuezPage() {
  const [test, setTest] = useState('hola');

  return (
    <section className="mb-32 bg-black">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:pt-24 lg:px-8">
        <div className="sm:align-center flex flex-col sm:flex-col">
          <h1 className="mb-8 text-4xl font-extrabold text-white sm:text-center sm:text-6xl">
            Aranjuez
          </h1>
          <p>{test}</p>

          <button
            onClick={() => {
              setTest('tus muertos');
            }}>
            test
          </button>
        </div>
      </div>
    </section>
  );
}

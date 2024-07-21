'use client';

import {addNewPollaAction} from '@/actions/pollas';
import {Button} from '@/components/ui/button';
import {Polla} from '@/db/schemas/pollas';
import {useEffect, useState} from 'react';

const MisPollas = ({pollas: defaultPollas}: {pollas: Polla[]}) => {
  const [pollas, setPollas] = useState<Polla[]>(defaultPollas);

  const fetchData = async () => {
    const {data} = await fetch('/api/pollas').then((res) => res.json());
    setPollas(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setPollas(defaultPollas);
  }, [defaultPollas]);

  const handleClick = async () => {
    const res = await addNewPollaAction({
      userId: '1',
      entro: false,
      cuanto_de_gordo: 4,
    });

    console.log(res);
  };

  return (
    <div>
      <h1>Mis Pollas</h1>

      <Button onClick={handleClick}>Una Polla nueva</Button>
      <div className="flex gap-4">
        {pollas.map((polla) => (
          <div key={polla.id} className="border border-red-500 p-4">
            <p>Entro: {polla.entro ? 'Si' : 'No'}</p>
            <p>Cuanto de dentro entro: {polla.cuanto_de_gordo}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MisPollas;

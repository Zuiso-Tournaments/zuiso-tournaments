import type {Movil} from '@/db/schemas/movil';

import React from 'react';

import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';

import useMovilDeleteMutation from '@/features/movil/hooks/useMovilDeleteMutation';

interface MovilCardProps {
  movil: Movil;
  className?: string;
}

const MovilCard: React.FC<MovilCardProps> = ({movil, className}) => {
  const mutate = useMovilDeleteMutation();

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{movil.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Modelo: {movil.modelo}</p>
        <p>Marca: {movil.marca}</p>
      </CardContent>
      <div className="mt-4">
        <button
          onClick={() => mutate.mutate({...movil})}
          className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-600">
          Delete
        </button>
      </div>
    </Card>
  );
};

export default MovilCard;

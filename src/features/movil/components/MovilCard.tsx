import type {Movil} from '@/db/schemas/movil';

import React from 'react';

import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';

import useMovilDeleteMutation from '@/features/movil/hooks/useMovilDeleteMutation';

interface MovilCardProps {
  movil: Movil;
  className?: string;
  onEdit: (movil: Movil) => void;
}

const MovilCard: React.FC<MovilCardProps> = ({movil, className, onEdit}) => {
  const mutate = useMovilDeleteMutation();

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{movil.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>ID: {movil.id}</p>
        <p>Marca: {movil.marca}</p>
        <p>Modelo: {movil.modelo}</p>
      </CardContent>
      <div className="mb-4 ml-4 flex space-x-4">
        <div>
          <button
            className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600"
            onClick={() => onEdit(movil)}>
            Edit
          </button>
        </div>
        <div>
          <button
            onClick={() => mutate.mutate({...movil})}
            className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-600">
            Delete
          </button>
        </div>
      </div>
    </Card>
  );
};

export default MovilCard;

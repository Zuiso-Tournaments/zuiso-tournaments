import type {Movil} from '@/db/schemas/movil';

import React from 'react';

import {Button} from '@/components/ui/button';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';

import useMovilDeleteMutation from '@/features/movil/hooks/useMovilDeleteMutation';

interface MovilCardProps {
  movil: Movil;
  className?: string;
  onEdit: (movil: Movil) => void;
}

const MovilCard: React.FC<MovilCardProps> = ({movil, className, onEdit}) => {
  const mutate = useMovilDeleteMutation();

  /*me he quedado en que por ahora usamos el del create pero no usamos nada del edit por ahora (lo del edit lo he dejado todo con
 loo de los id metidos*/

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
        <Button onClick={() => onEdit(movil)}>Edit</Button>
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

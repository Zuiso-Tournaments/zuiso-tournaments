import type {Movil} from '@/db/schemas/movil';

import React, {useState} from 'react';

import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import MovilForm from '@/features/movil/components/MovilForm';
import useMovilDeleteMutation from '@/features/movil/hooks/useMovilDeleteMutation';

interface MovilCardProps {
  movil: Movil;
  className?: string;
}

const MovilCard: React.FC<MovilCardProps> = ({movil, className}) => {
  const mutate = useMovilDeleteMutation();

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSubmit = () => {
    // Handle form submission
    setIsDialogOpen(false);
  };

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
        <div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <button
                className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600"
                onClick={() => setIsDialogOpen(true)}>
                Edit
              </button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit the movil</DialogTitle>
              </DialogHeader>
              <MovilForm onSubmit={handleSubmit} />
            </DialogContent>
          </Dialog>
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

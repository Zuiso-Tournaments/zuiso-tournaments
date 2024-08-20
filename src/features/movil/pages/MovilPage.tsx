'use client';

import React, {useState} from 'react';

import {Button} from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import MovilCard from '@/features/movil/components/MovilCard';
import MovilForm from '@/features/movil/components/MovilForm';
import useMovilQuery from '@/features/movil/hooks/useMovilQuery';

const MovilPage = () => {
  const {data: movilData, isLoading, error} = useMovilQuery();

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  if (error) return <div>An error occurred: {error.message}</div>;

  const handleSubmit = () => {
    // Handle form submission
    setIsDialogOpen(false);
  };

  return (
    <div className="container mx-auto flex-col p-4">
      <h1 className="mb-4 text-center text-2xl font-bold">Movil Page</h1>

      {isLoading && (
        <div className="flex h-20 items-center justify-center">
          <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-t-2 border-pink-500" />
        </div>
      )}
      <div className="flex justify-center">
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="mb-4 mt-4" onClick={() => setIsDialogOpen(true)}>
              Create new movil
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create new movil</DialogTitle>
            </DialogHeader>
            <MovilForm onSubmit={handleSubmit} />
          </DialogContent>
        </Dialog>
      </div>
      <div>
        {movilData?.map((movil) => (
          <MovilCard key={movil.id} movil={movil} className="mb-2" />
        ))}
      </div>
    </div>
  );
};

export default MovilPage;

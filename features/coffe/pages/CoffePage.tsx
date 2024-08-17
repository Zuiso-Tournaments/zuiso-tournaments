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

import CoffeCard from '@/features/coffe/components/CoffeCard';
import CoffeForm from '@/features/coffe/components/CoffeForm';
import useCoffeQuery from '@/features/coffe/hooks/useCoffeQuery';

const CoffePage = () => {
  const {data: coffeData, isLoading, error} = useCoffeQuery();

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  if (error) return <div>An error occurred: {error.message}</div>;

  const handleSubmit = () => {
    // Handle form submission
    setIsDialogOpen(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-2xl font-bold">Coffe Page</h1>

      {isLoading && (
        <div className="flex h-20 items-center justify-center">
          <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-t-2 border-pink-500" />
        </div>
      )}

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button className="mb-4" onClick={() => setIsDialogOpen(true)}>
            Add New Coffe
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Coffe</DialogTitle>
          </DialogHeader>
          <CoffeForm onSubmit={handleSubmit} />
        </DialogContent>
      </Dialog>

      <div>
        {coffeData?.map((coffe) => (
          <CoffeCard key={coffe.id} coffe={coffe} className="mb-2" />
        ))}
      </div>
    </div>
  );
};

export default CoffePage;

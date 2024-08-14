'use client';

import {Button} from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import ExampleCard from '@/features/example/components/ExampleCard';
import ExampleForm from '@/features/example/components/ExampleForm';
import useExampleQuery from '@/features/example/hooks/useExampleQuery';
import React, {useState} from 'react';

const ExamplePage = () => {
  const {data: examples, isLoading, error} = useExampleQuery();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  if (error) return <div>An error occurred: {error.message}</div>;

  const handleSubmit = () => {
    // Handle form submission
    setIsDialogOpen(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-2xl font-bold">Example Page</h1>

      {isLoading && (
        <div className="flex h-20 items-center justify-center">
          <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-t-2 border-pink-500" />
        </div>
      )}

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button className="mb-4" onClick={() => setIsDialogOpen(true)}>
            Add New Example
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Example</DialogTitle>
          </DialogHeader>
          <ExampleForm onSubmit={handleSubmit} />
        </DialogContent>
      </Dialog>

      <div>
        {examples?.map((example) => (
          <ExampleCard
            key={example.id}
            title={example.title}
            description={example.description}
            className="mb-2"
          />
        ))}
      </div>
    </div>
  );
};

export default ExamplePage;

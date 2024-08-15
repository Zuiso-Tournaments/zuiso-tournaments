import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import type {Coffe} from '@/db/schemas/coffe';
import useCoffeDeleteMutation from '@/features/coffe/hooks/useCoffeDeleteMutation';
import React from 'react';

interface CoffeCardProps {
  coffe: Coffe;
  className?: string;
}

const CoffeCard: React.FC<CoffeCardProps> = ({coffe, className}) => {
  const mutate = useCoffeDeleteMutation();

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{coffe.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Variety: {coffe.variety}</p>
      </CardContent>
      <div className="mt-4">
        <button
          onClick={() => mutate.mutate({...coffe})}
          className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-600">
          Delete
        </button>
      </div>
    </Card>
  );
};

export default CoffeCard;

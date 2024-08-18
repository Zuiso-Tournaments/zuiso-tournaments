import React from 'react';

interface ExampleCardProps {
  title: string;
  className?: string;
  description?: string;
}

const ExampleCard: React.FC<ExampleCardProps> = ({
  title,
  description,
  className = '',
}) => {
  return (
    <div className={`rounded-lg bg-zuiso-700 p-4 shadow ${className}`}>
      <p className="font-bold ">{title}</p>
      <p className="mt-2 text-zuiso-200">{description}</p>
    </div>
  );
};

export default ExampleCard;

import React from 'react';

type ModalHeaderProps = {
  children: React.ReactNode;
};

const ModalHeader: React.FC<ModalHeaderProps> = ({children}) => {
  return (
    <div className="rounded-t-lg border-b border-gray-200 bg-gray-100 px-6 py-4">
      <h3 className="text-lg font-semibold text-gray-900">{children}</h3>
    </div>
  );
};

export default ModalHeader;

import React from 'react';

type ModalHeaderProps = {
  children: React.ReactNode;
};

const ModalHeader: React.FC<ModalHeaderProps> = ({ children }) => {
  return (
    <div className="bg-gray-100 px-6 py-4 border-b border-gray-200 rounded-t-lg">
      <h3 className="text-lg font-semibold text-gray-900">{children}</h3>
    </div>
  );
};

export default ModalHeader;

import React from 'react';

type ModalFooterProps = {
  children: React.ReactNode;
};

const ModalFooter: React.FC<ModalFooterProps> = ({ children }) => {
  return (
    <div className="bg-gray-100 px-6 py-4 border-t border-gray-200 rounded-b-lg flex justify-end space-x-2">
      {children}
    </div>
  );
};

export default ModalFooter;

import React from 'react';

type ModalFooterProps = {
  children: React.ReactNode;
};

const ModalFooter: React.FC<ModalFooterProps> = ({children}) => {
  return (
    <div className="flex justify-end space-x-2 rounded-b-lg border-t border-gray-200 bg-gray-100 px-6 py-4">
      {children}
    </div>
  );
};

export default ModalFooter;

import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-50 overflow-y-auto" onClose={onClose}>
      <div className="flex items-center justify-center min-h-screen p-4 text-center">
      <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {/* Replacing Dialog.Overlay with a custom overlay */}
            <div className="fixed inset-0 bg-gray-500/75" aria-hidden="true" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="relative bg-white rounded-lg shadow-xl max-w-lg w-full">
              {children}
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;

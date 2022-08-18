import React from 'react';
import { createPortal } from 'react-dom';

export interface ModalProps {
  isOpen: boolean;
  onClose(): void;
}

const ModalOverlay: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div
    style={{ backgroundColor: 'rgba(0, 0, 0, 0.35)' }}
    className="flex items-center justify-center fixed inset-0"
  >
    {children}
  </div>
);

export const Modal: React.FC<ModalProps & { children: React.ReactNode }> = ({
  isOpen,
  children,
}) => {
  if (!isOpen) return null;

  return createPortal(<ModalOverlay>{children}</ModalOverlay>, document.body);
};

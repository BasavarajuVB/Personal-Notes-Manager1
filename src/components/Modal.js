import React from 'react';
import "./styles.css"


const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="modal-backdrop" onClick={onClose}></div>
      <div className="modal">
        <div className="modal-header">
          <button onClick={onClose} className="text-red-500 hover:text-red-600">
            ✕
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </>
  );
};

export default Modal;

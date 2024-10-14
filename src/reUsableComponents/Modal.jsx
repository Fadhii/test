import React from 'react';

const Modal = ({
  isOpen,
  onClose,
  heading,
  message,
  confirm = false,
  btn_label,
  onConfirm,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed flex inset-10 items-center justify-center z-50">
      <div className="fixed inset-0 bg-black bg-opacity-50"></div>
      <div className="relative bg-white w-full max-w-lg mx-auto rounded-lg shadow-lg p-6">
        {heading && <h2 className="text-center text-2xl font-bold mb-4">{heading}</h2>}
        {message && <div className="text-gray-600 mb-4">{message}</div>}
        <div className="flex justify-center space-x-4">
          <button className="bg-red-500 text-white px-4 py-2 rounded-full" onClick={onClose}>Cancel</button>
          {confirm && (
            <button className="bg-green-500 text-white px-4 py-2 rounded-full" onClick={onConfirm}>
              {btn_label}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;

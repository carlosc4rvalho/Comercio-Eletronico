import React from 'react';

function SuccessModal({ isOpen, message, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-semibold mb-4">Sucesso!</h2>
                <p className="mb-6">{message}</p>
                <button
                    onClick={onClose}
                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                >
                    Fechar
                </button>
            </div>
        </div>
    );
}

export default SuccessModal;

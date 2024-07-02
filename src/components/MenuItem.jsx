import React, { useState } from 'react';

const MenuItem = ({ nombre, ingredientes, precio, imagen }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className="flex flex-col items-center bg-white font-rufina">
      <div className="w-full p-4 flex flex-col md:flex-row md:items-center md:justify-between md:space-x-4">
        <h2 className="text-lg md:text-xl font-semibold text-custom-green whitespace-nowrap cursor-pointer">{nombre}</h2>
        <p className="text-gray-700 text-sm md:text-base ">{ingredientes}</p>
        <p className="text-black text-lg md:text-xl font-bold">{precio}</p>
      </div>
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-second-green p-4 rounded-lg shadow-lg mx-auto max-w-lg md:max-w-2xl text-center">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-4 order-2 md:order-1">
                <h2 className="text-3xl font-bold text-third-green">{nombre}</h2>
                <p className="text-lg">{ingredientes}</p>
                <p className="text-3xl font-bold pt-5">{precio}</p>
                <button onClick={toggleModal} className="mt-4 px-7 py-2 bg-gray-500 text-custom-green border-2 border-custom-green hover:bg-red-700 transition duration-300">
                  Close
                </button>
              </div>
              <div className="md:w-1/2 order-1 md:order-2 flex justify-center">
                <img src={imagen} alt="Dish image" className="rounded-lg w-56 h-56 object-cover" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuItem;
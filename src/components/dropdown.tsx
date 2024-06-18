import React, { useState } from "react";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <div onClick={() => setIsOpen(!isOpen)}>
        <h2 className=" px-2 rounded-md text-white bg-green-600">
          Adicionar Caracóis
        </h2>
      </div>
      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div>
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm hover:bg-blue-400 hover:text-white duration-150
              rounded-t-md
              "
            >
              Conta
            </a>
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm hover:bg-blue-400 hover:text-white duration-150"
            >
              Log out
            </a>
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm hover:bg-blue-400 hover:text-white duration-150 rounded-b-md"
            >
              Configurações
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;

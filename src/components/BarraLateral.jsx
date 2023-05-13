import React from "react";

const BarraLateral = () => {
  return (
    <div className="fixed bottom-0 h-1/5 w-full flex-row lg:flex-col lg:h-full lg:bottom-auto lg:w-1/6">
      <div className="bg-gray-800 text-white h-4/6 lg:h-4/6  lg:w-full">
        CONTENIDO
      </div>
      <div className="bg-lime-700 text-gray-700 h-2/6 p-2 lg:h-2/6  lg:w-full">
        AYUDA ¿Tienes alguna duda o inconveniente? Contáctanos a:
      </div>
    </div>
  );
};

export default BarraLateral;

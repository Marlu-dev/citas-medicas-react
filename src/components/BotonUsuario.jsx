import React from "react";
import { IconLayoutNavbarExpand } from "@tabler/icons-react";

const BotonUsuario = ({ nombreUsuario, imagenUsuario }) => {
  return (
    <div className="px-0.5 items-center justify-center flex h-20 overflow-hidden lg:px-1 lg:py-0">
      <div className="w-3/4 items-center justify-center lg:w-1/6 lg:flex-grow lg:flex ">
        <img
          src={imagenUsuario}
          alt="Imagen de usuario"
          className="w-full h-full rounded-full"
        />
      </div>
      <div className="hidden lg:w-3/6 lg:flex-grow lg:flex lg:items-center lg:justify-center">
        {nombreUsuario}
      </div>
      <div className="hidden lg:w-1/6 lg:flex-grow lg:flex lg:items-center lg:justify-center">
        <IconLayoutNavbarExpand stroke={1} size={48} />
        {/* <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Perfil
        </button>
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded ml-2">
          Cerrar sesión
        </button> */}
      </div>
    </div>
  );
};

export default BotonUsuario;

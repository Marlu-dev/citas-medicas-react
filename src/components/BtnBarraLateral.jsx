import React from "react";
import { NavLink } from "react-router-dom";
import "../../src/index.css";

const BtnBarraLateral = ({ icono, nombre, ruta }) => {
  return (
    <NavLink
      to={ruta}
      activeclassname="active"
      className={"w-full"} // Clase CSS para el enlace activo
    >
      <div className="flex w-full h-full items-center justify-center">
        <div className="flex w-2/6 h-full items-center justify-end">
          {icono}
        </div>

        <span
          className="flex w-4/6 h-full items-center justify-center"
          style={{ color: "#004B87", fontWeight: "600" }}
        >
          {nombre}
        </span>
      </div>
    </NavLink>
  );
};

export default BtnBarraLateral;

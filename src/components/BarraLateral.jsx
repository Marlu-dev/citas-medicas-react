import React from "react";
import { IconAt, IconBrandWhatsapp, IconHome } from "@tabler/icons-react";
import BtnBarraLateral from "./BtnBarraLateral";

const BarraLateral = () => {
  return (
    <div className="box-content fixed border-r-2 border-b-2 border-neutral-300 bottom-0 h-1/5 w-full lg:flex flex-row lg:flex-col lg:h-full lg:bottom-auto lg:w-1/6">
      <div className="flex h-3/6 lg:flex-col">
        <div className="flex w-full text-white h-4/6 lg:h-2/6  lg:w-full">
          <BtnBarraLateral
            icono={<IconHome stroke={2} size={48} color="#00A8E8" />}
            nombre="INICIO"
            ruta={"/home"}
          />
        </div>
        <div className=" flex  text-white h-4/6 lg:h-2/6  lg:w-full">
          <BtnBarraLateral
            icono={<IconAt stroke={2} size={48} color="#00A8E8" />}
            nombre="Pagina2"
            ruta={"/Pagina2"}
          />
        </div>
        <div className=" flex text-white h-4/6 lg:h-2/6  lg:w-full">
          <BtnBarraLateral
            icono={<IconAt stroke={2} size={48} color="#00A8E8" />}
            nombre="Pagina3"
            ruta={"/Pagina3"}
          />
        </div>
      </div>

      <div className=" flex p-2 h-3/6 flex-row lg:flex-col lg:flex-grow lg:p-2 lg:h-2/6 lg:w-full">
        <div
          className="flex w-4/6 overflow-hidden whitespace-normal lg:w-full lg:h-2/6"
          style={{ color: "#004B87", fontSize: "0.8rem" }}
        >
          ¿Tienes alguna duda o inconveniente? Contáctanos a:
        </div>
        <div className="flex w-1/6 overflow-hidden whitespace-normal lg:w-full lg:h-1/6">
          <IconAt
            stroke={2}
            size={48}
            color="#00A8E8"
            className="flex lg:hidden"
          />
          <a
            className="hidden lg:flex"
            style={{ color: "#9BC53D", fontSize: "0.8rem" }}
            href=""
          >
            correo@correo.com
          </a>
        </div>
        <div className="flex w-1/6 overflow-hidden whitespace-normal lg:w-full lg:h-1/6">
          <IconBrandWhatsapp
            stroke={2}
            size={48}
            color="#00A8E8"
            className="flex lg:hidden"
          />
          <a
            className="hidden lg:flex"
            style={{ color: "#9BC53D", fontSize: "0.8rem" }}
            href=""
          >
            Whatsapp
          </a>
        </div>
      </div>
    </div>
  );
};

export default BarraLateral;

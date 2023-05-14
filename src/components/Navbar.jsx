import React from "react";
import BotonUsuario from "./BotonUsuario";
import BtnHover from "./BtnHover";
import {
  IconAlbum,
  IconAlarmFilled,
  IconArmchair,
  IconArmchairOff,
} from "@tabler/icons-react";

const Navbar = () => {
  return (
    <nav className="h-20">
      <div className="flex h-20">
        <div className="w-2/6 border-b-2 border-t-2  border-neutral-300 lg:w-1/6   lg:order-first">
          LOGO
        </div>
        <div className="flex flex-row border-2 border-neutral-300 w-2/6 lg:w-4/6">
          <BtnHover
            icono={<IconAlbum stroke={2} size={48} color="#00A8E8" />}
            nombre={"Opción 1"}
          />
          <BtnHover
            icono={<IconArmchairOff stroke={2} size={48} color="#00A8E8" />}
            nombre={"Opción 2"}
          />
          <BtnHover
            icono={<IconArmchair stroke={2} size={48} color="#00A8E8" />}
            nombre={"Opción 3"}
          />
        </div>
        <div className="w-2/6 border-r-2 border-t-2 border-b-2 border-neutral-300 order-first lg:w-1/6   lg:order-last">
          <BotonUsuario
            nombreUsuario="John Doe"
            imagenUsuario="../../src/assets/logo/profile.jpg"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

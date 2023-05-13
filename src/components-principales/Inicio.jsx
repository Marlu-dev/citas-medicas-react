import React from "react";
import BgCarrusel from "../components/BgCarrusel";
import Login from "../components/Login";

const Inicio = () => {
  return (
    <div
      style={{
        overflow: "hidden",
        position: "absolute",
        height: "100%",
        width: "100%",
      }}
    >
      <BgCarrusel />
      <Login />
    </div>
  );
};

export default Inicio;

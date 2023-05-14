import React from "react";
import Navbar from "../components/Navbar";
import BarraLateral from "../components/BarraLateral";

const Pagina3 = () => {
  return (
    <div
      style={{
        overflow: "hidden",
        position: "absolute",
        height: "100%",
        width: "100%",
        backgroundColor: "#F4F4F4",
      }}
    >
      <Navbar />
      <BarraLateral />
    </div>
  );
};

export default Pagina3;

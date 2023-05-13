import React from "react";
import Navbar from "../components/navbar";
import BarraLateral from "../components/BarraLateral";
import Citas from "../components/Citas";
const Home = () => {
  return (
    <div
      style={{
        overflow: "hidden",
        position: "absolute",
        height: "100%",
        width: "100%",
        backgroundColor: "#E6F3F2",
      }}
    >
      <Navbar />
      <BarraLateral />
      <Citas />
    </div>
  );
};

export default Home;

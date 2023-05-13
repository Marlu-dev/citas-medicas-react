import React from "react";
import FormInicioSesion from "./FormInicioSesion";

const Login = () => {
  return (
    <div
      className="shadow-inner right-0 left-0 top-0 bottom-0 bg-white xl:rounded-lg xl:right-20 xl:left-2/4 xl:top-20 xl:bottom-32 2xl:rounded-lg 2xl:right-40 2xl:left-1/2 2xl:top-20 2xl:bottom-32"
      style={{
        position: "absolute",
        overflow: "hidden",
      }}
    >
      <FormInicioSesion />
    </div>
  );
};

export default Login;

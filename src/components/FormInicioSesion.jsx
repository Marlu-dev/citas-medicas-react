import React, { useState } from "react";
import "../index.css";
import { motion } from "framer-motion";
import Alert from "./Alert";
import Cargando from "../components-principales/Cargando";
import { useNavigate } from "react-router-dom";

const FormInicioSesion = () => {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [recuerdame, setRecuerdame] = useState(false);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const handleIngresar = () => {
    setLoading(true);

    // Simula una carga de datos
    setTimeout(() => {
      setLoading(false);

      if (!usuario.trim()) {
        console.log("Ingrese un usuario");
        setError("Ingrese un usuario válido");
        return;
      }

      if (!password.trim()) {
        console.log("Ingrese un passsword");
        setError("Ingrese un password");
        return;
      }

      if (usuario !== "hualas" || password !== "tocino") {
        setError("Usuario Invalido");
        return;
      } else {
        navigate("/home");
        console.log("Usuario Validado");
      }

      setUsuario("");
      setPassword("");
      setError(null);
      setRecuerdame(false);
    }, 2000);
  };

  const handleUsuarioChange = (e) => {
    setUsuario(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRecuerdameChange = (e) => {
    setRecuerdame(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Reiniciar los campos del formulario
  };

  const centrar = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  const margenes = {
    marginRight: "20%",
    marginLeft: "20%",
  };
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        position: "inherit",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "20%",
          top: "0%",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            ...centrar,
            top: "60%",
            color: "#00A8E8",
          }}
          className=" text-2xl capitalize"
        >
          Inicia Sesión
        </h2>
      </div>
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "10%",
          top: "20%",
        }}
      >
        <div style={(centrar, margenes)}>
          {error && <Alert title={error} />}
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "20%",
          top: "30%",
          display: "flex",
          flexDirection: "column ",
        }}
      >
        <label htmlFor="usuario" style={margenes}>
          Codigo
        </label>
        <input
          type="text"
          id="usuario"
          value={usuario}
          onChange={handleUsuarioChange}
          style={margenes}
          className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="ejemplo: CH123"
        />
      </div>
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "20%",
          top: "50%",
          display: "flex",
          flexDirection: "column ",
        }}
      >
        <label htmlFor="password" style={margenes}>
          Contraseña:
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          style={margenes}
          className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "10%",
          top: "70%",
        }}
      >
        <div style={(centrar, margenes)}>
          <label
            htmlFor="recuerdame"
            style={{ position: "absolute", width: "20%" }}
          >
            {/* COMO MAMÁ COCO PS */}
            <input
              type="checkbox"
              id="recuerdame"
              checked={recuerdame}
              onChange={handleRecuerdameChange}
              className="mr-2 h-4 w-4"
            />
            Recordar
          </label>
          <a
            href="#"
            style={{
              position: "absolute",
              left: "50%",
              width: "40%",
              color: "#00A8E8",
            }}
            className="hover:underline"
          >
            Olvidé mi Contraseña
          </a>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "20%",
          bottom: "0",
        }}
      >
        <motion.button
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
          }}
          initial={{ x: "-50%", y: "110%", opacity: 0 }}
          animate={{ y: "-45%", opacity: 1, transition: { duration: 1 } }}
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleIngresar}
        >
          Iniciar sesión
        </motion.button>
        {loading && <Cargando />}
      </div>
    </form>
  );
};

export default FormInicioSesion;

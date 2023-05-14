import React from "react";
import { motion } from "framer-motion";
import "../Styles/Cargando.css";
const Cargando = () => {
  return (
    <div className="loading-overlay flex flex-col items-center mb-4">
      <motion.div
        className="loading-content"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          rotate: [0, 360],
          scale: [1, 0.8, 1],
          transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <img
          src={"https://i.ibb.co/t8mfK9d/logo-s.png"}
          alt="Cargando..."
          className="loading-image"
        />
      </motion.div>
      <div className="loading-spinner" />
      <div className="loading-text">Cargando...</div>
    </div>
  );
};

export default Cargando;

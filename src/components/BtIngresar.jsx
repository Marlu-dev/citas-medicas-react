import React from "react";
import { motion } from "framer-motion";

function BtIngresar() {
  return (
    <div className="container-ingresar">
      <motion.button
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "10vw",
          height: "2rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          fontSize: "20px",
        }}
        initial={{ x: "-50%", y: 400, opacity: 0 }}
        animate={{ y: 300, opacity: 1, transition: { duration: 1 } }}
        className="bt-ingresar"
      >
        INGRESAR
      </motion.button>
    </div>
  );
}

export default BtIngresar;

import React from "react";
import "../Styles/LatoTitle.css";
import { motion } from "framer-motion";

function LatoTitle() {
  return (
    <motion.h1
      initial={{ x: "-100%", opacity: 0 }}
      animate={{ x: 20, opacity: 1, transition: { duration: 1 } }}
      className="lato-title"
    >
      CLINICA LAGUAS CORRELON INEFICIENTE
    </motion.h1>
  );
}

export default LatoTitle;

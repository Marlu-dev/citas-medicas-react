import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Letras() {
  const phrases = [
    "Cuidando de tu salud, hoy y siempre",
    "Tu bienestar es nuestra prioridad",
    "Confía en nosotros para cuidar de ti",
    "Juntos por una vida más saludable",
  ];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex =
        currentPhraseIndex === phrases.length - 1 ? 0 : currentPhraseIndex + 1;
      setCurrentPhraseIndex(nextIndex);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [currentPhraseIndex, phrases.length]);

  const variants = {
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    hidden: {
      opacity: 0,
    },
  };

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "25%",
        transform: "translate(-50%, -50%)",
        width: "30vw",
        height: "2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontSize: "10px",
      }}
    >
      <motion.h1
        key={currentPhraseIndex}
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="font-sans text-3xl text-slate-50"
        style={{ position: "absolute" }}
      >
        {phrases[currentPhraseIndex]}
      </motion.h1>
    </div>
  );
}

export default Letras;

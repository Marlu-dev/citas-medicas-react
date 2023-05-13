import { useState } from "react";
import { motion } from "framer-motion";

const BtnHover = ({ icono, nombre }) => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const spanVariants = {
    hidden: {
      scale: 1,
      opacity: 0,
    },
    visible: {
      scale: 1,
      x: -10,
      opacity: 1,
    },
  };

  return (
    <motion.div
      className="flex w-2/6 h-full items-center justify-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ scale: 1 }}
      whileHover={{ scale: 1, x: -40 }}
      whileTap={{ scale: 1 }}
    >
      <div className="w-2/6 h-4/6" />
      {icono}
      <div />
      {hover && (
        <motion.span
          className="ml-2"
          variants={spanVariants}
          initial="hidden"
          animate="visible"
        >
          {nombre}
        </motion.span>
      )}
    </motion.div>
  );
};

export default BtnHover;

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Letras from "./Letras";
import Header from "./Header";

import backgroundImage1 from "../assets/backgrounds/bg-1.png";
import backgroundImage2 from "../assets/backgrounds/bg-2.png";
import backgroundImage3 from "../assets/backgrounds/bg-5.jpg";

const backgrounds = [backgroundImage1, backgroundImage2, backgroundImage3];

function BgCarrusel() {
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBackgroundIndex((backgroundIndex + 1) % backgrounds.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [backgroundIndex]);

  const currentBackground = backgrounds[backgroundIndex];

  const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1 } },
    exit: { opacity: 0, transition: { duration: 1 } },
  };

  return (
    <div
      style={{
        position: "absolute",
        height: "100%",
        width: "100%",
        backgroundColor: " rgb(127, 187, 255)",
      }}
    >
      <AnimatePresence>
        <motion.div
          key={backgroundIndex}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={variants}
          style={{
            backgroundImage: `url(${currentBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            filter: "brightness(0.6) blur(4px)",
          }}
        />
      </AnimatePresence>
      <Letras />
      {/* <Header /> */}
    </div>
  );
}

export default BgCarrusel;

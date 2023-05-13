import { motion } from "framer-motion";
import "../Styles/Header.css";

function Header() {
  return (
    <motion.header style={{ backgroundColor: "transparent" }}>
      <nav>
        <ul>
          <li>
            <a href="#">Nosotros</a>
          </li>
          <li>
            <a href="#">Staff Medico</a>
          </li>
          <li>
            <a href="#">Servicios</a>
          </li>
          <li>
            <a href="#">Más información</a>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
}

export default Header;

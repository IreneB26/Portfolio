import { Moon } from "grommet-icons";
import { useState } from "react";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import "./menu.css";

export default function NavMenu(props) {
  const container = {
    // open: { transition: { duration: 1 }, opacity: 1, x: 0 },
    closed: { transition: { duration: 1 }, opacity: 0, x: "100%" },

    open: {
      // transition: { duration: 1 },
      opacity: 1,
      x: 0,

      transition: {
        duration: 1,
        delayChildren: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    closed: { opacity: 0 },
    open: {
      opacity: 1,
    },
  };

  const [isOpen, setIsOpen] = useState(false);

  const [first, setFirst] = useState(true);

  return (
    <>
      <nav
        className={isOpen === true ? " nav_menu position_nav_menu" : "nav_menu"}
      >
        <Moon
          onClick={() => props.changeColor("black")}
          className={isOpen === true ? " theme opacity" : "theme"}
          color="black"
          size="large"
        />

        <div
          onClick={() => {
            setIsOpen(!isOpen);
            setFirst(false);
          }}
          className={isOpen === true ? " active" : ""}
          id="navMenu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* content_menu */}

      <motion.article
        className={first === true ? "content_menu " : "active_contain"}
        animate={isOpen ? "open" : "closed"}
        variants={container}
      >
        <ul className="List_menu">
          <Link to="/">
            {" "}
            <motion.li
              variants={item}
              whileHover={{ scale: 1.1 }}
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className="Link_menu"
            >
              Sobre mi
            </motion.li>
          </Link>
          <Link to="/proyectos">
            <motion.li
              variants={item}
              whileHover={{ scale: 1.1 }}
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className="Link_menu"
            >
              Trabajos
            </motion.li>
          </Link>
          <motion.li
            variants={item}
            whileHover={{ scale: 1.1 }}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className="Link_menu"
          >
            Contacto
          </motion.li>
        </ul>
      </motion.article>
    </>
  );
}

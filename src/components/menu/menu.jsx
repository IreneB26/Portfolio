import { Moon } from "grommet-icons";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import "./menu.css";
// import Links from "../../data/info.json";

import { useDatabase, useDatabaseObjectData } from "reactfire";
import { ref } from "firebase/database";

export default function NavMenu(props) {
  const [hover, setIsHover] = useState(false);

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
  const [black, setBlack] = useState(false);

  const databaseFB = useDatabase();
  const counterRef = ref(databaseFB, "data");
  const { status, data } = useDatabaseObjectData(counterRef);

  // data[lenguaje]

  const initialLanguaje = "esp";
  const [lenguaje, setLenguaje] = useState(initialLanguaje);
  const [text, setText] = useState();

  useEffect(() => {
    if (data !== undefined) {
      setText(data[lenguaje]);
    }
  }, [data, lenguaje]);

  console.log(text);

  const handleLanguage = (e) => {};

  return (
    <>
      <nav
        className={isOpen === true ? " nav_menu position_nav_menu" : "nav_menu"}
      >
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
        <select onChange={handleLanguage()}>
          <option value="Esp">esp</option>
          <option value="Eng">eng</option>
        </select>

        <Moon
          onClick={() => {
            props.changeColor("black");
            setBlack(!black);
          }}
          className={isOpen === true ? " theme opacity icon" : "theme icon"}
          color={black === true ? "white" : "black"}
          size="large"
        />
      </nav>

      {/* content_menu */}

      <motion.article
        className={first === true ? "content_menu " : "active_contain"}
        animate={isOpen ? "open" : "closed"}
        variants={container}
      >
        <ul className="List_menu">
          {data.esp.links.map((link) => (
            <Link to={`${link.Link}`}>
              {" "}
              <motion.li
                variants={item}
                whileHover={{ scale: 1.1 }}
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                className="Link_menu"
              >
                <p className="link_text"> {`${link.name}`}</p>
                <section className="hover_menu">
                  <p className="text_menu_hover_animation">{`${link.texto_alt}`}</p>
                </section>
              </motion.li>
            </Link>
          ))}
        </ul>
      </motion.article>
    </>
  );
}

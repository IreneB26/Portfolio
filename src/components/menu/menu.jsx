import { Moon } from "grommet-icons";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import "./menu.css";

import { useDatabase, useDatabaseObjectData } from "reactfire";
import { ref } from "firebase/database";

export default function NavMenu(props) {
  const databaseFB = useDatabase();
  const counterRef = ref(databaseFB, "data");

  const { status, data } = useDatabaseObjectData(counterRef);

  useEffect(() => {
    console.log(data);
  }, [data]);
  console.log(data);

  // const links = Links.links;

  const body = document.querySelector("body");

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

            if (isOpen === false) {
              body.style.overflow = "hidden";
            } else {
              body.style.overflow = "visible";
            }
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
          {data.links.map((link) => (
            <Link to={`${link.Link}`}>
              {" "}
              <motion.li
                variants={item}
                whileHover={{ scale: 1.1 }}
                onClick={() => {
                  setIsOpen(!isOpen);
                  if (isOpen === false) {
                    body.style.overflow = "hidden";
                  } else {
                    body.style.overflow = "visible";
                  }
                }}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                className="Link_menu"
              >
                {`${link.name}`}
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

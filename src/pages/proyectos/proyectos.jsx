import { useParams } from "react-router-dom";
import Button from "../../components/button/button";
import Titulo from "../../components/titulos/titulo";
import "./proyectos.css";

import { motion } from "framer-motion";
// import data from "../../data/info.json";

// import img from "./logos/";

import { useDatabase, useDatabaseObjectData } from "reactfire";
import { ref } from "firebase/database";

export default function Proyectos() {
  const databaseFB = useDatabase();
  const counterRef = ref(databaseFB, "data");
  const { status, data } = useDatabaseObjectData(counterRef);

  const parameter = useParams();

  if (data !== undefined) {
    var infoProject = data.Projects.find(
      (element) => element.id === parameter.id
    );
  }

  return (
    <>
      {data !== undefined && (
        <section className="Proyectos_title">
          <Titulo contenido={infoProject.name}></Titulo>

          <motion.p
            initial={{ opacity: 0 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1 }}
            className="descripcion_proyecto"
          >
            {infoProject.description}
          </motion.p>

          <motion.img
            initial={{ opacity: 0 }}
            transition={{ duration: 2 }}
            whileInView={{ opacity: 1 }}
            src={process.env.PUBLIC_URL + `/mockup/${infoProject.mockup}`}
            alt={infoProject.alt}
            className="img_proyecto"
          ></motion.img>

          <motion.section
            animate="open"
            initial={{ opacity: 0 }}
            transition={{ duration: 2 }}
            whileInView={{ opacity: 1 }}
            className="skill_proyecto"
          >
            <article className="tittle_tools_contain">
              <h2 className="tittle_tools">Tools</h2>
            </article>

            <article className="img_skill_container">
              {/* {infoProject.tools.HTML} */}

              {infoProject.tools.map((element) => (
                <div className="tooltip tooltip_proyect">
                  <motion.img
                    animate="open"
                    src={process.env.PUBLIC_URL + `/logos/${element.img}`}
                    className="img_skill_proyecto"
                    alt={element.alt}
                  ></motion.img>
                  <span className="tooltiptext">{element.name}</span>
                </div>
              ))}
            </article>
          </motion.section>

          <motion.article
            initial={{ opacity: 0 }}
            transition={{ duration: 2 }}
            whileInView={{ opacity: 1 }}
            className="button_proyectos"
          >
            <a target="_blank" href={infoProject.github} rel="noreferrer">
              <Button contenido="Ver código" />
            </a>
            <a target="_blank" href={infoProject.Link} rel="noreferrer">
              <Button contenido="Ver en la web" />
            </a>
          </motion.article>
        </section>
      )}
    </>
  );
}

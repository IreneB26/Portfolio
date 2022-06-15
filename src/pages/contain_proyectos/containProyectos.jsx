import CardSkill from "../index/components/card_skill/card_skill";

import { Link } from "react-router-dom";

import "./containProyectos.css";
import { Github, Share, ShareRounded } from "grommet-icons";

import info from "../../data/info.json";

import { motion } from "framer-motion";

import { useDatabase, useDatabaseObjectData } from "reactfire";
import { ref } from "firebase/database";

export default function ContainProyectos() {
  // const data = info.Projects;

  const databaseFB = useDatabase();
  const counterRef = ref(databaseFB, "data");
  const { status, data } = useDatabaseObjectData(counterRef);

  return (
    <>
      <section className="contain_skillCards">
        <motion.h1
          initial={{ opacity: 0 }}
          transition={{ duration: 2 }}
          whileInView={{ opacity: 1 }}
          className="title_proyectos"
        >
          Proyectos
        </motion.h1>
        {data !== undefined && (
          <motion.article
            initial={{ opacity: 0 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1 }}
            className="cards"
          >
            {data.esp.Projects.map(
              (project) => (
                console.log(project),
                (
                  <CardSkill clas="hover">
                    <Link
                      className="contain_A"
                      to={`/infoProyecto/${project.id}`}
                    ></Link>
                    <section className="head_card">
                      <h2>{project.name}</h2>

                      <article className="link_card">
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href={project.github}
                        >
                          <Github
                            color="black"
                            size="medium"
                            className="icon"
                          />
                        </a>

                        <a target="_blank" rel="noreferrer" href={project.Link}>
                          <ShareRounded
                            color="black"
                            size="medium"
                            className="icon"
                          />
                        </a>
                      </article>
                    </section>
                    <p className="descripcion_cards">{project.description}</p>
                  </CardSkill>
                )
              )
            )}
          </motion.article>
        )}
      </section>
    </>
  );
}

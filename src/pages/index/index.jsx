import Button from "../../components/button/button";
import Titulo from "../../components/titulos/titulo";
import CardSkill from "./components/card_skill/card_skill";
import Formacion from "./components/formacion/formacion";
import Imagen from "./components/imagen_presentacion/imagen";

import { motion } from "framer-motion";

import SkillInfo from "../../data/info.json";

import "./index.css";

export default function Index() {
  const front = SkillInfo.frontend;
  const back = SkillInfo.backend;
  const database = SkillInfo.database;
  const tools = SkillInfo.tools;

  //   let response = fetch(
  //     "https://portfolio-89202-default-rtdb.europe-west1.firebasedatabase.app/"
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  return (
    <>
      <motion.section
        className="section_info"
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1 }}
      >
        <article className="image_principal">
          <Imagen>
            <p className="tittle">drag me</p>
            <p className="tittle">X</p>
          </Imagen>
        </article>

        <article className="info_principal">
          <Titulo contenido="hi, i`m Irene Bargues" />

          <p className="descripcion">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
            distinctio quos voluptas vel! Labore vero nam hic minus perspiciatis
            eum nesciunt consectetur sapiente rerum dicta. Corporis vitae
            aperiam impedit pariatur! Aliunt! Similique, praesentium labore!
            Quasi quisquam corrupti quia facere earum sequi, nesciunt iste
            temporibus voluptatem eos molestias laboriosam maxime accusamus
            aperiam, architecto nisi mollitia.
          </p>
          <a
            href="https://drive.google.com/uc?id=14gbmfT_XL6mGRGugtDmCa4XFNSjKOOwJ&export=download"
            download="CV Irene Bargues"
          >
            <Button contenido="Descargar CV"></Button>
          </a>
        </article>
      </motion.section>

      <motion.section
        className="skills"
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1 }}
      >
        <article className="skill_tittle">
          <Titulo contenido="Skills" />
        </article>

        <article className="contain_skills">
          <CardSkill>
            <section>
              <p className="title_card">Front-end</p>
            </section>

            <article>
              {front.map((img) => (
                <div className="tooltip">
                  <img
                    loading="lazy"
                    className="img_skill"
                    src={`${img.image}`}
                    alt={`${img.alt}`}
                  ></img>

                  <span className="tooltiptext">{img.name}</span>
                </div>
              ))}
            </article>
          </CardSkill>

          <CardSkill>
            <section>
              <p className="title_card">Backend</p>
            </section>

            <article>
              {back.map((img) => (
                <div className="tooltip">
                  <img
                    loading="lazy"
                    className="img_skill"
                    src={`${img.image}`}
                    alt={`${img.alt}`}
                  ></img>

                  <span className="tooltiptext">{img.name}</span>
                </div>
              ))}
            </article>
          </CardSkill>

          <CardSkill>
            <section>
              <p className="title_card">Database</p>
            </section>

            <article>
              {database.map((img) => (
                <div className="tooltip">
                  <img
                    loading="lazy"
                    className="img_skill"
                    src={`${img.image}`}
                    alt={`${img.alt}`}
                  ></img>

                  <span className="tooltiptext">{img.name}</span>
                </div>
              ))}
            </article>
          </CardSkill>

          <CardSkill>
            <section>
              <p className="title_card">Tools</p>
            </section>

            <article>
              {tools.map((img) => (
                <div className="tooltip">
                  <img
                    loading="lazy"
                    className="img_skill"
                    src={`${img.image}`}
                    alt={`${img.alt}`}
                  ></img>

                  <span className="tooltiptext">{img.name}</span>
                </div>
              ))}
            </article>
          </CardSkill>
        </article>
      </motion.section>

      <motion.section
        className="formacion"
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1 }}
      >
        <Formacion></Formacion>
      </motion.section>
    </>
  );
}

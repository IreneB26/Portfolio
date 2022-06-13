import { useParams } from "react-router-dom";
import Button from "../../components/button/button";
import Titulo from "../../components/titulos/titulo";
import "./proyectos.css";
import data from "../../data/info.json";

// import img from "./logos/";

export default function Proyectos() {
  const parameter = useParams();
  const infoProject = data.Projects.find(
    (element) => element.id === parameter.id
  );

  return (
    <>
      <section className="Proyectos_title">
        <Titulo contenido={infoProject.name}></Titulo>

        <p className="descripcion_proyecto">{infoProject.description}</p>

        <img src="" className="img_proyecto"></img>

        <section className="skill_proyecto">
          <article className="tittle_tools_contain">
            <h2 className="tittle_tools">Tools</h2>
          </article>

          <article className="img_skill_container">
            {/* {infoProject.tools.HTML} */}

            {infoProject.tools.map((element) => (
              <img
                src={process.env.PUBLIC_URL + `/logos/${element.img}`}
                className="img_skill_proyecto"
                alt={element.name}
              ></img>
            ))}
          </article>
        </section>

        <article className="button_proyectos">
          <a target="_blank" href={infoProject.github} rel="noreferrer">
            <Button contenido="Ver código" />
          </a>
          <a target="_blank" href={infoProject.Link} rel="noreferrer">
            <Button contenido="Ver en la web" />
          </a>
        </article>
      </section>
    </>
  );
}

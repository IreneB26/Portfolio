import { useParams } from "react-router-dom";
import Button from "../../components/button/button";
import Titulo from "../../components/titulos/titulo";
import "./proyectos.css";
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

          <p className="descripcion_proyecto">{infoProject.description}</p>

          <img src="" className="img_proyecto"></img>

          <section className="skill_proyecto">
            <article className="tittle_tools_contain">
              <h2 className="tittle_tools">Tools</h2>
            </article>

            <article className="img_skill_container">
              {/* {infoProject.tools.HTML} */}

              {infoProject.tools.map((element) => (
                <div className="tooltip tooltip_proyect">
                  <img
                    src={process.env.PUBLIC_URL + `/logos/${element.img}`}
                    className="img_skill_proyecto"
                    alt={element.alt}
                  ></img>
                  <span className="tooltiptext">{element.name}</span>
                </div>
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
      )}
    </>
  );
}

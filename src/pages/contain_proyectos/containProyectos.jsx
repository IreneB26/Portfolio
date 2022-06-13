import CardSkill from "../index/components/card_skill/card_skill";

import { Link } from "react-router-dom";

import "./containProyectos.css";
import { Github, Share, ShareRounded } from "grommet-icons";

import info from "../../data/info.json";

export default function ContainProyectos() {
  const data = info.Projects;

  return (
    <>
      <section className="contain_skillCards">
        <h1 className="title_proyectos">Proyectos</h1>

        <article className="cards">
          {data.map((project) => (
            <CardSkill clas="hover">
              <Link className="contain_A" to="/infoProyecto"></Link>
              <section className="head_card">
                <h2>{project.name}</h2>

                <article className="link_card">
                  <a href={project.github}>
                    <Github color="black" size="medium" className="icon" />
                  </a>

                  <a href={project.Link}>
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
          ))}

          {/* <Link to="/infoProyecto">
            <CardSkill>
              <section className="head_card">
                <h2>title</h2>

                <article className="link_card">
                  <p>github</p>

                  <p>web</p>
                </article>
              </section>
              <p className="descripcion_cards">
                Lorem ipsum, dolor sit amevero sequi beatae quas consequatur!
                Natus, odio vel architecto omnis excepturi accusamus ducimus
                distinctio numquam, amet sapiente doloremque nulla esse
                explicabo. Laudantium similique nostrum inventore veritatis!
                Odit qu
              </p>
            </CardSkill>
          </Link>

          <Link to="/infoProyecto">
            <CardSkill>
              <section className="head_card">
                <h2>title</h2>

                <article className="link_card">
                  <p>github</p>

                  <p>web</p>
                </article>
              </section>
              <p className="descripcion_cards">
                Lorem ipsum, dolor sit amevero sequi beatae quas consequatur!
                Natus, odio vel architecto omnis excepturi accusamus ducimus
                distinctio numquam, amet sapiente doloremque nulla esse
                explicabo. Laudantium similique nostrum inventore veritatis!
                Odit qu
              </p>
            </CardSkill>
          </Link>

          <Link to="/infoProyecto">
            <CardSkill>
              <section className="head_card">
                <h2>title</h2>

                <article className="link_card">
                  <p>github</p>

                  <p>web</p>
                </article>
              </section>
              <p className="descripcion_cards">
                Lorem ipsum, dolor sit amevero sequi beatae quas consequatur!
                Natus, odio vel architecto omnis excepturi accusamus ducimus
                distinctio numquam, amet sapiente doloremque nulla esse
                explicabo. Laudantium similique nostrum inventore veritatis!
                Odit qu
              </p>
            </CardSkill>
          </Link> */}
        </article>
      </section>
    </>
  );
}

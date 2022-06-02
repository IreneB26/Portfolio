import CardSkill from "../index/components/card_skill/card_skill";

import { Link } from "react-router-dom";

import "./containProyectos.css";

export default function ContainProyectos() {
  return (
    <>
      <section className="contain_skillCards">
        <h1>Proyectos</h1>

        <article className="cards">
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
          </Link>
        </article>
      </section>
    </>
  );
}

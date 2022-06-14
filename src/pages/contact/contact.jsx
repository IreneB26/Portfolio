import Titulo from "../../components/titulos/titulo";
import "./contact.css";

import CardSkill from "../index/components/card_skill/card_skill";
import Button from "../../components/button/button";

export default function Contact() {
  return (
    <>
      <section className="contain_contact">
        <article>
          <Titulo class="title_contact" contenido="Contact" />

          <p className="open_contact">contact</p>

          <h3 className="contac_text">Puedes mandarme un correo por aquí</h3>
          <h4 className="sub_contact_text">Cuentame que necesitas </h4>

          <CardSkill clas="contact_form">
            <form
              action="https://formsubmit.co/bargues.irene@gmail.com"
              className="contain_form"
              method="POST"
            >
              <label className="label">Nombre</label>
              <input className="input" type="text"></input>
              <label className="label">Correo</label>
              <input className="input" type="text"></input>
              <label className="label">Mensaje</label>
              <textarea className="input" type="text"></textarea>

              <div className="contain_button">
                <Button
                  type="submit"
                  class="button_form"
                  contenido="Enviar"
                ></Button>
              </div>
            </form>
          </CardSkill>
          <p className="close_contact">contact</p>
        </article>
      </section>
    </>
  );
}

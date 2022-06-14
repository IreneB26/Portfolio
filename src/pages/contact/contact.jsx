import Titulo from "../../components/titulos/titulo";
import "./contact.css";

import CardSkill from "../index/components/card_skill/card_skill";
import Button from "../../components/button/button";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <>
      <section className="contain_contact">
        <article>
          <Titulo class="title_contact" contenido="Contact" />

          <motion.p
            initial={{ opacity: 0 }}
            transition={{ duration: 2 }}
            whileInView={{ opacity: 1 }}
            className="open_contact"
          >
            Contacto
          </motion.p>

          <motion.h3
            initial={{ opacity: 0 }}
            transition={{ duration: 2 }}
            whileInView={{ opacity: 1 }}
            className="contac_text"
          >
            Aquí puedes ponerte en contacto conmigo
          </motion.h3>
          <motion.h5
            initial={{ opacity: 0 }}
            transition={{ duration: 2 }}
            whileInView={{ opacity: 1 }}
            className="sub_contact_text"
          >
            Cuéntame que necesitas
          </motion.h5>

          <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 2 }}
            whileInView={{ opacity: 1 }}
          >
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
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            transition={{ duration: 2 }}
            whileInView={{ opacity: 1 }}
            className="close_contact"
          >
            contact
          </motion.p>
        </article>
      </section>
    </>
  );
}

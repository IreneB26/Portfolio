import "./imagen.css";
import { motion } from "framer-motion";

import img from "./img/me.jpg";
import test from "./img/test.JPG";

export default function Imagen(props) {
  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      // dragElastic={0.5}
      dragTransition={{ bounceStiffness: 200, bounceDamping: 10 }}
      className="contain_img_presentacion"
    >
      <div className="tittle_img">{props.children}</div>

      <img
        draggable="false"
        loading="lazy"
        className="imagen_presentacion"
        src={img}
        alt="imagen de Irene"
      />

      {/* src="https://i.pinimg.com/236x/58/35/b4/5835b445d0a4ddfb90e44411d0b0270d.jpg" */}
    </motion.div>
  );
}

import "./scroll.css";
import { Link } from "react-router-dom";

export default function Scroll(props) {
  return (
    <>
      <Link to="/proyectos">
        <div id="scroll-container">
          <p id="scroll-text">Pincha aquí para ver mis proyectos</p>
        </div>
      </Link>
    </>
  );
}

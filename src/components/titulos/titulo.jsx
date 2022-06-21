import "./titulo.css";

export default function Titulo(props) {
  return <h1 className={props.class}>{props.contenido}</h1>;
}

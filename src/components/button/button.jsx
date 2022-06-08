import "./button.css";

export default function Button(props) {
  return (
    <>
      {props.children}

      <button href={props.href} download={props.download}>
        <p className="content_button">{props.contenido}</p>
      </button>
    </>
  );
}

import "./button.css";

export default function Button(props) {
  return (
    <>
      {props.children}

      <button
        type={props.type}
        className={props.class}
        href={props.href}
        download={props.download}
      >
        <p className="content_button">{props.contenido}</p>
      </button>
    </>
  );
}

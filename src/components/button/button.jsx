import "./button.css";

export default function Button(props) {
  return (
    <>
      {props.children}

      <button>
        <p className="content_button">{props.contenido}</p>
      </button>
    </>
  );
}

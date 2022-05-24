import "./button.css"

export default function Button(props){
    return (
     
        <>
            {props.children}
            
            <button>{props.contenido}</button>
            
        </>
    )
}
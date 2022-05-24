import "./imagen.css";

export default function Imagen(props){

    return(
        <div className="contain_img_presentacion">
           <div className="tittle_img"> 
               {props.children}
           </div>
            <img className="imagen_presentacion" src="https://i.pinimg.com/236x/58/35/b4/5835b445d0a4ddfb90e44411d0b0270d.jpg" alt="imagen de Irene"/>
        </div>
    )

}
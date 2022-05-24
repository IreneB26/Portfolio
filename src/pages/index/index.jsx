import Button from "../../components/button/button";
import ContactAside from "../../components/contact-sidebar/contact-aside";
import Titulo from "../../components/titulos/titulo";
import Imagen from "./components/imagen_presentacion/imagen";

import "./index.css";


export default function Index(){

    return(
        
  
          <>
            
        
             <section className="section_info">

                <article className="image_principal">
                    <Imagen> 
                        <p className="tittle">drag me</p>
                        <p className="tittle">X</p>
                    </Imagen>
                </article>

               <article className="info_principal">
                    <Titulo contenido="hi, i`m Irene Bargues"/>
                    <Button contenido="CV">    
                        <p className="descripcion">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum distinctio quos voluptas vel! Labore vero nam hic minus perspiciatis eum nesciunt consectetur sapiente rerum dicta. Corporis vitae aperiam impedit pariatur!
                        Aliunt! Similique, praesentium labore! Quasi quisquam corrupti quia facere earum sequi, nesciunt iste temporibus voluptatem eos molestias laboriosam maxime accusamus aperiam, architecto nisi mollitia.</p>
                    </Button>
                   
               </article>

             </section>
        </>

)
}
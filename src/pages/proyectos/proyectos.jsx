import Button from "../../components/button/button"
import Titulo from "../../components/titulos/titulo"
import "./proyectos.css"


export default function Proyectos(){

return<>
<section className="Proyectos_title">

<Titulo contenido="Proyectos" ></Titulo>

<p className="descripcion_proyecto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eligendi delectus ducimus ratione voluptatum dicta incidunt atque dolore ullam voluptatem neque asperiores eos expedita, quaerat reiciendis quae voluptas enim deleniti.</p>


<img src="" className="img_proyecto"></img>





<section className="skill_proyecto">
        
<article className="tittle_tools_contain">
        <h2 className="tittle_tools">Tools</h2>
</article>


    <article className="img_skill_container">
                <img src="" className="img_skill_proyecto"></img>
                <img src="" className="img_skill_proyecto"></img>
                <img src="" className="img_skill_proyecto"></img>
            
    </article>

</section>


<article className="button_proyectos">

        <Button contenido="Ver código"/>
        <Button contenido="Ver en la web"/>
                


</article>


</section>


        </>
}
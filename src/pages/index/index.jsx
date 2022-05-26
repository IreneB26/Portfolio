import Button from "../../components/button/button";
import ContactAside from "../../components/contact-sidebar/contact-aside";
import Titulo from "../../components/titulos/titulo";
import CardSkill from "./components/card_skill/card_skill";
import Formacion from "./components/formacion/formacion";
import Imagen from "./components/imagen_presentacion/imagen";

import SkillInfo from "../../data/info.json"

import "./index.css";


export default function Index(){

    const front = SkillInfo.frontend;
    const back = SkillInfo.backend;
    const database = SkillInfo.database;
    const tools = SkillInfo.tools;

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
                    <Button contenido="Descargar CV">    
                        <p className="descripcion">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum distinctio quos voluptas vel! Labore vero nam hic minus perspiciatis eum nesciunt consectetur sapiente rerum dicta. Corporis vitae aperiam impedit pariatur!
                        Aliunt! Similique, praesentium labore! Quasi quisquam corrupti quia facere earum sequi, nesciunt iste temporibus voluptatem eos molestias laboriosam maxime accusamus aperiam, architecto nisi mollitia.</p>
                    </Button>
                
                
                   
               </article>

               </section>



        <section className="skills">

        <article className="skill_tittle">
            <Titulo contenido="Skills"/>
        </article>

        <article className="contain_skills">


        
            <CardSkill> 
          
                    <section>
                        <p className="title_card">Front-end</p>
                    </section>
         
                  <article>
                        { front.map((img) => 
                       
                       <div class="tooltip">
                           <img className="img_skill" src={`${img.image}`}></img>
                        <span class="tooltiptext">{img.name}</span>
                        </div>
                        
                      
 
                        )}  
                    </article>
            </CardSkill>
         
            
        <CardSkill> 
        <section>
                        <p className="title_card">Backend</p>
                    </section>
         
                  <article>
                        { back.map((img) => 
                       
                       <div class="tooltip">
                       <img className="img_skill" src={`${img.image}`}></img>
                    <span class="tooltiptext">{img.name}</span>
                    </div>

                        )}  
                    </article>
        </CardSkill>

        <CardSkill> 
        <section>
                        <p className="title_card">Database</p>
                    </section>
         
                  <article>
                        { database.map((img) => 
                       
                           <div class="tooltip">
                           <img className="img_skill" src={`${img.image}`}></img>
                        <span class="tooltiptext">{img.name}</span>
                        </div>

                        )}  
                    </article>
        </CardSkill>

        <CardSkill> 
        <section>
                        <p className="title_card">Tools</p>
                    </section>
         
                  <article>
                        { tools.map((img) => 
                       
                           <div class="tooltip">
                           <img className="img_skill" src={`${img.image}`}></img>
                        <span class="tooltiptext">{img.name}</span>
                        </div>
                        
                        )}  
                    </article>
        </CardSkill>

        </article>

            



        </section>



        <section className="formacion">

        <Formacion></Formacion>


        </section>

        </>

)
}
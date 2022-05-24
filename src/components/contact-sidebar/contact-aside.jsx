import "./contact_aside.css"
import { Linkedin, Github } from 'grommet-icons';

export default function Contact_aside(){
    return (
        <aside className="contact-aside">

          <section className="line_aside">

                <hr className="hr top_hr"/>

                <article className="icons_social_aside">

                   <a href="https://www.linkedin.com/in/irene-bargues-garc%C3%ADa-350250134/" target="_blank" rel="noreferrer">
                        <Linkedin color='black' size='large' /> 
                   </a>
                   <a href="https://github.com/IreneB26" target="_blank" rel="noreferrer">
                        <Github color='black' size='large' />
                   </a>
                    
                </article>

                <hr className="hr bottom_hr"/>
               
           </section>

           

             <section className="content_email">
                    
                        <a className="contact_aside" href="mailto:bargues.irene@gmail.com">
                           bargues.irene@gmail.com
                        </a>
                    
             </section>

        </aside>
    )
        
}
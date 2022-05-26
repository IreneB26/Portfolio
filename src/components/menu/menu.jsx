import { Moon } from 'grommet-icons';
import { useState } from 'react';

import { Link } from 'react-router-dom';


import "./menu.css"

export default function NavMenu(props){

    const [isOpen, setIsOpen] = useState(false);

 


    return(
        <>
        <nav className={isOpen === true ? ' nav_menu position_nav_menu' : 'nav_menu'} >
            
            <Moon className={isOpen === true ? ' theme opacity' : 'theme'}  color='black' size='large' />

            <div onClick={() => {setIsOpen(!isOpen)}}  className={isOpen === true ? ' active' : ''}  id="navMenu">
                <span></span>
                <span></span>
                <span></span>
            </div>  

        </nav>

        <article className={isOpen === true ? ' active_contain' : 'content_menu'} >


            <ul className='List_menu'>
               
                <Link to="/"> <li onClick={() => {setIsOpen(!isOpen)}} className='Link_menu'>Sobre mi</li></Link>
                <Link to="/proyectos"><li onClick={() => {setIsOpen(!isOpen)}} className='Link_menu'>Trabajos</li></Link>
                    <li onClick={() => {setIsOpen(!isOpen)}} className='Link_menu'>Contacto</li>

            </ul>

        </article>

        </>
    )
}   
import { Menu, Moon, Close } from 'grommet-icons';
import { useState } from 'react';
import "./menu.css"

export default function NavMenu(props){

    const [isOpen, setIsOpen] = useState(false);
    const [menuActive, setMenuActive] = useState(false);



    return(
        <>
        <nav className={isOpen === true ? ' nav_menu position_nav_menu' : 'nav_menu'} >
            
            <Moon className='theme' color='black' size='large' />

            <div onClick={() => {setIsOpen(!isOpen)}}  className={isOpen === true ? ' active' : ''}  id="navMenu">
                <span></span>
                <span></span>
                <span></span>
            </div>  

        </nav>

        <article className={isOpen === true ? ' active_contain' : 'content_menu'} >


            <ul className='List_menu'>
               
                <li className='Link_menu'>Sobre mi</li>
                <li className='Link_menu'>Trabajos</li>
                <li className='Link_menu'>Contacto</li>

            </ul>

        </article>

        </>
    )
}   
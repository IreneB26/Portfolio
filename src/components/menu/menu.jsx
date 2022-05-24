import { Menu, Moon, Close } from 'grommet-icons';
import { useState } from 'react';
import "./menu.css"

export default function NavMenu(props){

    const [isOpen, setIsOpen] = useState(false);


    return(
        <>
        <nav  className='nav_menu'>
            
            <Moon color='black' size='large' />
            <Menu onClick={() => {setIsOpen(!isOpen)}} color='black' size='large' />

        </nav>

        <article className={isOpen === true ? ' active' : 'content_menu'} >

        <div className='close_menu'>
            <Close  onClick={() => {setIsOpen(!isOpen)}} color='black' size='large' />
            
        </div>

            <ul className='List_menu'>
               
                <li className='Link_menu'>Sobre mi</li>
                <li className='Link_menu'>Trabajos</li>
                <li className='Link_menu'>Contacto</li>
                
            </ul>

        </article>

        </>
    )
}   
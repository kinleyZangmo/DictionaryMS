import Style from './Style.module.css';
import *as FaIcons from "react-icons/fa"
import *as AiIcons from "react-icons/ai"
import { useState } from 'react';
import {Link} from 'react-router-dom'

export default function Navbar(){
    const[sidebar,setSidebar]=useState(false);
    const showSidebar=()=>{
        setSidebar(!sidebar);
    }
   
    return(
        <header>
          <div className={Style.container}>
            <nav>
                <div className={Style.logo}>
                    <a href="#"><img src="./logo.jpg"/>Dictionary Management System</a>
                    
                </div>
                
                <div className={Style.toggle}>
                   <Link to="#" className='Style.menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar}/>
                    </Link>
                </div>
                <nav className={sidebar? 'nav-menu active':'nav-menu'}>
                <ul className={Style.navmenuitems}>
                    <li className='Style.navbar-toggle'>
                        <Link to="#" className='Style.menu-bars'>
                            <AiIcons.AiOutlineClose/>
                        </Link>
                    </li>
            
                </ul>
                </nav>
                
            </nav>
          </div> 
        </header>
    )
}
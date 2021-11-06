import './App.css';
import React, {useState} from 'react'
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as CgIcons from "react-icons/cg";





function NavBar() {
    const[sidebar, setBar] = useState(false)

    const showBar = () => setBar(!sidebar)
    return (
        <div className="navbarAll">
            <div className="navbar">
                <Link to="#" className="menu-bars">
                <FaIcons.FaBars onClick={showBar}/>
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className= 'nav-menu-items' onClick={showBar}>
                    <li className="navBar-toggle">
                        <Link to="#" className="menu-bars">
                         <AiIcons.AiOutlineClose/>
                        </Link>
                    </li>
                    <li>
                    <Link to='/' className="icons">
                    <AiIcons.AiOutlineHome />Home
                    </Link>
                    </li>
                    <Link to='/profile' className="icons">
                    <CgIcons.CgProfile />About us
                    </Link>
                    <Link to='/portfolio' className="icons">
                    <AiIcons.AiFillFolderOpen />Gallery
                    </Link>
                    
                </ul>
            </nav>
        </div>
    )
}


export default NavBar;

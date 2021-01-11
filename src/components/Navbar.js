import React from 'react'
import { Link } from "react-router-dom";

function Navbar(){   
        return (
            <div className="navbar bg-danger">
                <ul className="navbar__nav">
                    <li className="nav__item">
                        <Link className="nav-link text-white" to={"/react-portfolio"}>Home</Link>
                    </li>
                    <li className="nav__item">
                        <Link className="nav-link text-white" to={"/react-portfolio/about"}>About</Link>
                    </li>
                    <li className="nav__item">      
                        <Link className="nav-link text-white" to={"/react-portfolio/projects"}>Projects</Link>
                    </li>
                    <li className="nav__item">
                        <Link className="nav-link text-white" to={"/react-portfolio/contact"}>Contact</Link>
                    </li>
                </ul>
   
            </div>
        );
    
}

export default Navbar
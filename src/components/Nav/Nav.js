import React from 'react';
import {BrowserRouter as Router,Link} from 'react-router-dom';
import './nav.css';
const Nav=(props)=>{
    return(
        
        <div className="nav-top">
        <nav className="navbar">
            <ul>
                <li><a id="nav-logo" className="nav-link ">Esper</a></li>
            </ul>
            <ul id="nav-links-left">
                
                <Link to="/login" style={{textDecoration:"none"}}><li><a  className="nav-link ">Login</a></li></Link>
                <Link to="/console" style={{textDecoration:"none"}}><li><a  className="nav-link ">Console</a></li></Link>
            </ul>
        </nav>
        
        </div>
       
    )
}
export default Nav;
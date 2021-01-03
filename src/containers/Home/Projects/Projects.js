import React from 'react';
import { Link } from 'react-router-dom';
import Illustration from './Illustration';
import './project.css';
const Projects=(props)=>{
    return(
        <div className="project-container">
            <h1>Console</h1>
            <p className="aboutus-content">The Esper Console is a feature-rich user interface for you to operate and manage your fleet of Android devices. Esper provides a range of options to deploy company‑owned devices at scale. </p>
            <Link style={{textDecoration:"none"}} to="/console"><button className="btn btn-more">Go to Console</button></Link>
            <div id="project-ill-holder">
                <Illustration/>
            </div>
        </div>
    )
}
export default Projects;
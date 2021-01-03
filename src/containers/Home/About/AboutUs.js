import React from 'react';
import './aboutus.css';
import Illustration from './Illustration';
const AboutUs=(props)=>{
    return (
        <div className="aboutus">
            <div className="aboutus-container">
            <h1>About Us</h1>
            <p className="aboutus-content">Esper is at heart a technology company that provides Android dedicated device fleet management solutions for enterprises led by APIs, SDKs, and tools for developers. Based in Silicon Valley with supporting teams in Seattle, Esper is currently the only company providing a full stack, API-driven implementation delivering a secure platform for purpose-built Android-based dedicated devices.</p>
            <div className="about-sidebar">

            </div>
            <div className="illustrate-holder">
                <Illustration/>
            </div>
            
            </div>
        </div>
        
    )
}
export default AboutUs;
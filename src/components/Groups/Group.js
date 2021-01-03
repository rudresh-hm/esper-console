import React from 'react';
import './group.css';
const Group=(props)=>{
    return(
        <div className="device-group">
            <div className="group-name">
                <span className="first-letter">A</span>
            </div>
            <p>{props.name}</p>
        </div>
    );
}
export default Group;

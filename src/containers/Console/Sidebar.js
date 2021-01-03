import React from 'react';

import { Form, FormGroup } from '../../components/Form/Form';
import Group from '../../components/Groups/Group';
const Sidebar=(props)=>{
    return(
        <div className="sidebar">
            <h3>Device Groups</h3>
            <Form>
                <FormGroup  type="text" placeholder="Search Device" inputClass="input-search"/>
                <svg id="search" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44">
                <path id="Path_246" data-name="Path 246" d="M0,0H44V44H0Z" fill="none"/>
                <path id="Path_247" data-name="Path 247" d="M25.917,23.167H24.468l-.513-.5a11.935,11.935,0,1,0-1.283,1.283l.5.513v1.448l9.167,9.148,2.732-2.732Zm-11,0a8.25,8.25,0,1,1,8.25-8.25A8.239,8.239,0,0,1,14.917,23.167Z" transform="translate(2.5 2.5)" fill="#aeaeae"/>
                </svg>
            </Form>
            <div className="device-container">
            {
                [1,2,3,4,5,6].map((i)=>{
                    return (
                        <Group name={`Group ${i}`}/>
                    )
                })
            }
            </div>
        </div>
    )
}
export default Sidebar;
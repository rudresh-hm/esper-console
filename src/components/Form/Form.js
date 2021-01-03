import React from 'react';
import "./form.css";
const Form=(props)=>{
    return(
        <form className="form">
            {props.children}
        </form>
    )
}
const FormGroup=(props)=>{
    console.log(props.placeholder);
    return(
        <div className="form-group">
            <input type={props.type} placeholder={props.placeholder} name={props.name} className={props.inputClass}/>
        </div>
    )
}
export {Form, FormGroup};
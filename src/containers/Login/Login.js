import {React,useEffect} from 'react';
import { Form, FormGroup } from '../../components/Form/Form';
import './login.css';
const Login=(props)=>{
    useEffect(()=>{
        props.setIsLogin(true);
        return ()=>{
            props.setIsLogin(false);
        }   
    });
    return(
        
        <div className="login">
            <h1>Login</h1>
            <Form>
                <FormGroup  type="email" placeholder="Email" inputClass="form-input"/>
                <FormGroup  type="password" placeholder="Password" inputClass="form-input"/>
                <button className="btn btn-login">Log in</button>
            </Form>
        </div>
    );
}
export default Login;
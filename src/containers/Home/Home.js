import {React, useState, useEffect} from 'react';
import Footer from './Footer/Footer';
import Nav from '../../components/Nav/Nav';
import AboutUs from './About/AboutUs';
import Header from './Header/Header';
import Projects from './Projects/Projects';
import {BrowserRouter as Router, Route, useRouteMatch} from 'react-router-dom';
import Console from '../Console/Console';
const Home=(props)=>{
    let [isLogin,setIsLogin]=useState(false);
    let match = useRouteMatch();
    return(
        <Route path={match.path} component={()=>{
            return(
                <div>
                <Nav/>
                    <Header setIsLogin={setIsLogin}/>
                    {!isLogin&&<AboutUs/>}
                    {!isLogin&&<Projects/>}
                    {!isLogin&&<Footer/>}
                </div>
            )
        }}/>
    )
}
export default Home;
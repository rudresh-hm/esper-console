import React from 'react';
import './Header.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch
  } from "react-router-dom";
import Login from '../../Login/Login';
const Header=(props)=>{
    console.log(props);
    let match=useRouteMatch();
    console.log(match.path);
    return (
            <div className="header-container">
                <Switch>
                    <Route exact path={match.path} component={()=>
                        <div>
                        <h1>Manage Your Android Devices With Ease.</h1>
                        <svg id="scroll-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 109">
                        <g id="Group_4" data-name="Group 4" transform="translate(-325 -757)">
                            <g id="Rectangle_11" data-name="Rectangle 11" transform="translate(325 757)" fill="none" stroke="#fff" stroke-width="6">
                            <rect width="56" height="109" rx="28" stroke="none"/>
                            <rect x="3" y="3" width="50" height="103" rx="25" fill="none"/>
                            </g>
                            <g id="Ellipse_1" data-name="Ellipse 1" transform="translate(336 820)" fill="#fff" stroke="#707070" stroke-width="1">
                            <ellipse cx="17.5" cy="18" rx="17.5" ry="18" stroke="none"/>
                            <ellipse cx="17.5" cy="18" rx="17" ry="17.5" fill="none"/>
                            </g>
                        </g>
                        </svg>
                        </div>
                    }/>
                    <Route path={`${match.path}login`} component={()=><Login setIsLogin={props.setIsLogin}/>}/>
                </Switch>
                <svg id="header-ill" xmlns="http://www.w3.org/2000/svg" width="733" height="727" viewBox="0 0 733 727">
                <g id="Group_1" data-name="Group 1" transform="translate(-978 -255)">
                    <rect id="Rectangle_3" data-name="Rectangle 3" width="184" height="183" rx="38" transform="translate(1344 255)" fill="#560bad"/>
                    <rect id="Rectangle_7" data-name="Rectangle 7" width="183" height="183" rx="38" transform="translate(1161 433)" fill="#fff"/>
                    <rect id="Rectangle_10" data-name="Rectangle 10" width="183" height="183" rx="38" transform="translate(978 616)" fill="rgba(247,37,133,0.24)"/>
                    <rect id="Rectangle_8" data-name="Rectangle 8" width="183" height="183" rx="38" transform="translate(1161 799)" fill="#fff"/>
                    <rect id="Rectangle_4" data-name="Rectangle 4" width="184" height="184" rx="38" transform="translate(1344 621)" fill="#560bad"/>
                    <rect id="Rectangle_5" data-name="Rectangle 5" width="183" height="183" rx="38" transform="translate(1528 438)" fill="rgba(86,11,173,0.3)"/>
                    <rect id="Rectangle_6" data-name="Rectangle 6" width="184" height="183" rx="91.5" transform="translate(1344 438)" fill="#f72585"/>
                    <rect id="Rectangle_9" data-name="Rectangle 9" width="183" height="183" rx="91.5" transform="translate(1161 616)" fill="#4cc9f0"/>
                </g>
                </svg>
            </div>
        
    )
}
export default Header;
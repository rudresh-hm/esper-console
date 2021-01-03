import {React,Fragment} from 'react';
import './console.css';
import Nav from '../../components/Nav/Nav';
import Sidebar from './Sidebar';
import DeviceCard from '../../components/DeviceCard/DeviceCard';
import { Link } from 'react-router-dom';
const Console=(props)=>{
    return(
        <Fragment>
            <Link to="/" style={{textDecoration:"none"}}>
                <svg id="arrow-back" xmlns="http://www.w3.org/2000/svg" width="30.112" height="30.112" viewBox="0 0 30.112 30.112">
                <path id="Path_257" data-name="Path 257" d="M0,0H30.112V30.112H0Z" fill="none"/>
                <path id="Path_258" data-name="Path 258" d="M24.075,12.783H8.805l7.014-7.014L14.037,4,4,14.037,14.037,24.075l1.769-1.769-7-7.014H24.075Z" transform="translate(1.019 1.019)" fill="#504C4C"/>
                </svg>
            </Link>
            

            <div className="console">
                <Sidebar/>
                <div className="device-grid">
                    
                    {
                        [1,2,3,4,5,6,7,8].map(()=>{
                            return(
                                <DeviceCard/>
                            )
                        })
                    }
                </div>
            </div>
        </Fragment>
    )
}
export default Console;
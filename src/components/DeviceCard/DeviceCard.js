import React from 'react';
import './devicecard.css';
const DeviceCard=(props)=>{
    return(
        <div className="device-card">
            <div className="device-header">
                <div className="device-name">
                    <svg id="stay_current_portrait-24px" xmlns="http://www.w3.org/2000/svg" width="40.5" height="40.5" viewBox="0 0 40.5 40.5">
                        <path id="Path_254" data-name="Path 254" d="M0,0H40.5V40.5H0Z" fill="none"/>
                        <path id="Path_255" data-name="Path 255" d="M25.243,1.017,8.368,1A3.37,3.37,0,0,0,5.01,4.375V34.75a3.37,3.37,0,0,0,3.358,3.375H25.243a3.385,3.385,0,0,0,3.375-3.375V4.375A3.37,3.37,0,0,0,25.243,1.017Zm0,30.358H8.368V7.75H25.243Z" transform="translate(3.444 0.687)" fill="#504c4c"/>
                    </svg>
                    <h3>Device One</h3>
                </div>
                <svg id="more_vert-24px" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                <path id="Path_250" data-name="Path 250" d="M0,0H40V40H0Z" fill="none"/>
                <path id="Path_251" data-name="Path 251" d="M13.333,10.667A3.333,3.333,0,1,0,10,7.333,3.343,3.343,0,0,0,13.333,10.667Zm0,3.333a3.333,3.333,0,1,0,3.333,3.333A3.343,3.343,0,0,0,13.333,14Zm0,10a3.333,3.333,0,1,0,3.333,3.333A3.343,3.343,0,0,0,13.333,24Z" transform="translate(6.667 2.667)" fill="#504c4c"/>
                </svg>
            </div>
            <div className="device-info">
                <span>
                    Last seen:  24-10-2020
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <circle id="Ellipse_27" data-name="Ellipse 27" cx="8" cy="8" r="8" fill="#15d115"/>
                    </svg>
                </span>
                <span>Serial no: 2456314785454545</span>
            </div>
            <div className="device-actions">
                <h4>Actions</h4>
                <div className="action-container">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40.5" height="40.5" viewBox="0 0 40.5 40.5">
                    <path id="iconmonstr-lock-21" d="M23.625,15.188v3.375h-6.75V15.188a3.375,3.375,0,0,1,6.75,0ZM40.5,20.25A20.25,20.25,0,1,1,20.25,0,20.251,20.251,0,0,1,40.5,20.25ZM27,18.563H25.313V15.188a5.063,5.063,0,0,0-10.125,0v3.375H13.5V28.688H27Z" fill="#42c7f0"/>
                    </svg>
                    <p>Lock Device</p>
                </div>
                <div className="action-container">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40.2" height="33.5" viewBox="0 0 40.2 33.5">
                    <path id="iconmonstr-wireless-7" d="M0,10.784a27.39,27.39,0,0,1,40.2,0l-3.415,3.6a22.739,22.739,0,0,0-33.369,0L0,10.784ZM9.581,20.891a14.335,14.335,0,0,1,21.038,0l3.506-3.7a19.111,19.111,0,0,0-28.05,0l3.506,3.7Zm6.127,6.464a5.988,5.988,0,0,1,8.784,0l3.445-3.635a10.678,10.678,0,0,0-15.671,0l3.442,3.635Zm4.392,1.7a3.221,3.221,0,1,0,3.221,3.221A3.221,3.221,0,0,0,20.1,29.058Z" transform="translate(0 -2)" fill="#42c7f0"/>
                    </svg>
                    <p>Disconnect</p>
                </div>
                <div className="action-container">
                    <svg id="settings_backup_restore-24px" xmlns="http://www.w3.org/2000/svg" width="40.174" height="40.174" viewBox="0 0 40.174 40.174">
                    <path id="Path_252" data-name="Path 252" d="M0,0H40.174V40.174H0Z" fill="none"/>
                    <path id="Path_253" data-name="Path 253" d="M23.435,18.065a3.348,3.348,0,1,0-3.348,3.348A3.358,3.358,0,0,0,23.435,18.065ZM20.087,3A15.066,15.066,0,0,0,5.022,18.065H0l6.7,6.7,6.7-6.7H8.37a11.725,11.725,0,1,1,4.921,9.541l-2.377,2.41A15.066,15.066,0,1,0,20.087,3Z" transform="translate(0 2.022)" fill="#42c7f0"/>
                    </svg>
                    <p>Restart</p>
                </div>
            </div>
            <div className="device-details">
                <p>View Details</p>
            </div>
        </div>
    )
}
export default DeviceCard;
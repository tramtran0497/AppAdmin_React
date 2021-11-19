import React from 'react';
import "./topbar.css";
import {NotificationsNone, GTranslate, Settings } from '@material-ui/icons';
function TopBar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topleft">
                    <span className="logo">TramAdmin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <div className="iconContainer">
                            <NotificationsNone />
                        </div>
                        <span className="topIconBag">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <div className="iconContainer">
                            <GTranslate />
                        </div>
                        <span className="topIconBag">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <div className="iconContainer">
                            <Settings />
                        </div>
                        <span className="topIconBag">2</span>
                    </div>
                    <img src="https://images.unsplash.com/photo-1637181932973-2f156f331d74?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=709&q=80" alt="Avata" className="topbarAvata"/>
                </div>
            </div>
        </div>
    )
}

export default TopBar

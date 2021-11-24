import React from 'react'
import './sidebar.css'
import {LineStyle, Timeline, TrendingUp, AccountCircle, Storefront, EuroSymbol, Equalizer, ContactMail, Feedback, Message, SupervisorAccount,ReportProblem } from '@material-ui/icons';
import {Link} from 'react-router-dom';
function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebartitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to={"/"} className="link">
                            <li className="sidebarItem active"><LineStyle className='sideicon'/> Home</li>
                        </Link>
                        <li className="sidebarItem"><Timeline className='sideicon'/> Analytics</li>
                        <li className="sidebarItem"><TrendingUp className='sideicon'/> Sales</li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebartitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <Link to={"/users"} className="link">
                            <li className="sidebarItem"><AccountCircle className='sideicon'/> Users</li>
                        </Link>
                        <Link to={"/products"} className="link">
                            <li className="sidebarItem"><Storefront className='sideicon'/> Products</li>
                        </Link>
                        <li className="sidebarItem"><EuroSymbol className='sideicon'/> Transactions</li>
                        <li className="sidebarItem"><Equalizer className='sideicon'/> Reports</li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebartitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarItem"><ContactMail className='sideicon'/> Mail</li>
                        <li className="sidebarItem"><Feedback className='sideicon'/> Feedback</li>
                        <li className="sidebarItem"><Message className='sideicon'/> Messages</li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebartitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarItem"><SupervisorAccount className='sideicon'/> Manage</li>
                        <li className="sidebarItem"><Timeline className='sideicon'/> Analytics</li>
                        <li className="sidebarItem"><ReportProblem className='sideicon'/> Reports</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SideBar

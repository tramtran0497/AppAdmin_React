import React from 'react'
import './widgetsm.css'
import {Visibility} from "@material-ui/icons"
function WidgetSm() {
    return (
        <div className="widgetSm">
           <span className="widgetSmTitle">New Join Members</span>
           <ul className="widgetSmList">
            <li className="widgetSmListItem">
                <img src="https://images.unsplash.com/photo-1637370428744-6b2cc97727df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" className="widgetImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUserName">Anna Honey</span>
                    <span className="widgetSmUserTitle">Nurse</span>
                </div>
                <button className="widgetSmBtn">
                    <Visibility className="widgetSmIcon"/>
                    Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src="https://images.unsplash.com/photo-1633113088983-12fb3b2fe0ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" className="widgetImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUserName">Brain Bright</span>
                    <span className="widgetSmUserTitle">Developer</span>
                </div>
                <button className="widgetSmBtn">
                    <Visibility className="widgetSmIcon"/>
                    Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src="https://images.unsplash.com/photo-1637319988849-4bda53a2f6b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" className="widgetImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUserName">Cendy Cake</span>
                    <span className="widgetSmUserTitle">Doctor</span>
                </div>
                <button className="widgetSmBtn">
                    <Visibility className="widgetSmIcon"/>
                    Display
                </button>
            </li>
           </ul>

        </div>
    )
}

export default WidgetSm

import React from 'react'
import "./widgetlg.css"

const Button = ({type})=>{
    return <button className={"widgetLgBtn " + type}>{type}</button>
}

function WidgetLg() {
    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest transactions</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgtr">
                    <th className="widgetLgth">Customer</th>
                    <th className="widgetLgth">Date</th>
                    <th className="widgetLgth">Amount</th>
                    <th className="widgetLgth">Status</th>
                </tr>
                 <tr className="widgetLgtr">
                    <td className="widgetLgUser">
                        <img src="https://images.unsplash.com/photo-1637277655741-239c74765661?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" className="widgetLgimg" />
                        <span className="widgetLgName">Susan Sun</span>
                    </td>
                    <td className="widgetLgDate"> 20 June, 2021 </td>
                    <td className="widgetLgAmount">€145.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Approved" />
                    </td>
                </tr>
                <tr className="widgetLgtr">
                    <td className="widgetLgUser">
                        <img src="https://images.unsplash.com/photo-1637315041242-b7684c2b1bcf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" className="widgetLgimg" />
                        <span className="widgetLgName">Grey Wind</span>
                    </td>
                    <td className="widgetLgDate"> 25 July, 2021 </td>
                    <td className="widgetLgAmount">€165.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Declined" />
                    </td>
                </tr>
                <tr className="widgetLgtr">
                    <td className="widgetLgUser">
                        <img src="https://images.unsplash.com/photo-1637325336128-936d14746e27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" className="widgetLgimg" />
                        <span className="widgetLgName">Hugo Smile</span>
                    </td>
                    <td className="widgetLgDate"> 10 March, 2021 </td>
                    <td className="widgetLgAmount">€175.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Pending" />
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default WidgetLg

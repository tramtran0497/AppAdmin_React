import React from 'react'
import "./chart.css"
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function Chart({data, dataKey, grid, title}) {
    return (
        <div className="chart">
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width="100%" aspect={4/1}>
                <LineChart data={data} >
                    <XAxis dataKey="name" stroke="#757bc8"/>
                    <Line type="monotone" dataKey={dataKey} stroke="#757bc8" />
                    <Tooltip/>
                    {grid && <CartesianGrid stroke="#ced4da" strokeDasharray="5 5"/>}
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart

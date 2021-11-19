import React from 'react'
import "./chart.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Chart() {

    const data = [
        {
          name: 'Jan',
          "Active User": 4000,
        },
        {
          name: 'Feb',
          "Active User": 3000,
        },
        {
          name: 'Mar',
          "Active User": 2000,
        },
        {
          name: 'Apr',
          "Active User": 2780,
        },
        {
          name: 'May',
          "Active User": 1890,
        },
        {
          name: 'June',
          "Active User": 2390,
        },
        {
          name: 'July',
          "Active User": 3490,
        },
        {
          name: 'Aug',
          "Active User": 2300,
        },
        {
          name: 'Sep',
          "Active User": 1200,
        },
        {
          name: 'Oct',
          "Active User": 4500,
        },
        {
          name: 'Nov',
          "Active User": 3400,
        },
        {
          name: 'Dec',
          "Active User": 3490,
        },
      ];

    return (
        <div className="chart">
            <h3 className="chartTitle">User Analytics</h3>
            <ResponsiveContainer width="100%" aspect={4/1}>
                <LineChart data={data} >
                    <XAxis dataKey="name" stroke="#757bc8"/>
                    <Line type="monotone" dataKey="Active User" stroke="#757bc8" />
                    <Tooltip/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart

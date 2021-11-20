import React from 'react'
import './home.css';
import FeatureInfo from '../../Components/featureInfo/FeatureInfo';
import Chart from '../../Components/chart/Chart';
import {dataUser} from '../../data.js'
import WidgetLg from '../../Components/widgetLg/WidgetLg';
import WidgetSm from '../../Components/widgetSm/WidgetSm';
function Home() {
    return (
        <div className="home">
            <FeatureInfo/>
            <Chart data={dataUser} title="User Analytics" grid dataKey="Active User" />
            <div className="homeWidget">
                <WidgetSm/>
                <WidgetLg/>
            </div>
        </div>
    )
}

export default Home

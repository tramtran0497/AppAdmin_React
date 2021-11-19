import React from 'react'
import './home.css';
import FeatureInfo from '../../Components/featureInfo/FeatureInfo';
import Chart from '../../Components/chart/Chart';
function Home() {
    return (
        <div className="home">
            <FeatureInfo/>
            <Chart/>
        </div>
    )
}

export default Home

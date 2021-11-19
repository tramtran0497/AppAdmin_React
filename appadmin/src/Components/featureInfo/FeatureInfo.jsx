import React from 'react';
import './featureInfo.css';
import {ArrowDownward, ArrowUpward} from '@material-ui/icons';
function FeatureInfo() {
    return (
        <div className="feature">
            <div className="featureItem">
                <span className="featureTitle">Revenue</span>
                <div className="featureMoneyContainer">
                    <span className="featureMoney">€2,435</span>
                    <span className="featureMoneyRate">+11.40% <ArrowUpward className='featureIcon'/></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featureItem">
                <span className="featureTitle">Sale</span>
                <div className="featureMoneyContainer">
                    <span className="featureMoney">€8,793</span>
                    <span className="featureMoneyRate">+12.50% <ArrowUpward className='featureIcon'/></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featureItem">
                <span className="featureTitle">Cost</span>
                <div className="featureMoneyContainer">
                    <span className="featureMoney">€6,358</span>
                    <span className="featureMoneyRate">-13.60% <ArrowDownward className='featureIcon negative'/></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
        </div>
    )
}

export default FeatureInfo

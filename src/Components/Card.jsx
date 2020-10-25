import React from 'react'
import ImageCard from "./ImageCard";
import Units from "./Units";
import Footer from "./Footer";
export default function Card({ cardInfo }) {    
    const footerMap = cardInfo.units.map(unit => <Footer title={unit.state} value={unit.value} />)
    return (
        <div className="clash-card barbarian">

            <ImageCard 
            img={cardInfo.img} 
            name={cardInfo.name} 
            />

            <Units name={cardInfo.name}
             level={cardInfo.level}
             description={cardInfo.description} 
             />

            <div className={`clash-card__unit-stats clash-card__unit-stats--${cardInfo.name} clearfix`}>
                {footerMap}
            </div>

        </div>
    )
}

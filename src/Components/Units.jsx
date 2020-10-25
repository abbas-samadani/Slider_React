import React from 'react'

export default function Units({name , level , description}) {
    return (
        <>
        <div className="clash-card__level clash-card__level--barbarian">{level}</div>
        <div className="clash-card__unit-name">{name}</div>
        <div className="clash-card__unit-description">
            {description}
        </div>
        </>
    )
}

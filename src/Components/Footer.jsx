import React from 'react'

export default function Footer({ title, value }) {
    return (
        <div className="one-third">
            <div className="stat">{title}</div>
            <div className="stat-value">{value}</div>
        </div>
    )
}

import React from 'react'
import { Link } from 'react-router-dom'

const SideListItem = ({ id ,title, src }) => {
    return (
        <Link to={{pathname: 'watch', search: `?v=${id}`}}>
            <img src={src} alt={title} />
            <div>
                <span>{title}</span>
            </div>
        </Link>
    )
}

export default SideListItem

import React, { Fragment } from 'react'
import './MenuItem.scss'

const MenuItem = ({ title, imageUrl, size }) => {
    console.log(imageUrl)
    return <Fragment>
        <div  className={`menu-item ${size}`}>
            <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>


        </div>
    </Fragment>
}

export default MenuItem
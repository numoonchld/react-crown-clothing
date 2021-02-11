import React, { Fragment } from 'react'
import './MenuItem.scss'

const MenuItem = ({title, imageUrl}) => {
    console.log(imageUrl)
    return <Fragment>
        <div style={{ backgroundImage: `url(${imageUrl})` }} className="menu-item">

            <div  className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>

        </div>
    </Fragment>
}

export default MenuItem
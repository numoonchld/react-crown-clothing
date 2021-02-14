import React, { Fragment } from 'react'
import './MenuItem.scss'
import { withRouter } from 'react-router-dom'

const MenuItem = ({ title, imageUrl, linkUrl, size, history, location, match }) => {
    // console.log("Current URL: ", match.url)
    return <Fragment>
        <div  className={`menu-item ${size}`} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
            <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    </Fragment>
}

export default withRouter(MenuItem)
import React from 'react'

import './CustomButton.scss'

const CustomButton = ({children, isGoogleSigIn, ...otherProps}) => {
    return (
        <button className={`custom-button ${isGoogleSigIn ? 'google-sign-in': ''}`} {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton

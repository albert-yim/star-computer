import React from 'react';

import './custom-button.styles.scss'

const CustomButton = ({children, inverted, isGoogleSignIn, ...otehrProps}) => (

    <button className = {`${inverted ? 'inverted' : ''}
                            ${isGoogleSignIn ? 'google-sign-in' : ''} 
                            custom-button`} {...otehrProps}>
        {children}
    </button>

)

export default CustomButton;
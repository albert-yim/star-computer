import React from 'react';

import './menu-item.styles.scss'

const MenuItem = ({title,imgUrl,size}) => (
    <div 
        style = {{
            backgroundImage : `url(${imgUrl})`
        }}
        className = {`${size} menu-item`}
    >
                <div className = 'content'>
                    <h1 className = 'title'> {title}  </h1>
                    <span className = 'subtitle'>Shop Now </span>
                </div>
            </div>
);

export default MenuItem;


import React from 'react';
import './homepage.styles.scss'
const Homepage = () => (
    <div className= 'homepage'>
        <div className = 'directory-menu'>
            <div className = 'menu-item'>
                <div className = 'content'>
                    <h1 className = 'title'> CPU  </h1>
                    <span className = 'subtitle'>Shop Now </span>
                </div>
            </div>
            <div className = 'menu-item'>
                <div className = 'content'>
                    <h1 className = 'title'> GPU  </h1>
                    <span className = 'subtitle'>Shop Now </span>
                </div>
            </div>
            <div className = 'menu-item'>
                <div className = 'content'>
                    <h1 className = 'title'> RAM  </h1>
                    <span className = 'subtitle'>Shop Now </span>
                </div>
            </div>
            <div className = 'menu-item'>
                <div className = 'content'>
                    <h1 className = 'title'> POWER  </h1>
                    <span className = 'subtitle'>Shop Now </span>
                </div>
            </div>
            <div className = 'menu-item'>
                <div className = 'content'>
                    <h1 className = 'title'> MOTHERBOARD  </h1>
                    <span className = 'subtitle'>Shop Now </span>
                </div>
            </div>
        </div>
    </div>
)

export default Homepage;
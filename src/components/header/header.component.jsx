import React from 'react';
import {Link} from 'react-router-dom';

import {ReactComponent as Logo} from '../../assets/star.svg'

import './header.styles.scss'

const Header = () => (
    <div className = 'header'>
        <Link className = 'logo-container' to ='/'>
            <Logo className = 'logo'/>
            <span className ='logo-text'>STAR-COMPUTER </span> 
        </Link>
        <div className = 'options'>
            <Link className='option' to ='/shop'> SHOP </Link>
            <Link className = 'option' to='/contact'> CONTACT </Link>
        </div>
    </div>
)

export default Header
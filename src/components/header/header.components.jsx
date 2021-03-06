import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {auth} from '../../firebase/firebase.utils'

import {ReactComponent as Logo} from '../../assets/star.svg'

import {createStructuredSelector} from 'reselect'
import {selectCartHidden} from '../../redux/cart/cart.selectors'
import {selectCurrentUser} from '../../redux/user/user.selectors'

import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import './header.styles.scss'

const Header = ({currentUser,cartHidden}) => (
    <div className = 'header'>
        <Link className = 'logo-container' to ='/'>
            <Logo className = 'logo'/>
            <span className ='logo-text'>STAR-COMPUTER </span> 
        </Link>
        <div className = 'options'>
            <Link className='option' to ='/shop'> SHOP </Link>
            <Link className = 'option' to='/contact'> CONTACT </Link>
            {
                currentUser ?
                <div className='option' onClick = {() => auth.signOut()}> 
                SIGN OUT
                </div>
                :
                <Link className='option' to ='/signin'>
                    SIGN IN
                </Link>

            }
            <CartIcon />
        </div>
        {
            cartHidden? null : <CartDropdown/>  
        }
    </div>
)

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    cartHidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);
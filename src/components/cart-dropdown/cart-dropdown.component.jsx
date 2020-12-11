import React from 'react';

import {connect} from 'react-redux';

import CustomButton  from '../../components/custom-button/custom-button.components'
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styless.scss';

const CartDropdown = ({cartItems}) => (
    <div className = 'cart-dropdown'>
        <div className='cart-items'>
            {cartItems.map(item => (
                <CartItem key = {item.id} item = {item} />
            ))}
        </div>
        <CustomButton> GO TO CHECKOUT </CustomButton>
    </div>
)

// const mapStateToProps = ({cart: {cartItems}}) => ({
//     cartItems
// })

const mapStateToProps = state => ({
    cartItems: state.cart.cartItems
});

export default connect(mapStateToProps)(CartDropdown);
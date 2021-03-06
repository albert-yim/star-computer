import React from 'react';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'
import {selectCartItems} from '../../redux/cart/cart.selectors'
import { toggleCartHiiden } from '../../redux/cart/cart.actions';

import {withRouter} from'react-router-dom';

import CustomButton  from '../../components/custom-button/custom-button.components'
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styless.scss';


const CartDropdown = ({cartItems, history,dispatch}) => (
    <div className = 'cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ? (
                    cartItems.map(item => (
                        <CartItem key = {item.id} item = {item} />
                    ))
                ) : (
                    <span className='empty-message'> Your cart is empty </span>
                )
            }
        </div>
        <CustomButton onClick = {() => {
            history.push('/checkout')
            dispatch(toggleCartHiiden())
            }}> 
            GO TO CHECKOUT 
        </CustomButton>
    </div>
)

// const mapStateToProps = ({cart: {cartItems}}) => ({
//     cartItems
// })

const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
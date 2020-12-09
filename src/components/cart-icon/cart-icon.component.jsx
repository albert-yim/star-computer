import React from 'react';
import {connect} from 'react-redux';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import { toggleCartHiiden } from '../../redux/cart/cart-actions';

import './cart-icon.styles.scss';

const CartIcon = ({toggleCartHiiden}) => (
    <div className = 'cart-icon' onClick = {toggleCartHiiden}>
        <ShoppingIcon className = 'shopping-icon'/>
        <span className = 'item-count'> 0 </span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHiiden: () => dispatch(toggleCartHiiden())
});

export default connect(null,mapDispatchToProps)(CartIcon);
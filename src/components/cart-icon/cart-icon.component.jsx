import React from 'react';
import {connect} from 'react-redux';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {createStructuredSelector} from 'reselect'
import { toggleCartHiiden } from '../../redux/cart/cart.actions';

import {selectCartItemsCount} from '../../redux/cart/cart.selectors'
import './cart-icon.styles.scss';

const CartIcon = ({toggleCartHiiden,itemCount}) => (
<div className = 'cart-icon' onClick = {toggleCartHiiden}>
<ShoppingIcon className = 'shopping-icon'/>
        <span className = 'item-count'> {itemCount} </span>
    </div>
);

const mapStateToProps = createStructuredSelector({
    itemCount : selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
    toggleCartHiiden: () => dispatch(toggleCartHiiden())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(CartIcon);
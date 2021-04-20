import React from 'react';
import {connect} from 'react-redux';
import {clearItemFromCart, addItem, removeItem} from "../../redux/cart/cart.actions";
import './checkout-item.scss';

//TODO: maybe create cartItemProps? 
export type CheckoutItemProps ={
    cartItem:{
        name: string;
        quantity: number;
        price: number;
        imageUrl: string;
    },
    //dispatch function from redux
    clearItem:any;
    addItem:any;
    removeItem:any;
} 

function CheckoutItem({cartItem,clearItem, addItem, removeItem}:CheckoutItemProps){    
    console.log(cartItem)
    const {name,quantity,price, imageUrl} = cartItem;
    return(
        <div className = 'checkout-item'>
            <div className = 'image-container'>
                <img src = {imageUrl} alt = 'item'/>
            </div>
            <span className = 'name'>{name}</span>
            <span className = 'quantity'>
                <div className = 'arrow' onClick ={()=>removeItem(cartItem)}>&#10094;</div>
                <span className = 'value'>{quantity}</span>
                <div className = 'arrow' onClick= {()=>addItem(cartItem)}>&#10095;</div>
            </span>
            <span className = 'price'>{price}</span>
            <span className = 'remove-button' onClick = {()=>clearItem(cartItem)}>&#10005;</span>

        </div>
    );
}

const mapDispatchToProps = (dispatch:any) => ({
    clearItem: (item:any) => dispatch(clearItemFromCart(item)),
    addItem: (item:any) => dispatch(addItem(item)),
    removeItem: (item:any)=> dispatch(removeItem(item)),

})

export default connect(null,mapDispatchToProps)(CheckoutItem);
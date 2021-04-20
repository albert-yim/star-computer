import React from 'react';

export const addItemToCart = (cartList, newItem) => {
    const existingCartItem = cartList.find(item => item.id === newItem.id);
    if (existingCartItem){
        return cartList.map(item =>
            item.id === newItem.id
            ? {...item, quantity: item.quantity+1}
            : item
        )
    }
    
    return [...cartList, {...newItem, quantity: 1}]
}

export const removeItemFromCart = (cartItems, removedItem) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === removedItem.id)
    
    if(existingCartItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== removedItem.id)
    }

    return cartItems.map(
        cartItem => cartItem.id === removedItem.id ? {...cartItem, quantity: cartItem.quantity -1}
        :cartItem
    )
}
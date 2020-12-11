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
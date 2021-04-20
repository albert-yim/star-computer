import CartActionTypes from "./cart.types";

export const toggleCartHiiden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    paylod: item
});

export const removeItem = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    paylod: item
})

export const clearItemFromCart = item => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    paylod: item
})
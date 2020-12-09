import CartActionTypes from "./cart-types";

export const toggleCartHiiden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    paylod: item
});
import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItem = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartItemCount = createSelector(
    [selectCartItem],
    cartItems =>
        cartItems.reduce((accumulatedQuantity, cartItems) => accumulatedQuantity + cartItems.quantity,
            0
        )
);

export const selectCartTotal = createSelector(
    [selectCartItem],
    cartItems =>
        cartItems.reduce((accumulatedQuantity, cartItems) => accumulatedQuantity + cartItems.quantity * cartItems.price,
            0
        )
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);
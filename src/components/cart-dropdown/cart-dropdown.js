import React from 'react';
import CustomButton from '../custom-button/custom-button';
import CartItem from '../cart-item/cart-item';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectCartItem } from '../../redux/cart/cart-selector';
import { toggleCartHidden } from '../../redux/cart/cart-action';
import './cart-dropdown.scss';

const CartDropDown = ({cartItems, history, dispatch}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length ?
                cartItems.map((cartItem => <CartItem key={cartItem.id} item={cartItem}/>))
                :
                <span className="empty-message">Your cart is empty!</span>
            }
        </div>
            <CustomButton onClick={() => {
                history.push('/checkout')
                dispatch(toggleCartHidden());
                }}>Go To Checkout</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItem
})

export default withRouter(connect(mapStateToProps)(CartDropDown));
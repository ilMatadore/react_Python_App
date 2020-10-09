import React from "react";

import {
  CartItemContainer,
  ItemDetailsContainer,
  CartItemImage,
} from "./cart-item.styles";

const CartItem = ({ item: { img, price, name, quantity } }) => (
  <CartItemContainer>
    <CartItemImage src={img} alt="item" />
    <ItemDetailsContainer>
      <span>{name}</span>
      <span>
        {quantity} x ${price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;

import React from "react";

import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

import {
  Container,
  ProductTitle,
  ProductImage,
  ProductDetails,
  ProductWrap,
  QtyContainer,
  PriceContainer,
  AddToCart,
} from "./product.styles";

const Product = ({ product, addItem }) => {
  const { id, name, description, qty, price, img } = product;

  return (
    <Container key={id}>
      <ProductTitle>{name}</ProductTitle>

      <ProductImage imageUrl={img} />
      <ProductDetails>
        Here goes product description...
        {description}
      </ProductDetails>
      <ProductWrap>
        <QtyContainer>Qty available: {qty}</QtyContainer>
        <PriceContainer>${price}</PriceContainer>
        <AddToCart onClick={() => addItem(product)}>Add to Cart</AddToCart>
      </ProductWrap>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(Product);

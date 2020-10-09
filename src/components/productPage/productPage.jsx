import React from "react";
import Product from "../product/product";
import { selectShopItem, matchedProduct } from "../../redux/shop/shop.selector";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { Container } from "./productPage.styles";

const ProductPage = ({ match, products }) => {
  const productId = match.params.productId;
  const product = products[productId - 1];

  return (
    <Container>
      <Product product={product} />
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({
  products: selectShopItem,
});

export default withRouter(connect(mapStateToProps)(ProductPage));

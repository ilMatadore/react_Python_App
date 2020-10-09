import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { Container } from "./shop.styles";
import Card from "../card/card";

import { selectShopItem } from "../../redux/shop/shop.selector";

const Content = ({ products }) => {
  return (
    <Container>
      {products.map((product) => (
        <Card key={product.id} item={product} />
      ))}
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({
  products: selectShopItem,
});

export default connect(mapStateToProps)(Content);

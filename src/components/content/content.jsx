import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { Container, OptionContainer } from "./content.styles";
import Card from "../card/card.jsx";

import { selectShopItem } from "../../redux/shop/shop.selector";

const Content = ({ products }) => {
  return (
    <React.Fragment>
      <Container>
        {products
          .filter((item, idx) => idx < 4)
          .map((product) => (
            <Card key={product.id} item={product} />
          ))}
      </Container>
      <OptionContainer to="/shop">
        <h2>Shop for more products here...</h2>
      </OptionContainer>
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  products: selectShopItem,
});

export default connect(mapStateToProps)(Content);

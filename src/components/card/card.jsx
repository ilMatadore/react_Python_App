import React from "react";
import { useHistory } from "react-router-dom";

import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer,
  MoreInfoButton,
} from "./card.styles";

const Card = ({ item, addItem }) => {
  const h = useHistory();
  const { id, name, price, img } = item;

  return (
    <CollectionItemContainer key={id}>
      <BackgroundImage className="image" imageUrl={img} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>${price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton inverted onClick={() => addItem(item)}>
        Add to cart
      </AddButton>
      <MoreInfoButton onClick={() => h.push(`/product/${id}`)}>
        Details
      </MoreInfoButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(Card);
